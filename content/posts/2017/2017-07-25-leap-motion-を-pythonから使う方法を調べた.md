---
author: admin
categories:
- Python
- 技術メモ
date: 2017-07-25T06:51:42+00:00
dsq_thread_id:
- 6.0138383e+09
excerpt: Leap Motion を Pythonから使う方法を調べた
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
- LeapMotion
title: Leap Motion を Pythonから使う方法を調べた
title_view:
- "y"
type: post
url: /archives/=6658
---

Leap Motion を Pythonから使う方法を調べた。

### 環境 {#-}

  * Ubuntu 16.04, 64bit
  * Leap Motion SDK 2.3.1
  * Python 2.7.13

Pythonは 2系でしか動かないようだ。私はAnacondaを利用して、2系の環境を構築した。

## 必要なファイルを揃える {#-}

まずは、[前回の記事][1]に従って、Leap Motion SDKをインストールする。

Linux用のtarファイルを解凍すると、LeapSDKというフォルダがあるので、そこに移動。

Leap Motionを Pythonから操作するためには、以下の3ファイルが必要。

  * lib/Leap.py
  * lib/x64/libLeap.so
  * lib/x64/LeapPython.so

(64bitはx64/32bitはx86フォルダ)

作業用ディレクトリを作成して、そこに3ファイルをコピーする。

<pre><code class="lang-bash">mkdir -p ~/repo/leap
cp lib/Leap.py ~/repo/leap
cp lib/x64/libLeap.so ~/repo/leap
cp lib/x64/LeapPython.so ~/repo/leap
</code></pre>

LeapSDKの中にSample/Sample.pyがあるので、まずはそれを作業用ディレクトリにコピーして動かしてみる。数値がたくさん現れれば成功。

<pre><code class="lang-bash">cp samples/Sample.py ~/repo/leap/
cd ~/repo/leap/
python Sample.py
</code></pre>

## 基本スニペット {#-}

Leap Motionのプログラムの書き方は、Listener型とPoling型がある。

Listener型は、Leap Motionのフレームワークで Loopがある場合、
  
Polingは Leap Motion以外のフレームワークで Loopがある場合に使う。

サンプルコードに従って、Listener型の基本スニペットを書く。

<pre><code class="lang-python">import Leap, sys

class SampleListener(Leap.Listener):
    def on_frame(self, controller):
        # Get the most recent frame and report some basic information
        frame = controller.frame()
        print "Frame id: %d, timestamp: %d" % (frame.id, frame.timestamp)

def main():
    # Create a sample listener and controller
    listener = SampleListener()
    controller = Leap.Controller()

    # Have the sample listener receive events from the controller
    controller.add_listener(listener)

    # Keep this process running until Enter is pressed
    print "Press Enter to quit..."
    try:
        sys.stdin.readline()
    except KeyboardInterrupt:
        pass
    finally:
        # Remove the sample listener when done
        controller.remove_listener(listener)


if __name__ == "__main__":
    main()
</code></pre>

main関数は変更せずに、on_frame()メソッドの中身だけ修正すれば良さそう。

frameに現在の情報がすべて含まれているので、そこからいろいろ取り出す。

## 手の座標を取得 {#-}

まずは、手の座標を取得してみる。

  * [Hands — Leap Motion Python SDK v2.3 documentation][2]

on_frameの中に以下を書き込む。

<pre><code class="lang-python">    hands = frame.hands
    hand = hands[0] # first hand
    print(hand.palm_position)
</code></pre>

palm_positionで手のひらの中心の座標が手に入る。実験してみた結果、手の座標が、(x, y, z)のタプルで取得できた。

    (41.2968, 119.34, -71.5027)
    (40.8835, 122.556, -71.095)
    (38.7474, 126.202, -69.3811)
    (36.5977, 130.135, -66.6525)
    (34.1101, 134.531, -63.37)
    (31.7521, 137.867, -59.3138)
    (28.9372, 141.859, -54.9556)
    (27.5701, 145.658, -50.0342)
    (25.3786, 149.093, -45.6736)
    (23.8103, 152.436, -40.7532)
    (21.8484, 156.879, -36.0352)
    

![][3]

## ジェスチャーを検出する {#-}

ジェスチャーは4種類ある。今回は、Key Tapというジェスチャを試す。

  * [Gestures — Leap Motion Python SDK v2.3 documentation][4]

ジェスチャーの検出には、事前の登録が必要。on_connect() でジェスチャーを登録する。

<pre><code class="lang-python">def on_connect(self, controller):
    controller.enable_gesture(Leap.Gesture.TYPE_KEY_TAP);
</code></pre>

on_frameに以下を追加。

<pre><code class="lang-python">for gesture in frame.gestures():
   if gesture.type == Leap.Gesture.TYPE_KEY_TAP:
        print "  Key Tap id:", gesture.id
</code></pre>

ジェスチャーを以下のようにすると、反応する。

![][5]

    Key Tap id: 1
    Key Tap id: 2
    Key Tap id: 3
    Key Tap id: 4
    

とりあえず、今日はここまで。

 [1]: https://futurismo.biz/archives/6655
 [2]: https://developer.leapmotion.com/documentation/v2/python/devguide/Leap_Hand.html
 [3]: https://di4564baj7skl.cloudfront.net/documentation/v2/images/Leap_Axes.png
 [4]: https://developer.leapmotion.com/documentation/v2/python/devguide/Leap_Gestures.html#id13
 [5]: https://di4564baj7skl.cloudfront.net/documentation/v2/images/Leap_Gesture_Tap.png