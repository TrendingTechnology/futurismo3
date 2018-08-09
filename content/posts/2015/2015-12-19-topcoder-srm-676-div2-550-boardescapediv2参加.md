---
author: admin
categories:
- アルゴリズム
date: 2015-12-19T04:57:00+00:00
dsq_thread_id:
- 4.416396e+09
pvc_views:
- 1084
tags:
- TopCoder
title: TopCoder SRM 676 Div2 550 BoardEscapeDiv2(参加)
type: post
url: /archives/=5537
---

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    問題
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    <ul class="org-ul">
      <li>
        <a href="https://community.topcoder.com/stat?c=problem_statement&pm=13299">https://community.topcoder.com/stat?c=problem_statement&pm=13299</a>
      </li>
    </ul>
    
    <p>
      アリスとボブは、r行およびc列のグリッドに分割された矩形ボードを持っています。 グリッドは、String []型sで記述されています。 Sの各文字は、一つのセルを表します。cellには4つのタイプがあります。
    </p>
    
    <ul class="org-ul">
      <li>
        &#8216;E&#8217;は終了を表しています。任意の数の終了、おそらくゼロがあるかもしれません。
      </li>
      <li>
        &#8216;T&#8217;は正方形は単一のトークンが含まれていることを意味します。最初はボード全体に正確に一つのトークンが存在することになります。
      </li>
      <li>
        &#8216;＃&#8217;は、障害物を表します。
      </li>
      <li>
        &#8216;。&#8217;空のセルを表します。
      </li>
    </ul>
    
    <p>
      アリスとボブはこのボード上のゲームをプレイします。 ゲームはintkによってパラメータ化されます。トークンは、最初にその上に数kを持っています。 プレイヤーはアリスから始まる、ターンを交互にかかります。プレイヤーのターンは、以下のステップで構成されています。
    </p>
    
    <ul class="org-ul">
      <li>
        プレイヤーは、下、左、または右のトークン1平方を上に移動します。トークンは、ボードの端に行くことができない、それが障害物をcellに入力することはできません。
      </li>
      <li>
        このトークンが出口にある場合、それはボードから消えます。
      </li>
      <li>
        それ以外の場合は、トークンの数から1を引きます。トークンの数がゼロの場合、ボードから取り外します。
      </li>
    </ul>
    
    <p>
      行動を起こすことができない最初のプレーヤーがゲームを失います。 （すでにボードを去ったとき、トークンにもこだわっているときに発生します。）
    </p>
    
    <p>
      アリスとボブの両方を最適にプレイすると仮定すると、あなたはString[]型のを与えられ、intkは、ゲームの勝者を計算します。 当選者の名前を返します：「アリス」または「ボブ」のいずれか。戻り値は、大文字と小文字が区別されることに注意してください。
    </p>
  </div>
</div>

<div id="outline-container-orgheadline2" class="outline-2">
  <h2 id="orgheadline2">
    方針
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline2">
    <p>
      プレイヤーが2人いて、お互いに最適な戦略を取ったとき勝つのはどちらか、 みたいな問題は、WL-Algorithmsというものを利用して解くらしい.
    </p>
    
    <p>
      [sourcecode language=&#8221;cpp&#8221; title=&#8221;&#8221; ]<br /> boolean isWinning(State pos){<br /> State[] nextStates = { posから到達できる全ての次の状態 };<br /> for(State s : nextStates){<br /> if(!isWinning(s)) return true;<br /> }<br /> return false;<br /> }<br /> [/sourcecode]
    </p>
    
    <ul class="org-ul">
      <li>
        相手を必ず負けさせるような手が存在するなら現在の位置では勝ち決定。
      </li>
      <li>
        そのような手がないないのであれば負け。
      </li>
    </ul>
    
    <p>
      参考リンクをはっておく. あとで勉強しよう.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://d.hatena.ne.jp/nanikaka/20120524/1337797626">grundy数を習得したかった &#8211; nanikakaのAOJ航海日誌</a>
      </li>
      <li>
        <a href="https://www.topcoder.com/community/data-science/data-science-tutorials/algorithm-games/">https://www.topcoder.com/community/data-science/data-science-tutorials/algorithm-games/</a>
      </li>
    </ul>
    
    <p>
      今回は、このアルゴリズムにメモ化再帰を適用した.
    </p>
  </div>
</div>

<div id="outline-container-orgheadline3" class="outline-2">
  <h2 id="orgheadline3">
    解答
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline3">
    [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> MAXN = 200</p> 
    
    <p>
      vx = [1, -1, 0, 0]<br /> vy = [0, 0, 1, -1]<br /> memo = [[[-1 for i in range(MAXN)] for j in range(MAXN)] for k in range(MAXN)]
    </p>
    
    <p>
      class BoardEscapeDiv2:<br /> def isWinning(self, s, x, y, move):<br /> n = len(s)<br /> m = len(s[0])
    </p>
    
    <p>
      if move == 0: return False<br /> if s[x][y] == &#8216;E&#8217;: return False<br /> if memo[x][y][move] != -1: return memo[x][y][move]
    </p>
    
    <p>
      for i in range(4):<br /> nx = x + vx[i]<br /> ny = y + vy[i]<br /> if nx < 0 or ny < 0 or nx >= n or ny >= m or s[nx][ny] == &#8216;#&#8217;:<br /> continue<br /> if not self.isWinning(s, nx, ny, move &#8211; 1):<br /> memo[x][y][move] = True<br /> return True
    </p>
    
    <p>
      memo[x][y][move] = False<br /> return False
    </p>
    
    <p>
      def findWinner(self, s, k):<br /> n = len(s)<br /> m = len(s[0])
    </p>
    
    <p>
      for i in range(n):<br /> for j in range(m):<br /> if s[i][j] == &#8216;T&#8217;:<br /> x = i<br /> y = j
    </p>
    
    <p>
      return &#8220;Alice&#8221; if self.isWinning(s, x, y, k) else &#8220;Bob&#8221;<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-orgheadline4" class="outline-2">
  <h2 id="orgheadline4">
    おわりに
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline4">
    <p>
      本番では解けなかった. こういう問題をさらりととけないと Div1には上がれないのか&#x2026; 道は遠いな.
    </p>
  </div>
</div>