---
author: admin
categories:
- 技術メモ
date: 2017-07-25T02:11:50+00:00
dsq_needs_sync:
- 1
dsq_thread_id:
- 6.013425e+09
excerpt: Ubuntuに Leap Motion SDKをインストールした作業メモ
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
- 425
side:
- "y"
tags:
- LeapMotion
- Ubuntu
title: Ubuntuに Leap Motion SDKをインストールした作業メモ
title_view:
- "y"
type: post
url: /archives/=6655
---

机の中に眠っていたLeap Motionを数年ぶりに使ってみようと思う。

Ubuntuに Leap Motion SDKをインストールした作業メモです。

### 環境 {#-}

  * Ubuntu 16.04
  * Leap Motion SDK 2.3.1

## SetUp {#setup}

公式サイトからLinux用のSDKをダウンロード

  * [V2 Tracking — Leap Motion Developer][1] 
      * Leap\_Motion\_SDK\_Linux\_2.3.1.tgz

<pre><code class="lang-sh">cd Downloads
tar xvzf Leap_Motion_SDK_Linux_2.3.1.tgz
cd LeapDeveloperKit_2.3.1+31549_linux
sudo dpkg -i Leap-2.3.1+31549-x64.deb
</code></pre>

エラーが発生した。leap deamonがない。

<pre><code class="lang-sh">Failed to start leapd.service: Unit leapd.service not found.
dpkg: パッケージ leap の処理中にエラーが発生しました (--install):
 サブプロセス インストール済みの post-installation スクリプト はエラー終了ステータス 5 を返しました
ureadahead (0.100.0-19) のトリガを処理しています ...
ureadahead will be reprofiled on next reboot
処理中にエラーが発生しました:
 leap
</code></pre>

解決策がForumにあった。パッチを当てればいいらしい。(パッチは結局失敗する、後述)

  * [Leap Motion SDK fails to install properly on Ubuntu 15.04 &#8211; Customer Support &#8211; Leap Motion Community][2]

        Download the .tgz file from https://www.leapmotion.com/setup120, extract, and download the patch file to /tmp/patch:
        tar xzf Leap_Motion_Setup_Linux_2.3.1.tgz
        cd Leap_Motion_Installer_Packages_release_public_linux
        wget -O /tmp/patch https://gist.githubusercontent.com/jmwilson/8e6c579eac5fa7fa9f0d/raw/0b597ceb1f8184952bf067267ac4171691949068/patch
    
        Extract the .deb file into a new leap directory and enter it:
        dpkg-deb --raw-extract Leap-2.3.1+31549-x64.deb leap
        cd leap
    
        Patch the contents of the current directory:
        patch -p2 </tmp/patch
    
        Go back to the parent directory and build a new .deb file:
        cd ..
        fakeroot dpkg-deb --build leap (this can take a while...)
    
        Install the patched .deb:
        sudo dpkg --install leap.deb
    

patchを当てても動かなかった。他の人も同様の症状がでているみたい。

解決策がforumにあった。

  * [Linux install of SDK fails &#8211; Development &#8211; Leap Motion Community][2]

    1 - After the install failure, I simply uninstalled with:
    
    sudo dpkg -r leap
    
    2 - Now, with no leap installed yet, I followed the post above and just created the file as mentioned there (I used the terminal to write the following command, to use the nano text editor as root user):
    
    sudo nano /lib/systemd/system/leapd.service
    
    3 - I pasted that content (reproduced here for easiness):
    (also please note that on Ubuntu terminal, you paste with CTRL+SHIFT+V instead of just CTRL+V)
    
    # Found by Kevin Cole 2014.11.22 at
    # https://github.com/atejeda/leap-fedora-rpm
    #
    # Remember to:
    #
    #   ln -s /lib/systemd/system/leapd.service /etc/systemd/system/leapd.service
    #   systemctl daemon-reload
    #
    [Unit]
    Description=LeapMotion Daemon
    After=syslog.target
    [Service]
    Type=simple
    ExecStart=/usr/sbin/leapd
    [Install]
    WantedBy=multi-user.target
    
    4 - Saved (CTRL+O then ENTER), and exited (CTRL+X)
    
    5 - Still using the terminal, executed the two commands from that same post, BUT I included the sudo prefix to run them as root user:
    
    sudo ln -s /lib/systemd/system/leapd.service /etc/systemd/system/leapd.service
    sudo systemctl daemon-reload
    
    6 - All is right now and we can properly install. So, I just installed the original package:as in the official Leap guide:
    
    sudo dpkg --install Leap-2.3.1+31549-x64.deb
    
    (please just note that I&#39;m using a x64 Ubuntu, so I installed the 64 bits package)
    
    7 - Done!!!
    

これでうまくいった！

## 確認 {#-}

LeapControlPanelを起動する。ツールバーにLeap Motionのアイコンがでて、緑色になった。

試しに、Diagnostic Visualizerを起動してみる。手が正しくトラッキングされていることが分かる。

![][3]

 [1]: https://developer.leapmotion.com/sdk/v2/
 [2]: https://community.leapmotion.com/t/leap-motion-sdk-fails-to-install-properly-on-ubuntu-15-04/2973
 [3]: https://lh3.googleusercontent.com/8CU4vo0NiqLJbB5BvYrP6vMbzuxbplybgA98BF1uFVGjzl-qSw0VrxqzTNkWu7GL_v5_4tBXdVKHa3Uf7-gWaz9_mdg9yh_fz_-EEKs31oK8yVL31Ylr6T0jvrh5F_V4D1ILRtjc8vCR26ML46nrrS4eKSDk82uymAh0W5pa9eINPohSOPO-N88hR8TcXzWy6OYa-II2qblh4srOAh6rYk2shfbq-lt4A8bxqQIZLK-ruGnzGb6_Pm2HxzbIOJVQFsMY5DfM4uVbV9RVHgkfIRSniO3RqInOMSvZyU5k4JKSKuoqYkEf4OSVjmo3UaYcW2p31kiA0lfEX4YWeu1gWG-f32Oio7-oFaQgPrhm5aGJdLqF23_DXCLg12p4WVcxceVgo2cadPLQ89WVbzKPjlbP_MpPlDAzIL8YDIUQIg_iXWTuKyBnwgsKlvQZN9RgBqh-FyyoPaJwCb6fskwM9DifD0a596sr_EqsawFkLRxc0rq3l_VEvy0A9jfedMxwmZqqvem4Ldn7iHj6solWF4WdGwrsZRy4AQmDWrpEg-Lk-Uunl30sr2wzoC1kLmoylM_DZ9AKBqYWZm3hYECB4g70h2qiCRMzYtoXADrb4tRELLZXpjzm5BBp=w451-h252-no