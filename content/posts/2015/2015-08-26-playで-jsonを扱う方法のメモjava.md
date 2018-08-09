---
author: admin
categories:
- Java
date: 2015-08-26T13:12:00+00:00
dsq_thread_id:
- 4.068625e+09
pvc_views:
- 2824
tags:
- Json
- Play
title: Playで JSONを扱う方法のメモ(Java)
type: post
url: /archives/=4683
---

Play Frameworkの JSONを扱う方法についてのメモです.

-   JSONデータを受け取る方法
-   JSONデータを返す方法

やること
========

以下の3ステップ.

1.  conf/routesでエントリポイントを定義
2.  app/controllersに コントローラ追加
3.  URL アクセス

Environment
-----------

-   Play 2.4.2

Jsonデータを受け取る方法
========================

1. conf/routesでエントリポイントを定義
--------------------------------------

``` {.text}
POST    /test/jsonreq               controllers.MyJsonSample.sayHello2()
```

2. app/controllersに コントローラ追加
-------------------------------------

name を受け取って、Hello をつけて返す.

``` {.java}
public Result sayHello2() {
    JsonNode json = request().body().asJson();
    if(json == null) {
        return badRequest("Expecting Json data");
    } else {
        String name = json.findPath("name").textValue();
        if(name == null) {
            return badRequest("Missing parameter [name]");
        } else {
            return ok("Hello " + name);
        }
    }       
}   
```

3. URL アクセス
---------------

``` {.bash}
curl -H "Content-Type: application/json" -d '{"name":"tsu-nera"}' https://localhost:9000/test/jsonreq
```

Jsonデータを返す方法
====================

1. conf/routesでエントリポイントを定義
--------------------------------------

``` {.text}
GET     /test/jsonresp              controllers.MyJsonSample.sayHello()
```

2. app/controllersに コントローラ追加
-------------------------------------

テストした構造は、ObjectNodeの中にObjectNodeを渡す.

``` {.java}
public Result sayHello() {
    ObjectNode result = Json.newObject();
    result.put("exampleField1", "Hello world!");
    result.put("name", "tsu-nera");

    ObjectNode result2 = Json.newObject();
    result2.put("subField1", "foo");
    result2.put("subField2", "bar");
    result.put("exampleField3", result2);

    return ok(result);
}   
```

3. URL アクセス
---------------

``` {.bash}
 curl  https://localhost:9000/test/jsonresp

{"exampleField1":"Hello world!","name":"tsu-nera","exampleField3":{"subField1":"foo","subField2":"bar"}}
```

Code
====

``` {.java}
package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import play.*;
import play.mvc.*;

import play.libs.Json;

public class MyJsonSample extends Controller {

    public Result index() {
        return ok();
    }

    public Result sayHello() {
        ObjectNode result = Json.newObject();
        result.put("exampleField1", "Hello world!");
        result.put("name", "tsu-nera");

        ObjectNode result2 = Json.newObject();
        result2.put("subField1", "foo");
        result2.put("subField2", "bar");
        result.put("exampleField3", result2);

        return ok(result);
    }   

    public Result sayHello2() {
        JsonNode json = request().body().asJson();
        if(json == null) {
            return badRequest("Expecting Json data");
        } else {
            String name = json.findPath("name").textValue();
            if(name == null) {
                return badRequest("Missing parameter [name]");
            } else {
                return ok("Hello " + name);
            }
        }       
    }   
}
```
