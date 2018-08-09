---
title: "炎上速(blazing-fast) 静的サイトジェネレーター GatsbyJs を試してみる"
date: 2018-07-01T15:41:57+09:00
size: false
---

## はじめに: Gatsby 導入する理由
このブログは、Hugoで運営している。(https://futurismo.biz/2018/04/wordpress-2-hugo/)

React 製のサイトジェネレーターである、 **Gatsby** へ移行しようと決意した。

- https://www.gatsbyjs.org/

その理由は、モダンなフロントエンド技術を使っているので。

私は、React エンジニアを目指すことに決めた。Gatsbyは Reactでかかれている。
そこで、ブログ製作をつうじで Reactに慣れ親しみ、改造できればいいなと思った。

## Gatsbyについて
Gatsbyは、React で書かれた静的サイトジェネレーター。

## Getting Started
gatsbyを npmでインストールする。

**今後のメンテナンスを考え、インストールは v1ではなくv2とする**

```bash
$ npm install --global gatsby-cli@2.0.0-beta.3


$ gatsby -v
2.0.0-beta.3
```

続いて、サイト生成。

```bash
# テンプレートからサイト作成
$ gatsby new futurismo3 https://github.com/gatsbyjs/gatsby-starter-default#v2
$ cd futurismo3

# 開発用サーバ起動
$ gatsby develop
```

まずは、デフォルトのページが生成された。これに改造を加えていく。下記リンクによると、いろいろと手順があるようだ。

- [Creating a Blog with Gatsby \| GatsbyJS](https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/)

というわけで、まずは 単一のMarkdownを表示するところからはじめます。

## Markdownの記事を表示

ファイルシステムからデータを読み込む `gatsyby-source-filesystem` plugin, 
Markdown形式を HTMLに変換する `gatsby-tarnsformer-remark` pluginをいれる。

```
$ yarn add gatsby-source-filesystem
$ yarn add gatsby-transformer-remark
```

それから、ブログ内の別ページにリロードなしで遷移する `gatsby-plugin-catch-links`,
`head` で囲まれた部分を制御するための、`gatsby-plugin-react-helmet`を入れる。

```
$ yarn add gatsby-plugin-catch-links gatsby-plugin-react-helmet
```

`gatsby-config.js`に以下を書く。

```javascript
plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages`,
      name: "markdown-pages",
    },
  },
  `gatsby-plugin-catch-links`,
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-remark`,
];
```

ではでは、はじめの記事を投稿します。`src/pages/06-09-2017-getting-started/index.md` に以下の内容を書き込み。

```
---
path: "/hello-world"
date: ""2017-07-12T17:12:33.962Z""
title: "My First Gatsby Post"
---

Oooooh-weeee, my first blog post!
```

続いて、記事のテンプレートを `src/templates/blog-post.js`に作成。

```javascript
import React from "react";
import Helmet from "react-helmet";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}
```

そして最後、動的ページ生成を可能にする NodeAPI を作成。(`gatsby-node.js`)

```javascript
const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
};
```

これでできるかな？？？できた！

次回は、Hello World テンプレートを試します。

## References
- [GatsbyJSで爆速PWAサイト/ Gatsby Super Fast \- Speaker Deck](https://speakerdeck.com/nnjyami/gatsby-super-fast)
- [爆速サイトを爆速で作れるNetlify \+ Gatsby / Create fast site with netlify and gatsby \- Speaker Deck](https://speakerdeck.com/mottox2/create-fast-site-with-netlify-and-gatsby)
- [Gatsby \+ Netlify CMSで 爆速blog開発 \- Speaker Deck](https://speakerdeck.com/mukai21/gatsby-plus-netlify-cmsde-bao-su-blogkai-fa)
- [Migrate from Hugo to Gatsby \| GatsbyJS](https://next.gatsbyjs.org/blog/2017-11-06-migrate-hugo-gatsby/)
- [Creating a Blog with Gatsby \| GatsbyJS](https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/)
- [Zero to Deploy: A Practical Guide to Static Sites with Gatsby\.js ― Scotch](https://scotch.io/tutorials/zero-to-deploy-a-practical-guide-to-static-sites-with-gatsbyjs)
- [Gatsbyを使ってみる \- Qiita](https://qiita.com/abcb2/items/3731a12866d5c093af48)
- [Headless CMSと静的サイトジェネレータ「Gatsby」を使ったサイトの構築 \- Qiita](https://qiita.com/prograti/items/6497621015481487d7fb)

## 日本の Gatsbyユーザの方
まだそんなに GatsbyJsをつかってブログ作成している人は少なさそうなので、検索で引っかかったブログを集めてみた。

- [ブログを Gatsby に移行しました \- FIVETEESIXONE](https://fiveteesixone.lackland.io/2018/03/31/rebuild-blog-using-gatsby/)
- [GatsbyJSで Progressive High Performance Blog \| dvg\-179](https://dvg.179.jp/201803-gatsby-pwa/)
- [Gatsbyでブログを作る 技術系記事ははてなからGitHub Pageに移転させます \| Hatch tech blog](https://hachibeedi.github.io/entry/first-announcement/)
- [WordpressからGatsbyJSへ移行した \| Bulblub](https://www.bulblub.com/2018/06/moved_to_gatsbyjs/)
- [当ブログを GatsbyJS で作り直した \| 9mのパソコン日記](https://blog.kksg.net/posts/gatsby/)
- [React\.js製の静的サイトジェネレーターGatsbyを使ってみた – Snaplog](https://blog.mismithportfolio.com/web/20160827gatsby)
- [ブログを Gatsby で作り直し＆独自ドメイン化 \#thebossblog](https://blog.theboss.tech/2018/02/16/blog-gatsby/)
- [ブログをGatsbyに移行しました \- とりあえず動かすところまで \| tmnm\.tech](https://tmnm.tech/2017/09/10/migrate-to-gatsby/)
