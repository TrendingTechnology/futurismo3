---
author: admin
categories:
- Linux
date: 2017-07-29T06:53:17+00:00
dsq_thread_id:
- 6.024929e+09
excerpt: Linuxの親指シフトでMozcが使える！oyainputが公開された
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
- 443
side:
- "y"
tags:
- Ubuntu
- 親指シフト
title: Linuxの親指シフトでMozcが使える！oyainputが公開された・・・感動
title_view:
- "y"
type: post
url: /archives/=6688
---

Linuxの親指シフターにとって、感動的なソフトを発見してしまった。**oyainput** というソフト。

  * github: [inwskatsube/oyainput: software to emulate Japanese thum shift keyboard (oyayubi-shift keyboard)][1]
  * 紹介されてるページ: [Linuxで親指シフトを利用する(Mozcとlibkkcの場合) &#8211; Qiita][2]

今までLinuxで親指シフトを利用しようとするときは、Anthyというあまり賢くないIMEを使うしかなかった。Google日本語入力のオープンソースであるMozcがつかえればいいのだが、これが今まで使えなかった。

  * [Fcitx-anthyを使ってLinux Mintで親指シフト日本語入力環境を構築するまでの手順 | Futurismo][3]

それが、oyainputをつかうと、IMに Mozcを指定することができるのだ！これは感動的だ。感謝！！！

## 起動の不具合と解決方法２点 {#-}

しかし、使おうとすると問題が発生。なんとか解決したのでメモ。

### 起動するとxmodmapの設定が無効になる {#-xmodmap-}

Linuxのキーボードのキーマップ(CtrlをCapsLockに割り当てるなど)を変更するために、xmodmapを利用しているのだけれども、その設定が oyainputを起動すると無効になってしまう。

なので、oyainputを叩いたあとに、

    xmodmap ~/.xmodmap
    

を叩きなおすと、再度有効になった。ちょっと焦る。

### 起動するとキーボードが２つ検出される {#-}

multiple keyboard is detected.というメッセージがでる。Logicoolの BlueThoothマウスをつかっているのだが、これがキーボードとして認識されてしまう。なんとかしようとソースコードを調査。以下のコマンドを叩いて、キーボードを調べているようだ。

<pre><code class="lang-sh">$ grep -E &#39;Name=|Handlers|EV=&#39; /proc/bus/input/devices| grep -B2 &#39;EV=1[02]001[3Ff]&#39;
N: Name="AT Translated Set 2 keyboard"
H: Handlers=sysrq kbd event3 leds
B: EV=120013
--
N: Name="Logitech MX Anywhere 2"
H: Handlers=sysrq kbd mouse0 event5 leds
B: EV=12001f
</code></pre>

なるほど、２つ現れる。ソースでは、正規表現でEV=120013,12001F,12001fの三種類をキーボードとして認識しているようだ。その部分を、120013のみ認識するように書き換えてコンパイル。

  * <https://github.com/inwskatsube/oyainput/blob/27bd4c0d7956124d44bb097483b839fabf95ec91/src/functions.c#L198>

これはあまりよくない解決方法だけれども、これでmultiple keyboard is detectedというメッセージはでなくなった。

## 最後に自動起動設定 {#-}

~/.profileに以下の二行を追加。

<pre><code class="lang-sh">oyainput &
xmodmap ~/.Xmodmap
</code></pre>

これで、立ち上がり時に自動起動するようになった。

 [1]: https://github.com/inwskatsube/oyainput
 [2]: https://qiita.com/inwskatsube/items/f0d4c4305202253d26e6
 [3]: https://futurismo.biz/archives/2067