---
author: admin
categories:
- Python
- 機械学習
date: 2017-08-07T11:58:51+00:00
dsq_thread_id:
- 6.0477087e+09
excerpt: PyTorchとMNISTをつかって、DCGANで手書き数字を生成してみた
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
- 469
side:
- "y"
tags:
- DeepLearning
- PyTorch
title: PyTorchでDCGAN
title_view:
- "y"
type: post
url: /archives/=6710
---

PyTorchとMNISTをつかって、DCGANで手書き数字を生成してみた。

前回のつづき。

  * [PyTorchを初めて使ってみた！GANを実装 | Futurismo][1]

GANでは、あまりよい結果が得られなかったので、DCGANの論文を読んで、実装してみた。

  * [[1511.06434] Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks][2]

Deep Convolutional Networkを GANに使うにあたって、以下の改良点が提案されていた。

![][3]

  * すべてのプーリングレイヤを strided convolutions(discriminator)と fractional-stirided convolutions(generator)に変更する。
  * generator と discriminator に batchnormを使う。
  * 全結合隠れ層を取り除く。
  * ReLU 活性関数を generatorで使う。ただし、output層は tanhを使う。
  * LeakyReLU活性関数をdiscriminatorのすべての層で使う。

![][4]

もとい！

PyTorchのチュートリアルに DCGANの実装コードが公開されているので、それを参考に実装する。

  * [examples/dcgan at master · pytorch/examples][5]

## 結果 {#-}

  * <https://nbviewer.jupyter.org/github/tsu-nera/cutting-edge-dl-for-coders-part2/blob/master/dcgan.ipynb>

GANよりも、数字がくっきり浮き出た！

![][6]

## 結果その２ {#-}

ぺけぺけ女優10000人の顔写真をDMMからスクレイピングして収集し、それを題材にDCGANで顔写真の生成をしてみた。

  * <https://nbviewer.jupyter.org/github/tsu-nera/cutting-edge-dl-for-coders-part2/blob/master/dcgan2.ipynb>

スクレイピングは、[この記事][7]を参考にしました。

![][8]

