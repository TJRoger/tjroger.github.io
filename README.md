## 概要说明
此Git库为我的博客  [learn by teaching](http://tjroger.github.io),自己的学习笔记博客，从[七扯](http://blog.sevenChe.com)拷贝过来。
使用Jekyll进行搭建，Jekyll是一个Ruby写的程序，可以将Markdown写的文章通过模板生成最终的Html静态文件。
博客文章的评论功能使用了Disqus。

## 攻略

#### 部署
如果你直接拷贝或Fork本Git库作为自己的博客，一定不要忘记删除我写的文章和Git历史（删除.git文件夹）以及修改 `_includes / comments.md` 中的disqus_shortname，以及修改 `_layouts / default.html`中 google analytics的标识  `_gaq.push(['_setAccount', 'UA-12936429-2']);`。

最后感谢您的配合。

#### post文章
新增了post脚本，可以直接运行`./post hello_github`来创建post，脚本会自动创建markdown文件并进入`vim`编辑

## credit
[TJRoger](https://tjroger.github.io)
