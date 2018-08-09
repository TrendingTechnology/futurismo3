---
author: admin
categories:
- Python
date: 2017-06-25T13:47:00+00:00
dsq_thread_id:
- 5.9409526e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 410
side:
- "y"
tags:
- mindstorms
title: LEGO Mindstorms で GyroBoy を組み立てた
title_view:
- "y"
type: post
url: /archives/=6576
---

LEGO MindStorms EV3 を買ったので、まずは GyroBoy を組み立ててみた。

# 動かしてみる

早速、動かしてみたい！

倒立振子をするロポットの作り方は以下のチュートリアルに乗っている。
-   [Tutorial: Building BALANC3R - Robotsquare](https://robotsquare.com/2014/06/23/tutorial-building-balanc3r/)

バランスをとりながら倒立するロポットは 2 種類あるみたい。
-   BALANCE3R
-   GyroBoy

チュートリアルでは BALANC3R の説明をしているけれども、
BALANCE3R をつくれるのは、LEGO MindStorms Home Edition なので、
私は、GyroBoy を作ることにした（わたしのは Education Edition)

組み立て方は以下のリンクから PDF がダウンロードできる。

-   <https://robotsquare.com/wp-content/uploads/2013/10/45544_gyroboy.pdf>

出来上がったのは以下のロボット。かっこいい！組み立ての要領が悪く 5 時間かかった。

![img](./../img/IMG_2200R.jpg)

# Python で倒立振子する

ev3dev-lang-python には、Balancer が提供さている。さすが。

開発の経緯
-   [Implement BALANC3R · Issue #130 · rhempel/ev3dev-lang-python](https://github.com/rhempel/ev3dev-lang-python/issues/130)

参考になったコード
-   [segway/segway.py at master · laurensvalk/segway](https://github.com/laurensvalk/segway/blob/master/ev3/ev3dev/python/segway.py)

ev3dev-lang-python にまーじされたコード
-   <https://github.com/rhempel/ev3dev-lang-python/blob/d0625b5b1e1fdcdd69b7fa390695613a81191736/demo/BALANC3R>

    #!/usr/bin/env python3
    
    import logging
    from ev3dev.GyroBalancer import GyroBalancer
    
    
    class BALANC3R(GyroBalancer):
        def __init__(self):
            GyroBalancer.__init__(self,
                                  gainGyroAngle=1156,
                                  gainGyroRate=146,
                                  gainMotorAngle=7,
                                  gainMotorAngularSpeed=9,
                                  gainMotorAngleErrorAccumulated=3)
    
    
    if __name__ == '__main__':
        logging.basicConfig(level=logging.DEBUG,
                            format='%(asctime)s %(levelname)5s: %(message)s')
        log = logging.getLogger(__name__)
    
        log.info("Starting BALANC3R")
        robot = BALANC3R()
        robot.main()
    log.info("Exiting BALANC3R")

これを実施すると、RemoteControl が定義されていないということで、エラーする

LEGO MindStorms は リモコンで制御するためのセンサーがあるのだけれども、
教育版にはリモコンセンサはついていない。なので、以下のソースをいじって REMOTE CONTROL にかかわる部分を全部削除した！

-   <https://github.com/rhempel/ev3dev-lang-python/blob/eca9cdbd4c516f1729cbb08cdf7438525e433383/ev3dev/GyroBalancer.py>

さあこれでどうだろう・・・立ち上がった！うれしい。

https://www.youtube.com/embed/7Sb4aqrfy3Y?ecver=1
