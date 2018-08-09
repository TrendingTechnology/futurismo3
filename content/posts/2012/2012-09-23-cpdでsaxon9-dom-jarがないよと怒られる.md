---
author: admin
categories:
- Java
- 技術メモ
date: 2012-09-23T12:08:45+00:00
dsq_thread_id:
- 3.7405025e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2237
title: CPDでsaxon9-dom.jarがないよと怒られる
type: post
url: /archives/=509
---

PMDの最新版、pmd-bin-5.0-alphaを落としてきて、
  
それに付随するCPDを使ったところ、エラーした。
  
フェーマット出力で XML出力ができない。HTMLやTEXTならばできる。

cpdﾂꀀ &#8211;minimum-tokens 10 &#8211;files &#8220;C:\hogehoge\src&#8221; &#8211;language c &#8211;format xml
  
Error DOMSource cannot be processed: check that saxon9-dom.jar is on the classpath java.lang.IllegalStateException: net.sf.saxon.trans.XPathException: DOMSource cannot be processed: check that saxon9-dom.jar is on the classpath at net.sourceforge.pmd.cpd.XMLRenderer.render(XMLRenderer.java:95) at net.sourceforge.pmd.cpd.CPD.main(CPD.java:223) Caused by: net.sf.saxon.trans.XPathException: DOMSource cannot be processed: check that saxon9-dom.jar is on the classpath at net.sf.saxon.event.Sender.send(Sender.java:251) at net.sf.saxon.IdentityTransformer.transform(IdentityTransformer.java:30) at net.sourceforge.pmd.cpd.XMLRenderer.render(XMLRenderer.java:92) &#8230; 1 more

JAVAすら知らないが、saxon9-dom.jarがないよといっているみたい。
  
よくわからないが、ネットから別の saxon9-dom.jarをダウンロードしてきて、
  
pmd-bin-5.0-alpha\lib\配下にsaxon9-dom.jarをおいたらXML出力できた。

<https://www.java2s.com/Code/Jar/s/Downloadsaxon9domjar.htm>

<div id="fastlookup_top" style="display: none;">
</div>