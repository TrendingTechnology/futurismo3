---
author: admin
categories:
- Emacs
- 技術メモ
date: 2016-12-29T07:52:00+00:00
dsq_thread_id:
- 5.4188503e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 886
side:
- "y"
tags:
- fish
title: fish で Emacs とターミナルのディレクトリを行ったり来たり。dired と cde を移植した。
title_view:
- "y"
type: post
url: /archives/=6031
---

zsh で大変お世話になっていたコマンド、dired と cde を fish に移植した。

-   [ターミナルの zsh と Emacs を風のように駆け抜ける！ / マスタカの
    ChangeLog メモ](https://masutaka.net/chalow/2011-09-28-1.html)
-   [cde を改良 - syohex ’ s
    diary](https://syohex.hatenablog.com/entry/20111026/1319606395)
-   [cde と elscreen-separate-buffer-list の相性が悪い -
    Qiita](https://qiita.com/__hage/items/2dd732b4dd68e124e8bd)

dired
=====

ターミナル上の fish で dired とタイプすると、 現在のディレクトリを Emacs
の dired で開いてくれる。

``` {.bash}
function dired 
        emacsclient -e "(dired \"$PWD\")"
end
```

cde
===

ターミナル上で cde とタイプすると、 Emacs
の現在のバッファに対応するディレクトリをターミナル上の fish
で開いてくれる。

``` {.bash}
function cde
        emacsclient -e "(return-current-working-directory-to-shell)" | sed 's/^"\(.*\)"$/\1/' | read EMACS_CWD
        echo "chdir to $EMACS_CWD"
        cd "$EMACS_CWD"        
end
```

以下は、init.el に定義。

``` {.commonlisp}
(defun return-current-working-directory-to-shell ()
  (expand-file-name
   (with-current-buffer
       (if (featurep 'elscreen)
           (let* ((frame-confs (elscreen-get-frame-confs (selected-frame)))
                  (num (nth 1 (assoc 'screen-history frame-confs)))
                  (cur-window-conf
                   (assoc 'window-configuration
                          (assoc num (assoc 'screen-property frame-confs))))
                  (marker (nth 2 cur-window-conf)))
             (marker-buffer marker))
         (nth 1
              (assoc 'buffer-list
                     (nth 1 (nth 1 (current-frame-configuration))))))
     default-directory)))
```
