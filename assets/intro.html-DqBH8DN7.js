import{_ as s,c as t,d as a,e,b as n,o as l}from"./app-Ciqs_Xc9.js";const p={};function h(r,i){return l(),t("div",null,[i[0]||(i[0]=a("p",null,"函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。",-1)),e(" more "),i[1]||(i[1]=n(`<p>我们知道圆的面积计算公式为: $S = \\pi r^2$</p><p>当我们知道半径 $r$ 的值时，就可以根据公式计算出面积。假设我们需要计算 3 个不同大小的圆的面积:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> r1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 12.34</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> r2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 9.08</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> r3</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 73.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> s1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3.14</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> r1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> r1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> s2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3.14</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> r2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> r2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> s3</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3.14</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> r3</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> r3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当代码出现有规律的重复的时候，您就需要当心了，每次写 <code>3.14 *x* x</code> 不仅很麻烦，而且，如果要把 <code>3.14</code> 改成 <code>3.14159265359</code> 的时候，得全部替换。</p><p>有了函数，我们就不再每次写 <code>s = 3.14 *x* x</code>，而是写成更有意义的函数调用 <code>s = area_of_circle(x)</code>，而函数 <code>area_of_circle</code> 本身只需要写一次，就可以多次调用。</p><p>基本上所有的高级语言都支持函数，JavaScript 也不例外。JavaScript 的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。</p><h2 id="抽象" tabindex="-1"><a class="header-anchor" href="#抽象"><span>抽象</span></a></h2><p>抽象是数学中非常常见的概念。举个例子:</p><p>计算数列的和，比如: $1 + 2 + 3 + \\dots + 100$，写起来十分不方便，于是数学家发明了求和符号 $\\sum\\limits$，可以把 $1 + 2 + 3 + \\dots + 100$ 记作 $\\sum\\limits _{n=1}^{100} n$ 。</p><p>这种抽象记法非常强大，因为我们看到 $\\sum\\limits$ 就可以理解成求和，而不是还原成低级的加法运算。</p><p>而且，这种抽象记法是可扩展的，比如: $\\sum\\limits _{n=1}^{100} (n^2+1)$</p><p>还原成加法运算就变成了:</p><p>$(1 × 1 + 1) + (2 × 2 + 1) + \\dots + (100 × 100 + 1)$</p><p>可见，借助抽象，我们才能不关心底层的具体计算过程，而直接在更高的层次上思考问题。</p><p>写计算机程序也是一样，函数就是最基本的一种代码抽象的方式。</p>`,15))])}const d=s(p,[["render",h],["__file","intro.html.vue"]]),o=JSON.parse('{"path":"/code/language/js/function/intro.html","title":"函数介绍","lang":"zh-CN","frontmatter":{"title":"函数介绍","icon":"info","date":"2019-10-01T00:00:00.000Z","category":"JavaScript","description":"函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/language/js/function/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"函数介绍"}],["meta",{"property":"og:description","content":"函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-04T09:52:31.000Z"}],["meta",{"property":"article:published_time","content":"2019-10-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-04T09:52:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-01T00:00:00.000Z\\",\\"dateModified\\":\\"2022-08-04T09:52:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"抽象","slug":"抽象","link":"#抽象","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1659606751000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.7,"words":511},"filePathRelative":"code/language/js/function/intro.md","localizedDate":"2019年10月1日","excerpt":"<p>函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。</p>\\n","autoDesc":true}');export{d as comp,o as data};
