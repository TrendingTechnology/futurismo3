---
title: カーソルの任意の位置に音声入力するPythonスクリプト
description: カーソルの任意の位置に音声入力するPythonスクリプトを紹介します。
date: 2018-08-28 22:39:38
author: tsu-nera
type: post
tags:
- Python
- 音声入力
- Google
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1535204887/futurismo/thumbnails/microphone-input-device.jpg
---

こんにちは、天才発明家の [@tsu-nera](https://twitter.com/tsu_nera)です。

今日は、[前回](https://futurismo.biz/speech-recognition-with-python/)の音声入力ネタの続編になります。

カーソルの位置で入力をすることを可能にしました。これは私が考えるに画期的な発明です。

というのもこの機能はGoogleドキュメントには実装されていますが任意の場所で入力をすることは今まで、できませんでした。

では、詳細を説明します。

## speecrecpy

音声認識は3つのスクリプトからなるのですが、今回GitHubにまとめました。

https://github.com/tsu-nera/speechrecpy

- speech-input.py ... 音声入力スクリプト
- speech-input.sh ... 多重実行抑止スクリプト
- speech-watch ... 音声監視スクリプト

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/IVwrCHlYzdY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requirement

- Python 3.x
- 音声入力のOff/Onがスイッチでできるマイク

音声入力のOff/Onがスイッチでできるマイクが必要です。わたしは、アマゾンでこれを買いました。

https://amzn.to/2Lxipjr

## Install

```
$ pip install SpeechRecognition
$ pip install pyperclip
$ pip install pyautogui<iframe width="560" height="315" src="https://www.youtube.com/embed/IVwrCHlYzdY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
$ pip install soundmeter
```

## Usage

音声監視用のスクリプトを起動します。

```
$ ./speech-watch
```

そして、マイクのスイッチを押して喋ります。喋り終わったら、スイッチを切ります。

すると、カーソルの位置に音声で喋ったことが入力されます。

## 技術的詳細

SpeechRecognitionモジュールを使って、音声認識をしています（これは前回の記事で説明したとおり）

マイクのスイッチをトリガにして音声入力を開始したかったのですが、
eventをLinuxのdriverが検知できませんでした。

そのため、soudmeterというモジュールを使って、
音声の有無を検出して音声があるときにスクリプトを起動するということを実現しました。

ただ、これにもスクリプトを連続起動してしまうという弱点がありました。
音声が存在するときに何度も何度も Script を起動してしまうのです。

そこで 連続実行を抑止するスクリプトを書きました。
スクリプトを起動した時にロック ファイルを残すことで実行を抑止するものです。

以上、つのスクリプトを組み合わせることで音声入力を実現しました。
