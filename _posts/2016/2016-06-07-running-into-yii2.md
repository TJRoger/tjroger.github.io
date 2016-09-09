---
layout: post
title: Running into Yii2
categories:
- yii2
tags:
- yii2, PHP
---

     
	 
## scalable attributes

## beforeSave vs afterSave

## crontab

## grep
```bash
grep -rn '"' *
grep -rn '\\' *
```

```bash
grep -rn "\\" *                                                                                                                            luocy@bj-zdev02
grep: Trailing backslash
```
should be
```grep -rn "\\\\" *```


## replace string in multiple files

```bash
sed -i "s/oldString/newString/g" `grep oldString -rl *`
```

----
