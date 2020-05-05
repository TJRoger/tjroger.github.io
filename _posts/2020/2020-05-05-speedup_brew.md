---
layout: post
title: 国内使用Homebrew加速
categories:
- homebrew
tags:
- brew, proxy, speedup
---

## brew
`brew`全称`homebrew`,可以说是目前MacOS上最好用的包管理工具，没有之一。类似于`apt-get`和`yum`。由于种种原因在国内使用原版源速度会较慢，这是一个痛点，今天我们就来干掉它。

## 前言
请在运行 `brew` 前设置环境变量 `HOMEBREW_BOTTLE_DOMAIN` ，值为 `https://mirrors.ustc.edu.cn/homebrew-bottles` 。

对于 bash 用户：

    echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
	source ~/.bash_profile

对于 zsh 用户：

	echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
	source ~/.zshrc

### 替换brew.git
替换USTC镜像：

	cd "$(brew --repo)"
	git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

重置为官方地址：

	cd "$(brew --repo)"
	git remote set-url origin https://github.com/Homebrew/brew.git

### 替换homebrew-core.git
	cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
	git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

### 替换homebrew-cask.git
	cd "$(brew --repo)/Library/Taps/homebrew/homebrew-cask"
	git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

## 参考
1. [mirrors](http://mirrors.ustc.edu.cn/)
2. [bottles](http://mirrors.ustc.edu.cn/help/homebrew-bottles.html)

----
