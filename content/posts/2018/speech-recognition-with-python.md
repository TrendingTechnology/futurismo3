---
title: Pythonで音声入力に入門しよう(SpeechRecognition)
description: SpeechRecognitionライブラリをつかったPythonによる音声入力の紹介をします
date: 2018-08-25 22:20:27
author: tsu-nera
type: post
tags:
- Python
- 音声入力
- Google
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1535204887/futurismo/thumbnails/microphone-input-device.jpg
---

音声入力は、キーボードの入力よりも高速に入力ができます。

ついこの前までは、対した精度ではなく使い物になりませんでした。
しかし、ここ数年でびっくりするほど精度がよくなり、実用の域に達していることを知っていますか？

今回は、音声入力をPythonをつかってわずか7行で実現する方法を紹介します。

## SpeechRecogintion

SpeechRecognitionは、さまざまな音声認識エンジンをサポートしているPythonモジュールです。

- https://github.com/Uberi/speech_recognition

次の音声エンジンをサポートしています。

- CMU Sphinx （works offline）
- Google Speech Recognition
- Google Cloud Speech API
- Wit.ai
- Microsoft Bing Voice Recognition
- Houndify API
- IBM Speech to Text
- Snowboy Hotword Detection （works offline）

今回は、無料で使える`Google Speech Recognition`をつかってみます。

## ツールのインストール

Ubuntu環境でのインストールについて説明します。 
マイクロホンからの入力のために、PyAudioも一緒に入れます。

```bash
# モジュールのインストール
$ pip install SpeechRecognition

# マイクロホンからの入力に必要
$ sudo apt-get install portaudio19-dev
$ sudo apt-get install python-pyaudio python3-pyaudio
$ pip install pyaudio
```

ツールがインストールできたかどうかは、次のコマンドで確認できます。

```
python -m speech_recognition
```

何かしゃべってみましょう（英語で）。認識できれば成功です。

## わずか7行のスクリプト

次が音声入力のためのスクリプトです。

```python
import speech_recognition as sr

r = sr.Recognizer()
mic = sr.Microphone()

with mic as source:
    r.adjust_for_ambient_noise(source)
    audio = r.listen(source)

print(r.recognize_google(audio, language='ja-JP'))
```

次の３行で、音声認識に必要なオブジェクトを生成します。

```python
import speech_recognition as sr
r = sr.Recognizer()
mic = sr.Microphone()
```

次の3行で、音声をlistenします。`adjust_for_ambient_noise`は雑音対策のおまじないです。

```python
with mic as source:
    r.adjust_for_ambient_noise(source)
    audio = r.listen(source)
```

`r.recognize_google`で、GoogleのWebサービスに問い合わせて、音声情報をテキストに変換します。

## 結果

簡単ですね、ワクワクしますね。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">Pythonで音声認識のスクリプトを書きました！！ <a href="https://t.co/CzjE0oJ4Il">pic.twitter.com/CzjE0oJ4Il</a></p>&mdash; 炎のtsu-nera🔥 (@tsu_nera) <a href="https://twitter.com/tsu_nera/status/1033334079557644288?ref_src=twsrc%5Etfw">2018年8月25日</a></blockquote>

## 参考

- [Uberi/speech\_recognition: Speech recognition module for Python, supporting several engines and APIs, online and offline\.](https://github.com/Uberi/speech_recognition)
