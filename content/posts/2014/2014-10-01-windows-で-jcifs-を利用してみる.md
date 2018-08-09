---
author: admin
categories:
- Java
- 技術メモ
date: 2014-10-01T12:05:00+00:00
dsq_thread_id:
- 3.6964296e+09
excerpt: Windows で JCIFS を利用してみる
pvc_views:
- 4410
tags:
- SMB
title: Windows で JCIFS を利用してみる
type: post
url: /archives/=2635
---

CIFS を Java から利用するためのライブラリ JCIFS を試してみたメモです. 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    JCIFS とは
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      JCIFS は Java で書かれた CIFS/SMB クライアントライブラリ.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://jcifs.samba.org/">https://jcifs.samba.org/</a>
      </li>
      <li>
        github: <a href="https://github.com/kohsuke/jcifs">https://github.com/kohsuke/jcifs</a>
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    File Read
  </h2>
  
  <div class="outline-text-2" id="text-2">
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      code
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221; ]<br /> import java.io.BufferedReader;<br /> import java.io.IOException;<br /> import java.io.InputStreamReader;<br /> import java.io.PrintWriter;<br /> import java.util.Properties;</p> 
      
      <p>
        import jcifs.Config;<br /> import jcifs.smb.SmbFileInputStream;<br /> import jcifs.smb.SmbFileOutputStream;
      </p>
      
      <p>
        public class JCIFSSample {<br /> public static void main (String[] args) throws IOException {
      </p>
      
      <p>
        Properties prop = new Properties ();<br /> prop.setProperty (&#8220;jcifs.smb.client.username&#8221;, &#8220;TSUNEMICHI&#8221;);<br /> prop.setProperty (&#8220;jcifs.smb.client.password&#8221;, &#8220;****************&#8221;);<br /> Config.setProperties (prop);
      </p>
      
      <p>
        SmbFileInputStream sfis = new SmbFileInputStream (&#8220;smb://TSUNEMICHI-VAIO/Users/TSUNEMICHI/temp/test.txt&#8221;);<br /> BufferedReader br = new BufferedReader (new InputStreamReader (sfis));
      </p>
      
      <p>
        String line = null;
      </p>
      
      <p>
        while ((line = br.readLine ())!=null){<br /> System.out.println (line);<br /> }<br /> br.close ();<br /> }<br /> }<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      compile and run
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> C:\cygwin64\home\tsu-nera\tmp>javac -cp .;jcifs-1.3.17.jar FileRead.java</p> 
      
      <p>
        C:\cygwin64\home\tsu-nera\tmp>java -cp .;jcifs-1.3.17.jar FileRead<br /> Hello CIFS!!<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-2-3" class="outline-3">
    <h3 id="sec-2-3">
      WireShark
    </h3>
    
    <div class="outline-text-3" id="text-2-3">
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> Negotiate Protocol Request<br /> Negotiate Protocol Response, ACCEPTOR_NEGO, ACCEPTOR_META_DATA<br /> Session Setup AndX Request, NTLMSSP_NEGOTIATE<br /> Session Setup AndX Response, NTLMSSP_CHALLENGE, Error: STATUS_MORE_PROCESSING_REQUIRED<br /> Session Setup AndX Request, NTLMSSP_AUTH, User: ?\TSUNEMICHI<br /> Session Setup AndX Response<br /> Tree Connect AndX Request, Path: \\TSUNEMICHI-VAIO\USERS<br /> Tree Connect AndX Response<br /> NT Create AndX Request, FID: 0x4000, Path: \TSUNEMICHI\temp\test.txt<br /> NT Create AndX Response, FID: 0x4000<br /> Read AndX Request, FID: 0x4000, 4286 bytes at offset 0<br /> Read AndX Response, FID: 0x4000, 12 bytes<br /> Read AndX Request, FID: 0x4000, 4286 bytes at offset 12<br /> Read AndX Response, FID: 0x4000, 0 bytes<br /> Read AndX Request, FID: 0x4000, 4286 bytes at offset 12<br /> Read AndX Response, FID: 0x4000, 0 bytes<br /> Close Request, FID: 0x4000<br /> Close Response, FID: 0x4000<br /> [/sourcecode]
    </div>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    File Write
  </h2>
  
  <div class="outline-text-2" id="text-3">
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      code
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221; ]<br /> import java.io.BufferedReader;<br /> import java.io.IOException;<br /> import java.io.InputStreamReader;<br /> import java.io.PrintWriter;<br /> import java.util.Properties;</p> 
      
      <p>
        import jcifs.Config;<br /> import jcifs.smb.SmbFileOutputStream;
      </p>
      
      <p>
        public class FileWrite {<br /> public static void main (String[] args) throws IOException {
      </p>
      
      <p>
        Properties prop = new Properties ();<br /> prop.setProperty (&#8220;jcifs.smb.client.username&#8221;, &#8220;TSUNEMICHI&#8221;);<br /> prop.setProperty (&#8220;jcifs.smb.client.password&#8221;, &#8220;****************&#8221;);<br /> Config.setProperties (prop);
      </p>
      
      <p>
        SmbFileOutputStream sfos = new SmbFileOutputStream (&#8220;smb://TSUNEMICHI-VAIO/Users/TSUNEMICHI/temp/test.txt&#8221;);<br /> PrintWriter pw = new PrintWriter (sfos);<br /> pw.println (&#8220;GoodBye JCIFS&#8221;);<br /> pw.close ();<br /> }<br /> }<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      WireShark
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> Negotiate Protocol Request<br /> Negotiate Protocol Response, ACCEPTOR_NEGO, ACCEPTOR_META_DATA<br /> Session Setup AndX Request, NTLMSSP_NEGOTIATE<br /> Session Setup AndX Response, NTLMSSP_CHALLENGE, Error: STATUS_MORE_PROCESSING_REQUIRED<br /> Session Setup AndX Request, NTLMSSP_AUTH, User: ?\TSUNEMICHI<br /> Session Setup AndX Response<br /> Tree Connect AndX Request, Path: \\TSUNEMICHI-VAIO\USERS<br /> Tree Connect AndX Response<br /> NT Create AndX Request, FID: 0x4000, Path: \TSUNEMICHI\temp\test.txt<br /> NT Create AndX Response, FID: 0x4000<br /> Write AndX Request, FID: 0x4000, 15 bytes at offset 0<br /> Write AndX Response, FID: 0x4000, 15 bytes<br /> Close Request, FID: 0x4000<br /> Close Response, FID: 0x4000<br /> [/sourcecode]
    </div>
  </div>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    その他
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      ローカルファイルとネットワーク上のファイルを 同じように扱う方法がわからなかった.
    </p>
    
    <p>
      以下のような方法があるようだが, 自分の環境では動作せず.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://stackoverflow.com/questions/14749434/how-to-copy-file-from-smb-share-to-local-drive-not-in-domain-with-jcifs">How to copy file from SMB share to local drive not in domain with JCIFS &#8211; Stack Overflow</a>
      </li>
      <li>
        <a href="https://stackoverflow.com/questions/13359164/how-to-copy-file-from-smb-share-to-local-drive-using-jcifs-in-java?rq=1">How to copy file from smb share to local drive using jcifs in Java? &#8211; Stack Overflow</a>
      </li>
    </ul>
  </div>
</div>