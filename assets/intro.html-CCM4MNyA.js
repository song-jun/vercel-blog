import{_ as t,c as a,d as i,e as n,b as l,f as e,o as r}from"./app-B-ayoO34.js";const h={};function p(d,s){return r(),a("div",null,[s[0]||(s[0]=i("p",null,"jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。",-1)),s[1]||(s[1]=i("p",null,"jQuery 能帮我们干这些事情:",-1)),s[2]||(s[2]=i("ul",null,[i("li",null,"消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；"),i("li",null,[e("简洁的操作 DOM 的方法: 写 "),i("code",null,"$('#test')"),e(" 肯定比 "),i("code",null,"document.getElementById('test')"),e(" 来得简洁；")]),i("li",null,"轻松实现动画、修改 CSS 等各种操作。"),i("li",null,"jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!")],-1)),n(" more "),s[3]||(s[3]=l(`<h2 id="jquery-版本" tabindex="-1"><a class="header-anchor" href="#jquery-版本"><span>jQuery 版本</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>jQuery 的 <code>1.x</code> 版本 兼容 ie678，<code>2.x</code> 为了精简代码体积移除了 ie678 的兼容。<code>3.x</code> 只兼容最新的一批浏览器，是官方还在更新维护的把呢不能</p><p>由于已经 2023 年了，直接选用 jQuery<code>3.x</code> 版本即可。</p></div><p>从 jQuery 官网可以下载最新版本。jQuery 只是一个 jquery-xxx.js 文件，但您会看到有 compressed(已压缩)和 uncompressed(未压缩)两种版本，使用时完全一样，但如果您想深入研究 jQuery 源码，那就用 uncompressed 版本。</p><h2 id="使用-jquery" tabindex="-1"><a class="header-anchor" href="#使用-jquery"><span>使用 jQuery</span></a></h2><p>使用 jQuery 只需要在页面的 <code>&lt;head&gt;</code> 引入 jQuery 文件即可:</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;//code.jquery.com/jquery-3.4.1.min.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号"><span>$ 符号</span></a></h2><p><code>$</code> 是著名的 jQuery 符号。实际上，jQuery 把所有功能全部封装在一个全局变量 jQuery 中，而 <code>$</code> 也是一个合法的变量名，它是变量 jQuery 的别名:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// jQuery(selector, context)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// jQuery(selector, context)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">$</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> jQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// true</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> $</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// &#39;function&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$</code> 本质上就是一个函数，但是函数也是对象，于是 <code>$</code> 除了可以直接调用外，也可以有很多其他属性。</p><p>注意，您看到的 <code>$</code> 函数名可能不是 <code>jQuery(selector, context)</code>，因为很多 JavaScript 压缩工具可以对函数名和参数改名，所以压缩过的 jQuery 源码 <code>$</code> 函数可能变成 <code>a(b, c)</code>。</p><p>绝大多数时候，我们都直接用 <code>$</code> (因为写起来更简单嘛)。但是，如果 <code>$</code> 这个变量不幸地被占用了，而且还不能改，那我们就只能让 jQuery 把 <code>$</code> 变量交出来，然后就只能使用 <code>jQuery</code> 这个变量:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// jQuery(selector, context)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">jQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">noConflict</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// undefined</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">jQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// jQuery(selector, context)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种黑魔法的原理是 jQuery 在占用<code>$</code>之前，先在内部保存了原来的<code>$</code>,调用 <code>jQuery.noConflict()</code> 时会把原来保存的变量还原。</p>`,14))])}const o=t(h,[["render",p]]),c=JSON.parse(`{"path":"/code/website/jQuery/intro.html","title":"jQuery 介绍","lang":"zh-CN","frontmatter":{"title":"jQuery 介绍","icon":"creative","category":"jQuery","date":"2019-11-02T00:00:00.000Z","tag":["介绍"],"description":"jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。 jQuery 能帮我们干这些事情: 消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码； 简洁的操作 DOM 的方法: 写 $('#test') 肯定比 documen...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/website/jQuery/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"jQuery 介绍"}],["meta",{"property":"og:description","content":"jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。 jQuery 能帮我们干这些事情: 消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码； 简洁的操作 DOM 的方法: 写 $('#test') 肯定比 documen..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:published_time","content":"2019-11-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jQuery 介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":2.04,"words":613},"filePathRelative":"code/website/jQuery/intro.md","localizedDate":"2019年11月2日","excerpt":"<p>jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。</p>\\n<p>jQuery 能帮我们干这些事情:</p>\\n<ul>\\n<li>消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；</li>\\n<li>简洁的操作 DOM 的方法: 写 <code>$('#test')</code> 肯定比 <code>document.getElementById('test')</code> 来得简洁；</li>\\n<li>轻松实现动画、修改 CSS 等各种操作。</li>\\n<li>jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!</li>\\n</ul>\\n","autoDesc":true}`);export{o as comp,c as data};
