---
title: "一台のサーバでdocker-composeで管理された railsプロジェクトを複数立ちあげる方法"
date: 2018-07-09T17:37:53+09:00
size: true
---

さくらVPSで1つのサーバで2つのrailsサービスを動かしたい。（そのうちのひとつはマストドン）

この場合、ドメインを２つ使う必要があると思い、ドメインを２つ取得したのだが、
今サブドメインというしくみを知った。これをつかえばやりたいことが実現できそうだ。
railsプロジェクトはdocker-composeで管理している。
railsアプリケーションをhttps化するために、let's encryptのdockerもつかうと便利なことがわかった。

まとめると、次のようなことをやりたい。

- Dockerがインストールされているサーバに複数のdocker-composeで管理されたWebアプリケーションを動かす。
- Webアプリケーションには、それぞれのドメインを設定して、一意にアクセスできるようにする。
- 各ドメインには、Let's Encryptで取得したSSL証明書が適用される。

## 結末

調べて実施した結果、やりたいことはできた。

しかし、**致命的な問題** が発生して、解決方法が分からず、結局挫折した。

その問題点とは、**railsアプリケーション間でのコンテナ間通信ができない**、というもの。
たとえば、pingは届くのだけれども、wgetやcurlが届かない。
これが解決できなくて、挫折してしまった。

解決方法が分かる方、教えてください！

## 手順

挫折はしたものの、rails間で通信しない場合の運用並ば問題ないため、手順をわすれないように残しておく。

### 前提となる環境

- さくらVPS（Ubuntu）
- Dockerとdocker-composeがインストールされている

### コンテナ間通信をするための経路を作成

Dockerのコンテナどうしが通信するための経路を作成する。

```bash
# ネットワークを作成する
$ docker network create --driver bridge front
$ docker network create --driver bridge back-mstdn
$ docker network create --driver bridge back-wtdn
```

### リバースプロキシサーバ & Let's Encryptサーバ

リバースプロキシサーバとして、nginxを利用する。

こいつの役割がいまいちわかっていないのだが、複数ドメインを共存させることができる。
さらには、ドメインについてSSL証明書を発行してくれる。

nginxとletsencryptサーバのdockerイメージを利用する。

