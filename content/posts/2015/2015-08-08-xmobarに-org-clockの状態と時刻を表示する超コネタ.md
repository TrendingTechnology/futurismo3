---
author: admin
categories:
- Emacs
date: 2015-08-08T10:54:00+00:00
dsq_thread_id:
- 4.0142042e+09
pvc_views:
- 1122
tags:
- org-mode
title: xmobarに org-clockの状態と時刻を表示する超コネタ
type: post
url: /archives/=4543
---

org-clockと xmobarを愛用しているひとのための超コネタ.

org-clockの状態を xmobarに表示します.

clock状態を表示する
===================

以下のスクリプトをまずは用意して、パスの通った場所におく.

-   xmobar-clocking-monitor.sh

``` {.bash}
#!/bin/bash
if [[ $(emacsclient --e '(org-clocking-p)') == 't' ]] ; then
    echo "<fc=grey,#000000>"
else
    echo "<fc=white,#ff0000>"
fi
```

.xmobarrcの設定はあとで書きます.

clocking時間を表示する
======================

以下のelispを書くと、現在の時間をファイルに吐き出してくれる.

``` {.commonlisp}
(display-time)
(defun esf/org-clocking-info-to-file ()
  (with-temp-file "~/tmp/clocking"
    ;; (message (org-clock-get-clock-string))
    (if (org-clock-is-active)
        (insert (format "org: %d (%d/%d) min"

                        (- (org-clock-get-clocked-time) org-clock-total-time)
                        org-clock-total-time
                        (org-clock-get-clocked-time))

                )
      ) ;;(org-clock-get-clock-string)
    )
  )
(add-hook 'display-time-hook 'esf/org-clocking-info-to-file)
```

-   参考:
    <https://lists.gnu.org/archive/html/emacs-orgmode/2010-04/msg00457.html>

.xmobarrcの設定
===============

以下のように設定を書く. これで、xmobar上に、clock状態と
clocking時刻が表示される.

``` {.text}
Config { font = "-misc-fixed-*-*-*-*-10-*-*-*-*-*-*-*"
       , borderColor = "black"
       , border = TopB
       , bgColor = "black"
       , fgColor = "grey"
       , position = TopW L 90
       , lowerOnStart = True
       , persistent = False
       , commands = [ Run Cpu ["-L","3","-H","50","--normal","green","--high","red"] 10
                    , Run Memory ["-t","Mem: <usedratio>%"] 10
            -- , Run Swap [] 10
                    , Run Battery ["Bat0"] 600
                    , Run Com "xmobar-clock-monitor.sh" [] "orgClock" 10
                    , Run Com "sh" ["-c", "cat ~/tmp/clocking"] "orgShow" 10
                , Run Date "%a %b %_d %Y %H:%M:%S" "date" 10
            ]   
       , sepChar = "%"
       , alignSep = "}{"
       , template = "%cpu% | %memory% | %battery% }{ <fc=#ee9a00>%date%</fc> %orgClock%clock</fc> %orgShow%"
       }
```

<p style="font-size:32px">以上、Happy Hacking!!</p>

