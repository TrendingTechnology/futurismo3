---
author: admin
categories:
- Linux
- 機械学習
date: 2018-01-06T12:21:51+00:00
dsq_thread_id:
- 6.3952563e+09
excerpt: Ubuntu16.04にCUDAとcuDNN入れるまでの設定メモ ~ GPU版xgboost導入まで
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
- 206
side:
- "y"
tags:
- Ubuntu
title: Ubuntu16.04にCUDAとcuDNN入れるまでの設定メモ ~ GPU版xgboost導入まで
title_view:
- "y"
type: post
url: /archives/=6864
---

## はじめに {#-}

NVIDIAのGPUつきのパソコンを購入したので、セットアップメモです。

xgboostをGPUで動かすところを最終目標とします。

### 環境 {#-}

  * Ubuntu 16.04 LTS
  * CUDA 9.1
  * cuDNN 7.0.5
  * Python 3.6
  * Anaconda 3.5
  * xgboost

## NVIDIA GPU環境に必要なツール {#nvidia-gpu-}

なにしろGPUを購入してみたものの、無知なもので、まずはどういう仕組みで動かせるのか調べることにした。NVIDIA GPUを動かすためには以下の２つが必要らしい。

  * NVIDIA CUDA Toolkit ・・・ NVIDIA ドライバーと開発環境
  * cuDNN・・・ディープ・ニューラル・ネットワーク（DNN）ライブラリ

## いきなりDockerという手もあるが {#-docker-}

いろいろ調べると、サクッとまるっとこれらをインストールする簡単な方法があった。それが、Dockerだ。

nvidia-dockerという Dockerのラッパーツールがある。これを利用すると、以下の引用図のようなアーキテクチャでコンテナを動作させることができる。

![][1]

dockerをつかうことのいいところは、ディープラーニング用ライブラリごとに環境を用意できるところ。たとえば、Tensorflow, keras, pytorchの3つを使いたい場合、各ツールでサポートしているcuda/cudnnが違うと使えない。dockerを使えば、それぞれのライブラリごとに環境を用意できるのだ。

ただ、途中までインストールをしかけたのだが、dockerに関する知識が乏しく、時間もなかったので、今回は見送った。いつかnvidia-dockerを使いこなす。

## NVIDIA CUDA Toolkitのインストール {#nvidia-cuda-toolkit-}

とりあえず最新が最適化されていて高速だろうという理由から、最新版の9.1をインスールする。Tensorflow1.4は8でないと動かないらしい。以下のリンクにインストール手順がある。

  * [CUDA Toolkit Archive | NVIDIA Developer][2] 
      * Linux
      * x86_64
      * Ubuntu
      * 16.04
      * deb(network) 
            wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1604/x86_64/cuda-repo-ubuntu1604_9.1.85-1_amd64.deb
            sudo dpkg -i cuda-repo-ubuntu1604_9.1.85-1_amd64.deb
            sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1604/x86_64/7fa2af80.pub`
            sudo apt-get update
            `sudo apt-get install cuda
            

.bashrcを編集してパスを通す。

    export PATH=/usr/local/cuda-9.1/bin${PATH:+:${PATH}}
    export LD_LIBRARY_PATH=/usr/local/cuda-9.1/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
    export CUDA_HOME=/usr/local/cuda
    

PCを再起動する。再起動後、インストールできたかバージョンを確認する。

    $ cat /proc/driver/nvidia/version
    NVRM version: NVIDIA UNIX x86_64 Kernel Module  384.90  Tue Sep 19 19:17:35 PDT 2017
    GCC version:  gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.5)
    
    $ nvcc -V
    nvcc: NVIDIA (R) Cuda compiler driver
    Copyright (c) 2005-2017 NVIDIA Corporation
    Built on Fri_Nov__3_21:07:56_CDT_2017
    Cuda compilation tools, release 9.1, V9.1.85
    

## NVIDIA cuDNN のインストール {#nvidia-cudnn-}

次に cuDNNをインストールする。

  * [cuDNN Installation Guide :: Deep Learning SDK Documentation][3]

cuDNNはNVIDIA で アカウントを作成しないとDownloadできない。wgetもできない。不便。

  * <https://developer.nvidia.com/cudnn>

アンケートに回答後、以下の3つをダウンロードして、サーバにscpで転送。

  * cuDNN v7.0.5 Runtime Library for Ubuntu16.04 (Deb)
  * cuDNN v7.0.5 Developer Library for Ubuntu16.04 (Deb)
  * cuDNN v7.0.5 Code Samples and User Guide for Ubuntu16.04 (Deb)

sudo dpkg -iでインストール。インストールできたかテストしてみる。

    $ cp -r /usr/src/cudnn_samples_v7/ ~/tmp/cudnn_samples_v7/
    $ cd ~/repo/cudnn_samples_v7/mnistCUDNN
    $ make clean && make
    $ ./mnistCUDNN
    Test passed!
    

## Anaconda環境の導入 {#anaconda-}

データサイエンスのためのよくばりセット、Anacondaを入れる。これを入れればデータ解析のための大抵のツールが手に入る。最新版を落としてきてインストール。

  * <https://www.anaconda.com/download/#linux>

    $ wget https://repo.continuum.io/archive/Anaconda3-5.0.1-Linux-x86_64.sh
    $ ./Anaconda3-5.0.1-Linux-x86_64.sh
    

kaggle用の環境をつくる。

    $ conda create -n kaggle
    $ source activate kaggle
    

## GPU対応 xgboost {#gpu-xgboost}

GPU対応のxgboostを動かすには、ソースからビルドする。

  * [Installation Guide — xgboost 0.6 documentation][4]

    $ git clone --recursive https://github.com/dmlc/xgboost
    $ cd xgboost
    $ mkdir build
    $ cd build
    $ cmake .. -DUSE_CUDA=ON
    $ make -j
    

Pythonモジュールをインストール

    $ cd python-package; sudo python setup.py install
    

GPU版 xgboost めちゃくちゃハヤイ！！

 [1]: https://cloud.githubusercontent.com/assets/3028125/12213714/5b208976-b632-11e5-8406-38d379ec46aa.png
 [2]: https://developer.nvidia.com/cuda-toolkit-archive
 [3]: https://docs.nvidia.com/deeplearning/sdk/cudnn-install/index.html
 [4]: https://xgboost.readthedocs.io/en/latest/build.html