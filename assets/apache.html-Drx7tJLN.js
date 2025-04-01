import{_ as i,c as a,d as n,e as l,b as e,o as p}from"./app-B-ayoO34.js";const t={};function h(d,s){return p(),a("div",null,[s[0]||(s[0]=n("p",null,"Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。",-1)),l(" more "),s[1]||(s[1]=e(`<h2 id="apache-是什么" tabindex="-1"><a class="header-anchor" href="#apache-是什么"><span>Apache 是什么</span></a></h2><p>Apache HTTP Server (简称 Apache )是 Apache 软件基金会的一个开放源码的网页服务器，可以在大多数计算机操作系统中运行，由于其多平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩展，将 Perl/Python 等解释器编译到服务器中。</p><p>Apache HTTP 服务器是一个模块化的服务器，源于 NCSAhttpd 服务器，经过多次修改，成为世界使用排名第一的 Web 服务器软件。 它可以运行在几乎所有广泛使用的计算机平台上。</p><h2 id="apache-模块" tabindex="-1"><a class="header-anchor" href="#apache-模块"><span>Apache 模块</span></a></h2><p>Apache 通过引入各种模块来完成不同的功能。</p><h2 id="apache-官方文档" tabindex="-1"><a class="header-anchor" href="#apache-官方文档"><span>Apache 官方文档</span></a></h2><ul><li><a href="https://httpd.apache.org/docs/2.4/zh-cn/" target="_blank" rel="noopener noreferrer">文档地址</a></li></ul><h2 id="apache-配置" tabindex="-1"><a class="header-anchor" href="#apache-配置"><span>Apache 配置</span></a></h2><p>Apache 通过 conf 文件夹下的 httpd.conf 来配置。</p><div class="language-apache line-numbers-mode" data-highlighter="shiki" data-ext="apache" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 此处填入 Apache 的路径</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Define</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> SRVROOT &quot;U:/Apache&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ServerRoot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;\${SRVROOT}&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 127</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 127</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">443</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> auth_basic_module modules/mod_auth_basic.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> authz_core_module modules/mod_authz_core.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> deflate_module modules/mod_deflate.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dir_module modules/mod_dir.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> env_module modules/mod_env.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> isapi_module modules/mod_isapi.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> log_config_module modules/mod_log_config.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mime_module modules/mod_mime.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> negotiation_module modules/mod_negotiation.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> proxy_http2_module modules/mod_proxy_http2.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ratelimit_module modules/mod_ratelimit.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> rewrite_module modules/mod_rewrite.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> setenvif_module modules/mod_setenvif.so</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ssl_module modules/mod_ssl.so</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 此处填入 PHP 的 ssh 组件路径</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;u:/php/libssh2.dll&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 此处填入 PHP 的 Apache 组件路径</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LoadModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> php7_module &quot;u:/PHP/php7apache2_4.dll&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 此处填入 PHP 的路径</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">PHPIniDir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;u:/PHP&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;IfModule </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">unixd_module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> daemon</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> daemon</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/IfModule&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ServerAdmin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mister-hope@outlook.com</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ServerName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> localhost</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;Directory </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  AllowOverride</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> none</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  Require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> all denied</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/Directory&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DocumentRoot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;\${SRVROOT}/htdocs&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;Directory </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;\${SRVROOT}/htdocs&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  Options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> FollowSymLinks</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  AllowOverride</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> All</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  Require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> all granted</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/Directory&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;IfModule </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dir_module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  DirectoryIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> index.html index.php</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/IfModule&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;Files </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;.ht*&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  Require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> all denied</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/Files&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ErrorLog</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;logs/error.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LogLevel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> info</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;IfModule </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">log_config_module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  LogFormat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %b \\&quot;%{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Referer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}i\\&quot; \\&quot;%{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">User-Agent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}i\\&quot;&quot; combined</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  LogFormat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %b&quot; common</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;IfModule </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">logio_module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    LogFormat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %b \\&quot;%{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Referer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}i\\&quot; \\&quot;%{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">User-Agent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}i\\&quot; %I %O&quot; combinedio</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/IfModule&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  CustomLog</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;logs/access.log&quot; common</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/IfModule&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;IfModule </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">alias_module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ScriptAlias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /cgi-bin/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;\${SRVROOT}/cgi-bin/&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/IfModule&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;Directory </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;\${SRVROOT}/cgi-bin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  AllowOverride</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> None</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  Options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> None</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  Require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> all granted</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/Directory&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;IfModule </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">headers_module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  RequestHeader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> unset Proxy early</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/IfModule&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;IfModule </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mime_module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  TypesConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> conf/mime.types</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  AddHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> application/x-httpd-php .php</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  AddType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> application/x-compress .Z</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  AddType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> application/x-gzip .gz .tgz</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  AddType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> application/x-httpd-php .php .html</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/IfModule&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;IfModule </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">proxy_html_module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  Include</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> conf/extra/proxy-html.conf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/IfModule&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;IfModule </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ssl_module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  SSLRandomSeed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> startup builtin</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  SSLRandomSeed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> connect builtin</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/IfModule&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;VirtualHost </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">*:80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ServerAdmin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mister-hope@outlook.com</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ServerName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nenu.com</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ServerAlias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> innenu</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  DocumentRoot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;\${SRVROOT}/htdocs&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/VirtualHost&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;VirtualHost </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">*:443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ServerAdmin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mister-hope@outlook.com</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ServerName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mrhope.com</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ServerAlias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mrhope</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  DocumentRoot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &quot;\${SRVROOT}/htdocs&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/VirtualHost&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="serverroot" tabindex="-1"><a class="header-anchor" href="#serverroot"><span>ServerRoot</span></a></h3><p>指定服务器的根目录</p></li><li><h3 id="listen" tabindex="-1"><a class="header-anchor" href="#listen"><span>Listen</span></a></h3><p>指定服务器监听的 IP 与 port</p></li><li><h3 id="loadmodule" tabindex="-1"><a class="header-anchor" href="#loadmodule"><span>LoadModule</span></a></h3><p>加载指定的模块来使服务器调用</p></li><li><h3 id="phpinidir" tabindex="-1"><a class="header-anchor" href="#phpinidir"><span>PHPIniDir</span></a></h3><p>指定 PHP 目录</p></li><li><h3 id="unixd-module" tabindex="-1"><a class="header-anchor" href="#unixd-module"><span>unixd_module</span></a></h3><p>分配用户权限</p></li><li><h3 id="serveradmin" tabindex="-1"><a class="header-anchor" href="#serveradmin"><span>ServerAdmin</span></a></h3><p>服务器管理员</p></li><li><h3 id="servername" tabindex="-1"><a class="header-anchor" href="#servername"><span>ServerName</span></a></h3><p>服务器名称</p></li></ul>`,11))])}const r=i(t,[["render",h]]),A=JSON.parse('{"path":"/software/apache.html","title":"Apache","lang":"zh-CN","frontmatter":{"title":"Apache","icon":"Apache","date":"2019-12-12T00:00:00.000Z","category":"服务器","description":"Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/software/apache.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"Apache"}],["meta",{"property":"og:description","content":"Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:published_time","content":"2019-12-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1730715475000,"updatedTime":1730715475000,"contributors":[{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":2.28,"words":684},"filePathRelative":"software/apache.md","localizedDate":"2019年12月12日","excerpt":"<p>Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。</p>\\n","autoDesc":true}');export{r as comp,A as data};
