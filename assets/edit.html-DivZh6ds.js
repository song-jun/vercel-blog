import{_ as t,c as a,b as s,o as n}from"./app-B-ayoO34.js";const o="/assets/column-select-DDnPuRTX.gif",i="/assets/goto-file-symbol-BNVj2jUZ.png",r="/assets/goto-workspace-symbol-Bm00TIMf.png",p="/assets/outlilne-view--Op6nfuO.png",d="/assets/transform-CtbdfKGN.png",c="/assets/markdown-preview-wHuSUrh_.png",l="/assets/markdown-side-preview-BnMT_RRv.png",h={};function m(g,e){return n(),a("div",null,e[0]||(e[0]=[s('<p>这是编辑代码的一些常用功能。如果您不喜欢键盘快捷键，请考虑为旧的编辑器安装键盘映射扩展名。</p><h2 id="多光标选择" tabindex="-1"><a class="header-anchor" href="#多光标选择"><span>多光标选择</span></a></h2><p>要在任意位置添加光标，请用鼠标选择一个位置，然后使用 <code>Alt + Click</code>。</p><p>要将光标设置在当前位置之上或之下，请使用:</p><p>键盘快捷键: <code>Ctrl + Alt + ↑</code> 或 <code>Ctrl + Alt + ↓</code></p><p>您可以使用 <code>Ctrl + Shift + L</code> 将附加光标添加到当前选择的所有实例中。</p><p>如果不想添加所有当前选中项，则可以使用 <code>Ctrl + D</code> 代替。这只会选择您选择的选中项之后的下一个选中项，因此您可以一个一个地添加选择。</p><h2 id="列-盒-选择" tabindex="-1"><a class="header-anchor" href="#列-盒-选择"><span>列(盒)选择</span></a></h2><p>您可以在拖动鼠标时按住 <code>Shift + Alt</code>(在 macOS 上为 <code>Shift + Option</code>)来选择文本块。一个单独的光标将被添加到每一行的末尾。</p><p><img src="'+o+`" alt="列文字选择"></p><p>您也可以使用键盘快捷键来触发列选择。</p><h2 id="直标尺" tabindex="-1"><a class="header-anchor" href="#直标尺"><span>直标尺</span></a></h2><p>您可以使用该 <code>editor.rulers</code> 设置将垂直列标尺添加到编辑器中。</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;editor.rulers&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">40</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">60</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速滚动" tabindex="-1"><a class="header-anchor" href="#快速滚动"><span>快速滚动</span></a></h2><p>按 <code>Alt</code> 键可在编辑器和资源管理器中快速滚动。默认情况下，快速滚动使用 5 倍速倍增器，但是您可以使用 <code>editor.fastScrollSensitivity</code> 设置来控制倍增器。</p><h2 id="向上-向下复制行" tabindex="-1"><a class="header-anchor" href="#向上-向下复制行"><span>向上 / 向下复制行</span></a></h2><p>键盘快捷键: <code>Shift + Alt + ↑</code> 或 <code>Shift + Alt + ↓</code></p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>由于按键冲突，在 Linux 上，向上 / 向下复制行没有默认的快捷键，您可以自行通过 <code>editor.action.copyLinesUpAction</code> 和 <code>editor.action.copyLinesDownAction</code> 设置自己的首选键盘快捷键。</p></div><h2 id="上下移动行号" tabindex="-1"><a class="header-anchor" href="#上下移动行号"><span>上下移动行号</span></a></h2><p>键盘快捷键: <code>Alt + ↑</code> 或 <code>Alt + ↓</code></p><h2 id="缩小-扩大选择" tabindex="-1"><a class="header-anchor" href="#缩小-扩大选择"><span>缩小/扩大选择</span></a></h2><p>键盘快捷键: <code>Shift + Alt + ←</code> 或 <code>Shift + Alt + →</code></p><h2 id="转到文件中的符号" tabindex="-1"><a class="header-anchor" href="#转到文件中的符号"><span>转到文件中的符号</span></a></h2><p>键盘快捷键: <code>Ctrl + Shift + O</code></p><p><img src="`+i+'" alt="按符号查找"></p><p>您可以通过添加冒号将符号按种类分组 <code>@:</code>。</p><h2 id="转到工作区中的符号" tabindex="-1"><a class="header-anchor" href="#转到工作区中的符号"><span>转到工作区中的符号</span></a></h2><p>键盘快捷键: <code>Ctrl + T</code></p><p><img src="'+r+'" alt="转到工作区中的符号"></p><h2 id="大纲视图" tabindex="-1"><a class="header-anchor" href="#大纲视图"><span>大纲视图</span></a></h2><p><strong>文件资源管理器</strong> 中的 <strong>大纲</strong> 视图(默认折叠在底部)显示了当前打开文件的符号。</p><p><img src="'+p+'" alt="轮廓图"></p><p>您可以按符号名称，类别和文件中的位置进行排序，并可以快速导航到符号位置。</p><h2 id="导航到特定行" tabindex="-1"><a class="header-anchor" href="#导航到特定行"><span>导航到特定行</span></a></h2><p>键盘快捷键: <code>Ctrl + G</code></p><h2 id="恢复光标位置" tabindex="-1"><a class="header-anchor" href="#恢复光标位置"><span>恢复光标位置</span></a></h2><p>键盘快捷键: <code>Ctrl + U</code></p><h2 id="修剪尾随空格" tabindex="-1"><a class="header-anchor" href="#修剪尾随空格"><span>修剪尾随空格</span></a></h2><p>键盘快捷键: <code>Ctrl + K Ctrl + X</code></p><h2 id="转换文本命令" tabindex="-1"><a class="header-anchor" href="#转换文本命令"><span>转换文本命令</span></a></h2><p>您可以使用 <strong>命令面板</strong> 中的 <strong>转换</strong> 命令将选定的文本更改为大写，小写和标题。</p><p><img src="'+d+'" alt="转换文字指令"></p><h2 id="代码格式化" tabindex="-1"><a class="header-anchor" href="#代码格式化"><span>代码格式化</span></a></h2><p>当前选择的源代码: <code>Ctrl + K Ctrl + F</code></p><p>整个文档: <code>Shift + Alt + F</code></p><h2 id="代码折叠" tabindex="-1"><a class="header-anchor" href="#代码折叠"><span>代码折叠</span></a></h2><p>键盘快捷键: <code>Ctrl + Shift + [</code> 和 <code>Ctrl + Shift +]</code></p><p>您还可以使用全部折叠(<code>Ctrl + K Ctrl + 0</code>)和全部展开(<code>Ctrl + K Ctrl + J</code>)来折叠/展开编辑器中的所有区域。</p><p>您可以使用 <strong>折叠所有块注释</strong>(<code>Ctrl + K Ctrl + /</code>)折叠所有块注释。</p><h2 id="选择当前行" tabindex="-1"><a class="header-anchor" href="#选择当前行"><span>选择当前行</span></a></h2><p>键盘快捷键: <code>Ctrl + L</code></p><h2 id="导航到文件的开头和结尾" tabindex="-1"><a class="header-anchor" href="#导航到文件的开头和结尾"><span>导航到文件的开头和结尾</span></a></h2><p>键盘快捷键: <code>Ctrl + Home</code> 和 <code>Ctrl + End</code></p><h2 id="打开-markdown-预览" tabindex="-1"><a class="header-anchor" href="#打开-markdown-预览"><span>打开 Markdown 预览</span></a></h2><p>在 Markdown 文件中，使用</p><p>键盘快捷键: <code>Ctrl + Shift + V</code></p><p><img src="'+c+'" alt="Markdown 预览"></p><h2 id="并排-markdown-编辑和预览" tabindex="-1"><a class="header-anchor" href="#并排-markdown-编辑和预览"><span>并排 Markdown 编辑和预览</span></a></h2><p>在 Markdown 文件中，使用</p><p>键盘快捷键: <code>Ctrl + K V</code></p><p>预览和编辑器将与您在任一视图中的滚动同步。</p><p><img src="'+l+'" alt="并排 Markdown 预览"></p>',63)]))}const f=t(h,[["render",m]]),C=JSON.parse('{"path":"/software/vscode/guide/edit.html","title":"编辑技巧","lang":"zh-CN","frontmatter":{"date":"2020-08-18T00:00:00.000Z","title":"编辑技巧","icon":"edit","category":"VS Code","tag":["VS Code","软件"],"description":"这是编辑代码的一些常用功能。如果您不喜欢键盘快捷键，请考虑为旧的编辑器安装键盘映射扩展名。 多光标选择 要在任意位置添加光标，请用鼠标选择一个位置，然后使用 Alt + Click。 要将光标设置在当前位置之上或之下，请使用: 键盘快捷键: Ctrl + Alt + ↑ 或 Ctrl + Alt + ↓ 您可以使用 Ctrl + Shift + L 将...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/software/vscode/guide/edit.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"编辑技巧"}],["meta",{"property":"og:description","content":"这是编辑代码的一些常用功能。如果您不喜欢键盘快捷键，请考虑为旧的编辑器安装键盘映射扩展名。 多光标选择 要在任意位置添加光标，请用鼠标选择一个位置，然后使用 Alt + Click。 要将光标设置在当前位置之上或之下，请使用: 键盘快捷键: Ctrl + Alt + ↑ 或 Ctrl + Alt + ↓ 您可以使用 Ctrl + Shift + L 将..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:tag","content":"VS Code"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-08-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编辑技巧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":2.98,"words":895},"filePathRelative":"software/vscode/guide/edit.md","localizedDate":"2020年8月18日","excerpt":"<p>这是编辑代码的一些常用功能。如果您不喜欢键盘快捷键，请考虑为旧的编辑器安装键盘映射扩展名。</p>\\n<h2>多光标选择</h2>\\n<p>要在任意位置添加光标，请用鼠标选择一个位置，然后使用 <code>Alt + Click</code>。</p>\\n<p>要将光标设置在当前位置之上或之下，请使用:</p>\\n<p>键盘快捷键: <code>Ctrl + Alt + ↑</code> 或 <code>Ctrl + Alt + ↓</code></p>\\n<p>您可以使用 <code>Ctrl + Shift + L</code> 将附加光标添加到当前选择的所有实例中。</p>\\n<p>如果不想添加所有当前选中项，则可以使用 <code>Ctrl + D</code> 代替。这只会选择您选择的选中项之后的下一个选中项，因此您可以一个一个地添加选择。</p>","autoDesc":true}');export{f as comp,C as data};
