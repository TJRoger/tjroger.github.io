<section class="share">
  <div class="social-share"></div>
  <script src="https://cdn.bootcss.com/social-share.js/1.0.16/js/social-share.min.js"></script>
</section>

<section class="comment">
  <!-- gitalk -->
  <div id="gitalk-container" ></div>
  <script src="//cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
  <script type="text/javascript">
      const gitalk = new Gitalk({
      clientID: '4385a35b55e5381d97f8',
      clientSecret: '561beab90a587248c19abf8646088958f622d70d',
      repo: 'tjroger.github.io',
      owner: 'TJRoger',
      admin: ['TJRoger'],
      id: location.pathname,
      distractionFreeMode: false
      })
      gitalk.render('gitalk-container')
  </script>
  <!-- gitalk end-->
</section>

