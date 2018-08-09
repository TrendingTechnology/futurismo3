---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-02-17T12:32:23+00:00
dsq_thread_id:
- 3.7284997e+09
pvc_views:
- 3613
tags:
- Mint
title: '[Linux Mint] rbenvで取得したrubyで ruby tkをつかう方法メモ'
type: post
url: /archives/=2226
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Ruby tkを利用しようとしたところ、エラーがでて使えなかった。
    </p>
    
    <pre><code>% irb
irb(main):001:0> require 'tk'
LoadError: cannot load such file -- tk
        from /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
        from /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
        from (irb):1
        from /home/tsu-nera/.rbenv/versions/2.1.0/bin/irb:11:in `&lt;main>'
</code></pre>
    
    <p>
      この解決方法についてメモします。
    </p>
    
    <p>
      Ruby/TkはTcl/TkのツールキットをRubyから利用するライブラリ。
    </p>
    
    <p>
      Rubyの標準ライブラリに入っている。
    </p></p>
  </div>
  
  <div id="outline-container-sec-1-0-1" class="outline-4">
    <h4 id="sec-1-0-1">
      Ruby/Tk 参考Links
    </h4>
    
    <div class="outline-text-4" id="text-1-0-1">
      <ul class="org-ul">
        <li>
          <a href="https://www.tcl.tk/">Tcl Developer Site</a>
        </li>
        <li>
          <a href="https://ronor.web.fc2.com/rubytk/">Ruby/Tk入門</a>
        </li>
        <li>
          <a href="https://magazine.rubyist.net/?0003-RubyTkMovement">Rubyist Magazine &#8211; Ruby/Tk の動向</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    tk-devを入れてみる
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      もともと自分のPCに入っていたRubyはrbenvを使ってビルドした。 どうも、Ubuntu(Mint)環境では、tk-devをあらかじめインストールしておかないと、Rubyのビルド時にRuby/Tkがビルドされないようだ。
    </p>
    
    <p>
      ということで、
    </p>
    
    <pre><code>sudo apt-get install tk-dev
</code></pre>
    
    <p>
      他にも、いろいろツールが追加でインストールされる。
    </p>
    
    <pre><code>libxss-dev tcl tcl-dev tcl-lib tcl8.5-dev tk tk-lib tk8.5 tk8.5-dev tk8.5-lib x11proto-scrnsaver-dev
</code></pre>
    
    <p>
      これで、Rubyを再インストールしてみる。
    </p>
    
    <pre><code>% rbenv uninstall ruby-2.1.0
% rbenv install ruby-2.1.0 -v
</code></pre>
    
    <p>
      これでOKだろうとおもったけど、やっぱりエラーした。
    </p>
    
    <p>
      ビルドログをみると、やっぱりスキップされてしまう。
    </p>
    
    <pre><code>configuring tk
...........
check struct members..
check libraries....
Use ActiveTcl libraries (if available).
Search tclConfig.sh and tkConfig.sh.....................
WARNING: found "/usr/lib/tclConfig.sh", but cannot find valid Tcl library for the tclConfig.sh. So, ignore it.

WARNING: found "/usr/lib/tkConfig.sh", but cannot find valid Tk library for the tkConfig.sh. So, ignore it.
..........
Fail to find [tclConfig.sh, tkConfig.sh]
Use X11 libraries (or use TK_XINCLUDES/TK_XLIBSW information on tkConfig.sh).

Search tcl.h..
Search tk.h..Search Tcl library..........
Search Tcl library..........
Warning:: cannot find Tcl library. tcltklib will not be compiled (tcltklib is disabled on your Ruby. That is, Ruby/Tk will not work). Please check configure options.

Can't find proper Tcl/Tk libraries. So, can't make tcltklib.so which is required by Ruby/Tk.
If you have Tcl/Tk libraries on your environment, you may be able to use them with configure options (see ext/tk/README.tcltklib).
At present, Tcl/Tk8.6 is not supported. Although you can try to use Tcl/Tk8.6 with configure options, it will not work correctly. I recommend you to use Tcl/Tk8.5 or 8.4.
Failed to configure tk. It will not be installed.
configuring tk/tkutil
Failed to configure tk/tkutil. It will not be installed.
configuring win32
Failed to configure win32. It will not be installed.
configuring win32ole
Failed to configure win32ole. It will not be installed.
</code></pre></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Ubuntu特有のバグだったもよう
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      バグだった模様。バッチを発見。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://comments.gmane.org/gmane.comp.lang.ruby.japanese/8523">Japanese user list of the Ruby programming language ()</a>
      </li>
      <li>
        <a href="https://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-core/55165">https://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-core/55165</a>
      </li>
    </ul>
    
    <p>
      しかし、パッチの当て方がわからない。30分で挫折。
    </p>
    
    <p>
      途方にくれていたが、ズバリ解決する記事を発見！
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://qiita.com/Lio/items/1e6d74964282370d905c">Ruby &#8211; Ubuntu 13.04 + rbenv + tk がうまく使えなかった件 &#8211; Qiita</a>
      </li>
    </ul>
    
    <pre><code>sudo apt-get remove tk-dev
sudo apt-get install tk8.4-dev tcl8.4-dev

sudo ln -sfn /usr/lib/tcl8.4/tclConfig.sh /usr/lib/tclConfig.sh
sudo ln -sfn /usr/lib/tk8.4/tkConfig.sh /usr/lib/tkConfig.sh
</code></pre>
    
    <p>
      このとおりに実施したら、なんとなくうまくいったっぽい。
    </p>
    
    <pre><code>
configuring tk
........
check struct members..
check libraries....
Use ActiveTcl libraries (if available).
Search tclConfig.sh and tkConfig.sh...............................
Valid [tclConfig.sh, tkConfig.sh] are found in [["/usr/lib", "/usr/lib"]]
Use [tclConfig.sh, tkConfig.sh] == ["/usr/lib/tclConfig.sh", "/usr/lib/tkConfig.sh"]
Use X11 libraries (or use TK_XINCLUDES/TK_XLIBSW information on tkConfig.sh).

Find Tcl/Tk libraries. Make tcltklib.so which is required by Ruby/Tk.
configuring tk/tkutil
</code></pre>
    
    <p>
      成功、よかった ^_^;
    </p>
    
    <pre><code>% irb
irb(main):001:0> require 'tk'
=> true
</code></pre></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    ついでに拡張tkも
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      tkはrequireできたけど、拡張tkをrequireするとエラーする。
    </p>
    
    <pre><code>
require "tkextlib/tkimg/png"
require "tkextlib/tkimg/jpeg"
</code></pre>
    
    <p>
      これは、libtk-imgを入れることで解決。
    </p>
    
    <pre><code>sudo apt-get install libtk-img
</code></pre></p>
  </div></p>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    tkextlib/tileがつかえない！
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      tkextlib/tileをrequireすると、エラーした。tk-tileを入れる。
    </p>
    
    <pre><code>sudo apt-get install tk-tile
</code></pre>
    
    <p>
      それでもエラーする！これもバグみたい。tcltk 8.5をインストールすればいいよとのこと。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.ruby-forum.com/topic/1409300">Tk and Tile with Tk8.5 &#8211; Ruby Forum</a>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-6" class="outline-2">
  <h2 id="sec-6">
    結局8.5を頑張って入れる
  </h2>
  
  <div class="outline-text-2" id="text-6">
    <p>
      tileを利用するには、8.5を入れる必要がある。 しかし、パッチを当てても自分の環境ではうまくいかない。 こまりあぐねていたが、以下のエントリを発見。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://drx.rubyforge.org/ubuntu-new-tk.html">https://drx.rubyforge.org/ubuntu-new-tk.html</a>
      </li>
    </ul>
    
    <p>
      Ruby 1.8でも tcltk8.5をいれようという内容。これを真似してRuby2.0でも入れてみる。
    </p>
    
    <p>
      tcl/tk8.5をインストール。
    </p>
    
    <pre><code>sudo apt-get install tcl8.5-dev tk8.5-dev
</code></pre>
    
    <p>
      tk-devをいれていなかったらこれもインストール。（いろいろやりすぎて、どれが正解なのかわからない)
    </p>
    
    <p>
      シンボリックリンクも作成。
    </p>
    
    <pre><code>sudo ln -sfn /usr/lib/tcl8.5/tclConfig.sh /usr/lib/tclConfig.sh
sudo ln -sfn /usr/lib/tk8.5/tkConfig.sh /usr/lib/tkConfig.sh
</code></pre>
    
    <p>
      Ruby公式サイトから2.0をダウンロード。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.ruby-lang.org/ja/">オブジェクト指向スクリプト言語 Ruby</a>
      </li>
    </ul>
    
    <p>
      あとはコンパイルするのみ。
    </p>
    
    <pre><code>
cd ruby2.0.0-p353/ext/tk
CONFIGURE_ARGS='--with-tcl-include=/usr/include/tcl8.5/ --with-tcllib=tcl8.5 --with-tklib=tk8.5' ruby extconf.rb
make
</code></pre>
    
    <p>
      rubyはシステムのrubyを利用してコンパイルする。 mkmfというライブラリをつかっているので、ruby-devか入っていなかったら入れておく。
    </p>
    
    <p>
      これで、コンパイルに成功すると、tcl/tk8.5版の tcltklib.soができるはず！
    </p>
    
    <p>
      これを、既存のtcltklib.soと置き換える。
    </p>
    
    <pre><code>cd ~/.rbenv/versions/2.0.0-p353/lib/ruby/2.0.0/x86_64-linux
sudo mv tcltklib.so tcltklib.so.bak
suod cp (コンパイルしたtcltklib.so) .
</code></pre>
    
    <p>
      これで、tkextlib/tileがつかえるようになった。
    </p>
    
    <pre><code>irb(main):004:0* require 'tkextlib/tile'
=> true
</code></pre>
    
    <p>
      なんか、Mint 64bit環境ででRuby/tkをつかうのがめちゃくちゃ大変なのだけれども。ボクには ruby/tkはレベル高すぎて使いこなせる気がしない。。。
    </p></p>
  </div></p>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite