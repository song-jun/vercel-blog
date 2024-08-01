import{_ as n,o as s,c as a,e}from"./app.16f1d1b9.js";const i={},l=e(`<h2 id="\u8BBE\u7F6E\u955C\u50CF\u6E90" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u955C\u50CF\u6E90" aria-hidden="true">#</a> \u8BBE\u7F6E\u955C\u50CF\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com

<span class="token comment"># \u68C0\u67E5</span>
<span class="token function">pnpm</span> config get registry

<span class="token comment">#\u5207\u6362\u6E90\uFF1A</span>
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry <span class="token operator">&lt;</span>\u6DD8\u5B9D\u6E90\u6216\u5176\u4ED6\u6E90\u5730\u5740<span class="token operator">&gt;</span>

<span class="token comment">#\u914D\u7F6E\u5168\u5C40\u5B89\u88C5\u8DEF\u5F84\uFF1A </span>
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> store-dir \u201C\u5168\u5C40\u5730\u5740\u201D
\u4F8B\uFF1Apnpm config <span class="token builtin class-name">set</span> store-dir D:<span class="token punctuation">\\</span>node<span class="token punctuation">\\</span>pnpm<span class="token punctuation">\\</span>global

<span class="token comment">#\u914D\u7F6E\u5168\u5C40\u7F13\u5B58\u8DEF\u5F84 \uFF1A</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache-dir \u201C\u7F13\u5B58\u5730\u5740\u201D
\u4F8B\uFF1Apnpm config <span class="token builtin class-name">set</span> cache-dir D:<span class="token punctuation">\\</span>node<span class="token punctuation">\\</span>pnpm<span class="token punctuation">\\</span>cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bts-node\u7684\u6240\u6709\u7248\u672C</span>
<span class="token function">pnpm</span> view ts-node versions

<span class="token comment"># \u7B49\u4EF7\u4E0Enpm i nodemon -g</span>
<span class="token function">pnpm</span> <span class="token function">add</span> nodemon -g

<span class="token comment"># npm i</span>
<span class="token function">pnpm</span> i

<span class="token comment"># \u67E5\u770B\u4F9D\u8D56(\u5168\u5C40)</span>
<span class="token function">pnpm</span> list <span class="token punctuation">[</span>-g<span class="token punctuation">]</span>

<span class="token comment"># \u8F83\u597D\u7528\u7684\u5730\u65B9\u662F: npm run dev/test/build</span>
<span class="token function">pnpm</span> dev
<span class="token comment"># \u5F53\u7136\u4E60\u60EFnpm\u7684\u4E5F\u53EF\u4EE5\u7528 pnpm run dev</span>

\u67E5\u770Bpnpm\u7248\u672C\uFF1Apnpm -v

\u67E5\u770B\u6E90\uFF1Apnpm config get registry

\u5207\u6362\u6E90\uFF1Apnpm config <span class="token builtin class-name">set</span> registry <span class="token operator">&lt;</span>\u6DD8\u5B9D\u6E90\u6216\u5176\u4ED6\u6E90\u5730\u5740<span class="token operator">&gt;</span>

\u5220\u9664npm\u6216yarn\u751F\u6210\u7684node_modules\uFF1Arm -rf node_modules

\u5B89\u88C5\u4F9D\u8D56\uFF1Apnpm <span class="token function">install</span>

\u542F\u52A8\u9879\u76EE\uFF08\u6309\u5B9E\u9645 package.json \u914D\u7F6E\u6587\u4EF6\u4E3A\u51C6\uFF09\uFF1Apnpm dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function p(t,d){return s(),a("div",null,c)}var m=n(i,[["render",p],["__file","pnpm.html.vue"]]);export{m as default};
