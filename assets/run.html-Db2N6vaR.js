import{_ as t,c as n,b as o,o as a}from"./app-B-ayoO34.js";const r={};function i(p,e){return a(),n("div",null,e[0]||(e[0]=[o('<h2 id="小程序启动" tabindex="-1"><a class="header-anchor" href="#小程序启动"><span>小程序启动</span></a></h2><p>小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。</p><ul><li>热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；</li><li>冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。</li></ul><p>小程序没有重启的概念。</p><h2 id="前台-后台状态" tabindex="-1"><a class="header-anchor" href="#前台-后台状态"><span>前台/后台状态</span></a></h2><p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了<strong>后台</strong>状态；</p><p>当用户再次进入微信或再次打开小程序，小程序又会从后台进入<strong>前台</strong>。</p><h2 id="小程序销毁" tabindex="-1"><a class="header-anchor" href="#小程序销毁"><span>小程序销毁</span></a></h2><p>需要注意的是: 只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。</p><ul><li>当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间后(目前是 5 分钟)小程序会被微信主动销毁。</li><li>当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。 <ul><li>在 iOS 上，当微信客户端在一定时间间隔内(目前是 5 秒)连续收到两次及以上系统内存告警时，会主动进行小程序的销毁，并提示用户 「该小程序可能导致微信响应变慢被终止」。</li><li>建议小程序在必要时使用 <code>wx.onMemoryWarning</code> 监听内存告警事件，进行必要的内存清理。</li></ul></li></ul>',10)]))}const s=t(r,[["render",i]]),c=JSON.parse('{"path":"/code/mini-app/guide/service/run.html","title":"小程序运行机制","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"小程序运行机制","icon":"play","category":"小程序","description":"小程序启动 小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。 热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动； 冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。 小程序没有重启的概念。 前台/后台...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/mini-app/guide/service/run.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"小程序运行机制"}],["meta",{"property":"og:description","content":"小程序启动 小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。 热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动； 冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。 小程序没有重启的概念。 前台/后台..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"小程序运行机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.57,"words":471},"filePathRelative":"code/mini-app/guide/service/run.md","localizedDate":"2020年10月9日","excerpt":"<h2>小程序启动</h2>\\n<p>小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。</p>\\n<ul>\\n<li>热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；</li>\\n<li>冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。</li>\\n</ul>\\n<p>小程序没有重启的概念。</p>\\n<h2>前台/后台状态</h2>\\n<p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了<strong>后台</strong>状态；</p>","autoDesc":true}');export{s as comp,c as data};
