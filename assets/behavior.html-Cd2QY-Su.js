import{_ as i,c as s,b as n,o as a}from"./app-B-ayoO34.js";const e={};function d(r,t){return a(),s("div",null,t[0]||(t[0]=[n(`<p><code>Behavior</code> 注册一个 behavior，接受一个 Object 类型的参数。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><table><thead><tr><th>定义段</th><th>类型</th><th>是否必填</th><th>描述</th></tr></thead><tbody><tr><td>properties</td><td>Object Map</td><td>否</td><td>同组件的属性</td></tr><tr><td>data</td><td>Object</td><td>否</td><td>同组件的数据</td></tr><tr><td>methods</td><td>Object</td><td>否</td><td>同自定义组件的方法</td></tr><tr><td>behaviors</td><td>String Array</td><td>否</td><td>引入其它的 behavior</td></tr><tr><td>created</td><td>Function</td><td>否</td><td>生命周期函数</td></tr><tr><td>attached</td><td>Function</td><td>否</td><td>生命周期函数</td></tr><tr><td>ready</td><td>Function</td><td>否</td><td>生命周期函数</td></tr><tr><td>moved</td><td>Function</td><td>否</td><td>生命周期函数</td></tr><tr><td>detached</td><td>Function</td><td>否</td><td>生命周期函数</td></tr></tbody></table><details class="hint-container details"><summary>代码示例</summary><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// my-behavior.js</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Behavior</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  behaviors</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  properties</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    myBehaviorProperty</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    myBehaviorData</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  attached</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    myBehaviorMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,4)]))}const h=i(e,[["render",d]]),p=JSON.parse('{"path":"/code/mini-app/guide/custom-component/behavior.html","title":"Behavior","lang":"zh-CN","frontmatter":{"date":"2020-12-19T00:00:00.000Z","title":"Behavior","category":"小程序","description":"Behavior 注册一个 behavior，接受一个 Object 类型的参数。 参数 代码示例","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/mini-app/guide/custom-component/behavior.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"Behavior"}],["meta",{"property":"og:description","content":"Behavior 注册一个 behavior，接受一个 Object 类型的参数。 参数 代码示例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:published_time","content":"2020-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Behavior\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":0.49,"words":146},"filePathRelative":"code/mini-app/guide/custom-component/behavior.md","localizedDate":"2020年12月19日","excerpt":"<p><code>Behavior</code> 注册一个 behavior，接受一个 Object 类型的参数。</p>\\n<h2>参数</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>定义段</th>\\n<th>类型</th>\\n<th>是否必填</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>properties</td>\\n<td>Object Map</td>\\n<td>否</td>\\n<td>同组件的属性</td>\\n</tr>\\n<tr>\\n<td>data</td>\\n<td>Object</td>\\n<td>否</td>\\n<td>同组件的数据</td>\\n</tr>\\n<tr>\\n<td>methods</td>\\n<td>Object</td>\\n<td>否</td>\\n<td>同自定义组件的方法</td>\\n</tr>\\n<tr>\\n<td>behaviors</td>\\n<td>String Array</td>\\n<td>否</td>\\n<td>引入其它的 behavior</td>\\n</tr>\\n<tr>\\n<td>created</td>\\n<td>Function</td>\\n<td>否</td>\\n<td>生命周期函数</td>\\n</tr>\\n<tr>\\n<td>attached</td>\\n<td>Function</td>\\n<td>否</td>\\n<td>生命周期函数</td>\\n</tr>\\n<tr>\\n<td>ready</td>\\n<td>Function</td>\\n<td>否</td>\\n<td>生命周期函数</td>\\n</tr>\\n<tr>\\n<td>moved</td>\\n<td>Function</td>\\n<td>否</td>\\n<td>生命周期函数</td>\\n</tr>\\n<tr>\\n<td>detached</td>\\n<td>Function</td>\\n<td>否</td>\\n<td>生命周期函数</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{h as comp,p as data};
