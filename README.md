# PHP vs Nodejs

## Prepration

### 准备php环境
_我本地测试是php7+nginx，Nginx将`phpvsnodejs/`配置为根目录_

### 准备nodejs环境
安装nodejs。

## Test - 1
测试静态输出，1000次请求，并发100。

### 启动nodejs服务
`node test-1/index.js`

### `ab -n 1000 -c 100 http://<localhost>:8000/`

```
Document Path:          /
Document Length:        43 bytes

Concurrency Level:      100
Time taken for tests:   0.293 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      118000 bytes
HTML transferred:       43000 bytes
Requests per second:    3416.12 [#/sec] (mean)
Time per request:       29.273 [ms] (mean)
Time per request:       0.293 [ms] (mean, across all concurrent requests)
Transfer rate:          393.65 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   2.4      1      13
Processing:     5   26   7.0     25      46
Waiting:        4   25   6.7     25      46
Total:         15   28   6.4     26      47

Percentage of the requests served within a certain time (ms)
  50%     26
  66%     29
  75%     31
  80%     32
  90%     36
  95%     42
  98%     44
  99%     47
 100%     47 (longest request)
```

### `ab -n 1000 -c 100 http://<localhost>/test-1/index.php`

```
Document Path:          /test-1/index.php
Document Length:        43 bytes

Concurrency Level:      100
Time taken for tests:   0.373 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      204000 bytes
HTML transferred:       43000 bytes
Requests per second:    2680.33 [#/sec] (mean)
Time per request:       37.309 [ms] (mean)
Time per request:       0.373 [ms] (mean, across all concurrent requests)
Transfer rate:          533.97 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   2.0      1      10
Processing:     8   35   8.4     34      52
Waiting:        8   34   8.4     34      52
Total:         16   36   8.3     35      56

Percentage of the requests served within a certain time (ms)
  50%     35
  66%     40
  75%     43
  80%     44
  90%     46
  95%     48
  98%     50
  99%     53
 100%     56 (longest request)
```