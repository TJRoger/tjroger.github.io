---
layout: post
title: How to restart dnsmasq
categories:
- DNS
tags:
- dns, dnsmasq, osx
---

     
	 
## How to restart dnsmasq
```
sudo launchctl stop homebrew.mxcl.dnsmasq
sudo launchctl start homebrew.mxcl.dnsmasq
```

#### Homebrew
```
sudo brew services restart dnsmasq
sudo brew services stop dnsmasq
sudo brew services start dnsmasq
```
----
