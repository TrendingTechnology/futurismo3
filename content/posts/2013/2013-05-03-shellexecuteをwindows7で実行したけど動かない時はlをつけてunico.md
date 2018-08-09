---
author: admin
categories:
- 日記
date: 2013-05-03T07:40:47+00:00
dsq_thread_id:
- 3.7020754e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 8279
tags:
- Windowsプログラミング
title: ShellExecuteをWindows7で実行したけど動かない時は”L”をつけてUniCode対応する
type: post
url: /archives/=1305
---

C++からShellExecuteを利用して、Windowsプログラムを起動しようとしたが、起動しない。

#### 環境

  * Windows 7 64bit.
  * Visual Studio&#160; Expess&#160; 2012

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:019e196f-a7d0-48e1-a0d0-c491e7a2cd68" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">int main(int argc, char* argv[])
{
　　 ShellExecute(NULL,"open","notepad.exe",NULL,NULL,SW_SHOWNORMAL);
 　　return 0;
}

</pre>
</div>

ShellExecuteの定義である[ShellExecute 関数][1]を見て，LPCTSTR型でキャストしても動かない。困ったときのネットにも、助けになるような情報がない。

それでも頑張って調べてみると、文字列にはプレフィックスとして"L"を追加する必要があるらしい。これを、ワイド文字列いう。Unicodeを示すための型らしい。以下のページが詳しい。

[文字セットとTCHARと][2]

というわけで、こんなふうに変更すればよい。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:38cffc8f-8189-4a61-bfc3-b0a81f57df1b" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">int main(int argc, char* argv[])
{
	ShellExecute(NULL, L"open", L"notepad.exe",NULL,NULL,SW_SHOWNORMAL);
	return 0;
}</pre>
</div>

これで、動作するになった。めでたしめでたし。

### UniCode対応しなければよいとうい手もある

そしてこれは、Windowsプログラミングの常識らしい。常識だからネットで調べてもないわけだ。

  * [_T("")マクロだのL""マクロだのLPCTSTRだのの世界一詳しい解説][3]
  * [TCHARとかLPCTSTR、LPTSTRって何？？？(UsefullCode.net)][4]

これを意識しない方法もある。Visual Studioのプロジェクトの

  * プロパティ -> 全般 -> 文字セット
  * マルチ バイト文字セットを使用する

を選択すると、OK.これで、以下のようなコードでも動作する。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:ab1871fa-664b-4857-b20c-52899386c90d" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">int main(int argc, char* argv[])
{
	ShellExecute(NULL, (LPCSTR)"open", (LPCSTR)"notepad.exe",NULL,NULL,SW_SHOWNORMAL);
	return 0;
}</pre>
</div>

わけがわからない、winodwsプログラミング。。。。

### 追記 130819

すでに変数に格納した文字を変換するためには、mbstowcs_sを使います。これで、ピンポイントで文字列を変換できる。

  * <a href="https://note.phyllo.net/?eid=1106043" target="_blank">VC++メモ：マルチバイト文字列(char*)とワイド文字列(WCHAR*)の変換 | フィロの村note</a>

 [1]: https://msdn.microsoft.com/ja-jp/library/cc422072.aspx
 [2]: https://zahyou.6.ql.bz/cgame/tchar.htm
 [3]: https://victreal.com/Junk/_T/
 [4]: https://www.usefullcode.net/2006/11/tcharlpctstrlptstr.html