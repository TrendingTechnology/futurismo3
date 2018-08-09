---
author: admin
categories:
- C言語
- Ruby
- 日記
date: 2013-06-01T13:55:54+00:00
dsq_thread_id:
- 3.7278367e+09
pdrp_attributionLocation:
- end
pvc_views:
- 4623
tags:
- make
- rake
title: C言語のビルドでほのぼのrakeでmakeするよ
type: post
url: /archives/=1376
---

### はじめに

C言語/C++でコンパイルするときは、makeするのが当たり前だと思っていた昨今、rakeなるビルドツールがあるとのことで、調査してみた。

まずは、世の中の人気度。。。。makefileの5%にも満たないシェア(2013年現在）

[![][1]][2]

#### 環境

  * Cygwin
  * Ruby 1.9.3
  * Rake version 10.0.4

#### 目次

[toc]

### rakeとmakeの比較とメリット

rakeとは、makefileをrubyの文法で記述するためのツール。もう少し正当にいうと、繰り返し使うようなスクリプトを「タスク」にまとめて、必要に応じて実行できるツール。

makeとrakeを比較すると、

  * makeはmakefileを作ってmakeする。
  * rakeはrakefileを作ってrakeする。

なんだか偽物のミッキーマウスみたい(-_-;)しかし、makeに対するrakeのメリットは以下。

  * 記述にRubyが使える
  
    汎用的なRubyの文法をそのまま使ってビルド手順がかける。なのでmakeのような独特な言語を覚えて（しかも他では使えない）使う必要はない。
  * 美しく記述できる
  
    Ruby自体が見やすい記法を心がけて開発されているので、記述がわかりやすい。

<span style="color: #0000ff; font-size: x-large;">Let&#8217;s インストール！━⊂( ･∀･)彡</span>

＞ gem install rake

### はじめてのrake

まずは、hogehoge.c hogehoge.h uhauha.c uhauha.h をgccでコンパイルして、hogehoge.exeを作成して実行する、というものをやってみる。

#### ディレクトリ構成

% tree
  
.
  
├── include
  
│ﾂꀀﾂꀀ ├── hogehoge.h
  
│ﾂꀀﾂꀀ └── uhauha.h
  
└── src
  
├── hogehoge.c
  
└── uhauha.c

#### コマンドライン

% gcc -Iinclude src/uhauha.c src/hogehoge.c -o hogehoge.exe && ./hogehoge.exe

#### makefile

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:d78bb8bf-13b2-4f0f-b0cb-434f519ddfba" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">C_COMPILER = gcc
TARGET=hogehoge.exe

#Source FIles
SRCS  =src/hogehoge.c
SRCS +=src/uhauha.c

#Include Files
INC_DIR =-Iinclude

all: target

target:
        $(C_COMPILER) $(INC_DIR) $(SRCS) -o $(TARGET)
        ./$(TARGET)

clean:
        rm $(TARGET)</pre>
</div>

#### rakefile

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:d8d981d7-057a-4e27-96eb-b428504be174" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">C_COMPILER = "gcc"
TARGET="hogehoge.exe"
INC_DIR ="include"

task :all =&gt; ["clean", "run"]
task :default =&gt; "run"

task :run =&gt; "hogehoge" do
  puts "---- run ----"
  sh "./#{TARGET}"
end

task :clean do
  puts "---- clean ----"
  sh "rm src/*.o *.exe"
end

file "hogehoge" =&gt; ["src/hogehoge.o", "src/uhauha.o"] do |t|
  puts "---- link ----"
  sh "#{C_COMPILER} -o #{t.name} #{t.prerequisites.join(' ')}"
end

rule '.o' =&gt; '.c' do |t|
  sh "#{C_COMPILER} -I#{INC_DIR} -c #{t.source} -o #{t.name}"
end</pre>
</div>

### rakefileの解説

rakefileについて、順に解説。

ちなみに、一番網羅的でわかりやすいのは、Ruby公式リファレンス。

[<span style="color: #0066cc;">https://doc.ruby-lang.org/ja/1.9.3/library/rake.html</span>][3]

#### Rake Tasks

rakefileはタスクからできている。タスクを順次、実行するための手順を書くのがrakefile。ということで、タスクの概念はrakeには必須。

  * rakeではタスクを見つけると、そのタスクを実行させるために処理を芋づる式に探して実行していく。
  * タスクの定義方法は、 「task :(タスク名) 」。
  * タスクに依存関係を記述する場合は、「task :(タスク名) => &#8220;(依存するタスク)&#8221;」。依存関係は配列で渡すこともできる。
  * タスクに実施させる処理(action)は、ブロック(do &#8230;end)で与える。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b305cbf5-ecf4-4c93-abff-6ae50e282c37" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">task :all =&gt; ["clean", "run"]
task :default =&gt; "run"

task :run =&gt; "hogehoge" do
  puts "---- run ----"
  sh "./#{TARGET}"
end

task :clean do
  puts "---- clean ----"
  sh "rm src/*.o *.exe"
end</pre>
</div>

#### File Tasks

ファイル作成のためのタスクかファイルタスク。定義の仕方はタスクと同じ。

rakeタスクは必ず実行されるが、ファイルタスクはタイムスタンプをチェックする。ファイルに変更があった場合のみ実行される。これが、makeと同じところ。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:0a546bd4-3bb6-42c7-a59b-c037e56ab481" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">file "hogehoge" =&gt; ["src/hogehoge.o", "src/uhauha.o"] do |t|
  puts "---- link ----"
  sh "#{C_COMPILER} -o #{t.name} #{t.prerequisites.join(' ')}"
end</pre>
</div>

  * t.nameは、タスク名(hoehoge)
  * t.prerequisitesは、依存先タスク名の配列 [&#8220;src/hogehoge.o&#8221;, &#8220;src/uhauha.o&#8221;]

をそれぞれ指す。詳しくは以下のURL。

[class Rake::Task][4]

#### rule

異なるファイルに対して、同一の処理を実行するためには、ruleを定義する。ruleを満たす場合に実行される処理を書く。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:3bd1bdc0-28b2-48a2-8f87-af75e51c7180" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">rule '.o' =&gt; '.c' do |t|
  sh "#{C_COMPILER} -I#{INC_DIR} -c #{t.source} -o #{t.name}"
end</pre>
</div>

t.sourceは、依存するファイルパス(src/&#8230;&#8230;c)

### Rakeのもう一歩進んだ使い方

#### コメント

タスクにコメントを記述するには、desc &#8220;hogehoge&#8221;と書きます。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:fc62a09b-fe0d-48e1-ad2f-fd2908df06ab" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">desc "Clean and Run"
task :all =&gt; ["clean", "run"]

desc "Run build"
task :default =&gt; "run"</pre>
</div>

記述は、 rake -Tで見れます。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b60f8710-906b-4e08-b098-dbac3d035ddd" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">[tsu-nera]% rake -T
rake all      # Clean and Run
rake clean    # Remove old files
rake default  # Run build
rake run      # Build Main</pre>
</div>

#### clean

.oや.exeは普通、rmコマンドで削除するが、rakeにはこれを補助する機能がある。

使い方は、&#8217;rake/clean&#8217; を requireで取り込んで、CLEAN、CLOBBERに削除したいファイルを登録する。すると、rake clean/rake clobberタスクが実行できるようになる。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:c619b603-2542-4c63-9f50-ae5d290cf04a" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">rake clean    # Remove any temporary products.
rake clobber  # Remove any generated file.</pre>
</div>

cleanコマンドはCLEANに登録されたファイルを削除。clobberはCLEANとCLOBBERに登録されたファイルを削除する。以下の3行を追加。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:9e35f9d3-7ab1-4e5b-bcf8-b90f56cad77d" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="ruby">require 'rake/clean'
CLEAN.include("src/*.o")
CLOBBER.include("*.exe")</pre>
</div>

実行結果

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:a3201679-759b-49cd-99a7-77b589422f67" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">[tsu-nera]% rake clean
rm -r src/hogehoge.o
rm -r src/uhauha.o
[tsu-nera]% rake clobber
rm -r hogehoge.exe</pre>
</div>

[library rake/clean][5]

#### ファイルリスト

ディレクトリ配下のファイルに対してまとめて同じ処理を実行するためには、ファイルリストを使うと便利。

こんな感じで宣言する。これは、src配下にあるすべてのソースをSRCSというファイルリストに入れている。考え方はArrayと同じ。

SRCS = FileList[&#8220;src/*.c&#8221;]

リストの拡張子を変更するために、extメゾッドが用意されている。これで、.cファイルが.oファイルに置き換えられる。

OBJS = SRCS.ext(&#8216;o&#8217;)

ファイルリストにファイルを追加するためには、includeメゾッド、除外するためにはexcluleメゾッドを利用する。はじめに、srcs = FileList[&#8220;*\*/\*.c&#8221;]で全てのファイルをリストに加えてから、srcs.exclude(&#8220;src/hogehoge.c&#8221;)と書いて除外したりできる。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:3ed48dc0-6b58-4052-bd68-2661b51eecb3" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="ruby">SRCS = FileList["src/*.c"]
OBJS = SRCS.ext('o')

file "hogehoge" =&gt; OBJS do |t|
  puts "---- link ----"
  sh "#{C_COMPILER} -o #{t.name} #{t.prerequisites.join(' ')}"
end</pre>
</div>

[class Rake::FileList][6]

### まとめ

今までのをまとめると、こうなった。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:1b0156fc-5072-4db9-a60b-67a7ba0a7f4e" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="ruby">C_COMPILER = "gcc"
TARGET = "hogehoge.exe"
INC_DIR ="include"

require 'rake/clean'
CLEAN.include(["src/*.o", "*.exe"])
#CLOBBER.include("*.exe")

desc "Clean and Run"
task :all =&gt; ["clean", "run"]

desc "Run build"
task :default =&gt; "run"

desc "Build Main"
task :run =&gt; "hogehoge" do
  puts "---- run  ----"
  sh "./#{TARGET}"
end

SRCS = FileList["src/*.c"]
OBJS = SRCS.ext('o')

file "hogehoge" =&gt; OBJS do |t|
  puts "---- link ----"
  sh "#{C_COMPILER} -o #{t.name} #{t.prerequisites.join(' ')}"
end

rule '.o' =&gt; '.c' do |t|
  puts "---- compile ----"
  sh "#{C_COMPILER} -I#{INC_DIR} -c #{t.source} -o #{t.name}"
end</pre>
</div>

依存関係を美しく記述デキる点がとても気に入った。また、今まさにRubyを勉強中なので、makefileよりもモチベーションが上がる。ということで、もう少しいろいろ調べてみます。

#### 参考

  * [Rake][7]
  * [library rake][3]
  * [Rakeの基本的な使い方まとめ &#8211; うなの日記][8]
  * [ぼくでもできた！ Rake][9]
  * [Home Page][10]
  * [Rake &#8212; Ruby Make][11]
  * [rakeのruleをもっと柔軟に使う #Ruby #rake &#8211; Qiita [キータ]][12]
  * [RakeUserGuide &#8211; Rake ユーザガイド][13]

この本には4ページほどしか載ってなくてあまり詳しくはない。この本には4ページほどしか載ってなくてあまり詳しくはない。

<div class="amazlink-box" style="overflow: hidden; font-size: small; zoom: 1; padding-bottom: 20px; text-align: left;">
  <div class="amazlink-list" style="clear: both;">
    <div class="amazlink-image" style="float: left; margin: 0px 12px 1px 0px;">
      <a href="https://www.amazon.co.jp/%E3%81%9F%E3%81%AE%E3%81%97%E3%81%84Ruby-%E7%AC%AC3%E7%89%88-%E9%AB%98%E6%A9%8B-%E5%BE%81%E7%BE%A9/dp/4797357401%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4797357401" target="_blank" rel="nofollow"><img style="border-style: none;" alt="" src="https://ecx.images-amazon.com/images/I/41t7GQ3peRL._SL160_.jpg" /></a>
    </div>
    
    <div class="amazlink-info" style="margin-bottom: 10px;">
      <div class="amazlink-name" style="margin-bottom: 10px; line-height: 120%;">
        <a href="https://www.amazon.co.jp/%E3%81%9F%E3%81%AE%E3%81%97%E3%81%84Ruby-%E7%AC%AC3%E7%89%88-%E9%AB%98%E6%A9%8B-%E5%BE%81%E7%BE%A9/dp/4797357401%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4797357401" target="_blank" rel="nofollow">たのしいRuby 第3版</a>
      </div>
      
      <div class="amazlink-powered" style="font-size: 80%; margin-top: 5px; line-height: 120%;">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.05.26
      </div>
      
      <div class="amazlink-detail">
        高橋 征義
      </div>
      
      <div class="amazlink-sub-info" style="float: left;">
        <div class="amazlink-link" style="margin-top: 5px;">
          <img alt="" src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/%E3%81%9F%E3%81%AE%E3%81%97%E3%81%84Ruby-%E7%AC%AC3%E7%89%88-%E9%AB%98%E6%A9%8B-%E5%BE%81%E7%BE%A9/dp/4797357401%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4797357401" target="_blank" rel="nofollow">Amazon</a> <img alt="" src="https://amazlink.fuyu.gs/icon_rakuten.gif" width="18" /><a href="https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F6412245%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D6412245%26surl%3Dbook" target="_blank" rel="nofollow">楽天</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="fastlookup_top">
</div>

 [1]: https://chart.googleapis.com/chart?cht=bhg&chs=400x200&chxt=y%2Cx&chxl=0%3A%7Cmakefile%7Crakefile&chdlp=r&chco=ffbf67&chxr=1%2C0%2C899000&chbh=a&chd=t%3A41000%2C899000&chtt=Google%20%E6%A4%9C%E7%B4%A2%E7%B5%90%E6%9E%9C%E6%95%B0%E3%81%AE%E6%AF%94%E8%BC%83&chds=0%2C899000&chm=N**%2C666666%2C0%2C-1%2C12%2C0&chl
 [2]: https://konisimple.net/tool/google_graph/#rakefile
 [3]: https://doc.ruby-lang.org/ja/1.9.3/library/rake.html
 [4]: https://doc.ruby-lang.org/ja/1.9.3/class/Rake=3a=3aTask.html
 [5]: https://doc.ruby-lang.org/ja/1.9.3/library/rake=2fclean.html
 [6]: https://doc.ruby-lang.org/ja/1.9.3/class/Rake=3a=3aFileList.html
 [7]: https://www2s.biglobe.ne.jp/~idesaku/sss/tech/rake/
 [8]: https://d.hatena.ne.jp/unageanu/20100829/1283069269
 [9]: https://www.jitu.org/~tko/doc-jp/rake/rake.html
 [10]: https://docs.rubyrake.org/index.html
 [11]: https://rake.rubyforge.org/
 [12]: https://qiita.com/items/c588c96b9ecf38021312
 [13]: https://www.kyobashi.org/hf/RakeUserGuide/?AboutRakeUserGuide