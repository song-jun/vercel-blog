import{_ as a,c as n,d as t,e as s,b as o,g as i,o as l}from"./app-Ciqs_Xc9.js";const r={};function d(p,e){return l(),n("div",null,[e[0]||(e[0]=t("p",null,[i("每一个小程序页面也可以使用 "),t("code",null,".json"),i(" 文件来对本页面的窗口表现进行配置。")],-1)),s(" more "),e[1]||(e[1]=o(`<p>页面中配置项在当前页面会覆盖 <code>app.json</code> 的 <code>window</code> 中相同的配置项。文件内容为一个 JSON 对象，有以下属性:</p><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><p>| 属性 | 类型 | 默认值 | 描述 | 最低版本 | | ------------------------------------------ | -------------------------------- | -------- | ------------------------------------------------------------------------------------ | ----------------- | ---------------- | | navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 #000000 | | navigationBarTextStyle | string | white | 导航栏标题颜色，仅支持 black / white | | navigationBarTitleText | string | | 导航栏标题文字内容 | | navigationStyle | string | default | 导航栏样式，仅支持以下值: default 默认样式 custom 自定义导航栏，只保留右上角胶囊按钮 | | 微信客户端 7.0.0 | | backgroundColor | HexColor | #ffffff | 窗口的背景色 | | backgroundTextStyle | string | dark | 下拉 loading 的样式，仅支持 dark / light | | backgroundColorTop | string | #ffffff | 顶部窗口的背景色，仅 iOS 支持 | 微信客户端 6.5.16 | | backgroundColorBottom | string | #ffffff | 底部窗口的背景色，仅 iOS 支持 | 微信客户端 6.5.16 | | enablePullDownRefresh | boolean | false | 是否开启当前页面下拉刷新。 | | 详见 Page.onPullDownRefresh | | onReachBottomDistance | number | 50 | 页面上拉触底事件触发时距页面底部距离，单位为 px。 | | 详见 Page.onReachBottom | | pageOrientation | string | portrait | 屏幕旋转设置，支持 auto / portrait / landscape | | 详见 响应显示区域变化 | 2.4.0 (auto) / 2.5.0 (landscape) | | disableScroll | boolean | false | 设置为 true 则页面整体不能上下滚动。 | | 只在页面配置中有效，无法在 app.json 中设置 | | usingComponents | Object | 否 | 页面自定义组件配置 | 1.6.3 | | style | string | default | 启用新版的组件样式 | 2.10.2 | | singlePage | Object | 否 | 单页模式相关配置 | 2.12.0 |</p><blockquote><p>页面配置中只能设置 <code>app.json</code> 中 <code>window</code> 对应的配置项，以决定本页面的窗口表现，所以无需写 <code>window</code> 这个属性。</p></blockquote><h2 id="singlepage" tabindex="-1"><a class="header-anchor" href="#singlepage"><span>singlePage</span></a></h2><blockquote><p>基础库 2.11.3 及以上版本支持，目前分享到朋友圈 (Beta) 后打开会进入单页模式</p></blockquote><p>单页模式相关配置</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>navigationBarFit</td><td>String</td><td>否</td><td>默认自动调整，若原页面是自定义导航栏，则为 <code>float</code>，否则为 <code>squeezed</code></td><td>导航栏与页面的相交状态，值为 <code>float</code> 时表示导航栏浮在页面上，与页面相交；值为 <code>squeezed</code> 时表示页面被导航栏挤压，与页面不相交</td></tr></tbody></table><h2 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;navigationBarBackgroundColor&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;#ffffff&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;navigationBarTextStyle&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;black&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;navigationBarTitleText&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;微信接口功能演示&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;backgroundColor&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;#eeeeee&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;backgroundTextStyle&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;light&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10))])}const c=a(r,[["render",d],["__file","page-config.html.vue"]]),g=JSON.parse('{"path":"/code/mini-app/guide/config/page-config.html","title":"页面配置","lang":"zh-CN","frontmatter":{"title":"页面配置","icon":"page","category":"小程序","description":"每一个小程序页面也可以使用 .json 文件来对本页面的窗口表现进行配置。","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/mini-app/guide/config/page-config.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"页面配置"}],["meta",{"property":"og:description","content":"每一个小程序页面也可以使用 .json 文件来对本页面的窗口表现进行配置。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[]},{"level":2,"title":"singlePage","slug":"singlepage","link":"#singlepage","children":[]},{"level":2,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.95,"words":585},"filePathRelative":"code/mini-app/guide/config/page-config.md","localizedDate":"2022年8月4日","excerpt":"<p>每一个小程序页面也可以使用 <code>.json</code> 文件来对本页面的窗口表现进行配置。</p>\\n","autoDesc":true}');export{c as comp,g as data};
