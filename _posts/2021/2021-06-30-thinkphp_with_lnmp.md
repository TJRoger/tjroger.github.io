---
layout: post
title: thinkPHP在lnmp环境中的open_basedir问题解决
categories:
- php
tags:
- php, thinkphp, lnmp, open_basedir
---



## 问题描述
在部署php项目时报错，环境lnmp1.8， php7.4.19
`require(): open_basedir restriction in effect. File(<path>/thinkphp/base.php) is not within the allowed path(s)`

## 解决
查阅文档得知open_basedir是用来对PHP可以访问的目录进行限制的选项，默认php.ini设置为空。lnmp会开启跨目录保护的选项，设置在fastcgi.cnf中`fastcgi_param PHP_ADMIN_VALUE "open_basedir=$document_root/:/tmp/:/proc/";`
通常在thinkPHP项目中会设置document_root为项目的public子目录，这样就导致上一级目录thinkphp中的base.php无法访问了。

### 方法一
最直接简单粗暴的方法就是将open_basedir注释掉，但这么操作太粗糙了，不值得记录。

### 方法二
我们可以将$document_root上一级的权限开放，配置改成
`fastcgi_param PHP_ADMIN_VALUE "open_basedir=$document_root/../:/tmp/:/proc/";`
这是安全性中性的一种做法。

### 方法三
将public下的index.php移动到上级目录, 然后在nginx配置将root指向这个项目的根目录即可。下面给出一个index.php的范例
```
<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
define('APP_DEBUG', true);
// 定义应用目录
define('APP_PATH', __DIR__ . '/application/');
//定义配置文件目录
define('CONF_PATH', __DIR__ . '/conf/');
// 加载框架引导文件
require __DIR__ . '/thinkphp/start.php';
```
这是最安全的做法，推荐
----