- [jwilder/nginx\-proxy \- Docker Hub](https://hub.docker.com/r/jwilder/nginx-proxy/)
- [jrcs/letsencrypt\-nginx\-proxy\-companion \- Docker Hub](https://hub.docker.com/r/jrcs/letsencrypt-nginx-proxy-companion/)

`~/nginx-proxy` ディレクトリを作成して、その中に `docker-compose.yml`を作成する。
certディレクトリに証明書が保存される。

```yaml
version: '2'
services:
  proxy:
    image: jwilder/nginx-proxy:alpine
    container_name: proxy-nginx
    ports:
      - 80:80
      - 443:443
    restart: always
    tty: false
    privileged: true
    volumes:
      - ./certs:/etc/nginx/certs:ro
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - /etc/nginx/vhost.d
      - /usr/share/nginx/html
    networks:
      - front

  letsencrypt:
    image: jrcs/letsencrypt-nginx-proxy-companion
    container_name: proxy-letsencrypt
    restart: always
    tty: false
    privileged: true
    volumes:
      - ./certs:/etc/nginx/certs:rw
      - /var/run/docker.sock:/var/run/docker.sock:ro
    volumes_from:
      - proxy
    networks:
      - front

networks:
  front:
    external: true
```

### railsアプリケーション1（Mastodon）の docker-compose.ymlを作成

1つ目のWebアプリケーション、マストドンを立ちあげる。

Mastodonのリポジトリをcloseすると、docker-compose.ymlがあるので、それを編集する。

- nginxコンテナを新規追加
  - ポートは9090(かぶらなければなんでもよい）
- 各コンテナを `back-mstdn` ネットワークでつなぐ
- `db`, `redis` のvolumesのコメントアウトを外して、データの永続化。

```yaml
version: '2'
services:

  nginx:
    image: nginx:1.11.10-alpine
    container_name: mstdn-nginx
    ports:
      - 9090:9090
    restart: always
    tty: false
    env_file: .env.production
    links:
      - web
      - streaming
    volumes:
      - ./setting/nginx/conf.d:/etc/nginx/conf.d:ro
      - ./setting/nginx/conf:/etc/nginx/conf/:ro
    volumes_from:
      - container:proxy-nginx
    networks:
      - front
      - back-mstdn

  db:
    restart: always
    image: postgres:9.6-alpine
    container_name: mstdn-db
    volumes:
      - ./postgres:/var/lib/postgresql/data
    networks:
      - back-mstdn

  redis:
    restart: always
    image: redis:4.0-alpine
    container_name: mstdn-redis
    volumes:
      - ./redis:/data
    networks:
      - back-mstdn

  web:
    build: .
    image: tootsuite/mastodon
    restart: always
    container_name: mstdn-web
    env_file: .env.production
    command: bash -c "rm -f /mastodon/tmp/pids/server.pid; bundle exec rails s -p 3000 -b '0.0.0.0'"
    networks:
      - back-mstdn
    ports:
      - "127.0.0.1:3000:3000"
    depends_on:
      - db
      - redis
    volumes:
      - ./public/assets:/mastodon/public/assets
      - ./public/packs:/mastodon/public/packs
      - ./public/system:/mastodon/public/system


  streaming:
    build: .
    image: tootsuite/mastodon
    restart: always
    container_name: mstdn-streaming
    env_file: .env.production
    command: yarn start
    networks:
      - back-mstdn
    ports:
      - "127.0.0.1:4000:4000"
    depends_on:
      - db
      - redis

  sidekiq:
    build: .
    image: tootsuite/mastodon
    restart: always
    container_name: mstdn-sidekick
    env_file: .env.production
    command: bundle exec sidekiq -q default -q mailers -q pull -q push
    depends_on:
      - db
      - redis
    networks:
      - back-mstdn
    volumes:
      - ./public/packs:/mastodon/public/packs
      - ./public/system:/mastodon/public/system

networks:
  front:
    external: true
  back-mstdn:
    external: true
```

.env.productionを読み込んでいるが、これはマストドンを動かすための環境変数がいろいろ書いてある。
編集するところだけ抜き出そう。メールサーバには、ここではsparkpostを利用している。

```bash
VIRTUAL_HOST=weightodon.site
VIRTUAL_PORT=9090
VIRTUAL_PROTO=https
LETSENCRYPT_HOST=weightodon.site
LETSENCRYPT_EMAIL=fox10225fox@gmail.com
LETSENCRYPT_TEST=false

LOCAL_DOMAIN=weightodon.site

SECRET_KEY_BASE=<rails secretで表示される値>
OTP_SECRET=<rails secretで表示される値>

SMTP_SERVER=smtp.sparkpostmail.com
SMTP_PORT=587
SMTP_LOGIN=SMTP_Injection
SMTP_PASSWORD=<Web APIで表示される値>
SMTP_FROM_ADDRESS=notifications@weightodon.site
```

最後にnginxの設定。`mastodon/setting/nginx/conf.d/default.conf` を作成して、そこに以下を記述。
編集する箇所は次のとおり。

- listen 9090
- server_nameを設定
- ssl_certificate, ssl_sertificate_keyのパスのサイトを自分のドメインにする
- rootのところをコンテナの中からみた、公開ディレクトリに設定

```text
map $http_upgrade $connection_upgrade {
  default upgrade;
  ''      close;
}

server {
  listen 9090 ssl;
  server_name weightodon.site;

  ssl_protocols TLSv1.2;
  ssl_ciphers EECDH+AESGCM:EECDH+AES;
  ssl_ecdh_curve prime256v1;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;

  ssl_certificate     /etc/nginx/certs/weightodon.site/fullchain.pem;
  ssl_certificate_key /etc/nginx/certs/weightodon.site/key.pem;

  keepalive_timeout    70;
  sendfile             on;
  client_max_body_size 8m;

  root /mastodon/public;

  gzip on;
  gzip_disable "msie6";
  gzip_vary on;
  gzip_proxied any;
  gzip_comp_level 6;
  gzip_buffers 16 8k;
  gzip_http_version 1.1;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

  add_header Strict-Transport-Security "max-age=31536000";

  location / {
    try_files $uri @proxy;
  }

  location ~ ^/(emoji|packs|system/accounts/avatars|system/media_attachments/files) {
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri @proxy;
  }
  
  location /sw.js {
    add_header Cache-Control "public, max-age=0";
    try_files $uri @proxy;
  }

  location @proxy {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header Proxy "";
    proxy_pass_header Server;

    proxy_pass https://web:3000;
    proxy_buffering off;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;

    tcp_nodelay on;
  }

  location /api/v1/streaming {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header Proxy "";

    proxy_pass https://web:4000;
    proxy_buffering off;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;

    tcp_nodelay on;
  }

  error_page 500 501 502 503 504 /500.html;
}
```

これで、すべて完了。`docker-compse up -d` で自動で証明書がダウンロードされてhttps化されるはずだ。

### ２つめのrailsアプリケーションを立ちあげる

2つめは自作railsアプリケーション。基本的には、Mastodonと同じ。ですので、一気に紹介。

- docker-compose.yml

```yaml
version: '2'
services:
  nginx:
    image: nginx:1.11.10-alpine
    container_name: wtdn-nginx
    ports:
      - 9091:9091
    restart: always
    tty: true
    environment:
      VIRTUAL_HOST: weightodon.club
      VIRTUAL_PORT: 9091
      VIRTUAL_PROTO: https
      LETSENCRYPT_HOST: weightodon.club
      LETSENCRYPT_EMAIL: fox10225fox@gmail.com
      LETSENCRYPT_TEST: "false"
    links:
      - web
    volumes:
      - ./setting/nginx/conf.d:/etc/nginx/conf.d:ro
      - ./setting/nginx/conf:/etc/nginx/conf/:ro
    volumes_from:
      - container:proxy-nginx
    networks:
      - front
      - back-wtdn

  web:
    restart: always
    build: .
    command: bundle exec unicorn_rails -p 3001 -c /app/config/unicorn.rb
    # command: bash -c "rm -f /app/tmp/pids/server.pid; bundle exec rails s -p 3001 -b '0.0.0.0'"
    container_name: wtdn-web
    volumes:
      - .:/app
      - bundle:/bundle
    environment:
      TZ: "Asia/Tokyo"
      RAILS_ENV: production
      RAILS_ROOT: /app
      SECRET_KEY_BASE: 7066cf88b55e4b76d4bc9196a96acc1ebc2d809dd6f6f3e854ddd6dba75a2616eee5de216a221b2b13da4932f2c6d6025e0d604b83a2c24c88701c2c2641214d
    depends_on:
      - db
    tty: true
    stdin_open: true
    ports:
      - "127.0.0.1:3001:3001"
    dns:
      - 133.242.0.3
      - 133.242.0.4
      - 8.8.8.8
    networks:
      - back-wtdn

  db:
    restart: always
    image: postgres:alpine
    container_name: wtdn-db
    volumes:
      - ./postgres:/var/lib/postgresql/data
    networks:
      - back-wtdn

volumes:
  db-volume:
  bundle:
    driver: local

networks:
  front:
    external: true
  back-wtdn:
    external: true

```

- `setting/nginx/conf.d/default.yml`

```text
map $http_upgrade $connection_upgrade {
  default upgrade;
  ''      close;
}

server {
  listen 9091 ssl;
  server_name weightodon.club;

  ssl_protocols TLSv1.2;
  ssl_ciphers EECDH+AESGCM:EECDH+AES;
  ssl_ecdh_curve prime256v1;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;

  ssl_certificate     /etc/nginx/certs/weightodon.club/fullchain.pem;
  ssl_certificate_key /etc/nginx/certs/weightodon.club/key.pem;

  keepalive_timeout    70;
  sendfile             on;
  client_max_body_size 8m;

  root /app/public;

  gzip on;
  gzip_disable "msie6";
  gzip_vary on;
  gzip_proxied any;
  gzip_comp_level 6;
  gzip_buffers 16 8k;
  gzip_http_version 1.1;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

  add_header Strict-Transport-Security "max-age=31536000";

  location / {
    try_files $uri @proxy;
  }

  location ~ ^/(emoji|packs|system/accounts/avatars|system/media_attachments/files) {
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri @proxy;
  }
  
  location /sw.js {
    add_header Cache-Control "public, max-age=0";
    try_files $uri @proxy;
  }

  location @proxy {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header Proxy "";
    proxy_pass_header Server;

    proxy_pass https://web:3001;
    proxy_buffering off;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;

    tcp_nodelay on;
  }

  error_page 500 501 502 503 504 /500.html;
}
```

基本的な考え方は、以下をすれば新しいドメインを追加できるはずだ。

- Dockerのネットワークを追加
- nginxのポートを決める
- docker-compose.ymlを作成
- setting/nginx/conf.d/default.ymlを作成

では。

## References

- [複数のWebアプリを1サーバーのDockerを使ってSSL対応のサブドメインで簡単に運用する \| QUARTETCOM TECH BLOG](https://tech.quartetcom.co.jp/2017/04/11/multiple-ssl-apps-on-one-docker-host/)
- [Docker🐳でMastodon🐘のインスタンスを立てるドン \(リバースプロキシにnginx\-proxy \+ letsencrypt\-nginx\-proxy\-companionを使う\) \- Qiita](https://qiita.com/ryo_dg/items/e0cc93e6a8688e5116c8)
