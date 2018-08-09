---
author: admin
categories:
- C++
- Eclipse
- 技術メモ
date: 2013-08-25T02:06:10+00:00
dsq_thread_id:
- 3.7130094e+09
excerpt: <!--:ja-->最近流行のコンパイラ、Clangを試してみました<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 8198
tags:
- CDT
- Clang
- LLVM
title: gccよりも高速な次世代コンパイラClangをCygwinでつかってみた
type: post
url: /archives/=1803
---

最近流行のコンパイラ、Clangを試してみました。

### Clangとは

Clangとは、gcc,iccのような、コンパイラの一種です。プログラミング言語C、C++、Objective-C、Objective-C++用。

  * <a href="https://ja.wikipedia.org/wiki/Clang" target="_blank">Clang &#8211; Wikipedia</a>

Clangの最終目標は、GNU gccの置き換えらしい。

  * <a href="https://clang.llvm.org/" target="_blank">"clang" C Language Family Frontend for LLVM</a>

静的解析能力やリファクタリング機能などももつため、IDEとの結合も目標らしい。

  * <a href="https://clang-analyzer.llvm.org/" target="_blank">Clang Static Analyzer</a>

以下は、setreduceという、Googleのエンジニアが開発しているリファクタリングツールのデモ動画。

[//www.youtube.com/embed/mVbDzTM21BQ?rel=0]

Clangを利用すると、コンパイラ時間がgccに比べて短くなるらしい。今回の目的は、それを確かめるためです。Clangのパフォーマンスがgccよりも良かったら乗り換えてみる。

  * <a href="https://news.mynavi.jp/news/2013/05/27/140/index.html" target="_blank">GCC 4.8とClang 3.3性能比較 | マイナビニュース</a>

### Cygwinへのインストール

setup.exeに用意されているようです。自分はapt-cygで取得。

    $ apt-cyg install clang
    $ apt-get install llvm
    $ clang -v
    clang version 3.1 (branches/release_31)
    Target: i386-pc-cygwin
    Thread model: posix
    

取得できたものは、3.1。現在の最新は、3.3なので、少し古い。

### ベンチマーク

C言語でかかれたプロジェクトをベンチマークとしてコンパイルしてみます。Clangのコンパイラオプションはgccと互換性があるので、makefileのCCオプションを変えるだけで行ける。

#### tree project

    curl -LO https://mama.indstate.edu/users/ice/tree/src/tree-1.6.0.tgz
    

  * gcc 7.8s
  * clang 9.5s

なんと、gccの勝利。あれ(・・?

#### screen project

    git clone git://git.sv.gnu.org/screen.git
    

  * gcc 1:34
  * clang 1:02

おお、30秒も速かった！Clangの圧倒的勝利。

Warningメッセージもカラー付きでわかりやすく表示してくれる。

    process.c:6272:35: warning: operator '?:' has lower precedence than '+'; '+' will be evaluated first [-Wparentheses]
    strncpy(p, buf, 1 + (l < len) ? l : len);
                    ~~~~~~~~~~~~~ ^
    

### eclipseからClangでコンパイルする(4.3ではバグってた）

LLVM Tool Chain for Eclipse CDTプラグインをインストールする。</p> 

![][1]

</a>

  * <a href="https://code.google.com/p/llvm4eclipsecdt/" target="_blank">llvm4eclipsecdt &#8211; Low-Level Virtual Machine toolchain support as a plug-in for Eclipse CDT &#8211; Google Project Hosting</a>

プロジェクトを右クリックして C/C++ビルド > ツールチェーン・エディタ を選択。

互換ツールチェーンのみ表示のチェックを外すと、ツールチェーンにLLVM Clang(cygwin)が選択できるので、選択。

ただし、Eclipse最新版4.3で試したところ、２度めに設定画面を開くとNullPointerExceptionが発生する。つまり、まだバグっているから使わないほうがいいということ。

最後に、ウィンドウ -> 設定 -> LLVM を選択。Library path libstdc++ がある場所のパスを通す。自分の環境では、C:\cygwin\lib\gcc\i686-pc-cygwin\4.5.3

これで、EclipseからClangでコンパイルできた。

 [1]: https://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png