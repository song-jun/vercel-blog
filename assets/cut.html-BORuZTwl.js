import{_ as s,c as a,b as e,o as n}from"./app-Ciqs_Xc9.js";const l={};function t(h,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="cut" tabindex="-1"><a class="header-anchor" href="#cut"><span>cut</span></a></h1><p><code>cut</code> 命令用于在命令行输出文本文件的指定位置的内容。</p><p>它的使用格式如下。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> OPTION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [FILE]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果没有指定文件名，将读取标准输入。</p><p><code>-b</code> 参数用来指定读取的字节。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出前三个字节</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b1,2,3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出前十个字节</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b1-10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出从第5个字节开始的所有字节</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b5-</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出前5个字节</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b-5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-c</code> 参数用来指定读取的字符，用法与 <code>-b</code> 一样。有的字符是多字节字符，这时候就应该用 <code>-c</code> 代替 <code>-b</code>。</p><p><code>-d</code> 参数用来指定分隔符，默认分隔符为制表符。</p><p><code>-f</code> 参数用来指定字段。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 指定每一行的分隔符为逗号，</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出第一和第三个字段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f1,3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出第一、第二、第四和第五个字段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1-2,4-5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> data.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const k=s(l,[["render",t],["__file","cut.html.vue"]]),p=JSON.parse('{"path":"/linux/bash/archives/commands/cut.html","title":"cut","lang":"zh-CN","frontmatter":{"feed":false,"seo":false,"head":[["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[],"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"linux/bash/archives/commands/cut.md","localizedDate":"2022年8月4日"}');export{k as comp,p as data};
