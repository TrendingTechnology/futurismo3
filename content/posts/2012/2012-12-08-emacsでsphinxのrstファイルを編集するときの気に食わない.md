---
author: admin
categories:
- Emacs
- 技術メモ
date: 2012-12-08T11:11:45+00:00
dsq_thread_id:
- 3.73858e+09
pvc_views:
- 2083
tags:
- Sphinx
title: EmacsでSphinxのrstファイルを編集するときの気に食わない白色をなんとかしたメモ
type: post
url: /archives/=908
---

emacsでSphinxの編集をしているとき、rstファイルの見出しが白くなってしまって

<font size="5">読みにくい！（というか、読めない）(￢_￢)</font>

今日はこれをなんとかしようと思う。

#### Before

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="skitch(1)" border="0" alt="skitch(1)" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch1_thumb.png" width="325" height="282" />][1]

### frame-background-mode を有効にする

これを解決するためには、Emacsの frame-background-mode を有効にする。   
以下の一行を.emacsに追加。   
（自分の場合は~/.emacs.d/init.elファイルに書いた）

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:47dfeca9-829e-478d-a090-370f70846d4e" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">(setq frame-background-mode 'dark)</pre>
</div>

これで、背景が黒色に適した色に変更できる。

#### after

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="skitch(2)" border="0" alt="skitch(2)" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch2_thumb.png" width="345" height="291" />][2]

#### 参考

[frame の色を由緒正しく (?) 設定する for frame-background-mode][3]

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch1.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch2.png
 [3]: https://kei10in.hatenablog.jp/entry/20091111/1257947383 "https://kei10in.hatenablog.jp/entry/20091111/1257947383"