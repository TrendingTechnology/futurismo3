---
author: admin
categories:
- C++
- 技術メモ
date: 2012-06-30T09:37:38+00:00
dsq_thread_id:
- 3.7286628e+09
pvc_views:
- 2429
tags:
- Boost
title: C++で boost Lib と windows.hでの競合
type: post
url: /archives/=130
---

結構ハマったので、メモしておく。

Cygwin環境で、Boost ライブラリの正規表現とwindows.hを両方使おうとすると  
エラ－してしまう。

原因は #define max.minの競合。

なので、以下のようにインクルードして解決した。

<pre lang="c++">#include &lt;boost/regex.hpp&gt;<br />#undef min<br />#undef max<br />#include &lt;windows.h&gt;</pre>