import{_ as n,c as t,d as i,e as l,b as e,g as a,o as h}from"./app-Ciqs_Xc9.js";const k={};function p(r,s){return h(),t("div",null,[s[0]||(s[0]=i("p",null,"Python 内置了很多有用的函数，我们可以直接调用。",-1)),s[1]||(s[1]=i("p",null,[a("要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数 "),i("code",null,"abs"),a("，只有一个参数。可以直接从 Python 的官方网站 "),i("a",{href:"http://docs.python.org/3/library/functions.html#abs",target:"_blank",rel:"noopener noreferrer"},"查看文档"),a(":")],-1)),l(" more "),s[2]||(s[2]=e(`<p>也可以在交互式命令行通过 <code>help(abs)</code> 查看 <code>abs</code> 函数的帮助信息。</p><p>调用 <code>abs</code> 函数:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> abs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> abs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> abs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12.34</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12.34</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用函数的时候，如果传入的参数数量不对，会报 <code>TypeError</code> 的错误，并且 Python 会明确地告诉您: <code>abs()</code> 有且仅有 1 个参数，但给出了两个:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&gt;&gt; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">abs(1,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Traceback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (most </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">recent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> call</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> last</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">modul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">TypeError:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> abs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">takes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exactly</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> one</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> argument</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (2 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">given</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果传入的参数数量是对的，但参数类型不能被函数所接受，也会报 <code>TypeError</code> 的错误，并且给出错误信息: str 是错误的参数类型:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&gt;&gt; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">abs(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;a&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Traceback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (most </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">recent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> call</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> last</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">modul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">TypeError:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bad</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> operand</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> abs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;str&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 max 函数 <code>max()</code> 可以接收任意多个参数，并返回最大的那个:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换"><span>数据类型转换</span></a></h2><p>Python 内置的常用函数还包括数据类型转换函数，比如 <code>int()</code> 函数可以把其他数据类型转换为整数:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;123&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">123</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12.34</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;12.34&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12.34</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.23</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;1.23&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;100&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> bool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> bool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数名其实就是指向一个函数对象的引用，完全可以把函数名赋给一个变量，相当于给这个函数起了一个“别名”:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> abs</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 变量a指向abs函数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 所以也可以通过a调用abs函数</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>调用 Python 的函数，需要根据函数定义，传入正确的参数。如果函数调用出错，一定要学会看错误信息，所以英文很重要!</p>`,16))])}const g=n(k,[["render",p],["__file","call.html.vue"]]),y=JSON.parse('{"path":"/code/language/python/function/call.html","title":"调用函数","lang":"zh-CN","frontmatter":{"title":"调用函数","icon":"call","author":"廖雪峰","date":"2020-05-26T00:00:00.000Z","category":"Python","description":"Python 内置了很多有用的函数，我们可以直接调用。 要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数 abs，只有一个参数。可以直接从 Python 的官方网站 查看文档:","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/language/python/function/call.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"调用函数"}],["meta",{"property":"og:description","content":"Python 内置了很多有用的函数，我们可以直接调用。 要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数 abs，只有一个参数。可以直接从 Python 的官方网站 查看文档:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-04T09:52:31.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-04T09:52:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调用函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-26T00:00:00.000Z\\",\\"dateModified\\":\\"2022-08-04T09:52:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"数据类型转换","slug":"数据类型转换","link":"#数据类型转换","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1659606751000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"code/language/python/function/call.md","localizedDate":"2020年5月26日","excerpt":"<p>Python 内置了很多有用的函数，我们可以直接调用。</p>\\n<p>要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数 <code>abs</code>，只有一个参数。可以直接从 Python 的官方网站 <a href=\\"http://docs.python.org/3/library/functions.html#abs\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">查看文档</a>:</p>\\n","autoDesc":true}');export{g as comp,y as data};
