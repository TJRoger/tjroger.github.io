## 说明
此Git库为我的博客  [Learning by teaching](http://tjroger.github.io),自己的学习笔记博客，从[七扯](http://blog.sevenChe.com)拷贝过来。
使用Jekyll进行搭建，Jekyll是一个Ruby写的程序，可以将Markdown写的文章通过模板生成最终的Html静态文件。
博客文章的评论功能使用了Gitalk。

## 使用攻略

#### 部署
如果你直接拷贝或Fork本Git库作为自己的博客，一定不要忘记以下注意事项：  
- 删除我写的文章`_post/`和Git历史（删除.git文件夹)
- 修改 `media/js/comments.js` 中的`clientID`和`clientSecret`
- 修改 `_layouts / default.html`中 google analytics的标识  `_gaq.push(['_setAccount', 'UA-12936429-2']);`。

#### 本地运行
安装Jekyll和bundle
`gem install jekyll bundler`
在repo根目录运行
`bundle exec jekyll serve`
Jekyll中使用了分页功能首页不能正常显示正常。

#### 发表文章
新增了post脚本，可以直接运行`./post hello_github`来创建post，脚本会自动创建markdown文件并进入`vim`编辑

最后感谢您的使用和分享。

## Credit
[TJRoger](https://tjroger.github.io)
