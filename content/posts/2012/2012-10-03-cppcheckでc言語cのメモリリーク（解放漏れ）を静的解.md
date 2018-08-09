---
author: admin
categories:
- C++
- C言語
- 技術メモ
date: 2012-10-02T23:35:31+00:00
dsq_thread_id:
- 3.7097528e+09
pdrp_attributionLocation:
- end
pvc_views:
- 21685
tags:
- CppCheck
- cygwin
- OSS
- 組込み
- 静的解析
title: CppCheckでC言語/C++のメモリリーク（解放漏れ）を静的解析で検出する。
type: post
url: /archives/=602
---

メモリ解放漏れ・メモリ二重解放は組込みエンジニアにとって、背筋が凍る単語だ。
  
それは、即、残業しなさいという意味に転じる。
  
そこから、泥沼のデバッグにハマることがよくある。

そんな課題をスマートに解決するために、メモリ解放漏れやメモリ二重解放を検出するツール調べてみたので、メモメモ。

### オープンソース CppCheckのインストールをしよう

Cppcheckを使うことでメモリ解放漏れを静的解析で見つけることが可能だ。CppCheckはその他にも、アロケーション(確保と解放)の不一致（メモリ二重解放），バッファオーバーランの検出ができる。OSSなので、誰でも無料で利用可能。

[CppCheckのダウンロードはココから][1]

Cppcheckの使い方の日本語訳は、以下のサイトで公開されている。

（ものすごく感謝！）今回はこれを参考に自分でも試してみる。

[cppcheck 日本語マニュアル &#8211; 一人ぼっちの共鳴][2]
  
[cppcheck 英語マニュアルはこちちから][3]

#### Cppcheckでメモリリークを検出する

Cppcheckを利用するには、&#8211;enable=allオプションをつけて以下のコマンド実行。

[text]
  
cppcheck &#8211;enable=all [フアイル名]
  
[/text]

試しにこんなコードを書いてみた。

memory_leak.c
  
[c]
  
#include <stdlib.h>
  
#include <stdio.h>

int main(void)
  
{
  
int *p = NULL;

printf(&#8220;*p = %x\n&#8221;,p);
  
p = malloc(10);
  
printf(&#8220;*p = %x\n&#8221;,p);

return 0;
  
}
  
[/c]

なかなか、喧嘩を売っているコードだけれども、
  
これをCppCheckでチェックすると、案の定怒られる。（よしよし (^-^))
  
[text]
  
$ cppcheck &#8211;enable=all memory_leak.c
  
Checking memory_leak.c&#8230;
  
[memory_leak.c:12]: (error) Memory leak: p
  
Checking usage of global functions..
  
[/text]

### 自分で定義したメモリ獲得/解放関数のメモリリークをチェックする

次に、ユーザ定義したメモリ獲得/解放関数をチェックする。
  
普通、C標準のメモリ獲得/解放関数を直接使用することはなく、自前の関数でカスタマイズして使用することが多い。メモリアロケート関数を別ファイルで宣言してみる。

hoge_memory.c
  
[c]
  
#include &#8220;hoge_memory.h&#8221;

void *hoge_malloc(void)
  
{
  
return malloc(10);
  
}

memory_leak.c
  
void hoge_free(void *p)
  
{
  
free(p);
  
}

#include <stdio.h>
  
#include &#8220;hoge_memory.h&#8221;

int main(void)
  
{
  
char *p = NULL;

printf(&#8220;*p = %x\n&#8221;,p);
  
p = (char *)hoge_malloc();
  
printf(&#8220;*p = %x\n&#8221;,p);

return 0;
  
}
  
[/c]

[text]
  
$ cppcheck &#8211;enable=all memory\_leak.c hoge\_memory.c
  
Checking hoge_memory.c&#8230;
  
1/2 files checked 40% done
  
Checking memory_leak.c&#8230;
  
2/2 files checked 100% done
  
Checking usage of global functions..
  
[/text]
  
Oh! 検出してくれないYo!!(゜д゜)/
  
こんなときは、<span style="color: #0000ff;">&#8211;appendオプション</span>を使用する。
  
使い方は、
  
[text]
  
cppcheck 窶錀-append=<メモリ獲得・解放関数定義file> <静的解析対象file>
  
[/text]
  
[text]
  
$ cppcheck &#8211;enable=all &#8211;append=hoge\_memory.c memory\_leak.c
  
Checking memory_leak.c&#8230;
  
[memory_leak.c:13]: (error) Memory leak: p
  
Checking usage of global functions..
  
[/text]
  
これで、、メモリリークを検出しました。

#### メモリ二重解放を検出する

おまけ。メモリ二重解放もこのとおり発見できます！スゲー。
  
[c]
  
int main(void)
  
{
  
char *p = NULL;

printf(&#8220;*p = %x\n&#8221;,p);
  
p = (char *)hoge_malloc();
  
printf(&#8220;*p = %x\n&#8221;,p);

hoge_free(p);

hoge_free(p);

return 0;
  
}
  
[/c]
  
[text]
  
$ cppcheck &#8211;append=hoge\_memory.c memory\_leak.c
  
Checking memory_leak.c&#8230;
  
[memory_leak.c:15]: (error) Deallocating a deallocated pointer: p
  
[/text]

#### 使われていない関数宣言

[text]
  
$ cppcheck &#8211;append=hoge\_memory.c &#8211;enable=all memory\_leak.c
  
Checking memory_leak.c&#8230;
  
Checking usage of global functions..
  
[memory\_leak.c:18]: (style) The function &#8216;hogehoge\_special&#8217; is never used
  
[/text]

 [1]: https://sourceforge.jp/projects/sfnet_cppcheck/
 [2]: https://dos-sonority.jugem.jp/?eid=1313
 [3]: https://cppcheck.sourceforge.net/manual.pdf