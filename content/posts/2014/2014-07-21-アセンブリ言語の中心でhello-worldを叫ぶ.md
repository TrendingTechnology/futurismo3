---
author: admin
categories:
- 技術メモ
date: 2014-07-21T13:27:00+00:00
dsq_thread_id:
- 3.7326223e+09
excerpt: アセンブリ言語でHello World
pvc_views:
- 3531
tags:
- Assembly
title: アセンブリ言語の中心でHello, Worldを叫ぶ
type: post
url: /archives/=2533
---

はじめに
========

世界の中心で愛を叫ぼうとしたが、そもそも世界の中心がどこかわからなかった。
ということで、アセンブリ言語の中心で愛を叫ぶことにした。

Environment
-----------

-   ArchLinux 64bit.
-   intel corei7 x86-64 ISA

C言語の世界
===========

以下のコードが対象。test.c

``` {.language}
#include <stdio.h>

int main() {
  printf("Hello, World!!");
  return 0;
}
```

デバッグ情報つきでコンパイル。

``` {.bash}
gcc -g test.c
```

a.outができる。

アセンブリ言語の世界へ
======================

次に、アセンブラファイルを生成。test.sができる。

``` {.bash}
gcc -S test.c
```

``` {.language}
    .file   "test.c"
    .section    .rodata
.LC0:
    .string "Hello, World!!"
    .text
    .globl  main
    .type   main, @function
main:
.LFB0:
    .cfi_startproc
    pushq   %rbp
    .cfi_def_cfa_offset 16
    .cfi_offset 6, -16
    movq    %rsp, %rbp
    .cfi_def_cfa_register 6
    movl    $.LC0, %edi
    movl    $0, %eax
    call    printf
    movl    $0, %eax
    popq    %rbp
    .cfi_def_cfa 7, 8
    ret
    .cfi_endproc
.LFE0:
    .size   main, .-main
    .ident  "GCC: (GNU) 4.9.0 20140604 (prerelease)"
    .section    .note.GNU-stack,"",@progbits
```

objdump -d a.outでディスアセンブルすると詳細なアセンブリ情報を得られる。

それでは自力で書いてみる
========================

カンペ情報がいろいろ手に入ったので、自力で書いてみる。

``` {.language}
    .globl  main # mainからはじまる
main:
    pushq   %rbp # ベースレジスタ退避
    movq    %rsp, %rbp # ベースレジスタにスタックポインタ設定
    movl    $.LC0, %edi # $ediレジスタに文字列格納
    movl    $0, %eax   # $eaxに戻り値が入るので0初期化
    call    printf     # printfをcall  
    movl    $0, %eax   # 戻り値を除去
    popq    %rbp # ベースレジスタ取り出し
    ret     # 終了
.LC0:
    .string "Hello, World!!"
```

gcc test2.sでコンパイルして、a.outができた。

gdbで解読
=========

gdbで解読。自分が書いたアセンブリコードと違う！どういうことだ？？

``` {.language}
(gdb) b main
(gdb) disas
Dump of assembler code for function main:
   0x0000000000400506 <+0>: push   %rbp
   0x0000000000400507 <+1>: mov    %rsp,%rbp
   0x000000000040050a <+4>: mov    $0x400520,%edi
   0x000000000040050f <+9>: mov    $0x0,%eax
   0x0000000000400514 <+14>:    callq  0x4003e0 <printf@plt>
   0x0000000000400519 <+19>:    mov    $0x0,%eax
   0x000000000040051e <+24>:    pop    %rbp
   0x000000000040051f <+25>:    retq   
   0x0000000000400520 <+26>:    rex.W
   0x0000000000400521 <+27>:    gs
   0x0000000000400522 <+28>:    insb   (%dx),%es:(%rdi)
   0x0000000000400523 <+29>:    insb   (%dx),%es:(%rdi)
   0x0000000000400524 <+30>:    outsl  %ds:(%rsi),(%dx)
   0x0000000000400525 <+31>:    sub    $0x20,%al
   0x0000000000400527 <+33>:    push   %rdi
   0x0000000000400528 <+34>:    outsl  %ds:(%rsi),(%dx)
   0x0000000000400529 <+35>:    jb     0x400597
   0x000000000040052b <+37>:    and    %esp,%fs:(%rcx)
   0x000000000040052e <+40>:    or     (%rax),%al
End of assembler dump.

(gdb) x /s 0x400520
0x400520 <main+26>: "Hello, World!!\n"

(gdb) info register
rax            0x400506 4195590
rbx            0x0  0
rcx            0x0  0
rdx            0x7fffffffe858   140737488349272
rsi            0x7fffffffe848   140737488349256
rdi            0x1  1
rbp            0x7fffffffe760   0x7fffffffe760
rsp            0x7fffffffe760   0x7fffffffe760
r8             0x7ffff7dd7e50   140737351876176
r9             0x7ffff7deb470   140737351955568
r10            0x7fffffffe600   140737488348672
r11            0x7ffff7a4df10   140737348165392
r12            0x400410 4195344
r13            0x7fffffffe840   140737488349248
r14            0x0  0
r15            0x0  0
rip            0x40050a 0x40050a <main+4>
eflags         0x246    [ PF ZF IF ]
cs             0x33 51
ss             0x2b 43
ds             0x0  0
es             0x0  0
fs             0x0  0
gs             0x0  0
```
