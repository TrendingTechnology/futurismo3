---
author: admin
categories:
- Java
- 技術メモ
date: 2014-10-20T15:45:00+00:00
dsq_thread_id:
- 3.7156303e+09
excerpt: Java で Producer-Consumer Pattern を実装してみた
pvc_views:
- 2617
tags:
- POSA
title: Java で Producer-Consumer Pattern を実装してみた
type: post
url: /archives/=2656
---

二つのスレッドで同期キューを用いて情報をやりとりするときに利用する アーキテクチャ・パターンに, Producer-Consumer Pattern というものがある. 

<ul class="org-ul">
  <li>
    <a href="https://en.wikipedia.org/wiki/Producer%E2%80%93consumer_problem">Producer – consumer problem &#8211; Wikipedia, the free encyclopedia</a>
  </li>
</ul>

Publisher-Subscriber パターン, 生産者-消費者パターンともいう. 

これを Java で実装する場合は, BlockingQueue インターフェースを利用できる. 

<ul class="org-ul">
  <li>
    <a href="https://e-class.center.yuge.ac.jp/jdk_docs/ja/api/java/util/concurrent/BlockingQueue.html">BlockingQueue (Java Platform SE 6)</a>
  </li>
</ul>

syncronised/wait/notify を利用してもできるが, BlockingQueue を利用したほうが楽. 

以下, coursera の POSA での Assignment を改造してみて, 簡易版の Producer-consumer Pattern を書いてみた. 

<ul class="org-ul">
  <li>
    <a href="https://github.com/douglascraigschmidt/POSA-14/blob/master/assignments/week-1-assignment-0/src/edu/vuum/mooca/SynchronizedQueue.java">https://github.com/douglascraigschmidt/POSA-14/blob/master/assignments/week-1-assignment-0/src/edu/vuum/mooca/SynchronizedQueue.java</a>
  </li>
