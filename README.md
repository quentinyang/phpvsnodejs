# PHP vs Nodejs

## Prepration

### 准备php环境
_我本地测试是php7+nginx_

## Test - 1
测试单纯的输出字符串。

### 启动nodejs服务
`node server.js`

### `ab -n 1000 -c 100 http://<localhost>:8000/test-1/index.js`

```
This is ApacheBench, Version 2.3 <$Revision: 1748469 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 192.168.164.64 (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests

Server Software:
Server Hostname:        192.168.164.64
Server Port:            8000

Document Path:          /test-1/index.js
Document Length:        11 bytes

Concurrency Level:      100
Time taken for tests:   0.636 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      86000 bytes
HTML transferred:       11000 bytes
Requests per second:    1572.21 [#/sec] (mean)
Time per request:       63.605 [ms] (mean)
Time per request:       0.636 [ms] (mean, across all concurrent requests)
Transfer rate:          132.04 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    3   2.9      2      20
Processing:    34   59  27.2     49     141
Waiting:       26   47  22.3     40     118
Total:         37   62  27.1     53     143

Percentage of the requests served within a certain time (ms)
  50%     53
  66%     60
  75%     68
  80%     72
  90%     99
  95%    139
  98%    140
  99%    142
 100%    143 (longest request)
```

### `ab -n 1000 -c 100 http://<localhost>/test-1/index.php`

```
This is ApacheBench, Version 2.3 <$Revision: 1748469 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 192.168.164.64 (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        nginx/1.8.0
Server Hostname:        192.168.164.64
Server Port:            80

Document Path:          /test-1/index.php
Document Length:        11 bytes

Concurrency Level:      100
Time taken for tests:   0.408 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      172000 bytes
HTML transferred:       11000 bytes
Requests per second:    2449.98 [#/sec] (mean)
Time per request:       40.817 [ms] (mean)
Time per request:       0.408 [ms] (mean, across all concurrent requests)
Transfer rate:          411.52 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   1.7      1       9
Processing:    17   38   8.3     37      63
Waiting:       17   38   8.3     37      63
Total:         18   39   8.6     38      66

Percentage of the requests served within a certain time (ms)
  50%     38
  66%     41
  75%     44
  80%     47
  90%     52
  95%     56
  98%     62
  99%     64
 100%     66 (longest request)
```