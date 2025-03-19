import{_ as o,c,b as t,o as i}from"./app-Ciqs_Xc9.js";const d={};function n(a,e){return i(),c("div",null,e[0]||(e[0]=[t(`<p>对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。</p><h2 id="添加属性" tabindex="-1"><a class="header-anchor" href="#添加属性"><span>添加属性</span></a></h2><p>您可以使用缩写来生成 CSS 属性。如 <code>m</code> 会生成 <code>margin: ;</code>，同时光标会自动置于值处。</p><h2 id="同时添加属性与值值" tabindex="-1"><a class="header-anchor" href="#同时添加属性与值值"><span>同时添加属性与值值</span></a></h2><p>您可以将值直接输入缩写的后面，如果有多个值，您需要用 <code>-</code> 将它们分开，多余的 <code>-</code> 将会被理解为负值。</p><div class="hint-container tip"><p class="hint-container-title">案例</p><ul><li><code>m10</code>: <code>margin: 10px;</code></li><li><code>m10-20</code>: <code>margin: 10px 20px;</code></li><li><code>m-10--20</code>: <code>margin: -10px -20px;</code></li></ul></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请只有在必要(不添加会产生歧义)的情况下添加 <code>-</code> 分隔符，否则 Emmet 可能会错误的理解它。</p></div><h2 id="值的单位" tabindex="-1"><a class="header-anchor" href="#值的单位"><span>值的单位</span></a></h2><p>使用整数值扩展缩写时，Emmet 会以 px 单位输出: <code>m10</code> → <code>margin: 10px;</code>。</p><p>使用浮点值扩展缩写时，会以 em 单位输出: <code>m1.5</code> → <code>margin: 1.5em;</code>。</p><p>您也可以在值后面紧跟任何字母字符，来显式提供单位名称: <code>m1.5ex</code> → <code>margin: 1.5ex;</code>，<code>m10foo</code> → <code>margin: 10foo;</code>。</p><p>明确定义单位后，不再需要使用连字符来分隔值: <code>m10ex20em</code> → <code>margin: 10ex 20em;</code>，<code>m10ex-5</code> → <code>margin: 10ex -5px;</code>。</p><h2 id="值别名" tabindex="-1"><a class="header-anchor" href="#值别名"><span>值别名</span></a></h2><p>Emmet 具有一些常用值的别名:</p><ul><li><code>p</code> → <code>%</code></li><li><code>e</code> → <code>em</code></li><li><code>x</code> → <code>ex</code></li></ul><p>您可以使用别名代替完整的单位:</p><ul><li><code>w100p</code> → <code>width: 100%</code></li><li><code>m10p30e5x</code> → <code>margin: 10% 30em 5ex</code></li></ul><h2 id="颜色值" tabindex="-1"><a class="header-anchor" href="#颜色值"><span>颜色值</span></a></h2><p>Emmet 支持十六进制颜色值。<code>#</code> 将自动作为分隔符，所以针对颜色变量，将不再需要 <code>-</code>。</p><ul><li><code>c#3</code> → <code>color: #333;</code></li><li><code>bd5#0s</code> → <code>border: 5px #000 solid</code>。(<code>#</code> 符号可将颜色与 <code>5</code> 分隔开，并且 <code>s</code>(别名为 <code>solid</code>)不是十六进制字符，因此省略了 <code>-</code>。</li></ul><p>颜色变量支持 1-3 位的缩写，表现如下:</p><ul><li><code>#1</code> → <code>#111111</code></li><li><code>#e0</code> → <code>#e0e0e0</code></li><li><code>#fc0</code> → <code>#ffcc00</code></li></ul><h2 id="无单元属性" tabindex="-1"><a class="header-anchor" href="#无单元属性"><span>无单元属性</span></a></h2><p>一些 CSS 属性默认为无单位输出:</p><ul><li><code>lh2</code>→ <code>line-height: 2;</code></li><li><code>fw400</code>→ <code>font-weight: 400</code>。</li></ul><p>这些值是: <code>z-index</code>，<code>line-height</code>，<code>opacity</code> 和 <code>font-weight</code></p><h2 id="重要修饰符" tabindex="-1"><a class="header-anchor" href="#重要修饰符"><span>重要修饰符</span></a></h2><p>您可以在任何 CSS 缩写的末尾添加 <code>!</code> 后缀来添加 <code>!important</code></p><p><code>p!+m10e!</code>:</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">padding: !important;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">margin: 10em !important;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出多个属性" tabindex="-1"><a class="header-anchor" href="#输出多个属性"><span>输出多个属性</span></a></h2><p>正如上方演示，您可以利用 <code>+</code> 同时输出多个 CSS 属性。</p><div class="hint-container info"><p class="hint-container-title">Snippets</p><p>完整的 CSS snippets 请见 <a href="https://github.com/emmetio/emmet/blob/master/snippets/css.json" target="_blank" rel="noopener noreferrer">Emmet Repo</a></p></div>`,33)]))}const s=o(d,[["render",n],["__file","css.html.vue"]]),p=JSON.parse('{"path":"/code/website/emmet/css.html","title":"CSS Emmet","lang":"zh-CN","frontmatter":{"title":"CSS Emmet","icon":"css","category":"Emmet","tag":["快捷键","HTML"],"next":"../js.html","description":"对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。 添加属性 您可以使用缩写来生成 CSS 属性。如 m 会生成 margin: ;，同时光标会自动置于值处。 同时添加属性与值值 您可以将值直接输入缩写的后面，如果有多个值，您需要用 - 将它们分开，多余的 - 将会被理解为负值。 案例 m10: margin: 10px; m10-20:...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/website/emmet/css.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"CSS Emmet"}],["meta",{"property":"og:description","content":"对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。 添加属性 您可以使用缩写来生成 CSS 属性。如 m 会生成 margin: ;，同时光标会自动置于值处。 同时添加属性与值值 您可以将值直接输入缩写的后面，如果有多个值，您需要用 - 将它们分开，多余的 - 将会被理解为负值。 案例 m10: margin: 10px; m10-20:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:tag","content":"快捷键"}],["meta",{"property":"article:tag","content":"HTML"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS Emmet\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"添加属性","slug":"添加属性","link":"#添加属性","children":[]},{"level":2,"title":"同时添加属性与值值","slug":"同时添加属性与值值","link":"#同时添加属性与值值","children":[]},{"level":2,"title":"值的单位","slug":"值的单位","link":"#值的单位","children":[]},{"level":2,"title":"值别名","slug":"值别名","link":"#值别名","children":[]},{"level":2,"title":"颜色值","slug":"颜色值","link":"#颜色值","children":[]},{"level":2,"title":"无单元属性","slug":"无单元属性","link":"#无单元属性","children":[]},{"level":2,"title":"重要修饰符","slug":"重要修饰符","link":"#重要修饰符","children":[]},{"level":2,"title":"输出多个属性","slug":"输出多个属性","link":"#输出多个属性","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"code/website/emmet/css.md","localizedDate":"2022年8月4日","excerpt":"<p>对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。</p>\\n<h2>添加属性</h2>\\n<p>您可以使用缩写来生成 CSS 属性。如 <code>m</code> 会生成 <code>margin: ;</code>，同时光标会自动置于值处。</p>\\n<h2>同时添加属性与值值</h2>\\n<p>您可以将值直接输入缩写的后面，如果有多个值，您需要用 <code>-</code> 将它们分开，多余的 <code>-</code> 将会被理解为负值。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">案例</p>\\n<ul>\\n<li><code>m10</code>: <code>margin: 10px;</code></li>\\n<li><code>m10-20</code>: <code>margin: 10px 20px;</code></li>\\n<li><code>m-10--20</code>: <code>margin: -10px -20px;</code></li>\\n</ul>\\n</div>","autoDesc":true}');export{s as comp,p as data};
