import{_ as o,c as t,d as c,e as d,b as l,o as a}from"./app-Ciqs_Xc9.js";const i={};function n(p,e){return a(),t("div",null,[e[0]||(e[0]=c("p",null,"本文介绍 Glob 匹配。",-1)),d(" more "),e[1]||(e[1]=l('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Glob 是当您要进行路径匹配时键入的模式。</p><p>在解析一条匹配模式前，Glob 首先将 <code>{}</code> 部分展开为一组匹配模式。<code>{}</code> 内的模式之间使用逗号分隔。</p><p>如 <code>a{/b/c,bcd}</code> 将扩展为 <code>a/b/c</code> 和 <code>abcd</code></p><p><code>{}</code> 可以嵌套，可与其他模式联用。</p><p>Glob 的魔术字符如下:</p><ul><li><p><code>*</code>: 匹配路径部分中的 0 个或多个字符</p></li><li><p><code>?</code>: 匹配单个字符</p></li><li><p><code>[...]</code>: 匹配字符范围。<code>[^...]</code>和 <code>[!...]</code> 表示匹配不在范围内的字符</p><details class="hint-container details"><summary>例子</summary><ul><li><code>[xyz].js</code> 只能匹配 <code>x.js</code>, <code>y.js</code>, <code>z.js</code>，但不会匹配 <code>xy.js</code>, <code>xyz.js</code> 等，因为整个中括号只代表一个字符。其等价于 <code>[x-z].js</code></li><li><code>[!xyz].js</code> 能匹配 <code>a.js</code>, <code>b.js</code>, <code>u.js</code>，但不会匹配 <code>x.js</code>, <code>y.js</code> <code>z.js</code>，<code>ab.js</code> 等。其等价于 <code>[^xyz].js</code> 和 <code>[!x-z].js</code>。</li></ul></details></li><li><p><code>!(pattern|pattern|pattern)</code>: 匹配与提供的任何模式都不匹配的任何内容。</p></li><li><p><code>?(pattern|pattern|pattern)</code>: 匹配 0 或一个内部模式。</p></li><li><p><code>+(pattern|pattern|pattern)</code> 匹配一个或多个内部模式。</p></li><li><p><code>*(a|b|c)</code>: 匹配 0 或多个内部模式。</p></li><li><p><code>@(pattern|pat*|pat?erN)</code>: 匹配恰好一个内部模式。</p></li><li><p><code>**</code>: 如果其在路径部分中单独出现，则匹配路径中的 0 个或多个目录与子目录。请注意它不对 symlinked 目录 (符号链接目录) 进行爬取。</p><details class="hint-container details"><summary>例子</summary><ul><li><code>**</code> 能匹配匹配所有的目录和文件。</li><li><code>**/*.js</code> 能匹配所有的 js 文件。</li><li><code>a/**/b.txt</code> 能匹配目录里任何一个 a 文件夹内的所有 b.txt 文件。</li></ul></details></li></ul><h2 id="开头的文件与文件夹" tabindex="-1"><a class="header-anchor" href="#开头的文件与文件夹"><span><code>.</code> 开头的文件与文件夹</span></a></h2><p>由于以 <code>.</code> 开头的文件或文件夹在 Unix 中视为隐藏文件或文件夹，故 Glob 不会匹配任何以 <code>.</code> 开头的路径部分，如 <code>.github/dependabot.yml</code> 或 <code>.eslintrc.js</code>。</p><p>如果的确想要匹配 <code>.</code> 开头的文件或文件夹，可以显示标注出来，如 <code>.*.js</code> 可以匹配 <code>.eslintrc.js</code>。</p>',10))])}const s=o(i,[["render",n],["__file","glob.html.vue"]]),m=JSON.parse('{"path":"/code/basic/glob.html","title":"Glob","lang":"zh-CN","frontmatter":{"title":"Glob","icon":"regexp","author":"陈慧玲","category":"基础","order":6,"description":"本文介绍 Glob 匹配。","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/basic/glob.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"Glob"}],["meta",{"property":"og:description","content":"本文介绍 Glob 匹配。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:author","content":"陈慧玲"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Glob\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈慧玲\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":". 开头的文件与文件夹","slug":"开头的文件与文件夹","link":"#开头的文件与文件夹","children":[]}],"git":{"createdTime":1730715475000,"updatedTime":1730715475000,"contributors":[{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.64,"words":492},"filePathRelative":"code/basic/glob.md","localizedDate":"2024年11月4日","excerpt":"<p>本文介绍 Glob 匹配。</p>\\n","autoDesc":true}');export{s as comp,m as data};
