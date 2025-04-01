import{_ as s,c as a,b as e,o as n}from"./app-B-ayoO34.js";const l={};function t(h,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="file" tabindex="-1"><a class="header-anchor" href="#file"><span>file</span></a></h1><p><code>file</code> 命令用来某个文件的类型。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> index.html</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> index.html:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> HTML</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> document,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ASCII</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> text</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>file 工具可以对所给的文件一行简短的介绍，它用文件后缀、头部信息和一些其他的线索来判断文件。您在检查一堆您不熟悉的文件时使用 find 非常方便:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> find</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            directory</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./hanoi:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      Perl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> script,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ASCII</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> text</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> executable</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./.hanoi.swp:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> swap</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7.3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./factorial:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Perl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> script,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ASCII</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> text</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> executable</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./bits.c:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">     C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> source,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ASCII</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> text</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./bits:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">       ELF</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 32-bit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LSB</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> executable,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Intel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 80386,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const p=s(l,[["render",t]]),r=JSON.parse('{"path":"/linux/bash/archives/commands/file.html","title":"file","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","feed":false,"seo":false,"head":[["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":0.42,"words":126},"filePathRelative":"linux/bash/archives/commands/file.md","localizedDate":"2020年6月4日"}');export{p as comp,r as data};