やっぱりぺけぺけ女優なので、モザイクがかかっています。

 [1]: https://futurismo.biz/archives/6707
 [2]: https://arxiv.org/abs/1511.06434
 [3]: https://lh3.googleusercontent.com/Zo8gGJ-4S8MSEeSmmsln81A5y9P8IRpi0PCX6udD-xJRB_tA1eioAoDAc0X2tl2tc3PJZCDQ2bkQO2GhJChkMfjfvywV7TaieAtTgAJPviknVFJ0n2F2faqnceqAsuir91RytVJmz80bwrwuY70lYmLQcGFaHR-gVB7N5RzaEF6LEyyEfTbNoTkzv7ctGzcdh0s4VjhhDS2juWEa9R_pjO4DGGJqoRyigTtRZ1t2WLTS-FlzM29ig9p1T-qpX9rukiuRZff6G759x3KuFz7A37YoKOVni_E9LaXEN9yowoNmv0vieRqI92XM20DfgY8EwOapNNdEt4RnseYQT6uCAvi4YPg2bGvfz7yhv1hJlAg9ir94lIH0jQ9zGVBiCgbzo_PwDnSX9R28Iw4nnTMipgwyOjeQNG5n10iEIaDiTiGV3s4KnFtBag69i0BHVyYDMy5WtXDWTawvAf5Lcdluip1cDup8DmffB4Vg5lCq8mW7LOFYnfEEsSBYP203J0wUuRykbpmaEpvbZ96zMkZeQba-bxE2qL9whMzXF6itQDtn78H-F_7oqEeVjbXTS-nCfUWJvV-jbe1lOfOaG0p01uQWS4MCaknV4lgedAaFeluiIfCWZD6a7tSV=w807-h208-no
 [4]: https://lh3.googleusercontent.com/wnEv2iOCn_vr2WKOs90Z2ysBCwrrl0BJCK-UQ1_QKw8XudOTT1lP6wBXWcVOFxmK3nZ7uTpywjFWUAXH1g60V9h6qn4HS1PN_JasASoPrUGIjvHUCLfnybxktBD7tlzAEMFo-If5KzuBYcSgAWDAcpAbe7sKy2Okgr4hg7uJD4PhR1L9QOfc4zBzBmEv6tM57eyz4Bc79j4EIC-BQ52f1dR0_c2difVpsXcpwOu4uLaU43MaPdB-2-HkrTKzgJYozU0BLJPiX4UFuoXuikG7deAy5Y8aSBDdynSQN7D410JuRzIe2OqQcVkErYdOvQzR9ZE9i1xuZLinkKiscN20H-kEs4E_oRFMJHgGakQDMcmsK3YTCQ9jUxPZ8zb7-XCgct5AfMLO-D2sAgLYfdKVAH2SYknbTlgCeyeu2_JxzwEnPEbhNPJnqu05yhkk4Q_QB9ocnDqqNJU4Tr-MOQCyX7m4stbp5266fAnOVQxhUrq2voYhqo4tG7edPToXwKBbnmiRZz7TPuNvLPeoUPx8hswGtzxA7MqNgfsOVxTofuwHRnCfi0AzpP0bs08K8bm0sjVIlnFlb90PtNjmGdMJbkeLzcUXmKRCaqLRvb9A_YAVCZJ8sXz-XbA0=w805-h350-no
 [5]: https://github.com/pytorch/examples/tree/master/dcgan
 [6]: https://lh3.googleusercontent.com/PGHbgInPJ3q5Evw468oFntICg3RRexc6DmGDx4rmtyGDbSEQtQICrAQol1G-RJezs2GGKQc4vOsy0OEhxIkIBQZ-XRMvmt1hWFUM3wy3WFA9-SyP-00Q9FtVPabjLgyYFj54Ddpt-gnKRTVl0o7JvEz-bc-gGws_ATtRR7PQkDu9IOFPmVs_T0uMX87rUPsRf7T5DB8QF0IfW5BEqdYcEpfWyx1zlmJwrvextfopNlcO6c9nQ-UxN6jNWoTc9Y-epPpq7eOYBMYz1kspCciSbmzZOGC-6Z9N1W0jc1auEll_o4Y73Vq28tkQ3TunvUHX31y7dIdZf-NuRaprqfqTO4ClDoxCao_V81wKSqU5FJcvjIrhwPFIBG5SXmIsPXrvhB5_qIblQKCx-Zi7ZY_mDUYNoAnbEi59af4m8cjI0tTT1kYCiV7SrAj45uDhk3sDZmqY5CTB0L3XcvIMhquGRMrRTprHX13e80tRatErMAvZQwj7S2tN5gj-wRluPpD-BPGKbfP-IjSZMvNMg-PwPIvrTbXTCMBwdGPbrEHCLHgVz3eGLUVPvuBHrKQzVP9rGE7IdbxXWC0p1xyM1H-gnscWyTAZ57LDD9Fu9rBnp7ELGlfWm9R6QdZC=w261-h252-no
 [7]: https://aa-deb.hatenablog.com/entry/2015/12/02/hog%25e7%2589%25b9%25e5%25be%25b4%25e9%2587%258f%25e3%2581%25a8%25e4%25b8%25bb%25e6%2588%2590%25e5%2588%2586%25e5%2588%2586%25e6%259e%2590%25e3%2582%2592%25e7%2594%25a8%25e3%2581%2584%25e3%2581%25a6av%25
 [8]: https://lh3.googleusercontent.com/-tOU8wCSYsPKTy8-J27WUSEUV8qrq3OFKpNQAh-b70aATBzfhJcpdbZUCte_Vumuqs5__LEd3vuHqa7qEd0Drj3bJelBLQF9SGIL3DFBhN6LQ_Dr3_HBpAZW-LF14YtDmtgQdFWB9_lrZvWvd6H_jIchu-gCXz5NLzrd4LoDthqHv9WXhrdlSX3tEp-WqtKF6KEVXL4W7udmJdEKR8z1ld1ihCkCCOFjNyKdobVneTVtHqqXTGKaluVK1XpVeICyIb3gFx2zzsxGCEyvdQR28F2V1oifFD4pYfWSQRAe_Z7DU83sxPbJut1MYLpCWNNvTdilPhmdFvcVEJJYy1O8yxz17L-G20Hx6hvWAgjJwcxxgGWsnC4Gxf-wKGmcQ2CR8S4irs2F8Fi-j7wZbCIQiKVGnQyOL_19al2aOJrIJMWy87uI_6WAj3HT8uxgbcGesW4sm749CrIZT5ne3g-npWftNNyaiZ_jbZt3qnq4mazmBuOcY6W0TVEHbJA6YgCqLQe_H_eVR7h_5g8GFr-YgWvm6ybFyvODcds5QEyjnlMfItnmrsDUugq9SrgVrABaRef1JHBW8XF9jUb5oAhjY6EXRI8ThrAeN8kz8SLOsmeY41rJtICX2Cry=w261-h252-no