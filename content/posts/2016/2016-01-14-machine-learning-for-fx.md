---
author: admin
categories:
- 技術メモ
date: 2016-01-14T13:34:00+00:00
dsq_thread_id:
- 4.490336e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 1895
side:
- "y"
title: Machine Learning for Fx
title_view:
- "y"
type: post
url: /archives/=5791
---

しばらく放置していた FX システムトレードに新しくストラテジを追加. 

<ul class="org-ul">
  <li>
    <a href="https://github.com/tsu-nera/oanda-forex-study">https://github.com/tsu-nera/oanda-forex-study</a>
  </li>
</ul>

Machine Learning for Trading の講義を聞いて、 以下の 2 つが紹介されていたので実装してみた. 

<ul class="org-ul">
  <li>
    <a href="https://futurismo.biz/archives/5636">Udacity で Machine Learning for Trading の講義をきいた | Futurismo</a> <ul class="org-ul">
      <li>
        線形回帰
      </li>
      <li>
        K 近傍法
      </li>
    </ul>
  </li>
</ul>

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    線形回帰
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    <p>
      statsmodels ライブラリを使う.
    </p>
    
    <p>
      [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221;]<br /> class OLS(Strategy):<br /> def __init__(self, status):<br /> super(OLS, self).__init__(status)
    </p>
    
    <p>
      self.sma_ols_ts = pd.DataFrame()<br /> self.mean_for_ols_period = 100<br /> self.ols_period = 20
    </p>
    
    <p>
      self.a = 0<br /> self.b = 0<br /> self.pre_b = 0
    </p>
    
    <p>
      def calc_ols(self, timeseries, event):<br /> # データをならすために平均をとる.<br /> mean_for_ols = timeseries.get_latest_ts_as_df(<br /> self.mean_for_ols_period).mean()[0]<br /> self.sma_ols_ts.loc[event.time, event.instrument] = mean_for_ols
    </p>
    
    <p>
      x = range(self.ols_period)<br /> y = np.asarray(<br /> self.sma_ols_ts.tail(self.ols_period)[event.instrument])
    </p>
    
    <p>
      if len(y) < len(x):<br /> return
    </p>
    
    <p>
      # いい感じの線分にするために、大きな数をかける<br /> results = sm.OLS(y * 1000000, sm.add_constant(x), prepend=True).fit()<br /> self.pre_b = self.b<br /> self.a, self.b = results.params
    </p>
    
    <p>
      # print(str(self.a) + ", " + str(self.b))
    </p>
    
    <p>
      def ols_buy_condition(self):<br /> # 傾きが xx 以上のときに buy する<br /> return self.b > 1.5
    </p>
    
    <p>
      def ols_sell_condition(self):<br /> # 傾きが-xx 以上のときに sell する<br /> return self.b < -1.5
    </p>
    
    <p>
      def ols_close_buy_condition(self):<br /> # 傾きがひっくり返ったときに終了<br /> return self.pre_b >= 0 and self.b < 0
    </p>
    
    <p>
      def ols_close_sell_condition(self):<br /> # 傾きがひっくり返ったときに終了<br /> return self.pre_b <= 0 and self.b > 0
    </p>
    
    <p>
      def cleanup_data(self):<br /> if len(self.sma_ols_ts) > self.ols_period:<br /> self.sma_ols_ts.drop(self.sma_ols_ts.head(1).index)<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-orgheadline2" class="outline-2">
  <h2 id="orgheadline2">
    K 近傍法
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline2">
    <p>
      実装してみたものの、バックテストをしてもうまく動いているようには見えない.
    </p>
    
    <p>
      なにか、バグっているっぽい.
    </p>
    
    <p>
      [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221;]<br /> class KNN(Strategy):<br /> def __init__(self, status):<br /> Strategy.__init__(self, status)
    </p>
    
    <p>
      self.knn_train_period = 100<br /> self.knn_pred_period = 100<br /> self.knn_neighbors = 10<br /> self.predict = 0<br /> self.now = 0<br /> self.beta = 0<br /> self.knn_ts = pd.DataFrame()
    </p>
    
    <p>
      def calc_knn(self, timeseries, event):
    </p>
    
    <p>
      x = [[i] for i in range(self.knn_train_period)]<br /> y = timeseries.get_latest_ts_as_array(self.knn_train_period, event)
    </p>
    
    <p>
      if len(y) < len(x):<br /> return
    </p>
    
    <p>
      neigh = KNeighborsRegressor(n_neighbors=self.knn_neighbors)<br /> neigh.fit(x, y)
    </p>
    
    <p>
      self.now = event.bid<br /> self.predict = neigh.predict(<br /> self.knn_train_period + self.knn_pred_period)
    </p>
    
    <p>
      if self.status["is_sim"]:<br /> self.knn_ts.loc[event.time, event.instrument] = self.predict
    </p>
    
    <p>
      self.beta = self.predict &#8211; self.now
    </p>
    
    <p>
      def knn_buy_condition(self):<br /> return self.beta > 0.0001
    </p>
    
    <p>
      def knn_sell_condition(self):<br /> return self.beta < -0.0001
    </p>
    
    <p>
      def knn_close_buy_condition(self):<br /> return self.beta <= 0
    </p>
    
    <p>
      def knn_close_sell_condition(self):<br /> return self.beta >= 0<br /> [/sourcecode]
    </p>
  </div>
</div>