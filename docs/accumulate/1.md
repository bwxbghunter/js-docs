---
title: 将文件的大小转换成合适的单位(B、KB、MB、GB)
author: 部文旭
date: '2023-07-23'
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

## 知识点

### Math.floor(x)
该方法的作用是向下取整，只接收一个参数，`floor(x)`方法返回小于等于x的最大整数，如果传递的参数是一个整数，该值不变。

```js
Math.floor(1.04) // 1
Math.floor(2.89) // 2
Math.floor(3) // 3
```

### Math.log(x)
该方法的作用是返回数的自然对数（底为e），只接收一个参数，需要注意的是：
+ 如果参数为负数，返回NaN
+ 如果参数为0， 返回-Infinity

```js
var a=Math.log(2.7183); // 1.0000066849139877
var b=Math.log(2); // 0.6931471805599453
var c=Math.log(1); // 0
var d=Math.log(0); // -Infinity
var e=Math.log(-1); // NaN
```

### Math.pow(x, y), 
该方法的作用是x的y次幂, x为底数，y为幂数。可以理解为：Math.pow(底数，几次方)

```js
var d=Math.pow(3,3); // 27  即3的三次方为27
```

### Number.toFixed(num)
该方法的作用是把数字转换为字符串，方法可把`number`**四舍五入**为指定小数位数的数字。

```js
12.23.toFixed(1) // '12.2'
12.23.toFixed(4) // '12.2300'
12.56.toFixed(1) // '12.6'
12.56.toFixed() // '13'
```


<LastUpdated />