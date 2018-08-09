---
author: admin
categories:
- ハッキング
date: 2012-06-13T04:33:29+00:00
dsq_thread_id:
- 3.7535132e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2250
tags:
- VBS
title: Outlookにロ－カル作業記録を残すVBS
type: post
url: /archives/=117
---

TwitterのつぶやきはGoogleカレンダ－に転送しているので、
  
ログに残すことができるが、Twitterに投稿したくない個人的なつぶやきも
  
Googleカレンダ－に残せればよいなぁと思ったので、そんなものをつくってみた。

  * Outlook予定表につぶやきを記録。
  * Google Calendar Syncで同期。

<pre lang="vb">'Outookへ予定を追加するマクロ
Option Explicit

'入力された名前で予定表のアイテムを1つ作成する

  Dim Tweet  'つぶやき
  Tweet = InputBox("Let's Tweet")

'Outlook を 起動する
  Dim oApp        'OutlookのApplication オブジェクトを入れる
  Dim myNameSpace '名前空間
  Dim myCalendar  'カレンダ－指定
  Dim aITEM       '予定表アイテム

  Set oApp = CreateObject("Outlook.Application") 'outlook 起動
  Set myNameSpace = oApp.GetNamespace("MAPI") '名前空間 の 指定

  Set myCalendar = myNameSpace.Folders("Outlook").Folders("予定表")
  Set aITEM = myCalendar.Items.Add 

  'データセット
  With aITEM
    .Subject = Tweet
    .Start = Now 'なう。
    .End = Now   'なう。
    .Categories = "#Twitter" '分類項目に#Twitterを追加
    .Save
  End With</pre>

<div id="fastlookup_top" style="display: none;">
</div>