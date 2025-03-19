import{_ as r,c as d,d as s,e as o,b as h,g as e,a as t,f as a,r as l,o as k}from"./app-Ciqs_Xc9.js";const g={},m={id:"响应的数据绑定",tabindex:"-1"},u={class:"header-anchor",href:"#响应的数据绑定"};function A(v,i){const n=l("RouteLink"),p=l("Badge");return k(),d("div",null,[i[28]||(i[28]=s("p",null,"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。",-1)),s("p",null,[i[4]||(i[4]=e("整个小程序框架系统分为两部分: ")),t(n,{to:"/code/mini-app/guide/service/"},{default:a(()=>i[0]||(i[0]=[s("strong",null,"逻辑层",-1)])),_:1}),i[5]||(i[5]=e(" (App Service) 和 ")),t(n,{to:"/code/mini-app/guide/view/"},{default:a(()=>i[1]||(i[1]=[s("strong",null,"视图层",-1)])),_:1}),i[6]||(i[6]=e(" (../view)。小程序提供了自己的视图层描述语言 ")),t(n,{to:"/code/mini-app/guide/view/wxml.html"},{default:a(()=>i[2]||(i[2]=[e("WXML")])),_:1}),i[7]||(i[7]=e(" 和 ")),t(n,{to:"/code/mini-app/guide/view/wxss.html"},{default:a(()=>i[3]||(i[3]=[e("WXSS")])),_:1}),i[8]||(i[8]=e("，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。"))]),o(" more "),s("h2",m,[s("a",u,[s("span",null,[i[9]||(i[9]=e("响应的数据绑定 ")),t(p,{text:"务必理解",type:"error"})])])]),i[29]||(i[29]=h(`<p>框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。</p><p><a href="https://developers.weixin.qq.com/s/l0gLEKmv6gZa" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- This is our View --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; Hello {{name}}! &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;changeName&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; Click me! &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// This is our App Service.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// This is our data.</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> helloData</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;WeChat&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Register a Page.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> helloData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  changeName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // sent data change to view</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;MINA&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>开发者通过框架将逻辑层数据中的 <code>name</code> 与视图层的 <code>name</code> 进行了绑定，所以在页面一打开的时候会显示 <code>Hello WeChat!</code>；</li><li>当点击按钮的时候，视图层会发送 <code>changeName</code> 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；</li><li>回调函数触发后，逻辑层执行 <code>setData</code> 的操作，将 <code>data</code> 中的 <code>name</code> 从 <code>WeChat</code> 变为 <code>MINA</code>，因为该数据和视图层已经绑定了，从而视图层会自动改变为 <code>Hello MINA!</code>。</li></ol><h2 id="页面管理" tabindex="-1"><a class="header-anchor" href="#页面管理"><span>页面管理</span></a></h2>`,6)),s("p",null,[i[11]||(i[11]=s("strong",null,"框架",-1)),i[12]||(i[12]=e(" 管理了整个小程序的页面路由，可以做到页面间的无缝切换，并给以页面完整的 ")),t(n,{to:"/code/mini-app/guide/service/lifetime.html"},{default:a(()=>i[10]||(i[10]=[e("生命周期")])),_:1}),i[13]||(i[13]=e("。开发者需要做的只是将页面的数据、方法、生命周期函数注册到 ")),i[14]||(i[14]=s("strong",null,"框架",-1)),i[15]||(i[15]=e(" 中，其他的一切复杂的操作都交由 ")),i[16]||(i[16]=s("strong",null,"框架",-1)),i[17]||(i[17]=e(" 处理。"))]),i[30]||(i[30]=s("h2",{id:"基础组件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#基础组件"},[s("span",null,"基础组件")])],-1)),s("p",null,[i[20]||(i[20]=s("strong",null,"框架",-1)),i[21]||(i[21]=e(" 提供了一套基础的 ")),t(n,{to:"/code/mini-app/guide/view/component.html"},{default:a(()=>i[18]||(i[18]=[e("组件")])),_:1}),i[22]||(i[22]=e("，")),t(n,{to:"/code/mini-app/guide/view/component.html"},{default:a(()=>i[19]||(i[19]=[e("这些组件")])),_:1}),i[23]||(i[23]=e(" 自带微信风格的样式以及特殊的逻辑，开发者可以通过组合基础组件，创建出强大的微信小程序 。"))]),i[31]||(i[31]=s("h2",{id:"丰富的-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#丰富的-api"},[s("span",null,"丰富的 API")])],-1)),s("p",null,[i[25]||(i[25]=s("strong",null,"框架",-1)),i[26]||(i[26]=e(" 提供丰富的 ")),t(n,{to:"/code/mini-app/guide/service/api/"},{default:a(()=>i[24]||(i[24]=[e("微信原生 API")])),_:1}),i[27]||(i[27]=e("，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。"))])])}const B=r(g,[["render",A],["__file","intro.html.vue"]]),c=JSON.parse('{"path":"/code/mini-app/guide/frame/intro.html","title":"框架","lang":"zh-CN","frontmatter":{"date":"2020-12-12T00:00:00.000Z","title":"框架","icon":"frame","category":"小程序","description":"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。 整个小程序框架系统分为两部分: 逻辑层 (App Service) 和 视图层 (../view)。小程序提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/mini-app/guide/frame/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"框架"}],["meta",{"property":"og:description","content":"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。 整个小程序框架系统分为两部分: 逻辑层 (App Service) 和 视图层 (../view)。小程序提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:published_time","content":"2020-12-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"框架\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"响应的数据绑定","slug":"响应的数据绑定","link":"#响应的数据绑定","children":[]},{"level":2,"title":"页面管理","slug":"页面管理","link":"#页面管理","children":[]},{"level":2,"title":"基础组件","slug":"基础组件","link":"#基础组件","children":[]},{"level":2,"title":"丰富的 API","slug":"丰富的-api","link":"#丰富的-api","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":2.11,"words":633},"filePathRelative":"code/mini-app/guide/frame/intro.md","localizedDate":"2020年12月12日","excerpt":"<p>小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。</p>\\n<p>整个小程序框架系统分为两部分: <a href=\\"/code/mini-app/guide/service/\\" target=\\"_blank\\"><strong>逻辑层</strong></a> (App Service) 和 <a href=\\"/code/mini-app/guide/view/\\" target=\\"_blank\\"><strong>视图层</strong></a> (../view)。小程序提供了自己的视图层描述语言 <a href=\\"/code/mini-app/guide/view/wxml.html\\" target=\\"_blank\\">WXML</a> 和 <a href=\\"/code/mini-app/guide/view/wxss.html\\" target=\\"_blank\\">WXSS</a>，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。</p>\\n","autoDesc":true}');export{B as comp,c as data};
