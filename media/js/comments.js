var gitalk = new Gitalk({
    clientID: '4385a35b55e5381d97f8',
    clientSecret: '561beab90a587248c19abf8646088958f622d70d',
    repo: 'tjroger.github.io',
    owner: 'TJRoger',
    admin: ['TJRoger'],
    id: location.pathname,
    distractionFreeMode: false
})
gitalk.render('gitalk-container')
