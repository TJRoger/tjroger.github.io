## Summary
We use this repo as our technique blogspot and host distributed apps.
The repo [lean by teaching](https://tjroger.github.io) is forked from [七扯](http://blog.sevenChe.com).
The repo is built with `Jekyll`, Jekyll is a Ruby program, which can generate static HTML files with our favorite syntax of `markdown`
We use [gitalk](https://github.com/gitalk/gitalk) to provide comments feature.
We use [share.js](https://github.com/overtrue/share.js) to provide social feature.

## Usage

#### Deployment
You can use this repo as your blogspot at a starting point by forking. And you'd like to do some setups:  
- delete my articles in `_posts`
- delete Git history by deleting `.git/`
- change `clientID` and `clientSecret` in `media/js/comments.js`
- change Google Analytics UA `_gaq.push(['_setAccount', 'UA-12936429-2']);` in `_layouts/default.html`

#### Post articles
We provided a script `post` to automate the procedures.
You can create an article by running `./post <article name>` in the root directory of the repo.
The script will automatically create the proper markdown file at the proper location. And lead you to edit the markdown file in `vim`

Thanks for using and sharing.

## credit
[TJRoger](https://github.com/tjroger)
