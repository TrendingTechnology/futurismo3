---
author: admin
categories:
- 技術メモ
date: 2012-12-09T06:47:31+00:00
dsq_thread_id:
- 3.6943514e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3081
tags:
- iPad
- Sphinx
title: Sphinxからepub形式で出力して、Dropbox経由でiPadから読んでみる
type: post
url: /archives/=925
---

Sphinxは、htmlやPDF以外にも、epub形式への変換をサポートしている。
  
今日は、epub形式でSphinxドキュメントをビルドして、iPadで電子書籍を読むところまでを試してみた。

[<img class="alignnone size-medium wp-image-928" title="Evolution of Readers" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/evolution_of_readers-300x199.jpg" alt="" width="300" height="199" />][1]

### ePubとは

ePub形式とは、電子書籍で広く採用されている拡張子の規格。
  
<https://ja.wikipedia.org/wiki/EPUB>

Sphinxを利用すると、テキストからepub形式のファイルが一瞬で作成できてしまう！

### copy.pyのepubの出版情報を記入する

epub形式での出力のためには、sphinxルートディレクトリにあるcopy.pyにepubの情報を記入してやる必要がある。

そもそも、Sphinxを始めた時（sphinx-quickstart)、epubを有効にしていない場合は、設定する項目すらない。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b79a0a17-5f0b-4cb1-bdaf-00f6878e031a" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c">Sphinx can also add configuration for epub output:
&gt; Do you want to use the epub builder (y/N) [n]:</pre>
</div>

そんな時は、以下のサイトの下の方に設定情報があるので、それをcopy.pyの一番下にコピペする。（自分はそうした）

  * _[SphinxでかんたんePubファイル作成][2]_

copy.pyには以下の情報を記入。

epub_basenameは必須項目。ほかは入れなくても大丈夫っぽい。

<table width="400" border="1" cellspacing="0" cellpadding="2">
  <tr>
    <td valign="top" width="200">
      epub_basename（必須）
    </td>
    
    <td valign="top" width="200">
      epubのファイル名
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      epub_title
    </td>
    
    <td valign="top" width="200">
      epubのタイトル
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      epub_author
    </td>
    
    <td valign="top" width="200">
      epubの作者名
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      epub_copyright
    </td>
    
    <td valign="top" width="200">
      コピーライト
    </td>
  </tr>
</table>

ちなにみに、入力のときは、=u&#8217;xxx&#8217;な感じで、日本語を使うときにuを入れないとエラーする。uがUTF-8を示す。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:77398499-05aa-463f-906b-17e27f3732f5" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c"># -- Options for Epub output ---------------------------------------------------
epub_basename = 'Shinigami_kai'

# Bibliographic Dublin Core info.
epub_title = u'死神・改'
epub_author = u'神楽家きつね'
#epub_publisher = u'神楽家きつね'
epub_copyright = u'2012 神楽家きつね All right reserved'</pre>
</div>

### make epubでSphinxからepub形式へ変換する

変換元のrst形式ファイルは作成済みであること。

rst形式ファイルからSphinxのmakeコマンドでepub形式へ変換するには、

sphinxのルートディレクトリで以下のコマンドを叩けばよい！（簡単＼(^0^)）

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:a7f36fcf-76a6-4764-af9c-7732c44ad89c" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c">make epub</pre>
</div>

すると、./_build/配下にepubディレクトリが作成される。

そのしたに、(copy.pyでいれたepub_basename).epubというファイルがある。

これが、epub形式に変換されたファイルだ。

### Droxbox経由でiPhone/iPadからepubファイルを見てみる

epubファイルをDropboxの任意の場所に置いて、iPhone/iPadのDropboxアプリで見てみる。

<div class="sticky-itslink">
  <a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fdropbox%252Fid327630330%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" rel="nofollow" target="_blank"><img style="margin: 5px; float: left; border-style: none;" title="Dropbox" src="https://a1659.phobos.apple.com/us/r1000/117/Purple/v4/54/21/57/542157a5-1488-4efb-1e4c-6aeac3e685cd/Icon.png" alt="Dropbox" /></a>
</div>

<div class="sticky-itslinktext">
  <a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fdropbox%252Fid327630330%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" rel="nofollow" target="_blank">Dropbox</a>Dropbox</p> 
  
  <p>
    価格： 0円 <a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fdropbox%252Fid327630330%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" rel="nofollow" target="_blank"><img style="border-style: none;" src="https://ax.phobos.apple.com.edgesuite.net/ja_jp/images/web/linkmaker/badge_appstore-sm.gif" alt="iTunesで見る" /></a>
  </p>
  
  <p>
    <span style="font-size: xx-small;">posted with <a href="https://sticky.linclip.com/linkmaker/" target="_blank">sticky</a> on 2012.12.9</span>
  </p>
</div>

<div class="sticky-itslinktext">
</div>

<div class="sticky-itslinktext">
  Dropboxのアプリ自体にepub形式のファイルを閲覧する機能はないので、iOSのデフォルトアプリ、ibookで開くを選択。
</div>

<div class="sticky-itslinktext">
</div>

<div class="sticky-itslinktext">
</div>

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="skitch" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch_thumb.jpg" alt="skitch" width="283" height="375" border="0" />][3]

<div class="sticky-itslinktext">
  すると、iBookが起動して、電子書籍のように閲覧することができる。
</div>

<div class="sticky-itslinktext">
</div>

<div class="sticky-itslinktext">
  <a href="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/IMG_0014.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="IMG_0014" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/IMG_0014_thumb.png" alt="IMG_0014" width="287" height="381" border="0" /></a>&nbsp;</p>
</div>

#### 参考になったサイト

  * ##### _[SphinxでかんたんePubファイル作成][2]_

  * ##### [iPad 電子書籍(EPUB) DropBox 便利です][4]

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/evolution_of_readers.jpg
 [2]: https://sphinx-users.jp/cookbook/epub/index.html
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch.jpg
 [4]: https://blog.goo.ne.jp/fkeebie3/e/e8f14edafb9b99e093c43b02ac176abd