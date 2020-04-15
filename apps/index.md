---
title: Apps
layout: page
---

<div id="tag_cloud">
{% for cat in site.categoires %}
<textarea>{{ site.caegories }}</textarea>
{% endfor %}
<ul class="listing">
  <a href="{{ size.url }}/goftp" title="Go FTP">Go FTP </a>
  <a href="{{ size.url }}/gomorse" title="Go Morse">Go Morse </a>
</ul?


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
