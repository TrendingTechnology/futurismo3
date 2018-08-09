---
author: admin
categories:
- Java
- TDD
date: 2013-09-08T09:45:15+00:00
dsq_thread_id:
- 3.7304072e+09
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
- 7516
side:
- "y"
tags:
- JUnit
title: JUnitでthrowで投げた例外を検証する方法のメモ
title_view:
- "y"
type: post
url: /archives/=1826
---

<!--:ja-->

最近記事投稿数が少ないので、ごまかし程度にメモを。

錆びついたJavaの知識にオイル刺しをしている日々ですが、今日は例外処理をJUnitで実施する方法を調べました。

まずは、Javaでの例外の投げ方。以下の用に記述することで、例外を投げてプログラムを終了させることができます。

    throw new (エラー）
    

たとえば、キューにエンキューしたときに、NULLをエンキューしようとしたときは、以下のようにしてjava.lang.NullPointerExceptionの例外を投げる。

    public void addFirst(Item item)
      {
        if(item == null)
          throw new java.lang.NullPointerException();
            ...
    }
    

これを、Junitで期待した例外で終了したかどうかを検証するためには、try、catchを利用する。fail()がコールされないことを持ってして、成功と判断する。なかなかトリッキーな方法だ。

     try{
       (例外を発生させる関数);
       fail("Error");
     }catch((エラー） expected){ }
    

たとえば、以下のようなテストを記述する。

    @Test
    public void DequeAddFirstNull()
    {
     Deque que = new Deque();
    
     try{
       que.addFirst(null);
       fail("Error");
     }catch(NullPointerException expected){ }
    }
    

<!--:-->