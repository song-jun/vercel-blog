import{_ as s,c as a,d as e,e as n,b as l,o as t}from"./app-Ciqs_Xc9.js";const d={};function h(p,i){return t(),a("div",null,[i[0]||(i[0]=e("p",null,"为了方便用户在不同目录之间切换，Bash 提供了目录堆栈功能。",-1)),n(" more "),i[1]||(i[1]=l(`<h2 id="cd" tabindex="-1"><a class="header-anchor" href="#cd"><span>cd -</span></a></h2><p>Bash 可以记忆用户进入过的目录。默认情况下，只记忆前一次所在的目录，<code>cd -</code> 命令可以返回前一次的目录。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当前目录是 /path/to/foo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 重新回到 /path/to/foo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，用户原来所在的目录是 <code>/path/to/foo</code>，进入子目录 <code>bar</code> 以后，使用 <code>cd -</code> 可以回到原来的目录。</p><h2 id="pushd-popd" tabindex="-1"><a class="header-anchor" href="#pushd-popd"><span>pushd，popd</span></a></h2><p>如果希望记忆多重目录，可以使用 <code>pushd</code> 命令和 <code>popd</code> 命令。它们用来操作目录堆栈。</p><p><code>pushd</code> 命令的用法类似 <code>cd</code> 命令，可以进入指定的目录。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">pushd dirname</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面命令会进入目录 <code>dirname</code>，并将该目录放入堆栈。</p><p>第一次使用 <code>pushd</code> 命令时，会将当前目录先放入堆栈，然后将所要进入的目录也放入堆栈，位置在前一个记录的上方。以后每次使用 <code>pushd</code> 命令，都会将所要进入的目录，放在堆栈的顶部。</p><p><code>popd</code> 命令不带有参数时，会移除堆栈的顶部记录，并进入新的堆栈顶部目录(即原来的第二条目录)。</p><p>下面是一个例子。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当前处在主目录，堆栈为空</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pwd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/home/me</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入 /home/me/foo</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当前堆栈为 /home/me/foo /home/me</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pushd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/foo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入 /etc</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当前堆栈为 /etc /home/me/foo /home/me</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pushd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入 /home/me/foo</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当前堆栈为 /home/me/foo /home/me</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> popd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入 /home/me</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当前堆栈为 /home/me</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> popd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 目录不变，当前堆栈为空</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> popd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个命令的参数如下。</p><ol><li><p><strong><code>-n</code> 参数</strong></p><p><code>-n</code> 的参数表示仅操作堆栈，不改变目录。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">popd -n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面的命令仅删除堆栈顶部的记录，不改变目录，执行完成后还停留在当前目录。</p></li><li><p><strong>整数参数</strong></p><p>这两个命令还可以接受一个整数作为参数，该整数表示堆栈中指定位置的记录(从 0 开始)，作为操作对象。这时不会切换目录。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 从栈顶算起的3号目录(从0开始)，移动到栈顶</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pushd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 从栈底算起的3号目录(从0开始)，移动到栈顶</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pushd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除从栈顶算起的3号目录(从0开始)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> popd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除从栈底算起的3号目录(从0开始)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> popd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子的整数编号都是从 0 开始计算，<code>popd +0</code> 是删除第一个目录，<code>popd +1</code> 是删除第二个，<code>popd -0</code> 是删除最后一个目录，，<code>popd -1</code> 是删除倒数第二个。</p></li><li><p><strong>目录参数</strong></p><p><code>pushd</code> 可以接受一个目录作为参数，表示将该目录放到堆栈顶部，并进入该目录。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">pushd dir</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>popd</code> 没有这个参数。</p></li></ol><h2 id="dirs-命令" tabindex="-1"><a class="header-anchor" href="#dirs-命令"><span>dirs 命令</span></a></h2><p><code>dirs</code> 命令可以显示目录堆栈的内容，一般用来查看 <code>pushd</code> 和 <code>popd</code> 操作后的结果。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">dirs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>它有以下参数。</p><ul><li><code>-c</code>: 清空目录栈。</li><li><code>-l</code>: 用户主目录不显示波浪号前缀，而打印完整的目录。</li><li><code>-p</code>: 每行一个条目打印目录栈，默认是打印在一行。</li><li><code>-v</code>: 每行一个条目，每个条目之前显示位置编号(从 0 开始)。</li><li><code>+N</code>: <code>N</code> 为整数，表示显示堆顶算起的第 N 个目录，从零开始。</li><li><code>-N</code>: <code>N</code> 为整数，表示显示堆底算起的第 N 个目录，从零开始。</li></ul>`,20))])}const r=s(d,[["render",h],["__file","stack.html.vue"]]),k=JSON.parse('{"path":"/linux/bash/stack.html","title":"目录堆栈","lang":"zh-CN","frontmatter":{"title":"目录堆栈","icon":"stack","author":"阮一峰","category":"Linux","tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","feed":false,"seo":false,"head":[["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"cd -","slug":"cd","link":"#cd","children":[]},{"level":2,"title":"pushd，popd","slug":"pushd-popd","link":"#pushd-popd","children":[]},{"level":2,"title":"dirs 命令","slug":"dirs-命令","link":"#dirs-命令","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":2.98,"words":895},"filePathRelative":"linux/bash/stack.md","localizedDate":"2022年8月4日"}');export{r as comp,k as data};
