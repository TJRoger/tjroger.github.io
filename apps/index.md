---
title: Apps
layout: page
---

<div id="tag_cloud">
  <ul class="listing">
    {% for post in site.categories['page'] %}
    <li class="listing-item">
      <!-- <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time> -->
      <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
    </li>
    {% endfor %}
    <li class="listing-item">
      <a href="/apps/goftp" title="Go FTP">Go FTP </a>
    </li>
    <li class="listing-item">
      <a href="/apps/gomorse" title="Go Morse">Go Morse </a>
    </li>
  </ul>
</div>


<script src="/media/js/jquery.tagcloud.js" type="text/javascript" charset="utf-8"></script> 
<script language="javascript">
$.fn.tagcloud.defaults = {
    size: {start: 1, end: 1, unit: 'em'},
      color: {start: '#f8e0e6', end: '#ff3333'}
};

$(function () {
    $('#tag_cloud a').tagcloud();
});
</script>
