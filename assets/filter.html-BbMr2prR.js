import{_ as s,c as a,b as n,o as e}from"./app-B-ayoO34.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<p>Python 内建的 <code>filter()</code> 函数用于过滤序列。</p><p>和 <code>map()</code> 类似，<code>filter()</code> 也接收一个函数和一个序列。和 <code>map()</code> 不同的是，<code>filter()</code> 把传入的函数依次作用于每个元素，然后根据返回值是 <code>True</code> 还是 <code>False</code> 决定保留还是丢弃该元素。</p><p>例如，在一个 list 中，删掉偶数，只保留奇数，可以这么写:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> is_odd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(is_odd, [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">15</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]))</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 结果: [1, 5, 9, 15]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把一个序列中的空字符串删掉，可以这么写:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> not_empty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> s </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> s.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">strip</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(not_empty, [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;A&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;B&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;C&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;  &#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]))</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 结果: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见用 <code>filter()</code> 这个高阶函数，关键在于正确实现一个“筛选”函数。</p><p>注意到 <code>filter()</code> 函数返回的是一个 Iterator，也就是一个惰性序列，所以要强迫 <code>filter()</code> 完成计算结果，需要用 <code>list()</code> 函数获得所有结果并返回 list。</p><h2 id="用-filter-求素数" tabindex="-1"><a class="header-anchor" href="#用-filter-求素数"><span>用 filter 求素数</span></a></h2><p>计算素数的一个方法是埃氏筛法，它的算法理解起来非常简单:</p><p>首先，列出从 2 开始的所有自然数，构造一个序列:</p><p>2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...</p><p>取序列的第一个数 2，它一定是素数，然后用 2 把序列的 2 的倍数筛掉:</p><p>3, <s>4</s>, 5, <s>6</s>, 7, <s>8</s>, 9, <s>10</s>, 11, <s>12</s>, 13, <s>14</s>, 15, <s>16</s>, 17, <s>18</s>, 19, <s>20</s>, ...</p><p>取新序列的第一个数 3，它一定是素数，然后用 3 把序列的 3 的倍数筛掉:</p><p>5, <s>6</s>, 7, <s>8</s>, <s>9</s>, <s>10</s>, 11, <s>12</s>, 13, <s>14</s>, <s>15</s>, <s>16</s>, 17, <s>18</s>, 19, <s>20</s>, ...</p><p>取新序列的第一个数 5，然后用 5 把序列的 5 的倍数筛掉:</p><p>7, <s>8</s>, <s>9</s>, <s>10</s>, 11, <s>12</s>, 13, <s>14</s>, <s>15</s>, <s>16</s>, 17, <s>18</s>, 19, <s>20</s>, ...</p><p>不断筛下去，就可以得到所有的素数。</p><p>用 Python 来实现这个算法，可以先构造一个从 3 开始的奇数序列:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> _odd_iter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> True</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        yield</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这是一个生成器，并且是一个无限序列。</p><p>然后定义一个筛选函数:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> _not_divisible</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> lambda</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，定义一个生成器，不断返回下一个素数:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> primes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    yield</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    it </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> _odd_iter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 初始序列</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> True</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(it) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 返回序列的第一个数</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        yield</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        it </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">_not_divisible</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n), it) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 构造新序列</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个生成器先返回第一个素数 2，然后，利用 <code>filter()</code> 不断产生筛选后的新的序列。</p><p>由于 <code>primes()</code> 也是一个无限序列，所以调用时需要设置一个退出循环的条件:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 打印1000以内的素数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> primes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        break</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到 Iterator 是惰性计算的序列，所以我们可以用 Python 表示“全体自然数”，“全体素数”这样的序列，而代码非常简洁。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p><code>filter()</code> 的作用是从一个序列中筛出符合条件的元素。由于 <code>filter()</code> 使用了惰性计算，所以只有在取 <code>filter()</code> 结果的时候，才会真正筛选并每次返回下一个筛出的元素。</p>`,32)]))}const p=s(l,[["render",t]]),r=JSON.parse('{"path":"/code/language/python/functional-programming/high-order-function/filter.html","title":"filter","lang":"zh-CN","frontmatter":{"title":"filter","icon":"filter","author":"廖雪峰","date":"2020-05-31T00:00:00.000Z","category":"Python","description":"Python 内建的 filter() 函数用于过滤序列。 和 map() 类似，filter() 也接收一个函数和一个序列。和 map() 不同的是，filter() 把传入的函数依次作用于每个元素，然后根据返回值是 True 还是 False 决定保留还是丢弃该元素。 例如，在一个 list 中，删掉偶数，只保留奇数，可以这么写: 把一个序列中的空...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/language/python/functional-programming/high-order-function/filter.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"filter"}],["meta",{"property":"og:description","content":"Python 内建的 filter() 函数用于过滤序列。 和 map() 类似，filter() 也接收一个函数和一个序列。和 map() 不同的是，filter() 把传入的函数依次作用于每个元素，然后根据返回值是 True 还是 False 决定保留还是丢弃该元素。 例如，在一个 list 中，删掉偶数，只保留奇数，可以这么写: 把一个序列中的空..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-04T09:52:31.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-04T09:52:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"filter\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2022-08-04T09:52:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1659606751000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":2.61,"words":783},"filePathRelative":"code/language/python/functional-programming/high-order-function/filter.md","localizedDate":"2020年5月31日","excerpt":"<p>Python 内建的 <code>filter()</code> 函数用于过滤序列。</p>\\n<p>和 <code>map()</code> 类似，<code>filter()</code> 也接收一个函数和一个序列。和 <code>map()</code> 不同的是，<code>filter()</code> 把传入的函数依次作用于每个元素，然后根据返回值是 <code>True</code> 还是 <code>False</code> 决定保留还是丢弃该元素。</p>\\n<p>例如，在一个 list 中，删掉偶数，只保留奇数，可以这么写:</p>\\n<div class=\\"language-py line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"py\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">def</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> is_odd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic\\">n</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">):</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> n </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">%</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> ==</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 1</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">list</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">filter</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(is_odd, [</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">4</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">5</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">6</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">9</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">10</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">15</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">]))</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 结果: [1, 5, 9, 15]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"廖雪峰"},"autoDesc":true}');export{p as comp,r as data};
