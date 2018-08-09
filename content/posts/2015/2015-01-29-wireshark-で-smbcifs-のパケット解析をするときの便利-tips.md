---
author: admin
categories:
- 技術メモ
date: 2015-01-29T12:53:00+00:00
dsq_thread_id:
- 3.7187564e+09
excerpt: WireShark で SMB/CIFS のパケット解析をするときの便利 Tips
pvc_views:
- 4719
tags:
- SMB
- WireShark
title: WireShark で SMB/CIFS のパケット解析をするときの便利 Tips
type: post
url: /archives/=2956
---

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      仕事で SMB プロトコルのパケット解析ばかりするようになってきた.
    </p>
    
    <p>
      少し Tips がたまってきたので, 忘れないうちにメモしようと思う. SMB2 限定.
    </p>
    
    <p>
      かなりニッチな内容だけれども, いつかどこかで誰かの役に立つことを願う.
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    検索を利用する
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      Ctrl + F で検索窓か開くので, キーワードから検索.
    </p>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Filter を利用する
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      素早く情報を検索するには, フィルタが有効.
    </p>
    
    <ul class="org-ul">
      <li>
        ツールバーからフィルタのパターンを入力
      </li>
      <li>
        よく利用するものは, save を押すと再利用可能
      </li>
      <li>
        フィルタの追加, 削除は Edit > Preferences > Filter Expressions から.
      </li>
    </ul>
    
    <p>
      以下, よく利用するものを列挙
    </p>
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      smb プロトコルをフィルタする
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        これは基本.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> smb or smb2<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      IP アドレスでフィルタリング
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      <p>
        サーバのログをみるとき, たくさんのクライアントからのアクセスがある ので, ログが見づらい. 以下で, 送信元または送信先でフィルタリング.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> ip.addr == 10.0.0.1<br /> [/sourcecode]
      </p>
      
      <p>
        送信元と先を指定する.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> ip.addr == 10.0.0.1 and ip.addr == 10.0.0.0<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-3-3" class="outline-3">
    <h3 id="sec-3-3">
      NT Status が エラーのものをフィルタリングする
    </h3>
    
    <div class="outline-text-3" id="text-3-3">
      <p>
        エラーを素早くチェックするために.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> smb2.nt_status > 0<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-3-4" class="outline-3">
    <h3 id="sec-3-4">
      Command Code でフィルタリング
    </h3>
    
    <div class="outline-text-3" id="text-3-4">
      <p>
        コマンドコードで絞込み.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> # create でフィルタ<br /> smb2.cmd==5<br /> [/sourcecode]
      </p>
      
      <p>
        コマンドコード一覧
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://msdn.microsoft.com/en-us/library/cc246528.aspx">2.2.1.1 SMB2 Packet Header &#8211; ASYNC</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-3-5" class="outline-3">
    <h3 id="sec-3-5">
      FileId でフィルタリング
    </h3>
    
    <div class="outline-text-3" id="text-3-5">
      <p>
        create response コマンドにある fileId を追跡する.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> smb2.fid==00004001-0000-0000-0000-000000000000<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    tshark を利用する
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      コマンドラインの tshark を利用したほうが, 操作が早いことに気付く. しかし, Detail をしっかりみるためには GUI 版の WireShark がいい.
    </p>
    
    <p>
      smb でフィルタリンクしたものを吐き出し. これでログが軽くなる.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> tshark -r hoge.pcapng -Y &#8216;smb2&#8217; -w foo.pcapng<br /> [/sourcecode]
    </p>
    
    <p>
      -Y でフィルタをかける. サブ画面でちょっとした grep をするのに便利.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> tshark -r hoge.pcapng -Y &#8216;smb2.cmd==5&#8217;<br /> [/sourcecode]
    </p>
    
    <p>
      エラーがないかなどを素早くチェックする.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> tshark -r hoge.pcapng -Y &#8216;smb2.nt_status > 0&#8217;<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    Special Thanks
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <ul class="org-ul">
      <li>
        <a href="https://troushoo.blog.fc2.com/blog-entry-150.html">Wireshark を用いた SMB のトラブルシューティングに使える 5 つのテクニック</a>
      </li>
    </ul>
  </div>
</div>