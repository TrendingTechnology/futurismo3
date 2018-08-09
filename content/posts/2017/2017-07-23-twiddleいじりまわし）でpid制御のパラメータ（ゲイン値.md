---
author: admin
categories:
- Python
date: 2017-07-23T13:55:10+00:00
dsq_thread_id:
- 6.0094126e+09
excerpt: Twiddle(いじりまわし）でPID制御のパラメータ（ゲイン値）を求める
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
- 350
side:
- "y"
tags:
- 制御工学
title: Twiddle(いじりまわし）でPID制御のパラメータ（ゲイン値）を求める
title_view:
- "y"
type: post
url: /archives/=6651
---

## はじめに {#-}

前回の続き。

  * [Afrel楕円コースの軌道をロボットカーでPID制御を使ってシミュレートしてみた | Futurismo][1]

PID制御での、疑問点は、どうやってP,I,Dのゲイン値を求めるかということだ。

これについて、twiddle(いじり回し)アルゴリズムというのがあり、PIDのゲイン値の最適解が簡単に求まるらしい。

日本語の情報はおろか、英語の情報もなく、あるのは、AI for Roboticsの Forumの投稿記事くらいなので、どっからでてきたアルゴリズムなのかわからないけれども、スラン先生曰く、これは簡単に実装できて、とても強力、だそうだ。

## アルゴリズム {#-}

  * 講義動画

[https://www.youtube.com/embed/2uQ2BSzDvXs]

  * スラン先生の板書。

![][2]

ちょっと板書が汚いので、清書。

  * p = [0, 0, 0], dp = [1, 1, 1] で初期化する。
  * シミュレーションを実行して、best_error を求める。
  * while: sum(dp) > (しきい値) 
      * for i in (パラメータ数) 
          * p[i] += dp[i]
          * シミュレーションを実行して、error を求める。
          * if error が best_error よりも小さい 
              * best_error = error
              * dp[i] = dp[i] * 1.1
          * else 
              * p[i] = p[i] &#8211; 2*dp[i]
              * シミュレーションを実行して error を求める。
              * if error が best_errorよりも小さい 
                  * best_error = error
                  * dp[i] = dp[i] * 1.0
              * else 
                  * p[i] = p[i] + dp[i]
                  * d[i] = d[i] * 0.9

## 実装 {#-}

前回と同じ、Afrel 楕円コースでのPID制御を用いた軌道走行を考える。

 [1]: https://futurismo.biz/archives/6637
 [2]: https://lh3.googleusercontent.com/SooU5EctRbquT9dv9Ei4hSGtRURu_-GhuukBNezh4Hfsz2RjymSF4AaZNV0sJrE7FAVLM6USP0iD9aKw9dVSrw2NJIlT133As7yyfJlcNy8yuIkgUZgA9JjVocSwT9ivVxencf_Q8r69H79Aeg3ErqZ-fSQyuHT-Jb91bTvxxy7gOYy2XyeAWfMxfxUqqwV0QVaE4q2yZ8gwQYBsYOuE7o1kXWBV0TWyNHP-BFKaGxNsOYk1Ln-sUVc0RfhZQQ4rADl_NuQxtrm_40KHegdVerbz4cpe0JbELoE64W53TKDx55nDrJMu8weSMvFUKmo9577MIf5xKvx5OhBzEc8mhROcie79GfZSHEt1zMcNqOXXAmcYXj6wwKGeW8DF3R90ipnkDhtkbqMuL17J7N9P5SlR6tWu-jwcqSIRz093prZCHo76gEhtHAXki_tiXzys6rOMwjfzp56Q_VmBW9-brOueMtibxXZJbUzLJmkjGkQYtVX3mGvxwUS4bQ_jfCUWwOuCQ3ud47_vcJrv5G_WZR1i6jLmS-L3qBGKXzz-D6JHdUfrtZIH4o3qy-jRsgPiCptg6306mkQY1rMVYirolFhFTZSmHm9aKcAB4tQ52WutcR6a30-L5Pyo=w791-h405-no