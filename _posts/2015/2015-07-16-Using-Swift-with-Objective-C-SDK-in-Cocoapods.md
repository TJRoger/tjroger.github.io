---
layout: post
title: Using Swift with Objc SDK in Cocoapods
categories:
- Swift
tags:
- Swift, Cocoapods
---

     
	 
## Using Swift with Objc SDK in Cocoapods  
* Add gem source when original sources unavailable  
`gem sources -a http://ruby.taobao.org/`   
`gem install cocoapods`

* Creating first Xcode project with cocoapods
* Create a normal Xcode project
* Add `Podfile` file to the root of the project  
 file sample:  
`platform :ios, '8.0'`  
`pod 'AFNetworking', '~>2.5.4'`  
* Install pod  
cd to the project and run `pod install`  
* Use the `xcworkspace` instead of the `xcodeproj`  
* Most important procedure - Add `Brigding-Header` file
add a objective-c file to the project and accept XCode to create the `project-name-Bridging-Header.h` file for you.
import your target s public headers that you would like to expose to swift  
`#import <AFNetworking/AFNetworking.h>`  
* Then you can use the sdk in your project  
`let manager = AFHTTPRequestOperationManager()`

----
