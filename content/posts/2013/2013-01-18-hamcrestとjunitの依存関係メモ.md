---
author: admin
categories:
- Java
date: 2013-01-17T22:49:57+00:00
dsq_thread_id:
- 3.7106163e+09
pdrp_attributionLocation:
- end
pvc_views:
- 5657
tags:
- JUnit
title: hamcrestとJUnitの依存関係メモ
type: post
url: /archives/=1172
---

hamcrest関係のエラーでハマったので、メモ。

### java.lang.NoSuchMethodError: org.hamcrest.Matcher.describeMismatch

#### エラーメッセージ

> <font size="1">java.lang.NoSuchMethodError: org.hamcrest.Matcher.describeMismatch(Ljava/lang/Object;Lorg/hamcrest/Description;)V <br />&#160;&#160;&#160;&#160; at org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18) <br />&#160;&#160;&#160;&#160; at org.junit.Assert.assertThat(Assert.java:865) <br />&#160;&#160;&#160;&#160; at test.endtoend.auctionsniper.FakeAuctionServer$SingleMessageListener.receivesAMessage(FakeAuctionServer.java:71) <br />&#160;&#160;&#160;&#160; at test.endtoend.auctionsniper.FakeAuctionServer.hasRecievedJoinRequestFromSniper(FakeAuctionServer.java:51) <br />&#160;&#160;&#160;&#160; at test.endtoend.auctionsniper.AuctionSniperEndToEndTest.sniperJoinnAuctionUntilAuctionCloses(AuctionSniperEndToEndTest.java:14) <br />&#160;&#160;&#160;&#160; at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) <br />&#160;&#160;&#160;&#160; at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57) <br />&#160;&#160;&#160;&#160; at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) <br />&#160;&#160;&#160;&#160; at java.lang.reflect.Method.invoke(Method.java:601) <br />&#160;&#160;&#160;&#160; at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:47) <br />&#160;&#160;&#160;&#160; at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12) <br />&#160;&#160;&#160;&#160; at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:44) <br />&#160;&#160;&#160;&#160; at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17) <br />&#160;&#160;&#160;&#160; at org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner.runLeaf(ParentRunner.java:271) <br />&#160;&#160;&#160;&#160; at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:70) <br />&#160;&#160;&#160;&#160; at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:50) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner$3.run(ParentRunner.java:238) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner.access$000(ParentRunner.java:53) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner.run(ParentRunner.java:309) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)</font>

#### 原因

junit.jarには、org.hamcrest.Matcher(aとする)ライブラリが一緒に入っている。   
外部のhamcrest(bとする)を入れていると、JUNITはaではなく、bを参照しようとして、エラーする。

#### 解決方法

junit.jar ではなく、 junit-dev-.jarを使う。   
junit-dev.jarはhamcrestを含んでいないJUNITライブラリ。   
こっちを利用することで、junitとhamcrestの依存関係は解消する。

  * <https://github.com/junit-team/junit/downloads>
  * junit-dep-4.11.jar

##### 参考

  * [java &#8211; Getting "NoSuchMethodError: org.hamcrest.Matcher.describeMismatch" when running test in IntelliJ 10.5 &#8211; Stack Overflow][1]

### NoClassDefFoundError: org/hamcrest/MatcherAssert

#### エラーメッセージ

> <font size="1">java.lang.NoClassDefFoundError: org/hamcrest/MatcherAssert <br />&#160;&#160;&#160;&#160; at org.junit.Assert.assertThat(Assert.java:865) <br />&#160;&#160;&#160;&#160; at test.endtoend.auctionsniper.FakeAuctionServer$SingleMessageListener.receivesAMessage(FakeAuctionServer.java:71) <br />&#160;&#160;&#160;&#160; at test.endtoend.auctionsniper.FakeAuctionServer.hasRecievedJoinRequestFromSniper(FakeAuctionServer.java:51) <br />&#160;&#160;&#160;&#160; at test.endtoend.auctionsniper.AuctionSniperEndToEndTest.sniperJoinnAuctionUntilAuctionCloses(AuctionSniperEndToEndTest.java:14) <br />&#160;&#160;&#160;&#160; at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) <br />&#160;&#160;&#160;&#160; at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57) <br />&#160;&#160;&#160;&#160; at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) <br />&#160;&#160;&#160;&#160; at java.lang.reflect.Method.invoke(Method.java:601) <br />&#160;&#160;&#160;&#160; at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:47) <br />&#160;&#160;&#160;&#160; at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12) <br />&#160;&#160;&#160;&#160; at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:44) <br />&#160;&#160;&#160;&#160; at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17) <br />&#160;&#160;&#160;&#160; at org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner.runLeaf(ParentRunner.java:271) <br />&#160;&#160;&#160;&#160; at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:70) <br />&#160;&#160;&#160;&#160; at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:50) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner$3.run(ParentRunner.java:238) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner.access$000(ParentRunner.java:53) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229) <br />&#160;&#160;&#160;&#160; at org.junit.runners.ParentRunner.run(ParentRunner.java:309) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390) <br />&#160;&#160;&#160;&#160; at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197) <br />Caused by: java.lang.ClassNotFoundException: org.hamcrest.MatcherAssert <br />&#160;&#160;&#160;&#160; at java.net.URLClassLoader$1.run(URLClassLoader.java:366) <br />&#160;&#160;&#160;&#160; at java.net.URLClassLoader$1.run(URLClassLoader.java:355) <br />&#160;&#160;&#160;&#160; at java.security.AccessController.doPrivileged(Native Method) <br />&#160;&#160;&#160;&#160; at java.net.URLClassLoader.findClass(URLClassLoader.java:354) <br />&#160;&#160;&#160;&#160; at java.lang.ClassLoader.loadClass(ClassLoader.java:423) <br />&#160;&#160;&#160;&#160; at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:308) <br />&#160;&#160;&#160;&#160; at java.lang.ClassLoader.loadClass(ClassLoader.java:356) <br />&#160;&#160;&#160;&#160; &#8230; 28 more</font>

#### 問題

hamcrestのバージョンが古いのが原因。

#### 解決

hamcreat を1.1から1.3にしたら解決。

##### 参考

  * [NoClassDefFoundError: org/hamcrest/MatcherAssert &#8211; Google グループ][2]

 [1]: https://stackoverflow.com/questions/7869711/getting-nosuchmethoderror-org-hamcrest-matcher-describemismatch-when-running
 [2]: https://groups.google.com/forum/#!topic/narrative-users/nFo00rC-J_g