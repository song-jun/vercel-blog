import{_ as p,c as d,b as e,d as n,f as s,a as t,w as l,r as h,o}from"./app-B-ayoO34.js";const r={};function k(c,i){const a=h("RouteLink");return o(),d("div",null,[i[12]||(i[12]=e(`<h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途"><span>用途</span></a></h2><ul><li>将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用</li><li>将复杂的页面拆分成多个低耦合的模块，有助于代码维护。</li></ul><h2 id="创建自定义组件" tabindex="-1"><a class="header-anchor" href="#创建自定义组件"><span>创建自定义组件</span></a></h2><p>类似于页面，一个自定义组件由 <code>json</code> <code>wxml</code> <code>wxss</code> <code>js</code> 4 个文件组成。</p><p>要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 <code>component</code> 字段设为 <code>true</code> 可将这一组文件设为自定义组件):</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;component&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)),n("p",null,[i[1]||(i[1]=s("同时，还要在 ")),i[2]||(i[2]=n("code",null,"wxml",-1)),i[3]||(i[3]=s(" 文件中编写组件模板，在 ")),i[4]||(i[4]=n("code",null,"wxss",-1)),i[5]||(i[5]=s(" 文件中加入组件样式，它们的写法与页面的写法类似。具体细节和注意事项参见 ")),t(a,{to:"/code/mini-app/guide/custom-component/style.html"},{default:l(()=>i[0]||(i[0]=[s("组件模板和样式")])),_:1}),i[6]||(i[6]=s(" 。"))]),i[13]||(i[13]=e(`<details class="hint-container details"><summary>代码示例</summary><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 这是自定义组件的内部WXML结构 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;inner&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{innerText}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">slot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">slot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*这里的样式只应用于这个自定义组件*/</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.inner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在组件 <code>wxss</code> 中不应使用 ID 选择器、属性选择器和标签名选择器。</p></div><p>在自定义组件的 js 文件中，需要使用 <code>Component()</code> 来注册组件，并提供组件的属性定义、内部数据和自定义方法。</p>`,3)),n("p",null,[i[8]||(i[8]=s("组件的属性值和内部数据将被用于组件 ")),i[9]||(i[9]=n("code",null,"wxml",-1)),i[10]||(i[10]=s(" 的渲染，其中，属性值是可由组件外部传入的。更多细节参见 ")),t(a,{to:"/code/mini-app/guide/custom-component/component.html"},{default:l(()=>i[7]||(i[7]=[s("Component 构造器")])),_:1}),i[11]||(i[11]=s(" 。"))]),i[14]||(i[14]=e(`<details class="hint-container details"><summary>代码示例</summary><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  properties</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 这里定义了innerText属性，属性值可以在组件使用时指定</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    innerText</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;default value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 这里是一些组件内部数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    someData</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 这里是一个自定义方法</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    customMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="使用自定义组件" tabindex="-1"><a class="header-anchor" href="#使用自定义组件"><span>使用自定义组件</span></a></h2><p>自定义组件在使用时与基础组件非常相似。</p><p>使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;usingComponents&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;component-tag-name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;path/to/the/custom/component&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，在页面的 <code>wxml</code> 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在 app.json 中也可以声明 <code>usingComponents</code> 字段，在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。</p></div><details class="hint-container details"><summary>代码示例</summary><p><a href="https://developers.weixin.qq.com/s/OMfVAKmZ6KZT" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  &lt;!-- 以下是对一个自定义组件的引用 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">component-tag-name</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> inner-text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Some text&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>自定义组件的 <code>wxml</code> 节点结构在与数据结合之后，将被插入到引用位置内。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>因为 WXML 节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。</li><li>自定义组件也是可以引用自定义组件的，引用方法类似于页面引用自定义组件的方式(使用 <code>usingComponents</code> 字段)。</li><li>自定义组件和页面所在项目根目录名不能以 <code>wx-</code> 为前缀，否则会报错。</li></ul></div><p>注意，是否在页面文件中使用 <code>usingComponents</code> 会使得页面的 <code>this</code> 对象的原型稍有差异，包括:</p><ul><li>使用 <code>usingComponents</code> 页面的原型与不使用时不一致，即 <code>Object.getPrototypeOf(this)</code> 结果不同。</li><li>使用 <code>usingComponents</code> 时会多一些方法，如 <code>selectComponent</code> 。</li><li>出于性能考虑，使用 <code>usingComponents</code> 时， <code>setData</code> 内容不会被直接深复制，即 <code>this.setData({ field: obj })</code> 后 <code>this.data.field === obj</code>。(深复制会在这个值被组件间传递时发生。)</li></ul><p>如果页面比较复杂，新增或删除 <code>usingComponents</code> 定义段时建议重新测试一下。</p>`,13))])}const m=p(r,[["render",k]]),u=JSON.parse('{"path":"/code/mini-app/guide/custom-component/intro.html","title":"自定义组件","lang":"zh-CN","frontmatter":{"date":"2020-12-19T00:00:00.000Z","title":"自定义组件","icon":"info","category":"小程序","description":"用途 将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用 将复杂的页面拆分成多个低耦合的模块，有助于代码维护。 创建自定义组件 类似于页面，一个自定义组件由 json wxml wxss js 4 个文件组成。 要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 component 字段设为 true 可将这一组文件设...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/mini-app/guide/custom-component/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"自定义组件"}],["meta",{"property":"og:description","content":"用途 将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用 将复杂的页面拆分成多个低耦合的模块，有助于代码维护。 创建自定义组件 类似于页面，一个自定义组件由 json wxml wxss js 4 个文件组成。 要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 component 字段设为 true 可将这一组文件设..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:published_time","content":"2020-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义组件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":3.21,"words":964},"filePathRelative":"code/mini-app/guide/custom-component/intro.md","localizedDate":"2020年12月19日","excerpt":"<h2>用途</h2>\\n<ul>\\n<li>将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用</li>\\n<li>将复杂的页面拆分成多个低耦合的模块，有助于代码维护。</li>\\n</ul>\\n<h2>创建自定义组件</h2>\\n<p>类似于页面，一个自定义组件由 <code>json</code> <code>wxml</code> <code>wxss</code> <code>js</code> 4 个文件组成。</p>\\n<p>要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 <code>component</code> 字段设为 <code>true</code> 可将这一组文件设为自定义组件):</p>","autoDesc":true}');export{m as comp,u as data};
