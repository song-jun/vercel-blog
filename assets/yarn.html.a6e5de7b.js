import{_ as n,o as s,c as a,e}from"./app.16f1d1b9.js";const i={},l=e(`<h2 id="yarn\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#yarn\u6307\u4EE4" aria-hidden="true">#</a> Yarn\u6307\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u9ED8\u8BA4\u955C\u50CF\u6E90 \u8BBE\u7F6E\u4E3A \u6DD8\u5B9D\u955C\u50CF
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com

//electron\u955C\u50CF\u6E90 \u8BBE\u7F6E\u4E3A \u6DD8\u5B9D\u955C\u50CF\uFF08\u6CA1\u7528\u5230electron\u53EF\u5FFD\u7565\u8FD9\u6B65\uFF09
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> electron_mirror https://npmmirror.com/mirrors/electron/

// \u67E5\u770B <span class="token function">yarn</span> \u5168\u5C40\u5B89\u88C5\u8FC7\u7684\u5305
<span class="token function">yarn</span> global list --depth<span class="token operator">=</span><span class="token number">0</span>
// \u5168\u5C40\u5B89\u88C5
<span class="token function">yarn</span> global <span class="token function">add</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
// \u5B89\u88C5\u6240\u6709\u4F9D\u8D56
<span class="token function">yarn</span>
// \u5B89\u88C5\u6307\u5B9A\u7248\u672C
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
// \u5B89\u88C5\u6700\u65B0\u7248\u672C
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
// \u5220\u9664\u5305,\u4F1A\u66F4\u65B0package.json\u548Cyarn.lock
<span class="token function">yarn</span> remove <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
// \u66F4\u65B0\u5305
<span class="token function">yarn</span> upgrade
// \u66F4\u65B0\u6307\u5B9A\u7684\u5305
<span class="token function">yarn</span> upgrade <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
// \u83B7\u53D6\u53EF\u66F4\u65B0\u7684\u5305\u5217\u8868\u9009\u62E9\u66F4\u65B0
<span class="token function">yarn</span> upgrade-interactive --latest
// \u66F4\u65B0\u5168\u5C40\u4F9D\u8D56
<span class="token function">yarn</span> global upgrade --latest
// \u66F4\u65B0\u5168\u5C40\u4F9D\u8D56\uFF0C\u6709\u4EA4\u4E92
<span class="token function">yarn</span> global upgrade-interactive --latest
// \u5217\u51FA\u5DF2\u7F13\u5B58\u7684\u5305
<span class="token function">yarn</span> cache list
// \u67E5\u627E\u7F13\u5B58\u5305\u7684\u8DEF\u5F84
<span class="token function">yarn</span> cache <span class="token function">dir</span>
// \u6E05\u9664\u7F13\u5B58\u7684\u5305
<span class="token function">yarn</span> cache clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function r(t,o){return s(),a("div",null,c)}var d=n(i,[["render",r],["__file","yarn.html.vue"]]);export{d as default};
