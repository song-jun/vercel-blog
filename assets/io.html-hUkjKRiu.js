import{_ as s,c as e,d as a,e as n,b as t,o as l}from"./app-B-ayoO34.js";const h={};function p(d,i){return l(),e("div",null,[i[0]||(i[0]=a("p",null,"一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。",-1)),n(" more "),i[1]||(i[1]=t(`<h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h2><p>用 <code>print()</code> 在括号中加上字符串，就可以向屏幕上输出指定的文字。比如输出 <code>&#39;hello, world&#39;</code>，用代码实现如下:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;hello, world&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>print()</code> 函数也可以接受多个字符串，用逗号 “,” 隔开，就可以连成一串输出:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;The quick brown fox&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;jumps over&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;the lazy dog&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">The quick brown fox jumps over the lazy dog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>print()</code> 会依次打印每个字符串，遇到逗号“,”会输出一个空格。</p><p><code>print()</code> 也可以打印整数，或者计算结果:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，我们可以把计算 <code>100 + 200</code> 的结果打印得更漂亮一点:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;100 + 200 =&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 200</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 300</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，对于 <code>100 + 200</code>，Python 解释器自动计算出结果 300，但是，<code>&#39;100 + 200 =&#39;</code> 是字符串而非数学公式，Python 把它视为字符串，请自行解释上述打印结果。</p><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入"><span>输入</span></a></h2><p>如果需要用户从电脑输入一些字符，Python 提供了一个 <code>input()</code>，可以让用户输入字符串，并存放到一个变量里。比如输入用户的名字:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Mr.Song</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>当您输入 <code>name = input()</code> 并按下回车后，Python 交互式命令行就在等待您的输入了。这时，您可以输入任意字符，然后按回车后完成输入。</p><p>输入完成后，不会有任何提示，Python 交互式命令行又回到 <code>&gt;&gt;&gt;</code> 状态了。那我们刚才输入的内容到哪去了? 答案是存放到 <code>name</code> 变量里了。可以直接输入 <code>name</code> 查看变量内容:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> name</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Mr.Song&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">变量</p><p>请回忆初中数学所学的代数基础知识:</p><p>设正方形的边长为 $a$ ，则正方形的面积为 $a \\times a$ 。把边长 $a$ 看做一个变量，我们就可以根据 $a$ 的值计算正方形的面积，比如:</p><p>若 $a = 2$ ，则面积为 $a \\times a = 2 \\times 2 = 4$ ；</p><p>若 $a = 3.5$，则面积为 $a \\times a = 3.5 \\times 3.5 = 12.25$ 。</p><p>在计算机程序中，变量不仅可以为整数或浮点数，还可以是字符串，因此，<code>name</code> 作为一个变量就是一个字符串。</p><p>要打印出 <code>name</code> 变量的内容，除了直接写 <code>name</code> 然后按回车外，还可以用 <code>print()</code> 函数:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Mr.Song</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>有了输入和输出，我们就可以把上次打印 <code>&#39;hello, world&#39;</code> 的程序改成有点意义的程序了:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;hello,&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, name)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的程序，第一行代码会让用户输入任意字符作为自己的名字，然后存入 <code>name</code> 变量中；第二行代码会根据用户的名字向用户说 <code>hello</code>，比如输入 <code>Mr.Song</code></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">C:/Workspace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hello.py</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Mr.Song</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hello,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Mr.Song</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是程序运行的时候，没有任何提示信息告诉用户:“嘿，赶紧输入您的名字”，这样显得很不友好。所以 <code>input()</code> 可以让您显示一个字符串来提示用户，于是我们把代码改成:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;please enter your name: &#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;hello,&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, name)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>再次运行这个程序，您会发现，程序一运行，会首先打印出 <code>please enter your name:</code>，这样，用户就可以根据提示，输入名字后，得到 <code>hello, xxx</code> 的输出:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">C:/Workspace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hello.py</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">please</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> your</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Mr.Song</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hello,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Mr.Song</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次运行该程序，根据用户输入的不同，输出结果也会不同。</p><p>在命令行下，输入和输出就是这么简单。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>任何计算机程序都是为了执行一个特定的任务，有了输入，用户才能告诉计算机程序所需的信息，有了输出，程序运行后才能告诉用户任务的结果。</p><p>输入是 Input，输出是 Output，因此，我们把输入输出统称为 Input/Output，或者简写为 IO。</p><p><code>input()</code> 和 <code>print()</code> 是在命令行下面最基本的输入和输出，但是，用户也可以通过其他更高级的图形界面完成输入和输出，比如，在网页上的一个文本框输入自己的名字，点击“确定”后在网页上看到输出信息。</p>`,32))])}const k=s(h,[["render",p]]),o=JSON.parse('{"path":"/code/language/python/guide/io.html","title":"输入和输出","lang":"zh-CN","frontmatter":{"title":"输入和输出","icon":"IO","author":"廖雪峰","date":"2020-05-20T00:00:00.000Z","category":"Python","description":"一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/language/python/guide/io.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"输入和输出"}],["meta",{"property":"og:description","content":"一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-04T09:52:31.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-04T09:52:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"输入和输出\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2022-08-04T09:52:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1659606751000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":3.53,"words":1058},"filePathRelative":"code/language/python/guide/io.md","localizedDate":"2020年5月20日","excerpt":"<p>一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。</p>\\n","copyright":{"author":"廖雪峰"},"autoDesc":true}');export{k as comp,o as data};
