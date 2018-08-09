---
title: "Railsのbetter_errorsとRubyMineの連携でコードにジャンプ"
date: 2018-06-25T06:24:52+09:00
size: false
---

## はじめに
RubyMine, とてもいい。使わない人は、人生損してる。

railsでエラーがでると、ブラウザが赤くなりエラー画面がでるのだけれども、
このエラーからRubyMineで表示しているコードの該当部分にジャンプできたら最高だと思っていたら、
better_errorsというgemで解決できそうなので、鼻血でた。

## better_errors
better_errorsを導入すると、 railsのエラーをいい感じに表示してくれる。

- https://github.com/charliesome/better_errors

導入は、Gemfileに以下を記述。

```ruby
group :development do
  gem "better_errors"
  gem "binding_of_caller"
end
```

## dockerとの連携
そもそも、docker, rails5では、better_errorsが既知障害で動かなかった。

- https://github.com/charliesome/better_errors/issues/349

config/initializers/development/better_errors.rb を新規作成して、以下を記述。

```ruby
if defined? BetterErrors
  # Private subnets defined by RFC1918 as stated in https://docs.docker.com/v1.5/articles/networking/
  BetterErrors::Middleware.allow_ip! '10.0.0.0/8'
  BetterErrors::Middleware.allow_ip! '172.16.0.0/12'
  BetterErrors::Middleware.allow_ip! '192.168.0.0/16'
end
```
## RubyMine & Dockerとの連携
- https://github.com/charliesome/better_errors/wiki/Running-on-virtual-machines
- https://github.com/charliesome/better_errors/wiki/Link-to-your-editor

config/initializers/development/better_errors.rb に、以下を記述。

```ruby
if defined? BetterErrors
  BetterErrors.editor = proc { |full_path, line|
    full_path = full_path.sub(Rails.root.to_s, '/home/tsu-nera/RubymineProjects/techacademy/weightodon')
    "rubymine://open?url=file://#{full_path}&line=#{line}"
  }
end
```

Docker環境をつかうには、一工夫必要だ。
Rails.rootは Docker環境でのパス、'/home/tsu-nera/RubymineProjects/techacademy/weightodon'のところはローカル環境でのパス。
これを subコマンドで置換する必要がある。

## Ubuntu環境での設定
Ubuntu環境では、Chromeから xdg-openが発行されても、それに対応するハンドラがないのでソースが開けない。

以下を参考に、解決した。
- https://gist.github.com/IslamAzab/9d00ce7096bd429ddd69

はじめに、RubyMineの Tools > Create command-line Launcherからコマンドラインで起動するためのコマンドを作成。ここでは、mineという名前。

次に、desktop entry を作成。

```
# /usr/share/applications/rubymine-urlhandler.desktop

[Desktop Entry]
Name=RubyMine
GenericName=URI handler
Exec=/usr/local/bin/rubymine-urihandler %U
Icon=RubyMine
Type=Application
StartupNotify=true
Categories=GNOME;GTK;Utility;TextEditor;Development;
MimeType=x-scheme-handler/rubymine
```

次に/usr/local/bin/rubymine-urlhandlerを作成

```
#!/bin/bash
# /usr/local/bin/rubymine-urlhandler

# $1 is formatted like subl://open?url=file://%2Fpath%2Fto%2Ffile.txt&line=xx 
url=$1

# Strip off subl://open?url=file://
file=${url#*file*//}

# Strip off &line=...
file=${file%&line=*}

# Decode URL
file=$(echo $file | sed "s@+@ @g;s@%@\\\\x@g" | xargs -0 printf "%b")

# Strip off everything but what's after &line=
line=${url#*line=}

# Launch sublime
mine "$file:$line"
```

`sudo update-desktop-database` を叩く。

これで、better_errorsのリンクからRubymineが開けるようになった。
