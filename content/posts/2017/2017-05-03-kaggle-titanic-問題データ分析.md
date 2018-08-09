---
author: admin
categories:
- Python
- 統計
date: 2017-05-03T09:30:46+00:00
dsq_thread_id:
- 5.781895e+09
excerpt: 'Kaggle: Titanic 問題データ分析'
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
- 744
side:
- "y"
tags:
- Kaggle
- Udemy
title: 'Kaggle: Titanic 問題データ分析'
title_view:
- "y"
type: post
url: /archives/=6378
---

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h2 id="はじめに">
        はじめに<a class="anchor-link" href="#はじめに">¶</a>
      </h2>
      
      <p>
        先日、Kaggleのタイタニック問題に挑んで惨憺たる結果を出しました。
      </p>
      
      <ul>
        <li>
          <a href="https://futurismo.biz/archives/6296">Kaggle のタイタニック問題に Keras で挑戦した。前処理が課題だと分かった。 | Futurismo</a>
        </li>
      </ul>
      
      <p>
        データ分析をするスキルが自分にはない。なんとか身につけたいと思っていたところ、<br /> Udemyの講座でKaggleのタイタニック問題を元にデータ分析を行っている講座を発見した。
      </p>
      
      <ul>
        <li>
          <a href="https://www.udemy.com/python-jp/learn/v4/">【世界で5万人が受講】実践 Python データサイエンス | Udemy</a>
        </li>
      </ul>
      
      <p>
        これはいい。まずは、講義にしたがってデータ分析してみたので、これはその講義メモです。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h2 id="目的">
        目的<a class="anchor-link" href="#目的">¶</a>
      </h2>
      
      <p>
        以下について、講義では調べている。
      </p>
      
      <ul>
        <li>
          タイタニック号の乗客はどのような人達だったのか？
        </li>
        <li>
          それぞれの乗客はどのデッキにいたか？また、それは客室の種類とどのような関係にあったか？
        </li>
        <li>
          乗客は主にどこから来たのか？
        </li>
        <li>
          家族連れか、単身者か？
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h2 id="SetUp">
        SetUp<a class="anchor-link" href="#SetUp">¶</a>
      </h2>
      
      <p>
        タイタニック号のデータは下記のURLのtrainからダウンロードできる。
      </p>
      
      <ul>
        <li>
          <a href="https://www.kaggle.com/c/titanic/data?train.csv">https://www.kaggle.com/c/titanic/data?train.csv</a>
        </li>
      </ul>
      
      <p>
        まずは，csvの中身を確認。カラムの意味は <a href="https://www.kaggle.com/c/titanic/data">kaggleのサイト</a> を参照。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [3]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">from</span> <span class="nn">pandas</span> <span class="k">import</span> <span class="n">Series</span><span class="p">,</span> <span class="n">DataFrame</span>
