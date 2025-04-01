import{_ as i,c as s,b as t,o as d}from"./app-B-ayoO34.js";const a={};function l(n,e){return d(),s("div",null,e[0]||(e[0]=[t('<h2 id="pwd-命令" tabindex="-1"><a class="header-anchor" href="#pwd-命令"><span>pwd 命令</span></a></h2><p>由于 Linux 文件系统中有许多目录，当用户执行一条 Linux 命令又没有指定该命令或参数所在的目录时，Linux 系统就会首先在当前目录(目前的工作目录)搜寻这个命令或它的参数。因此，用户在执行命令之前，常常需要确定目前所在的工作目录，即当前目录。</p><p>当用户登陆 Linux 系统之后，其当前目录就是它的主目录。那么，如何确定当前目录呢? 可以使用 Linux 系统的 pwd 命令来显示当前目录的绝对路径。</p><p>pwd 命令，是 Print Working Directory (打印工作目录)的缩写，功能是显示用户当前所处的工作目录。该命令的基本格式为:</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# pwd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="cd-命令" tabindex="-1"><a class="header-anchor" href="#cd-命令"><span>cd 命令</span></a></h2><p>cd 命令，是 Change Directory 的缩写，用来切换工作目录。</p><p>Linux 命令按照来源方式，可分为两种，分别是 Shell 内置命令和外部命令。所谓 Shell 内置命令，就是 Shell 自带的命令，这些命令是没有执行文件的；而外部命令就是由程序员单独开发的，所以会有命令的执行文件。Linux 中的绝大多数命令是外部命令，而 cd 命令是一个典型的 Shell 内置命令，所以 cd 命令没有执行文件所在路径。</p><p>cd 命令的基本格式如下:</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cd [相对路径或绝对路径]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>除此之外，cd 命令后面可以跟一些特殊符号，表达固定的含义。</p><table><thead><tr><th>特殊符号</th><th>作 用</th></tr></thead><tbody><tr><td><code>~</code></td><td>代表当前登录用户的主目录</td></tr><tr><td><code>~&lt;用户名&gt;</code></td><td>表示切换至指定用户的主目录</td></tr><tr><td><code>-</code></td><td>代表上次所在目录</td></tr><tr><td><code>.</code></td><td>代表当前目录</td></tr><tr><td><code>..</code></td><td>代表上级目录</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 Linux 系统中，根目录确实存在 <code>.</code>(当前目录)以及 <code>..</code>(当前目录的父目录)两个目录，但由于根目录是最顶级目录，因此根目录的 <code>..</code> 和 <code>.</code> 的属性和权限完全一致，也就是说，根目录的父目录是自身。</p></div><h2 id="ls-命令" tabindex="-1"><a class="header-anchor" href="#ls-命令"><span>ls 命令</span></a></h2><p>ls 命令，list 的缩写，是最常见的目录操作命令，其主要功能是显示当前目录下的内容。此命令的基本格式为:</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# ls [选项] 目录名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>| 选项 | 功能 | | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | | -a | 显示全部的文件，包括隐藏文件(开头为 <code>.</code> 的文件)也一起罗列出来，这是最常用的选项之一。 | | -A | 显示全部的文件，连同隐藏文件，但不包括 <code>.</code> 与 <code>..</code> 这两个目录。 | | -d | 仅列出目录本身，而不是列出目录内的文件数据。 | | -f | ls 默认会以文件名排序，使用 <code>-f</code> 选项会直接列出结果，而不进行排序。 | | -F | 在文件或目录名后加上文件类型的指示符号，例如，<code>*</code> 代表可运行文件，<code>/</code> 代表目录，= 代表 socket 文件， | 代表 FIFO 文件。 | | -h | 以人们易读的方式显示文件或目录大小，如 1KB、234MB、2GB 等。 | | -i | 显示 inode 节点信息。 | | -l | 使用长格式列出文件和目录信息。 | | -n | 以 UID 和 GID 分别代替文件用户名和群组名显示出来。 | | -r | 将排序结果反向输出，比如，若原本文件名由小到大，反向则为由大到小。 | | -R | 连同子目录内容一起列出来，等於将该目录下的所有文件都显示出来。 | | -S | 以文件容量大小排序，而不是以文件名排序。 | | -t | 以时间排序，而不是以文件名排序。 | | --color=never<br>--color=always<br>--color=auto | <code>never</code> 表示不依据文件特性给予颜色显示。<br><code>always</code> 表示显示颜色，ls 默认采用这种方式。<br><code>auto</code> 表示让系统自行依据配置来判断是否给予颜色。 | | --full-time | 以完整时间模式 (包含年、月、日、时、分)输出 | | --time={atime,ctime} | 输出 access 时间或改变权限属性时间(ctime)，而不是内容变更时间。 |</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当 ls 命令不使用任何选项时，默认只会显示非隐藏文件的名称，并以文件名进行排序，同时会根据文件的具体类型给文件名配色(蓝色显示目录，白色显示一般文件)。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>ls 命令使用了 <code>-l</code> 选项，显示出文件的详细信息，此选项显示的这 7 列的含义分别是:</p><ul><li>第一列: 规定了不同的用户对文件所拥有的权限，具体权限的含义将在后续章节中讲解。</li><li>第二列: 引用计数，文件的引用计数代表该文件的硬链接个数，而目录的引用计数代表该目录有多少个一级子目录。</li><li>第三列: 所有者，也就是这个文件属于哪个用户。默认所有者是文件的建立用户。</li><li>第四列: 所属组，默认所属组是文件建立用户的有效组，一般情况下就是建立用户的所在组。</li><li>第五列: 大小，默认单位是字节。</li><li>第六列: 文件修改时间，文件状态修改时间或文件数据修改时间都会更改这个时间，注意这个时间不是文件的创建时间。</li><li>第七列: 文件名或目录名。</li></ul></div><h2 id="mkdir-命令" tabindex="-1"><a class="header-anchor" href="#mkdir-命令"><span>mkdir 命令</span></a></h2><p>mkdir 命令，是 make directories 的缩写，用于创建新目录，此命令所有用户都可以使用。</p><p>mkdir 命令的基本格式为:</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mkdir [-mp] 目录名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>-m 选项用于手动配置所创建目录的权限，而不再使用默认权限。</li><li>-p 选项递归创建所有目录，以创建 <code>/home/test/demo</code> 为例，在默认情况下，您需要一层一层的创建各个目录，而使用 <code>-p</code> 选项，则系统会自动帮您创建 <code>/home</code>、<code>/home/test</code> 以及 <code>/home/test/demo</code>。</li></ul><h2 id="rmdir-命令" tabindex="-1"><a class="header-anchor" href="#rmdir-命令"><span>rmdir 命令</span></a></h2><p>和 mkdir 命令(创建空目录)恰好相反，rmdir(remove empty directories 的缩写)命令用于删除空目录，此命令的基本格式为:</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# rmdir [-p] 目录名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>-p 选项用于递归删除空目录。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>rmdir 命令的作用十分有限，因为只能刪除空目录，所以一旦目录中有内容，就会报错。</p></div>',29)]))}const o=i(a,[["render",l]]),c=JSON.parse('{"path":"/linux/command/dir.html","title":"文件夹","lang":"zh-CN","frontmatter":{"title":"文件夹","icon":"tree","date":"2019-11-18T00:00:00.000Z","category":"Linux","feed":false,"seo":false,"head":[["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":5.28,"words":1584},"filePathRelative":"linux/command/dir.md","localizedDate":"2019年11月18日"}');export{o as comp,c as data};
