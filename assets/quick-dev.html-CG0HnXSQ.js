import{_ as e,c as a,b as s,e as n,o as l}from"./app-Ciqs_Xc9.js";const t={};function h(k,i){return l(),a("div",null,[i[0]||(i[0]=s('<p>您可以使用 <code>vue serve</code> 和 <code>vue build</code> 命令对单个 <code>*.vue</code> 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vue/cli-service-global</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',2)),n(" more "),i[1]||(i[1]=s('<h2 id="vue-serve" tabindex="-1"><a class="header-anchor" href="#vue-serve"><span>vue serve</span></a></h2><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Usage: serve </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">options</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">[entry]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Options:</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> `</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">-o</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">--open</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: 打开浏览器</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> `</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">-c</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">--copy</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: 将本地 URL 复制到剪切板</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> `</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">-h</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">--help</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: 输出用法信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您所需要的仅仅是一个 <code>App.vue</code> 文件:</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Hello!&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在这个 <code>App.vue</code> 文件所在的目录下运行:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> serve</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>vue serve</code> 使用了和 <code>vue create</code> 创建的项目相同的默认设置 (webpack、Babel、PostCSS 和 ESLint)。它会在当前目录自动推导入口文件——入口可以是 <code>main.js</code>、<code>index.js</code>、<code>App.vue</code> 或 <code>app.vue</code> 中的一个。您也可以显式地指定入口文件:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> serve</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> MyComponent.vue</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><h2 id="vue-build" tabindex="-1"><a class="header-anchor" href="#vue-build"><span>vue build</span></a></h2><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Usage: build </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">options</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">[entry]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">在生产环境模式下零配置构建一个 .js 或 .vue 文件</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Options:</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> `</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">-t</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">--target &lt;target&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: 构建目标 (app | lib | wc | wc-async, 默认值: app)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> `</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">-n</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">--name &lt;name&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: 库的名字或 Web Components 组件的名字 (默认值: 入口文件名)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> `</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">-d</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">--dest &lt;dir&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: 输出目录 (默认值: dist)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> `</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">-h</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">--help</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: 输出用法信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您也可以使用 <code>vue build</code> 将目标文件构建成一个生产环境的包并用来部署:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> MyComponent.vue</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>vue build</code> 也提供了将组件构建成为一个库或一个 Web Components 组件的能力。</p>',12))])}const d=e(t,[["render",h],["__file","quick-dev.html.vue"]]),r=JSON.parse('{"path":"/code/vue/cli/quick-dev.html","title":"快速原型开发","lang":"zh-CN","frontmatter":{"date":"2022-08-04T00:00:00.000Z","title":"快速原型开发","icon":"create","category":"Vue","tag":["Vue Cli"],"description":"您可以使用 vue serve 和 vue build 命令对单个 *.vue 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展:","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/vue/cli/quick-dev.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"快速原型开发"}],["meta",{"property":"og:description","content":"您可以使用 vue serve 和 vue build 命令对单个 *.vue 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-05T09:47:57.000Z"}],["meta",{"property":"article:tag","content":"Vue Cli"}],["meta",{"property":"article:published_time","content":"2022-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-05T09:47:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速原型开发\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-05T09:47:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"vue serve","slug":"vue-serve","link":"#vue-serve","children":[]},{"level":2,"title":"vue build","slug":"vue-build","link":"#vue-build","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1730800077000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"code/vue/cli/quick-dev.md","localizedDate":"2022年8月4日","excerpt":"<p>您可以使用 <code>vue serve</code> 和 <code>vue build</code> 命令对单个 <code>*.vue</code> 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展:</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">npm</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -g</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> @vue/cli-service-global</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,r as data};