<span class="n">titanic_df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="s1">'train.csv'</span><span class="p">)</span>
<span class="n">titanic_df</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[3]:
        </div>
        
        <div class="output_html rendered_html output_subarea output_execute_result">
          <div>
            <table class="dataframe" border="1">
              <tr style="text-align: right;">
                <th>
                </th>
                
                <th>
                  PassengerId
                </th>
                
                <th>
                  Survived
                </th>
                
                <th>
                  Pclass
                </th>
                
                <th>
                  Name
                </th>
                
                <th>
                  Sex
                </th>
                
                <th>
                  Age
                </th>
                
                <th>
                  SibSp
                </th>
                
                <th>
                  Parch
                </th>
                
                <th>
                  Ticket
                </th>
                
                <th>
                  Fare
                </th>
                
                <th>
                  Cabin
                </th>
                
                <th>
                  Embarked
                </th>
              </tr>
              
              <tr>
                <th>
                </th>
                
                <td>
                  1
                </td>
                
                <td>
                </td>
                
                <td>
                  3
                </td>
                
                <td>
                  Braund, Mr. Owen Harris
                </td>
                
                <td>
                  male
                </td>
                
                <td>
                  22.0
                </td>
                
                <td>
                  1
                </td>
                
                <td>
                </td>
                
                <td>
                  A/5 21171
                </td>
                
                <td>
                  7.2500
                </td>
                
                <td>
                  NaN
                </td>
                
                <td>
                  S
                </td>
              </tr>
              
              <tr>
                <th>
                  1
                </th>
                
                <td>
                  2
                </td>
                
                <td>
                  1
                </td>
                
                <td>
                  1
                </td>
                
                <td>
                  Cumings, Mrs. John Bradley (Florence Briggs Th&#8230;
                </td>
                
                <td>
                  female
                </td>
                
                <td>
                  38.0
                </td>
                
                <td>
                  1
                </td>
                
                <td>
                </td>
                
                <td>
                  PC 17599
                </td>
                
                <td>
                  71.2833
                </td>
                
                <td>
                  C85
                </td>
                
                <td>
                  C
                </td>
              </tr>
              
              <tr>
                <th>
                  2
                </th>
                
                <td>
                  3
                </td>
                
                <td>
                  1
                </td>
                
                <td>
                  3
                </td>
                
                <td>
                  Heikkinen, Miss. Laina
                </td>
                
                <td>
                  female
                </td>
                
                <td>
                  26.0
                </td>
                
                <td>
                </td>
                
                <td>
                </td>
                
                <td>
                  STON/O2. 3101282
                </td>
                
                <td>
                  7.9250
                </td>
                
                <td>
                  NaN
                </td>
                
                <td>
                  S
                </td>
              </tr>
              
              <tr>
                <th>
                  3
                </th>
                
                <td>
                  4
                </td>
                
                <td>
                  1
                </td>
                
                <td>
                  1
                </td>
                
                <td>
                  Futrelle, Mrs. Jacques Heath (Lily May Peel)
                </td>
                
                <td>
                  female
                </td>
                
                <td>
                  35.0
                </td>
                
                <td>
                  1
                </td>
                
                <td>
                </td>
                
                <td>
                  113803
                </td>
                
                <td>
                  53.1000
                </td>
                
                <td>
                  C123
                </td>
                
                <td>
                  S
                </td>
              </tr>
              
              <tr>
                <th>
                  4
                </th>
                
                <td>
                  5
                </td>
                
                <td>
                </td>
                
                <td>
                  3
                </td>
                
                <td>
                  Allen, Mr. William Henry
                </td>
                
                <td>
                  male
                </td>
                
                <td>
                  35.0
                </td>
                
                <td>
                </td>
                
                <td>
                </td>
                
                <td>
                  373450
                </td>
                
                <td>
                  8.0500
                </td>
                
                <td>
                  NaN
                </td>
                
                <td>
                  S
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [4]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">titanic_df</span><span class="o">.</span><span class="n">info</span><span class="p">()</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_subarea output_stream output_stdout output_text">
          <pre>&lt;class 'pandas.core.frame.DataFrame'&gt;
RangeIndex: 891 entries, 0 to 890
Data columns (total 12 columns):
PassengerId    891 non-null int64
Survived       891 non-null int64
Pclass         891 non-null int64
Name           891 non-null object
Sex            891 non-null object
Age            714 non-null float64
SibSp          891 non-null int64
Parch          891 non-null int64
Ticket         891 non-null object
Fare           891 non-null float64
Cabin          204 non-null object
Embarked       889 non-null object
dtypes: float64(2), int64(5), object(5)
memory usage: 83.6+ KB
</pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        train.csvのなかには、891人の乗客のデータが含まれるけれども、AgeやCabinが Nanが多いことがわかる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h2 id="タイタニック号の乗客はどのような人達だったのか">
        タイタニック号の乗客はどのような人達だったのか<a class="anchor-link" href="#タイタニック号の乗客はどのような人達だったのか">¶</a>
      </h2>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        性別に関して、女性、男性の数を調べる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [5]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span>
<span class="o">%</span><span class="k">matplotlib</span> inline
</pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [6]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="s1">'Sex'</span><span class="p">,</span> <span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[6]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7f1942ae6a90&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/d51c9a4dafed2cd880f8d588f220ad72.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        女性の二倍近く男性が多いことがわかる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h3 id="客室のクラスで層別化">
        客室のクラスで層別化<a class="anchor-link" href="#客室のクラスで層別化">¶</a>
      </h3>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [7]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="s1">'Sex'</span><span class="p">,</span> <span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span> <span class="n">hue</span><span class="o">=</span><span class="s1">'Pclass'</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[7]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7f194d251dd8&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/7fb95fc331eefbb698644f3780b2890d.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [8]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="s1">'Pclass'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span><span class="n">hue</span><span class="o">=</span><span class="s1">'Sex'</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[8]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7f193f6ef588&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/6eb2b11a900f4bf0456df8ec822e5e62.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        三等客室の男性が多いことがわかる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h3 id="子供という新しい列を追加">
        子供という新しい列を追加<a class="anchor-link" href="#子供という新しい列を追加">¶</a>
      </h3>
      
      <p>
        子供を優先して助けたということがkaggleのサイトにかかれているので、子供がどのくらいいるかを調べる。ここでは、16歳未満が子供。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [9]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="k">def</span> <span class="nf">male_female_child</span><span class="p">(</span><span class="n">passenger</span><span class="p">):</span>
    <span class="n">age</span><span class="p">,</span><span class="n">sex</span> <span class="o">=</span> <span class="n">passenger</span>
    <span class="k">if</span> <span class="n">age</span> <span class="o">&lt;</span> <span class="mi">16</span><span class="p">:</span>
        <span class="k">return</span> <span class="s1">'child'</span>
    <span class="k">else</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">sex</span>
<span class="n">titanic_df</span><span class="p">[</span><span class="s1">'person'</span><span class="p">]</span> <span class="o">=</span> <span class="n">titanic_df</span><span class="p">[[</span><span class="s1">'Age'</span><span class="p">,</span><span class="s1">'Sex'</span><span class="p">]]</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">male_female_child</span><span class="p">,</span><span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [12]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="s1">'Pclass'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span><span class="n">hue</span><span class="o">=</span><span class="s1">'person'</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[12]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7f19433e22e8&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/5e2fc220fd19b91aba0ba0ab152dc580.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [13]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">titanic_df</span><span class="p">[</span><span class="s1">'person'</span><span class="p">]</span><span class="o">.</span><span class="n">value_counts</span><span class="p">()</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[13]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>male      537
female    271
child      83
Name: person, dtype: int64</pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        1等客室、2客室には子供が少ない。3客室に多い。これで年齢分布が分かった。
      </p>
      
      <p>
        次に、カーネル密度推定で分布を見てみる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [17]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">fig</span> <span class="o">=</span> <span class="n">sns</span><span class="o">.</span><span class="n">FacetGrid</span><span class="p">(</span><span class="n">titanic_df</span><span class="p">,</span> <span class="n">hue</span><span class="o">=</span><span class="s2">"person"</span><span class="p">,</span> <span class="n">aspect</span><span class="o">=</span><span class="mi">4</span><span class="p">)</span>
<span class="n">fig</span><span class="o">.</span><span class="n">map</span><span class="p">(</span><span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">,</span> <span class="s1">'Age'</span><span class="p">,</span> <span class="n">shade</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">oldest</span> <span class="o">=</span> <span class="n">titanic_df</span><span class="p">[</span><span class="s1">'Age'</span><span class="p">]</span><span class="o">.</span><span class="n">max</span><span class="p">()</span>
<span class="n">fig</span><span class="o">.</span><span class="n">set</span><span class="p">(</span><span class="n">xlim</span><span class="o">=</span><span class="p">(</span><span class="mi"></span><span class="p">,</span> <span class="n">oldest</span><span class="p">))</span>
<span class="n">fig</span><span class="o">.</span><span class="n">add_legend</span><span class="p">()</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_subarea output_stream output_stderr output_text">
          <pre>/home/tsu-nera/anaconda3/lib/python3.6/site-packages/statsmodels/nonparametric/kdetools.py:20: VisibleDeprecationWarning: using a non-integer number instead of an integer will result in an error in the future
  y = X[:m/2+1] + np.r_[0,X[m/2+1:],0]*1j
</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[17]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;seaborn.axisgrid.FacetGrid at 0x7f193f213e80&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/8922e58c431d0cc763e62204ea897a07.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [18]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">fig</span> <span class="o">=</span> <span class="n">sns</span><span class="o">.</span><span class="n">FacetGrid</span><span class="p">(</span><span class="n">titanic_df</span><span class="p">,</span> <span class="n">hue</span><span class="o">=</span><span class="s2">"Pclass"</span><span class="p">,</span><span class="n">aspect</span><span class="o">=</span><span class="mi">4</span><span class="p">)</span>
<span class="n">fig</span><span class="o">.</span><span class="n">map</span><span class="p">(</span><span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">,</span><span class="s1">'Age'</span><span class="p">,</span><span class="n">shade</span><span class="o">=</span> <span class="kc">True</span><span class="p">)</span>
<span class="n">oldest</span> <span class="o">=</span> <span class="n">titanic_df</span><span class="p">[</span><span class="s1">'Age'</span><span class="p">]</span><span class="o">.</span><span class="n">max</span><span class="p">()</span>
<span class="n">fig</span><span class="o">.</span><span class="n">set</span><span class="p">(</span><span class="n">xlim</span><span class="o">=</span><span class="p">(</span><span class="mi"></span><span class="p">,</span><span class="n">oldest</span><span class="p">))</span>
<span class="n">fig</span><span class="o">.</span><span class="n">add_legend</span><span class="p">()</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_subarea output_stream output_stderr output_text">
          <pre>/home/tsu-nera/anaconda3/lib/python3.6/site-packages/statsmodels/nonparametric/kdetools.py:20: VisibleDeprecationWarning: using a non-integer number instead of an integer will result in an error in the future
  y = X[:m/2+1] + np.r_[0,X[m/2+1:],0]*1j
</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[18]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;seaborn.axisgrid.FacetGrid at 0x7f193f238208&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/1716019788b55655778ec18831b54e9c.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h2 id="それぞれの乗客はどのデッキにいたか(Cabin)？">
        それぞれの乗客はどのデッキにいたか(Cabin)？<a class="anchor-link" href="#それぞれの乗客はどのデッキにいたか(Cabin)？">¶</a>
      </h2>
      
      <p>
        Cabinは Nanが多いので、これを取り除く。Cabinは頭文字(Cxx, Dxx, Exx など）でレベル別に分けられるので、レベル別に見てみる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [19]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">deck</span> <span class="o">=</span> <span class="n">titanic_df</span><span class="p">[</span><span class="s1">'Cabin'</span><span class="p">]</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>
</pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [23]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">levels</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">level</span> <span class="ow">in</span> <span class="n">deck</span><span class="p">:</span>
    <span class="n">levels</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">level</span><span class="p">[</span><span class="mi"></span><span class="p">])</span>
<span class="n">cabin_df</span> <span class="o">=</span> <span class="n">DataFrame</span><span class="p">(</span><span class="n">levels</span><span class="p">)</span>
<span class="n">cabin_df</span><span class="o">.</span><span class="n">columns</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'Cabin'</span><span class="p">]</span>
<span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="s1">'Cabin'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">cabin_df</span><span class="p">,</span><span class="n">palette</span><span class="o">=</span><span class="s1">'winter_d'</span><span class="p">,</span><span class="n">order</span><span class="o">=</span><span class="nb">sorted</span><span class="p">(</span><span class="nb">set</span><span class="p">(</span><span class="n">levels</span><span class="p">)))</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[23]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7f193f0ce780&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/0bfa7bd5bc987b02fdd1c4af6558cc2b.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        A,B,C,D,E,F,G&#8230; T と T が外れ値となっている（間違ったデータ？？）ので、Tを取り除く。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [24]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">cabin_df</span> <span class="o">=</span> <span class="n">cabin_df</span><span class="p">[</span><span class="n">cabin_df</span><span class="o">.</span><span class="n">Cabin</span> <span class="o">!=</span> <span class="s1">'T'</span><span class="p">]</span>
<span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="s1">'Cabin'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">cabin_df</span><span class="p">,</span><span class="n">palette</span><span class="o">=</span><span class="s1">'summer'</span><span class="p">,</span><span class="n">order</span><span class="o">=</span><span class="nb">sorted</span><span class="p">(</span><span class="nb">set</span><span class="p">(</span><span class="n">cabin_df</span><span class="p">[</span><span class="s1">'Cabin'</span><span class="p">])))</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[24]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7f193f00ecf8&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/c024cc6b97ab2f8b039a9ee8f305f511.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h3 id="乗客はどこから乗ったか？">
        乗客はどこから乗ったか？<a class="anchor-link" href="#乗客はどこから乗ったか？">¶</a>
      </h3>
      
      <p>
        Embarkedのカラムを見る。C,Q,S という値は、それぞれCherbourg, Queenstown, Southhampton。Southhamptonが圧倒的におおいことが分かる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [25]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="s1">'Embarked'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span><span class="n">hue</span><span class="o">=</span><span class="s1">'Pclass'</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[25]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7f193efbff60&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/f7d081bd05719cad80c2bc53cb7f6d4b.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [27]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">titanic_df</span><span class="o">.</span><span class="n">Embarked</span><span class="o">.</span><span class="n">value_counts</span><span class="p">()</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[27]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>S    644
C    168
Q     77
Name: Embarked, dtype: int64</pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        ちなみに自分が小学生のとき、タイタニックの音楽を合奏する機会があって、Southhamptonのマーチをリコーダーで演奏した。
      </p>
      
      <p>
        <a href="https://www.youtube.com/watch?v=fCPC6-6n5Uo"><img src="https://img.youtube.com/vi/fCPC6-6n5Uo/0.jpg" alt="IMAGE ALT TEXT HERE" /></a>
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h2 id="家族連れか、単身者か？">
        家族連れか、単身者か？<a class="anchor-link" href="#家族連れか、単身者か？">¶</a>
      </h2>
      
      <p>
        Aloneのカラムを追加します。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [30]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">titanic_df</span><span class="p">[</span><span class="s1">'Alone'</span><span class="p">]</span> <span class="o">=</span> <span class="n">titanic_df</span><span class="o">.</span><span class="n">Parch</span> <span class="o">+</span> <span class="n">titanic_df</span><span class="o">.</span><span class="n">SibSp</span>
<span class="n">titanic_df</span><span class="p">[</span><span class="s1">'Alone'</span><span class="p">]</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">titanic_df</span><span class="p">[</span><span class="s1">'Alone'</span><span class="p">]</span> <span class="o">&gt;</span><span class="mi"></span><span class="p">]</span> <span class="o">=</span> <span class="s1">'With Family'</span>
<span class="n">titanic_df</span><span class="p">[</span><span class="s1">'Alone'</span><span class="p">]</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">titanic_df</span><span class="p">[</span><span class="s1">'Alone'</span><span class="p">]</span> <span class="o">==</span> <span class="mi"></span><span class="p">]</span> <span class="o">=</span> <span class="s1">'Alone'</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_subarea output_stream output_stderr output_text">
          <pre>/home/tsu-nera/anaconda3/lib/python3.6/site-packages/pandas/core/indexing.py:141: SettingWithCopyWarning: 
A value is trying to be set on a copy of a slice from a DataFrame

See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy
  self._setitem_with_indexer(indexer, value)
</pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [31]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="s1">'Alone'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span><span class="n">palette</span><span class="o">=</span><span class="s1">'Blues'</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[31]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7f193ef73eb8&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/94b2a136ff9bd372b77372348e344399.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        単身者がおおい。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [32]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">titanic_df</span><span class="p">[</span><span class="s2">"Survivor"</span><span class="p">]</span> <span class="o">=</span> <span class="n">titanic_df</span><span class="o">.</span><span class="n">Survived</span><span class="o">.</span><span class="n">map</span><span class="p">({</span><span class="mi"></span><span class="p">:</span> <span class="s2">"no"</span><span class="p">,</span> <span class="mi">1</span><span class="p">:</span> <span class="s2">"yes"</span><span class="p">})</span>
<span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="s1">'Survivor'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span><span class="n">palette</span><span class="o">=</span><span class="s1">'Set1'</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[32]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7f193eef0b70&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/89f48756a8c20b39fbb7dd564e0d8807.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        大勢の人がなくなっていることがわかる。客室の種類は関係があるのかをみると、3等客室が死亡者が多いことがわかる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [33]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">sns</span><span class="o">.</span><span class="n">factorplot</span><span class="p">(</span><span class="s1">'Pclass'</span><span class="p">,</span><span class="s1">'Survived'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span> <span class="n">order</span><span class="o">=</span><span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">])</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[33]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;seaborn.axisgrid.FacetGrid at 0x7f193f082e10&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/a584fc48dd2faee368d63127ee2d1451.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        「女性と子供を先に」というポリシーが本当に実施されていたかをみる。グラフを見ると、女性や子供の生存率が高い。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [34]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">sns</span><span class="o">.</span><span class="n">factorplot</span><span class="p">(</span><span class="s1">'Pclass'</span><span class="p">,</span><span class="s1">'Survived'</span><span class="p">,</span><span class="n">hue</span><span class="o">=</span><span class="s1">'person'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span> <span class="n">order</span><span class="o">=</span><span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">],</span> <span class="n">aspect</span><span class="o">=</span><span class="mi">2</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[34]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;seaborn.axisgrid.FacetGrid at 0x7f193ed63f98&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/4d46ccd0c0c9cdc3a67c660cb14b887b.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        生存率と年齢の、クラスの関係を見てみると、年齢が高いと生存率が下がる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [36]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">generations</span><span class="o">=</span><span class="p">[</span><span class="mi">10</span><span class="p">,</span><span class="mi">20</span><span class="p">,</span><span class="mi">40</span><span class="p">,</span><span class="mi">60</span><span class="p">,</span><span class="mi">80</span><span class="p">]</span>
<span class="n">sns</span><span class="o">.</span><span class="n">lmplot</span><span class="p">(</span><span class="s1">'Age'</span><span class="p">,</span><span class="s1">'Survived'</span><span class="p">,</span><span class="n">hue</span><span class="o">=</span><span class="s1">'Pclass'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span><span class="n">palette</span><span class="o">=</span><span class="s1">'winter'</span><span class="p">,</span>
           <span class="n">x_bins</span><span class="o">=</span><span class="n">generations</span><span class="p">,</span><span class="n">hue_order</span><span class="o">=</span><span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">])</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[36]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;seaborn.axisgrid.FacetGrid at 0x7f193f0ddac8&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/a81c169dfff765508baed3e42d6f04f8.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="prompt input_prompt">
  </div>
  
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <p>
        性別と年齢の関係もみる。
      </p>
    </div>
  </div>
</div>

<div class="cell border-box-sizing code_cell rendered">
  <div class="input">
    <div class="prompt input_prompt">
      In [37]:
    </div>
    
    <div class="inner_cell">
      <div class="input_area">
        <div class=" highlight hl-ipython3">
          <pre><span class="n">sns</span><span class="o">.</span><span class="n">lmplot</span><span class="p">(</span><span class="s1">'Age'</span><span class="p">,</span><span class="s1">'Survived'</span><span class="p">,</span><span class="n">hue</span><span class="o">=</span><span class="s1">'Sex'</span><span class="p">,</span><span class="n">data</span><span class="o">=</span><span class="n">titanic_df</span><span class="p">,</span><span class="n">palette</span><span class="o">=</span><span class="s1">'winter'</span><span class="p">,</span><span class="n">x_bins</span><span class="o">=</span><span class="n">generations</span><span class="p">)</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="output_wrapper">
    <div class="output">
      <div class="output_area">
        <div class="prompt output_prompt">
          Out[37]:
        </div>
        
        <div class="output_text output_subarea output_execute_result">
          <pre>&lt;seaborn.axisgrid.FacetGrid at 0x7f193ecdac88&gt;</pre>
        </div>
      </div>
      
      <div class="output_area">
        <div class="prompt">
        </div>
        
        <div class="output_png output_subarea ">
          <img src="https://futurismo.biz/wp-content/uploads/fb35b6ecad305e6d0e026ca7ec9bb145.png" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="cell border-box-sizing text_cell rendered">
  <div class="inner_cell">
    <div class="text_cell_render border-box-sizing rendered_html">
      <h2 id="まとめ">
        まとめ<a class="anchor-link" href="#まとめ">¶</a>
      </h2>
      
      <ul>
        <li>
          男性が女性よりも多い。
        </li>
        <li>
          女性や子供は男性よりも生存率が高い。(-> personがfactor候補)
        </li>
        <li>
          サウサンプトンからの乗客が多い。
        </li>
        <li>
          高齢者ほど生存率が低い(->Ageがfactor候補）
        </li>
        <li>
          クラスが高いほど生存率が高い(-> PClassがfactor候補）
        </li>
        <li>
          単身者が多い
        </li>
      </ul>
      
      <h2>
        以上を踏まえてKaggle再挑戦
      </h2>
      
      <p>
        以上から、前回の特徴量を見直して、Kaggle再挑戦しました。
      </p>
      
      <ul>
        <li>
          <a href="https://github.com/tsu-nera/kaggle/blob/master/titanic/titanic-keras-nn2.ipynb">https://github.com/tsu-nera/kaggle/blob/master/titanic/titanic-keras-nn2.ipynb</a>
        </li>
      </ul>
      
      <p>
        その結果は、5759位でした。
      </p>
      
      <p>
        You advanced 305 places on the leaderboard!
      </p>
      
      <p>
        Your submission scored 0.75598, which is an improvement of your previous score of 0.74163. Great job!
      </p>
      
      <p>
        300人抜きしたけれども、まだまだ改善が必要です。
      </p>
    </div>
  </div>
</div>