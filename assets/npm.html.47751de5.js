import{_ as n,o as s,c as a,e}from"./app.16f1d1b9.js";const i={},t=e(`<h2 id="npm\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#npm\u6307\u4EE4" aria-hidden="true">#</a> Npm\u6307\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u8BBE\u7F6E\u955C\u50CF\u6E90
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com
//\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u955C\u50CF\u5730\u5740
<span class="token function">npm</span> config get registry
// \u67E5\u770B <span class="token function">npm</span> \u5168\u5C40\u5B89\u88C5\u8FC7\u7684\u5305
<span class="token function">npm</span> list -g --depth <span class="token number">0</span>
// \u5168\u5C40\u5B89\u88C5
<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span> -g
// \u5B89\u88C5\u9879\u76EE\u6240\u6709\u4F9D\u8D56
<span class="token function">npm</span> <span class="token function">install</span>
// \u5B89\u88C5\u6307\u5B9A\u7248\u672C
<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>@1.2.3
// \u5B89\u88C5\u6700\u65B0\u7248\u672C
<span class="token function">npm</span> i <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>@latest
// \u5220\u9664\u5168\u5C40\u7684\u5305
<span class="token function">npm</span> uninstall -g <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
// \u5220\u9664 node_modules \u76EE\u5F55\u4E0B\u9762\u7684\u5305
<span class="token function">npm</span> uninstall <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
// \u66F4\u65B0\u6307\u5B9A\u5305
<span class="token function">npm</span> update <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
// \u66F4\u65B0\u6307\u5B9A\u5168\u5C40\u5305
<span class="token function">npm</span> update -g <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
// \u66F4\u65B0\u672C\u5730\u5B89\u88C5\u7684\u5305
// \u5728 package.json \u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55\u4E2D\u6267\u884C <span class="token function">npm</span> update \u547D\u4EE4
// \u6267\u884C <span class="token function">npm</span> outdated \u547D\u4EE4\u3002\u4E0D\u5E94\u8BE5\u6709\u4EFB\u4F55\u8F93\u51FA\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function p(c,o){return s(),a("div",null,l)}var d=n(i,[["render",p],["__file","npm.html.vue"]]);export{d as default};
