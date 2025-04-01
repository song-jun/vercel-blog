import{_ as e,c as i,b as n,o as a}from"./app-B-ayoO34.js";const t={};function d(l,s){return a(),i("div",null,s[0]||(s[0]=[n(`<h1 id="dirname、-filename-和-process-cwd-三者的区别" tabindex="-1"><a class="header-anchor" href="#dirname、-filename-和-process-cwd-三者的区别"><span><code>__dirname</code>、<code>__filename</code> 和 <code>process.cwd()</code> 三者的区别</span></a></h1><ol><li><p><code>process.cwd()</code> 方法返回 Node.js 进程当前工作的目录</p><p>例: 我在 <code>F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process</code> 这个文件加下面创建了一个 test.js 在该 js 文件中写下下面的代码，然后右键 <code>run test.js</code></p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> cwd</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> process</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cwd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">cwd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出如下 <code>F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process</code></p></li><li><p><code>__dirname</code> 是 Node.js 的一个全局变量，获得当前文件所在目录的完整目录名</p><p>还在上面的 js 文件中输入一下代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出如下 <code>F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process</code></p><p>现在一看感觉上面两个方法是一样的，其实不是。node.js 进程当前工作的目录有可能不是该文件所在目录的完整目录。例如: 我用 <code>node webpack ..</code> 打包了一个应用程序， 我用这个应用程序可以生产出一套完整的页面架构，在应用程序的配置文件中 console.log(cwd) 在完整的这个页面架构中执行启动这个项目的命令，则对应的 cwd 就是当前项目所在的绝对路径,而不是应用程序的路径</p></li><li><p><code>__filename</code> 也是 Node.js 的全局变量 Node.js 中，在任何模块文件内部，可以使用 <code>__filename</code> 变量获取当前模块文件的带有完整绝对路径的文件名</p></li></ol><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">__filename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出 <code>F:\\自己的文件\\自己在网上学习的知识点\\node 学习\\node-API\\process\\test.js</code></p>`,4)]))}const r=e(t,[["render",d]]),p=JSON.parse('{"path":"/note/node-js/current-path.html","title":"__dirname、__filename 和 process.cwd() 三者的区别","lang":"zh-CN","frontmatter":{"icon":"nodeJS","date":"2019-09-10T00:00:00.000Z","tag":["Node.js"],"description":"__dirname、__filename 和 process.cwd() 三者的区别 process.cwd() 方法返回 Node.js 进程当前工作的目录 例: 我在 F:\\\\自己的文件\\\\自己在网上学习的知识点\\\\node学习\\\\node-API\\\\process 这个文件加下面创建了一个 test.js 在该 js 文件中写下下面的代码，然后右键 run...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/note/node-js/current-path.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"__dirname、__filename 和 process.cwd() 三者的区别"}],["meta",{"property":"og:description","content":"__dirname、__filename 和 process.cwd() 三者的区别 process.cwd() 方法返回 Node.js 进程当前工作的目录 例: 我在 F:\\\\自己的文件\\\\自己在网上学习的知识点\\\\node学习\\\\node-API\\\\process 这个文件加下面创建了一个 test.js 在该 js 文件中写下下面的代码，然后右键 run..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-04T09:52:31.000Z"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:published_time","content":"2019-09-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-04T09:52:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"__dirname、__filename 和 process.cwd() 三者的区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-10T00:00:00.000Z\\",\\"dateModified\\":\\"2022-08-04T09:52:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1659606751000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.41,"words":422},"filePathRelative":"note/node-js/current-path.md","localizedDate":"2019年9月10日","excerpt":"\\n<ol>\\n<li>\\n<p><code>process.cwd()</code> 方法返回 Node.js 进程当前工作的目录</p>\\n<p>例: 我在 <code>F:\\\\自己的文件\\\\自己在网上学习的知识点\\\\node学习\\\\node-API\\\\process</code> 这个文件加下面创建了一个 test.js 在该 js 文件中写下下面的代码，然后右键 <code>run test.js</code></p>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> cwd</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> process</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">cwd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">console</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">log</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">cwd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>输出如下 <code>F:\\\\自己的文件\\\\自己在网上学习的知识点\\\\node学习\\\\node-API\\\\process</code></p>\\n</li>\\n<li>\\n<p><code>__dirname</code> 是 Node.js 的一个全局变量，获得当前文件所在目录的完整目录名</p>\\n<p>还在上面的 js 文件中输入一下代码</p>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">console</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">log</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">__dirname</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div><p>输出如下 <code>F:\\\\自己的文件\\\\自己在网上学习的知识点\\\\node学习\\\\node-API\\\\process</code></p>\\n<p>现在一看感觉上面两个方法是一样的，其实不是。node.js 进程当前工作的目录有可能不是该文件所在目录的完整目录。例如: 我用 <code>node webpack ..</code> 打包了一个应用程序，\\n我用这个应用程序可以生产出一套完整的页面架构，在应用程序的配置文件中 console.log(cwd)\\n在完整的这个页面架构中执行启动这个项目的命令，则对应的 cwd 就是当前项目所在的绝对路径,而不是应用程序的路径</p>\\n</li>\\n<li>\\n<p><code>__filename</code> 也是 Node.js 的全局变量 Node.js 中，在任何模块文件内部，可以使用 <code>__filename</code> 变量获取当前模块文件的带有完整绝对路径的文件名</p>\\n</li>\\n</ol>","autoDesc":true}');export{r as comp,p as data};
