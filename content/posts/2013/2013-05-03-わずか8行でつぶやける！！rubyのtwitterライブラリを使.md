---
author: admin
categories:
- Ruby
date: 2013-05-02T17:47:05+00:00
dsq_thread_id:
- 3.7297393e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 4041
side:
- "y"
tags:
- twitter
title: わずか8行でつぶやける！！Rubyのtwitterライブラリを使って、コンソールからつぶやくRubyスクリプトがお手軽すぎた
title_view:
- "y"
type: post
url: /archives/=1303
---

Rubyスクリプトで、twitterにつぶやきたいとおもった。コンソールから

> $ twitter.rb &#8221; Hello Twitter !!&#8221;

みたいな感じでつぶやきたい。Rubyならば絶対にそんな便利ライブラリがあるだろうと思って探してみたらあった。

### Ruby Twitter Gem

あった！ Ruby Twitter Gemというもの。

<span style="color: #ff0000; font-size: x-large;">さすが、Ruby (*&#8217;∀&#8217;人)</span>

早速インストール

> $ gem install twitter

詳しいマニュアルはここが詳しい。

[Route 477 &#8211; Ruby Twitter Gem簡易リファレンス][1]

### さっそく作ってみる！！

このサイトを参考にして、早速作ってみる。

[Twitter Ruby Gem の非スレッドセーフ API は使うべきではない #Ruby #twitter &#8211; Qiita [キータ]][2]

デスクトップからつぶやくためには4つの認証キーが必要。

  * ConsumerKey
  * ConsumerSecuret
  * AuthAccessTokenKey
  * AuthAccessTokenSecret

以前作成したものをそのまま流用する。

[twitcurlでWindowsのデスクトップからホットキーでtwitterにtweetする | Futurismo][3]

いろいろとやること数分・・・

<span style="color: #ff0000; font-size: x-large;">完成！(・∀・)  わずか８行！</span>



twitterでつぶやくには、updateを使う。他にも豊富すぎる機能があるけれども、つぶやくだけならコレで十分。

使い方は、twitter.rbをパスが通ったところに置いて、実行権限を与える。

> $ chmod u+ x twitter.rb
  
> $ mv twitter.rb ~/bin/

コマンドラインからこんな感じで使う。

> $ twitter.rb &#8220;Hello Twitter!!&#8221;

これはお手軽だ。Rubyスゲー。

難点は、実行時間がけっこうかかること。環境のせいだろろうか(・・？10秒以上は応答が帰ってこない。＆をつけて、バックグラウンド起動すれば、問題ないかな。。

> $ twitter.rb &#8220;さすがにそろそろ寝よう&#8221; &

 [1]: https://route477.net/w/?RubyTwitterJa
 [2]: https://qiita.com/items/1b61e1fe4841f81baaf9
 [3]: https://futurismo.biz/archives/1150