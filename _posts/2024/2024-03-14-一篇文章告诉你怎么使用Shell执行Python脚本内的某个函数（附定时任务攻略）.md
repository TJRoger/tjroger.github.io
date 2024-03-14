---
layout: post
title: 一篇文章告诉你怎么使用Shell执行Python脚本内的某个函数（附定时任务攻略）
categories:
- shell,tools,productive
tags:
- python,shell,定时任务
---
### 问题
在自建汇率监控工具箱时遇到一个问题，**定时任务要怎么根据不同场景调用同一个Python脚本不同的方法**？
### 解决过程
分成两步，如果能在Shell调用Python脚本的指定方法，那不就简单了么
#### 第一步、于是在万能的互联网上先搜索，怎么在Shell调用Python
找到了[shell执行python某个函数 ](https://blog.51cto.com/u_16213444/7769335)这篇文章，它详细地介绍了使用inspect和importlib来实现调用某个方法的方法
```python
import inspect
import importlib

def is_valid_function(module, function_name):
    if not hasattr(module, function_name):
        return False
    func = getattr(module, function_name)
    return inspect.isfunction(func)

def import_module(module_name):
    return importlib.import_module(module_name)

def call_function(module, function_name):
    func = getattr(module, function_name)
    return func()

def print_result(result):
    print(result)

if __name__ == "__main__":
    # 步骤1：输入函数名
    function_name = input("请输入要执行的函数名: ")

    # 步骤2：检查函数名的有效性
    module = import_module("your_module")  # 替换为你的模块名
    if not is_valid_function(module, function_name):
        print("函数名无效，请重新输入。")
        exit(1)

    # 步骤4：调用相应的函数
    result = call_function(module, function_name)

    # 步骤5：输出结果
    print_result(result)
```
**上面是原实现，call_function可以再优化一下添加参数**
```python
def call_function(module, function_name, *args, **kwargs):
    func = getattr(module, function_name)
    return func(*args, **kwargs)

```
使用shell脚本直接调用上述脚本就可以间接实现调用Python脚本内某个函数了
#####终极方法
上述解决方案还需要额外写一个脚本，感觉一点不geek，于是继续寻找，最后找到了`python -c `这个命令，它可以直接运行Python命令，于是
```bash
python -c "from your_module import your_function; your_function()"
```
完美实现shell运行Python脚本内的某个方法。
####第二步定时任务调度crontab
大名鼎鼎的crontab大家应该都知道吧
```
30 * * * * cd /home/work/Liana/monitor && /usr/bin/python3 money.py 1 >> ~/.crontab.log 2>&1
30 08 * * * cd /home/work/Liana/monitor && /usr/bin/python3 -c 'from money import get_jpy_cny_rate; get_jpy_cny_rate(True)' 1 >> ~/.crontab.log 2>&1
```
这是我的生产环境部署的两条命令，就不详细介绍了。
完结，撒花

----
