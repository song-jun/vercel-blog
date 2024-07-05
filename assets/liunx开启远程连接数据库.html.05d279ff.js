import{_ as s,o as n,c as a,e}from"./app.c585cf24.js";const l={},i=e(`<div class="custom-container tip"><p class="custom-container-title">\u8FDC\u7A0B\u6570\u636E\u5E93\u8FDE\u63A5</p><p>\u8FDC\u7A0B\u6570\u636E\u5E93\u8FDE\u63A5\u9996\u5148\u5173\u95ED\u9632\u706B\u5899<br> monogo\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE<br> mongo\u5173\u95ED\u670D\u52A1<br> mysql\u5F00\u542F\u8FDC\u7A0B\u8FDE\u63A5 ......</p></div><h2 id="\u8FDC\u7A0B\u6570\u636E\u5E93\u8FDE\u63A5\u9996\u5148\u5173\u95ED\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u6570\u636E\u5E93\u8FDE\u63A5\u9996\u5148\u5173\u95ED\u9632\u706B\u5899" aria-hidden="true">#</a> \u8FDC\u7A0B\u6570\u636E\u5E93\u8FDE\u63A5\u9996\u5148\u5173\u95ED\u9632\u706B\u5899</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E00\u3001\u4E0B\u9762\u662Fred hat/CentOs7\u5173\u95ED\u9632\u706B\u5899\u7684\u547D\u4EE4!</span>
<span class="token comment">#\u67E5\u770B\u9632\u706B\u72B6\u6001</span>

systemctl status firewalld

<span class="token function">service</span>  iptables status

<span class="token comment">#\u6682\u65F6\u5173\u95ED\u9632\u706B\u5899</span>

systemctl stop firewalld

<span class="token function">service</span>  iptables stop

<span class="token comment">#\u6C38\u4E45\u5173\u95ED\u9632\u706B\u5899</span>

systemctl disable firewalld

<span class="token function">chkconfig</span> iptables off

<span class="token comment">#\u91CD\u542F\u9632\u706B\u5899</span>

systemctl <span class="token builtin class-name">enable</span> firewalld

<span class="token function">service</span> iptables restart  

<span class="token comment">#\u6C38\u4E45\u5173\u95ED\u540E\u91CD\u542F</span>

//\u6682\u65F6\u8FD8\u6CA1\u6709\u8BD5\u8FC7

<span class="token function">chkconfig</span> iptables on

<span class="token comment">#\u4E8C\u3001firewalld</span>
<span class="token comment">#Centos7\u9ED8\u8BA4\u5B89\u88C5\u4E86firewalld\uFF0C\u5982\u679C\u6CA1\u6709\u5B89\u88C5\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528 yum install firewalld firewalld-config\u8FDB\u884C\u5B89\u88C5\u3002</span>

<span class="token comment">#\u542F\u52A8\u9632\u706B\u5899</span>

systemctl start firewalld

<span class="token comment">#\u7981\u7528\u9632\u706B\u5899</span>

systemctl stop firewalld

<span class="token comment">#\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</span>

systemctl <span class="token builtin class-name">enable</span> firewalld

<span class="token comment">#\u505C\u6B62\u5E76\u7981\u7528\u5F00\u673A\u542F\u52A8</span>

sytemctl disable firewalld

<span class="token comment">#\u91CD\u542F\u9632\u706B\u5899</span>

firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment">#\u67E5\u770B\u72B6\u6001</span>

systemctl status firewalld\u6216\u8005 firewall-cmd <span class="token parameter variable">--state</span>

<span class="token comment">#\u67E5\u770B\u7248\u672C</span>

firewall-cmd <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="monogo\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#monogo\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE" aria-hidden="true">#</a> monogo\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">dbpath</span><span class="token operator">=</span>/usr/local/mongodb/mongodb-3.6.5/data/db     <span class="token comment">#\u6570\u636E\u6587\u4EF6\u5B58\u653E\u76EE\u5F55</span>
<span class="token assign-left variable">logpath</span><span class="token operator">=</span>/usr/local/mongodb/mongodb-3.6.5/data/log/mongodb.log   <span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u5B58\u653E\u76EE\u5F55   </span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">27017</span>   <span class="token comment">#\u7AEF\u53E3\u53F7</span>
<span class="token assign-left variable">fork</span><span class="token operator">=</span>true    <span class="token comment">#\u4EE5\u5B88\u62A4\u7A0B\u5E8F\u7684\u65B9\u5F0F\u542F\u7528,\u5373\u5728\u540E\u53F0\u8FD0\u884C</span>
logappend <span class="token operator">=</span> <span class="token boolean">true</span>  <span class="token comment">#\u65E5\u5FD7\u4EE5\u8FFD\u52A0\u7684\u5F62\u5F0F\u6DFB\u52A0</span>
bind_ip <span class="token operator">=</span> <span class="token number">0.0</span>.0.0 <span class="token comment">#\u53EF\u4EE5\u8BBF\u95EE\u7684\u5730\u5740. 127.0.0.1\u8868\u793A\u81EA\u5DF1\u8BBF\u95EE,  0.0.0.0 \u8868\u793A\u6240\u6709\u4EBA\u90FD\u80FD\u8BBF\u95EE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongo\u5173\u95ED\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#mongo\u5173\u95ED\u670D\u52A1" aria-hidden="true">#</a> mongo\u5173\u95ED\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5173\u95ED\u670D\u52A1 /data/db \u4EE3\u8868\u6570\u636E\u5E93\u6587\u4EF6\u4F4D\u7F6E</span>
mongod  <span class="token parameter variable">--shutdown</span>  <span class="token parameter variable">--dbpath</span> /data/db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql\u5F00\u542F\u8FDC\u7A0B\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#mysql\u5F00\u542F\u8FDC\u7A0B\u8FDE\u63A5" aria-hidden="true">#</a> mysql\u5F00\u542F\u8FDC\u7A0B\u8FDE\u63A5</h2><ul><li>mysql\u64CD\u4F5C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
<span class="token comment">#\u4FEE\u6539mysql\u5BC6\u7801</span>
mysql<span class="token operator">&gt;</span> use mysql<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> update user <span class="token builtin class-name">set</span> password <span class="token operator">=</span> Password<span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span> where User <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u7B2C\u4E00\u6B65\u767B\u5F55mysql</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
<span class="token comment">#\u7B2C\u4E8C\u6B65\u5207\u6362\u6570\u636E\u5E93</span>
mysql<span class="token operator">&gt;</span> use mysql<span class="token punctuation">;</span>
<span class="token comment">#\u4F7F\u7528 mysql \u547D\u4EE4\u4E3A root \u7528\u6237\u6388\u6743 mysql \u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1</span>
<span class="token comment">#\u7B2C\u4E09\u6B65:</span>
grant all privileges on *.* to <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;root&#39;</span> with grant option<span class="token punctuation">;</span>
<span class="token comment">#\u8BF4\u660E\uFF1A\u6B64\u547D\u4EE4\u662F\u4E3A\u5BC6\u7801\u4E3A root \u3001IP\uFF08%\uFF09\u4EFB\u610F\u7684 root \u7528\u6237\u6388\u6743\u3002\uFF08%\uFF1A\u6A21\u7CCA\u67E5\u8BE2\uFF0C\u6240\u6709 IP \u90FD\u53EF\u4EE5,\uFF0C\u53EF\u6307\u5B9A\u5176\u4ED6\u4E3B\u673A IP\uFF1BBY \u540E\u7684 &#39;root&#39; \u4E3A\u5BC6\u7801\uFF09</span>
<span class="token comment">#\u7B2C\u56DB\u6B65:</span>
flush privileges<span class="token punctuation">;</span>
<span class="token comment">#\u5C06\u914D\u7F6E\u5199\u5165 mysql \u6388\u6743\u8868\u4E2D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[i];function d(t,r){return n(),a("div",null,c)}var p=s(l,[["render",d],["__file","liunx\u5F00\u542F\u8FDC\u7A0B\u8FDE\u63A5\u6570\u636E\u5E93.html.vue"]]);export{p as default};
