---
author: admin
categories:
- 日記
date: 2013-10-13T12:23:51+00:00
dsq_thread_id:
- 3.7338115e+09
excerpt: git pushで『You can't push to ...』でエラーする場合の対処方法メモ
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
- 1420
side:
- "y"
title: git pushで『You can’t push to …』でエラーする場合の対処方法メモ
title_view:
- "y"
type: post
url: /archives/=1837
---

<!--:ja-->

久しぶりに、git pushをしてみたところ、以下のエラーがでて利用できなかった。

    % git push
    fatal: remote error:
      You can't push to git://github.com/tsu-nera/dotfiles.git
      Use https://github.com/tsu-nera/dotfiles.git
    

う～ん、なんでだろう。日頃pushしてないからかな・・・。

調べてみたところ、.git/configの設定が間違っているようだった。

    %cat .git/config
    
    [remote "origin"]
        url = git@github.com:tsu-nera/dotfiles.git
    

このurlの部分を以下のように変更する。

    (変更前)url = git://github/com:tsu-nera/dotfiles.git
    (変更後)url = git@github.com:tsu-nera/dotfiles.git
    

これで、git pushが成功するようになった。

<!--:-->