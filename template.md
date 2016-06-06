---
layout: post
title: Swift Tips
categories:
- Swift
tags:
- Swift
---

     
	 
## Swift Tips
Swift中的Bool值只有true/false，条件判断中不会自动将数字等自动转换为Bool值，可用`if let a = object` 来判断对象object是否为空,空则返回`false`同时a为`nil`，非空则返回`true`同时a为`object!`

Swift支持类型推断，可以不声明变量类型 `let string(:String) = "Hello Swift"`

----
