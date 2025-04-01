import{_ as e,c as t,b as n,d as i,a as l,w as p,r,o as d,f as h}from"./app-B-ayoO34.js";const o={},c={class:"hint-container tip"};function k(m,s){const a=r("RouteLink");return d(),t("div",null,[s[2]||(s[2]=n(`<p>由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。</p><h2 id="代理设置" tabindex="-1"><a class="header-anchor" href="#代理设置"><span>代理设置</span></a></h2><p>通常情况下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p><p>在 Windows 下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p><details class="hint-container details"><summary>Windows 例子</summary><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> HTTP_PROXY=http://127.0.0.1:1080</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> HTTPS_PROXY=http://127.0.0.1:1080</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>Linux 例子</summary><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> HTTP_PROXY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">127</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">1080</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> HTTPS_PROXY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">127</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">1080</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></details><p>上述做法仅对当前终端有效，如果需要永久生效，可以将上述命令添加到系统环境变量 (Windows) 或 <code>~/.bashrc</code> (Linux) 中。</p>`,7)),i("div",c,[s[1]||(s[1]=i("p",{class:"hint-container-title"},"提示",-1)),i("p",null,[l(a,{to:"/code/windows/env-variable.html"},{default:p(()=>s[0]||(s[0]=[h("Windows 添加环境变量")])),_:1})])]),s[3]||(s[3]=n(`<h2 id="ssh-配置" tabindex="-1"><a class="header-anchor" href="#ssh-配置"><span>SSH 配置</span></a></h2><p>如果你在使用 22 端口通过 SSH 使用 Git，那么你需要在用户目录下的 <code>.ssh</code> 目录新建 <code>config</code> 文件，并输入以下内容:</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Host github.com</span></span>
<span class="line"><span>  User git</span></span>
<span class="line"><span>  Port 22</span></span>
<span class="line"><span>  Hostname github.com</span></span>
<span class="line"><span>  # 这里在 Windows 下需要替换成实际目录，如 &quot;C:\\Users\\mister-hope\\.ssh\\id_rsa&quot;</span></span>
<span class="line"><span>  IdentityFile &quot;~/.ssh/id_rsa&quot;</span></span>
<span class="line"><span>  TCPKeepAlive yes</span></span>
<span class="line"><span>  # Ubuntu 需要安装 corkscrew</span></span>
<span class="line"><span>  ProxyCommand /usr/bin/corkscrew 172.31.16.1 10808 %h %p</span></span>
<span class="line"><span>  # Windows 可以改为 Git 安装目录下的 connect，如</span></span>
<span class="line"><span>  # ProxyCommand &quot;C:\\Program Files\\Git\\mingw64\\bin\\connect&quot; -S 127.0.0.1:10808 -a none %h %p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Host ssh.github.com</span></span>
<span class="line"><span>  User git</span></span>
<span class="line"><span>  Port 443</span></span>
<span class="line"><span>  Hostname ssh.github.com</span></span>
<span class="line"><span>  # 这里在 Windows 下需要替换成实际目录，如 &quot;C:\\Users\\mister-hope\\.ssh\\id_rsa&quot;</span></span>
<span class="line"><span>  IdentityFile &quot;~/.ssh/id_rsa&quot;</span></span>
<span class="line"><span>  TCPKeepAlive yes</span></span>
<span class="line"><span>  # Ubuntu 需要安装 corkscrew</span></span>
<span class="line"><span>  ProxyCommand /usr/bin/corkscrew 172.31.16.1 10808 %h %p</span></span>
<span class="line"><span>  # Windows 可以改为 Git 安装目录下的 connect，如</span></span>
<span class="line"><span>  # ProxyCommand &quot;C:\\Program Files\\Git\\mingw64\\bin\\connect&quot; -S 127.0.0.1:10808 -a none %h %p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果在 WSL 使用，获取 Windows 的 IP 地址命令为 <code>ip route | grep default | awk &#39;{print $3}&#39;</code>。</p><p>特别注意，如不进行额外配置，每次重启后主机地址都会发生变化。</p></div><p>你可以使用 <code>ssh -T git@github.com</code> 来测试你的代理配置是否有效。</p>`,5))])}const g=e(o,[["render",k]]),b=JSON.parse('{"path":"/software/git/proxy.html","title":"Git 代理","lang":"zh-CN","frontmatter":{"date":"2022-11-06T00:00:00.000Z","title":"Git 代理","icon":"git","category":"Git","tag":["Git","软件"],"description":"由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。 代理设置 通常情况下，我们可以通过设置环境变量 HTTP_PROXY 和 HTTPS_PROXY 来进行代理设置。 在 Windows 下，我们可以通过设置环境变量 HTTP_PROXY 和 HTTPS_PRO...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/software/git/proxy.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"Git 代理"}],["meta",{"property":"og:description","content":"由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。 代理设置 通常情况下，我们可以通过设置环境变量 HTTP_PROXY 和 HTTPS_PROXY 来进行代理设置。 在 Windows 下，我们可以通过设置环境变量 HTTP_PROXY 和 HTTPS_PRO..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-20T12:37:18.000Z"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2022-11-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-20T12:37:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 代理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-06T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-20T12:37:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1730715475000,"updatedTime":1742474238000,"contributors":[{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1},{"name":"君陌离","username":"君陌离","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"software/git/proxy.md","localizedDate":"2022年11月6日","excerpt":"<p>由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。</p>\\n<h2>代理设置</h2>\\n<p>通常情况下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p>\\n<p>在 Windows 下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p>\\n<details class=\\"hint-container details\\"><summary>Windows 例子</summary>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">set</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> HTTP_PROXY=http://127.0.0.1:1080</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">set</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> HTTPS_PROXY=http://127.0.0.1:1080</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></details>","autoDesc":true}');export{g as comp,b as data};