</ul>

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    source
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <ul class="org-ul">
      <li>
        <a href="https://gist.github.com/tsu-nera/19c66013f808edf0188b">https://gist.github.com/tsu-nera/19c66013f808edf0188b</a>
      </li>
    </ul>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221; ]<br /> import java.util.concurrent.*;
    </p>
    
    <p>
      public class SynchronizedQueue {<br /> // Keep track of the number of times the producer test iterates.<br /> static volatile int mProducerCounter = 0;
    </p>
    
    <p>
      // Keep track of the number of times the consumer test iterates.<br /> static volatile int mConsumerCounter = 0;
    </p>
    
    <p>
      // Maximum timeout.<br /> static final int TIMEOUT_SECONDS = 5;
    </p>
    
    <p>
      // Error value for a timeout.<br /> static final int TIMEOUT_OCCURRED = -1;
    </p>
    
    <p>
      // Error value for a failure.<br /> static final int FAILURE_OCCURRED = -2;
    </p>
    
    <p>
      public static class QueueAdapter<E> {<br /> private BlockingQueue<E> mQueue;
    </p>
    
    <p>
      public QueueAdapter (BlockingQueue<E> queue) {<br /> mQueue = queue;<br /> }
    </p>
    
    <p>
      /**<br /> * Insert msg at the tail of the queue.<br /> */<br /> public void put (E msg) throws InterruptedException, TimeoutException {<br /> // Keep track of how many times we&#8217;re called.<br /> mProducerCounter++;<br /> boolean timeoutValue = mQueue.offer (msg,<br /> TIMEOUT_SECONDS,<br /> TimeUnit.SECONDS);<br /> if (timeoutValue == false)<br /> throw new TimeoutException ();<br /> }
    </p>
    
    <p>
      /**<br /> * Remove msg from the head of the queue.<br /> */<br /> public E take () throws InterruptedException, TimeoutException {<br /> // Keep track of how many times we&#8217;re called.<br /> mConsumerCounter++;<br /> E rValue = mQueue.poll (TIMEOUT_SECONDS,<br /> TimeUnit.SECONDS);
    </p>
    
    <p>
      if (rValue == null)<br /> throw new TimeoutException ();
    </p>
    
    <p>
      return rValue;<br /> }<br /> }
    </p>
    
    <p>
      private static QueueAdapter<Integer> mQueue = null;
    </p>
    
    <p>
      static Runnable producerRunnable = new Runnable () {<br /> public void run () {<br /> for (int i = 0; i < mMaxIterations; i++) try { mQueue.put (i); if (Thread.interrupted ()) throw new InterruptedException (); } catch (InterruptedException e) { System.out.println ("Thread properly interrupted by " + e.toString () + " in producerRunnable"); // This isn't an error - it just means that // we've been interrupted by the main Thread. return; } catch (TimeoutException e) { System.out.println ("Exception " + e.toString () + " occurred in producerRunnable"); // Indicate a timeout. mProducerCounter = TIMEOUT_OCCURRED; return; } catch (Exception e) { System.out.println ("Exception " + e.toString () + " occurred in producerRunnable"); // Indicate a failure. mProducerCounter = FAILURE_OCCURRED; return; } } }; static Runnable consumerRunnable = new Runnable () { public void run () { for (int i = 0; i < mMaxIterations; i++) try { if (Thread.interrupted ()) { throw new InterruptedException (); } Integer result = (Integer) mQueue.take (); System.out.println ("iteration = " + result); } catch (InterruptedException e) { System.out.println ("Thread properly interrupted by " + e.toString () + " in consumerRunnable"); // This isn't an error - it just means that // we've been interrupted by the main Thread. return; } catch (TimeoutException e) { System.out.println ("Exception " + e.toString () + " occurred in consumerRunnable"); // Indicate a timeout. mConsumerCounter = TIMEOUT_OCCURRED; return; } catch (Exception e) { System.out.println ("Exception " + e.toString () + " occurred in consumerRunnable"); // Indicate a failure. mConsumerCounter = FAILURE_OCCURRED; return; } } }; // Number of iterations to test public static int mMaxIterations = 1000000; public static int mMaxQueueSize = (mMaxIterations / 10); public static void main (String[] args) { try { mQueue = new QueueAdapter<Integer>(new ArrayBlockingQueue<Integer>(mMaxQueueSize));<br /> // mQueue = new QueueAdapter<Integer>(new LinkedBlockingQueue ());
    </p>
    
    <p>
      // create threads<br /> Thread consumer = new Thread (consumerRunnable);<br /> Thread producer = new Thread (producerRunnable);
    </p>
    
    <p>
      // start the threads.<br /> consumer.start ();<br /> producer.start ();
    </p>
    
    <p>
      // Give the Threads a chance to run before interrupting them.<br /> Thread.sleep (100);
    </p>
    
    <p>
      // interrupt the threads.<br /> consumer.interrupt ();<br /> producer.interrupt ();
    </p>
    
    <p>
      // wait for the threads to exit.<br /> consumer.join ();<br /> producer.join ();
    </p>
    
    <p>
      } catch (Exception e) {<br /> }<br /> }<br /> }<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    Special Thanks
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
    <ul class="org-ul">
      <li>
        BlockingQueue を利用している例: <ul class="org-ul">
          <li>
            <a href="https://www.techscore.com/tech/Java/JavaSE/Utility/12/">12. 新たに追加されたコレクション 2 | TECHSCORE (テックスコア)</a>
          </li>
          <li>
            <a href="https://omiya6048.hatenablog.com/entry/2013/05/29/145253">Java で Producer-Consumer パターンを実践! &#8211; omiya6048&#8217;s blog</a>
          </li>
        </ul>
      </li>
      
      <li>
        wait/notify を利用している例: <ul class="org-ul">
          <li>
            <a href="https://www.techscore.com/tech/Java/JavaSE/Thread/5-2/">5. スレッドの同期 (2) | TECHSCORE (テックスコア)</a>
          </li>
          <li>
            <a href="https://www.programjp.com/blog/MkDO2ADMwcTz.html">生産者と消費者例 java</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>