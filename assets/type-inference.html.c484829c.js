import{_ as t,o,c as r,a as e,b as a,e as i,d as n,r as p}from"./app.1d9503e1.js";const c={},l=i(`<p>\u5982\u679C\u6CA1\u6709\u660E\u786E\u7684\u6307\u5B9A\u7C7B\u578B\uFF0C\u90A3\u4E48 TypeScript \u4F1A\u4F9D\u7167\u7C7B\u578B\u63A8\u8BBA(Type Inference)\u7684\u89C4\u5219\u63A8\u65AD\u51FA\u4E00\u4E2A\u7C7B\u578B\u3002</p><h2 id="\u4EC0\u4E48\u662F\u7C7B\u578B\u63A8\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u7C7B\u578B\u63A8\u8BBA" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u7C7B\u578B\u63A8\u8BBA</h2><p>\u4EE5\u4E0B\u4EE3\u7801\u867D\u7136\u6CA1\u6709\u6307\u5B9A\u7C7B\u578B\uFF0C\u4F46\u662F\u4F1A\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u62A5\u9519:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8B\u5B9E\u4E0A\uFF0C\u5B83\u7B49\u4EF7\u4E8E:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript \u4F1A\u5728\u6CA1\u6709\u660E\u786E\u7684\u6307\u5B9A\u7C7B\u578B\u7684\u65F6\u5019\u63A8\u6D4B\u51FA\u4E00\u4E2A\u7C7B\u578B\uFF0C\u8FD9\u5C31\u662F\u7C7B\u578B\u63A8\u8BBA\u3002</p><p><strong>\u5982\u679C\u5B9A\u4E49\u7684\u65F6\u5019\u6CA1\u6709\u8D4B\u503C\uFF0C\u4E0D\u7BA1\u4E4B\u540E\u6709\u6CA1\u6709\u8D4B\u503C\uFF0C\u90FD\u4F1A\u88AB\u63A8\u65AD\u6210 <code>any</code> \u7C7B\u578B\u800C\u5B8C\u5168\u4E0D\u88AB\u7C7B\u578B\u68C0\u67E5</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,10),d={href:"http://www.typescriptlang.org/docs/handbook/type-inference.html",target:"_blank",rel:"noopener noreferrer"},u=n("Type Inference"),m=n("("),v={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html",target:"_blank",rel:"noopener noreferrer"},b=n("\u4E2D\u6587\u7248"),k=n(")");function h(y,_){const s=p("ExternalLinkIcon");return o(),r("div",null,[l,e("ul",null,[e("li",null,[e("a",d,[u,a(s)]),m,e("a",v,[b,a(s)]),k])])])}var f=t(c,[["render",h],["__file","type-inference.html.vue"]]);export{f as default};