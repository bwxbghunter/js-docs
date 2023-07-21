---
title: 将文件的大小转换成合适的单位(B、KB、MB、GB)
author: 部文旭
date: '2023-07-21'
---

在日常开发中，有时会遇到将上传文件的大小在页面上展示出来，而文件上传返回的数据是以字节为单位的，需要根据文件大小转换成合适的单位。

## 代码

#### 参数
|参数名称|是否必须|说明|
|:---:|:---:|:---:|
|bytes|否|字节数|
|decimals|否|需要保留的小数位数, 默认保留2位小数|

```js
function formatBytes(bytes, decimals) {
    if (!bytes || bytes === 0) return "0 B"
    let k = 1024
    let dm = decimals <= 0 ? 0 : decimals || 2
    let sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    let i = Math.floor(Math.log(bytes) / Math.log(k))
    return (
        parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) +
        " " +
        sizes[i]
    )
}
```

## 使用
```js
console.log(formatBytes())
console.log(formatBytes(1024 * 0.1))
console.log(formatBytes(1024 * 1))
console.log(formatBytes(1024 * 1024))
console.log(formatBytes(1024 * 1024 * 1024))
console.log(formatBytes(1024 * 1024 * 1024 * 1024))
```

## 输出
```js
0 B
102.4 B
1 KB
1 MB
1 GB
1 TB
```
<LastUpdated />