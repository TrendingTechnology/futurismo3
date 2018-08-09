---
author: admin
categories:
- 技術メモ
date: 2014-01-13T05:39:13+00:00
dsq_thread_id:
- 3.7288878e+09
excerpt: <!--:ja-->tmux環境を自動作成するツールを調べました<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2839
tags:
- tmux
title: tmux環境作成の自動化！PCの再起動をまたいでSessionを保存/復元を実現する方法
type: post
url: /archives/=2149
---

tmuxをノートPCに入れてみたけれども、ノートPCをOff/Onするたびにtmux環境を初めから作り直すのは面倒だ。

面倒なことは自動化しよう！ということで、tmux環境を自動作成するツールを調べました。

#### Environment

  * Linux Mint 16

### tmuxinator

tmuxinatorを利用すると、自動でtmux環境を構築できる。

[aziz/tmuxinator][1]

#### Install

    gem install tmuxinator
    

この設定が必要みたい。.tmux.confに設定してあるか確認。

    set-window-option -g pane-base-index 1
    

SHELLとEDITORの2つの環境変数が設定されているか確認。

    % printenv SHELL
    /usr/bin/zsh
    % printenv EDITOR
    emacsclient -nw
    

起動スクリプトにも記述が必要。以下を追記。

    source ~/.bin/tmuxinator.zsh
    

[bin][2]から、mux,tmuxinatorをダウンロードして、パスの通った場所におく。

    % wget https://raw2.github.com/aziz/tmuxinator/master/bin/tmuxinator
    % mv tmuxinator /usr/local/bin
    

#### Usage

設定ファイルを作成.

    % tmuxinator new default
    

エディタが開き、設定ファイルが作成されるので、これをカスタマイズする。保存したら、以下で保存した設定を起動。

    % tmuxinator default
    

![][3]

### tmux-session

tmuxinatorの弱点は、自分で設定ファイルをかかないといけないところ。それは、面倒だ。

面倒なので、もうすこしツールを探してみると、tmux-sessionというシェルスクリプトを発見！

  * [Restore tmux session after reboot &#8211; Super User][4]

使い方は、とても簡単。saveで現在の状態を保存して、restoreで復元する。

    % tmux-session save
    % tmux-session restore
    

状態は一つしか保存できないよう。また、画面分割も保存はできない。tmuxinatorならば、できる。

または、同様なスクリプトとして、こんなのもある。これは、複数セッション保存可能。

  * [Resurrecting tmux Sessions After Reboot &#8211; BrainScraps Wiki][5]

### 結論

tmuxの状態保存は、tmux-sessionがよい。save/restoreの簡易なところが、よい。

 [1]: https://github.com/aziz/tmuxinator/
 [2]: https://github.com/aziz/tmuxinator/tree/master/bin
 [3]: https://lh3.ggpht.com/-nHZjL2lxJYw/UtKTCOUcOJI/AAAAAAAAA9c/7z4EWV7IQJ0/tmuxinator.jpg
 [4]: https://superuser.com/questions/440015/restore-tmux-session-after-reboot
 [5]: https://brainscraps.wikia.com/wiki/Resurrecting_tmux_Sessions_After_Reboot