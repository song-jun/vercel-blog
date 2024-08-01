import{_ as n,o as e,c as s,e as i}from"./app.16f1d1b9.js";const a={},c=i(`<h2 id="\u8BBE\u7F6E\u4E3A\u6DD8\u5B9D\u955C\u50CF\u6E90-\u5168\u5C40\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u4E3A\u6DD8\u5B9D\u955C\u50CF\u6E90-\u5168\u5C40\u8BBE\u7F6E" aria-hidden="true">#</a> \u8BBE\u7F6E\u4E3A\u6DD8\u5B9D\u955C\u50CF\u6E90\uFF08\u5168\u5C40\u8BBE\u7F6E\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65E7_\u6DD8\u5B9D\u955C\u50CF\uFF1Ahttps://registry.npm.taobao.org\uFF082022\u5E746\u670830\u53F7\u5DF2\u4E0B\u7EBF\uFF09
\u65B0_\u6DD8\u5B9D\u955C\u50CF\uFF1Ahttps://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cnpm\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#cnpm\u6307\u4EE4" aria-hidden="true">#</a> Cnpm\u6307\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u67E5\u770B\u662F\u5426\u5B89\u88C5cnpm</span>

cnpm -v

<span class="token comment">#2\u3001\u5B89\u88C5cnpm</span>

<span class="token function">npm</span> <span class="token function">install</span> -g cnpm -registry<span class="token operator">=</span>https://registry.npm.taobao.org

<span class="token comment">#3\u3001\u8BBE\u7F6Ecnpm \u955C\u50CF\u5730\u5740\u4E3A\u6DD8\u5B9D\u5730\u5740</span>

cnpm config  <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org

<span class="token comment">#4\u3001\u67E5\u770B\u8BBE\u7F6E\u955C\u50CF\u5730\u5740</span>

<span class="token function">npm</span> config get registry

<span class="token comment">#5\u3001\u5B89\u88C5</span>

cnpm i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[c];function r(d,t){return e(),s("div",null,l)}var o=n(a,[["render",r],["__file","cnpm.html.vue"]]);export{o as default};
