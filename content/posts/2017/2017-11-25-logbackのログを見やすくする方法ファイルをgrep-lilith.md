---
author: admin
categories:
- Java
date: 2017-11-25T11:11:05+00:00
dsq_thread_id:
- 6.3088993e+09
excerpt: Logbackのログを見やすくする方法(ファイルをgrep, Lilith)
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
- 213
side:
- "y"
title: Logbackのログを見やすくする方法(ファイルをgrep, Lilith)
title_view:
- "y"
type: post
url: /archives/=6825
---

仕事で、Javaのロギングツールとして slf4j + logbackを使っている。

このログなのだが、IntelliJの出力画面から見ると、みにくい。
  
できれば、一連のログをgrepしたいのだが、それがIntellJではできないのだ。

そこで、出力されたログをフィルタする方法を調べたところ、2つ方法が見つかった。

## ファイルに書き出してgrepする {#-grep-}

まずは、簡単な方法から。ログをファイル出力して出力結果をキーワードでfilterする。
  
filterの方法は、さくらエディタだったり、秀丸エディタだったりの機能を使えば良い。

では、ファイルにログを出力する方法だけれども、以下をlogback.xmlに追加。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<configuration>
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/app.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/app.%d{yyyy-MM-dd}.log.tar.gz</fileNamePattern>
            <maxHistory>7</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <root level="INFO">
        <appender-ref ref="FILE"/>
    </root>
</configuration>
```

これで logs/app.logにログが出力される。

## ログイベントビューアの Lilithをつかう {#-lilith-}

Lilithは OSSのlogback用ログビューア。

  * <https://github.com/huxi/lilith>
  * [Lilith][1]

Lilithのために、以下のツールをインストールする。build.gradeのdependenciesに以下を追加。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<configuration>
    <appender name="LogbackClassic" class="ch.qos.logback.classic.net.SocketAppender">
        <RemoteHost>localhost</RemoteHost>
        <Port>4560</Port>
        <ReconnectionDelay>170</ReconnectionDelay>
        <IncludeCallerData>true</IncludeCallerData>
    </appender>

    <appender name="FILE2" class="ch.qos.logback.core.FileAppender">
        <file>logs/classic.lilith</file>
        <encoder class="de.huxhorn.lilith.logback.encoder.ClassicLilithEncoder">
            <IncludeCallerData>true</IncludeCallerData>
        </encoder>
    </appender>

    <root level="INFO">
        <appender-ref ref="LogbackClassic"/>
        <appender-ref ref="FILE2"/>
    </root>
</configuration>
```

Lilithを立ち上げておいて、アプリを実行すると、Lilithにログが表示される。
  
![][2]

 [1]: https://lilith.huxhorn.de/
 [2]: https://lh3.googleusercontent.com/6mpoRdnNUq0xJfsU7uCtGjAard1ik32fUpdJxtoz33_Yt3zptd5aPZqRlWbUdVQI6ZEFyLYUnFdk8l8wCAJSonR-tBpuv62IIMNQ6mzaOuwP2l3spznfAx6hkibbwlDXZBseK7G8cKTfcHUZZJawNCqtpKM-Oh1nuHlUCg_Tw5Zbsv84H1sDhxedz0JTyYShDtKpm8gPJ2jnmw7oudy10D6ki8GR53ncleszcgrDUhRt7Nk3SACH419TO66fVdYyey2nBWI8qJ204jEKeEs2jc9kjtQKQc8wggbjVCc-j9YlO-wZIhLuFUH-UHzvPNHMIzL9Xd2iQoSuoiQvNoj2H-4yysHH5afQ1w6fUST3se2IyIjkQRoA3pXSHAmY6xJ8qrUvzA7NuiqrR1UtxnQ05rj0MLxcff0_MBQt57pcElJkihaI844AzjAxhi-w8DjTGi088yXFSLrEhcwyBVvVTfJbCXUl15BRmsXTSMbGuSbC6Tajuml2wrKH4gw3VCUF6NzUaO-c5jxMZLTIieAvV48A2pE9ON2Qn3VoyKwFwYepUw4Cc7io0AME9MRmwOCQEIs83GY17RJLYVCXeDaMhYkd-86L4-mC6ump6F_MIg=w687-h427-no
