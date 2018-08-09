---
author: admin
categories:
- TDD
- ハッキング
date: 2012-05-02T05:28:24+00:00
dsq_thread_id:
- 3.7397312e+09
pdrp_attributionExtended:
- 1
pdrp_attributionLocation:
- end
pvc_views:
- 2725
tags:
- Outlook
- VBS
title: VB Lite Unitでの記法まとめ
type: post
url: /archives/=59
---

VB Lite Unitの記法がなんとなくわかってきたのでメモ 〆(._.)
  
この定形ソ－スをクラスモジュールで作成してところどころ修正。

File:SampleTest

<pre lang="vb">'おまじない
Option Explicit
Implements ITestCase

Private Function ITestCase_TestCaseInstance() As ITestCase
  Dim objResult As New TaskTraceTest
  ' Test for cut/paste error - programmer forgot to change type of objResult.
  'Debug.Assert TypeName(objResult) = TypeName(Me)
  Set ITestCase_TestCaseInstance = objResult
End Function

'テストスイ－ト？ここはまだ未調査
Private Property Get ITestCase_Suite() As Variant
  ' Do nothing here
  ' Only run tests within RunTest.
End Property

'実験用にtemp変数宣言。ITestCase_RunTest内で宣言したら失敗した。
Private temp As Integer

'ここからテスト関数
Private Sub ITestCase_RunTest( _
  ByVal TestNum As Long, _
  TestName As String, _
  ExpectErrNum As Long, _
  EndOfTests As Boolean _
)
  Dim objTestNum As New TestNumGenerator

  Select Case TestNum
    Case tstcTestActionSetup
      'ここにSetupで実行したいことを書く

    Case tstcTestActionTeardown
      'ここにTearDownで実行したいことを書く
    
    'ここからテスト  
    Case objTestNum.NextNumber
       'AssertEqualがアサ－ト関数 第三引数でテストの名前を書く
       AssertEqual 1, temp, "first"

    Case objTestNum.NextNumber
       'Test2....

    Case objTestNum.NextNumber
       'Test3....

        'Case 文を追加してどんどんテストを書く

    Case Else
      EndOfTests = True

  End Select

End Sub
</pre>

実行はイミディエイトウィンドウで以下を実行

<pre>Runtests New SampleTest
</pre>

ショ－トカットキ－の Ctrl + G と F7 を利用してテストを小さく回す。
  
う－む快感。(´∀｀)
  
[<img src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab_VB-Lite-Unit-Test-Results_2012-5-2_14-32-3_No-00-300x203.png" alt="" title="SnapCrab_VB Lite Unit - Test Results_2012-5-2_14-32-3_No-00" width="300" height="203" class="alignnone size-medium wp-image-61" />][1]

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab_VB-Lite-Unit-Test-Results_2012-5-2_14-32-3_No-00.png