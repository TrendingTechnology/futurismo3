---
author: admin
categories:
- Eclipse
- Java
- TDD
- 技術メモ
date: 2012-12-10T23:37:22+00:00
dsq_thread_id:
- 3.7018816e+09
pdrp_attributionLocation:
- end
pvc_views:
- 4317
tags:
- JMock
- JUnit
title: EclipseにJMockを入れてSecurityExceptionが発生。
type: post
url: /archives/=939
---

EclipseにJMockを入れたところ、java.lang.SecurityExceptionという例外が発生した。

> java.lang.SecurityException: class &#8220;org.hamcrest.TypeSafeMatcher&#8221;&#8216;s signer information does not match signer information of other classes in the same package at java.lang.ClassLoader.checkCerts(ClassLoader.java:943) at java.lang.ClassLoader.preDefineClass(ClassLoader.java:657) at java.lang.ClassLoader.defineClass(ClassLoader.java:785) at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142) at java.net.URLClassLoader.defineClass(URLClassLoader.java:449) at java.net.URLClassLoader.access$100(URLClassLoader.java:71) at java.net.URLClassLoader$1.run(URLClassLoader.java:361) at java.net.URLClassLoader$1.run(URLClassLoader.java:355) at java.security.AccessController.doPrivileged(Native Method) at java.net.URLClassLoader.findClass(URLClassLoader.java:354) at java.lang.ClassLoader.loadClass(ClassLoader.java:423) at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:308) at java.lang.ClassLoader.loadClass(ClassLoader.java:356) at java.lang.ClassLoader.defineClass1(Native Method) at java.lang.ClassLoader.defineClass(ClassLoader.java:791) at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142) at java.net.URLClassLoader.defineClass(URLClassLoader.java:449) at java.net.URLClassLoader.access$100(URLClassLoader.java:71) at java.net.URLClassLoader$1.run(URLClassLoader.java:361) at java.net.URLClassLoader$1.run(URLClassLoader.java:355) at java.security.AccessController.doPrivileged(Native Method) at java.net.URLClassLoader.findClass(URLClassLoader.java:354) at java.lang.ClassLoader.loadClass(ClassLoader.java:423) at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:308) at java.lang.ClassLoader.loadClass(ClassLoader.java:356) at org.jmock.internal.InvocationExpectationBuilder.createExpectationFrom(InvocationExpectationBuilder.java:86) at org.jmock.internal.InvocationToExpectationTranslator.invoke(InvocationToExpectationTranslator.java:19) at org.jmock.internal.FakeObjectMethods.invoke(FakeObjectMethods.java:38) at org.jmock.lib.JavaReflectionImposteriser$1.invoke(JavaReflectionImposteriser.java:33) at $Proxy8.someExternal(Unknown Source) at mock\_sampleTest$1.(mock\_sampleTest.java:45) at mock\_sampleTest.testSome(mock\_sampleTest.java:44) at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:601) at org.junit.internal.runners.TestMethod.invoke(TestMethod.java:66) at org.jmock.integration.junit4.JMock$1.invoke(JMock.java:37) at org.junit.internal.runners.MethodRoadie.runTestMethod(MethodRoadie.java:105) at org.junit.internal.runners.MethodRoadie$2.run(MethodRoadie.java:86) at org.junit.internal.runners.MethodRoadie.runBeforesThenTestThenAfters(MethodRoadie.java:94) at org.junit.internal.runners.MethodRoadie.runTest(MethodRoadie.java:84) at org.junit.internal.runners.MethodRoadie.run(MethodRoadie.java:49) at org.junit.internal.runners.JUnit4ClassRunner.invokeTestMethod(JUnit4ClassRunner.java:98) at org.junit.internal.runners.JUnit4ClassRunner.runMethods(JUnit4ClassRunner.java:61) at org.junit.internal.runners.JUnit4ClassRunner$1.run(JUnit4ClassRunner.java:54) at org.junit.internal.runners.ClassRoadie.runUnprotected(ClassRoadie.java:34) at org.junit.internal.runners.ClassRoadie.runProtected(ClassRoadie.java:44) at org.junit.internal.runners.JUnit4ClassRunner.run(JUnit4ClassRunner.java:52) at org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50) at org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38) at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467) at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683) at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390) at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)

#### 環境

  * Eclipse 4.2
  * JUnit 4
  * JMock2

#### 原因

EclipseのJUnitプラグインに含まれるHamcrestと、jMockのHamcrestのバージョンが異なっているみたい。

EclipseをダウンロードしてきたときのデフォルトJUnitにJMockを追加したら発生した。

#### 解決方法

このページを参考 :
  
[https://stackoverflow.com/questions/4755442/jmock-dependency-issue][1]

以下の解決方法が提示されている。

  * junit.jarの代わりに、junit-dep.jarを使う
  * Eclipseのビルド・パスで、hamcrest.jarをJUnitライブラリの前ではなく、あとに並び替える。

> The solution is simple &#8211; make sure that hamcrest.jar is before the JUnit library included by Eclipse in the classpath.
> 
> I believe if you look at the &#8220;Order and Export&#8221; tab in the java build path property (Configure Build Path), you will find that the JUnit jar is above the hamcrest.jar. You can move hamcrest above the JUnit jar here and the problem will go away.

  * 重複しているJUnitのHamcrestを削除。

自分は、Eclipseデフォルトのプラグインを削除して、外部から落としてきたJUnitをビルド・パスに設定し直すことで、解決した。ビルド・パスの設定は、以下のエントリを参照。

[JUnitのインストールとEclipseでの使い方まとめ][2]

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb86.png" alt="image" width="571" height="316" border="0" />][3]

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://stackoverflow.com/questions/4755442/jmock-dependency-issue "https://stackoverflow.com/questions/4755442/jmock-dependency-issue"
 [2]: https://futurismo.biz/archives/844 "JUnitのインストールとEclipseでの使い方まとめ"
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image86.png