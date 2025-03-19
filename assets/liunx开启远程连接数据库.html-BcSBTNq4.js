import{_ as n,c as l,d as i,e,b as t,g as a,o as h}from"./app-Ciqs_Xc9.js";const k={};function p(d,s){return h(),l("div",null,[s[0]||(s[0]=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"远程数据库连接"),i("p",null,[a("远程数据库连接首先关闭防火墙"),i("br"),a(" monogo开启远程访问"),i("br"),a(" mongo关闭服务"),i("br"),a(" mysql开启远程连接 ......")])],-1)),e(" more "),s[1]||(s[1]=t(`<h2 id="远程数据库连接首先关闭防火墙" tabindex="-1"><a class="header-anchor" href="#远程数据库连接首先关闭防火墙"><span>远程数据库连接首先关闭防火墙</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#一、下面是red hat/CentOs7关闭防火墙的命令!</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查看防火状态</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  iptables</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#暂时关闭防火墙</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  iptables</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#永久关闭防火墙</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chkconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iptables</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> off</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#重启防火墙</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iptables</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#永久关闭后重启</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//暂时还没有试过</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chkconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iptables</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#二、firewalld</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#Centos7默认安装了firewalld，如果没有安装的话，可以使用 yum install firewalld firewalld-config进行安装。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#启动防火墙</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#禁用防火墙</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#设置开机启动</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#停止并禁用开机启动</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sytemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#重启防火墙</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查看状态</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld或者</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --state</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查看版本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="monogo开启远程访问" tabindex="-1"><a class="header-anchor" href="#monogo开启远程访问"><span>monogo开启远程访问</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dbpath</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/mongodb/mongodb-3.6.5/data/db</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     #数据文件存放目录</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">logpath</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/mongodb/mongodb-3.6.5/data/log/mongodb.log</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   #日志文件存放目录   </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">port</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">27017</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   #端口号</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">fork</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">true</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #以守护程序的方式启用,即在后台运行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">logappend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #日志以追加的形式添加</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bind_ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.0.0.0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #可以访问的地址. 127.0.0.1表示自己访问,  0.0.0.0 表示所有人都能访问</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongo关闭服务" tabindex="-1"><a class="header-anchor" href="#mongo关闭服务"><span>mongo关闭服务</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#关闭服务 /data/db 代表数据库文件位置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mongod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --shutdown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --dbpath</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /data/db</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql开启远程连接" tabindex="-1"><a class="header-anchor" href="#mysql开启远程连接"><span>mysql开启远程连接</span></a></h2><ul><li>mysql操作</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#修改mysql密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">update</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> password</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;root&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">where</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;root&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">flush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> privileges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置远程连接</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#第一步登录mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#第二步切换数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#使用 mysql 命令为 root 用户授权 mysql 远程连接服务</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#第三步:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grant</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> all</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> privileges</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;root&#39;@&#39;%&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;root&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grant</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> option</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#说明：此命令是为密码为 root 、IP（%）任意的 root 用户授权。（%：模糊查询，所有 IP 都可以,，可指定其他主机 IP；BY 后的 &#39;root&#39; 为密码）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#第四步:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">flush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> privileges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#将配置写入 mysql 授权表中</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11))])}const c=n(k,[["render",p],["__file","liunx开启远程连接数据库.html.vue"]]),g=JSON.parse('{"path":"/other/Liunx/2020/liunx%E5%BC%80%E5%90%AF%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93.html","title":"远程数据库连接","lang":"zh-CN","frontmatter":{"title":"远程数据库连接","date":"2020-09-09T00:00:00.000Z","tag":"远程数据库连接","category":"数据库","description":"远程数据库连接 远程数据库连接首先关闭防火墙 monogo开启远程访问 mongo关闭服务 mysql开启远程连接 ......","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/other/Liunx/2020/liunx%E5%BC%80%E5%90%AF%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"远程数据库连接"}],["meta",{"property":"og:description","content":"远程数据库连接 远程数据库连接首先关闭防火墙 monogo开启远程访问 mongo关闭服务 mysql开启远程连接 ......"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-09T11:47:08.000Z"}],["meta",{"property":"article:tag","content":"远程数据库连接"}],["meta",{"property":"article:published_time","content":"2020-09-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-09T11:47:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"远程数据库连接\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-09T00:00:00.000Z\\",\\"dateModified\\":\\"2022-08-09T11:47:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"远程数据库连接首先关闭防火墙","slug":"远程数据库连接首先关闭防火墙","link":"#远程数据库连接首先关闭防火墙","children":[]},{"level":2,"title":"monogo开启远程访问","slug":"monogo开启远程访问","link":"#monogo开启远程访问","children":[]},{"level":2,"title":"mongo关闭服务","slug":"mongo关闭服务","link":"#mongo关闭服务","children":[]},{"level":2,"title":"mysql开启远程连接","slug":"mysql开启远程连接","link":"#mysql开启远程连接","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1660045628000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":2}]},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"other/Liunx/2020/liunx开启远程连接数据库.md","localizedDate":"2020年9月9日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">远程数据库连接</p>\\n<p>远程数据库连接首先关闭防火墙<br>\\nmonogo开启远程访问<br>\\nmongo关闭服务<br>\\nmysql开启远程连接\\n......</p>\\n</div>\\n","autoDesc":true}');export{c as comp,g as data};
