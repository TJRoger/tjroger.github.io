---
layout: post
title: Using objc SDK in swift with Cocoapods
categories:
- Swift
tags:
- Swift, Cocoapods
---


	 
## Using objc SDK in swift with Cocoapods
### Add gem source when original sources unavailable
```
gem sources -a http://ruby.taobao.org/
gem install cocoapods
```
### Creating first Xcode project with cocoapods
1. Create a normal Xcode project
2. Add `Podfile` file to the root of the project  
```
platform :ios, '8.0'
pod 'AFNetworking', '~>2.5.4'
```
3. Install pod  
cd to the project and run `pod install`
4. Use the `xcworkspace` instead of the `xcodeproj`
-  **Most important procedure - Add `Brigding-Header` file**
- add a objective-c `.m` file to the project and accept XCode to create the `project-name-Bridging-Header.h` file for you.
import your target s public headers that you would like to expose to swift
`#import <AFNetworking/AFNetworking.h>`
- Then you can use the sdk in your project
`let manager = AFHTTPRequestOperationManager()`

----
