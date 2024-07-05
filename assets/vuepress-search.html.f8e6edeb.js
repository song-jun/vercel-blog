import{_ as s,o as n,c as a,e}from"./app.a315357f.js";const t={},p=e(`<h1 id="vuepress-\u96C6\u6210\u7B2C\u4E09\u65B9\u641C\u7D22\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#vuepress-\u96C6\u6210\u7B2C\u4E09\u65B9\u641C\u7D22\u5F15\u64CE" aria-hidden="true">#</a> vuepress \u96C6\u6210\u7B2C\u4E09\u65B9\u641C\u7D22\u5F15\u64CE</h1><div class="language-sh, ext-sh, line-numbers-mode"><pre class="language-sh,"><code>yarn add vuepress-plugin-thirdparty-search -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539 config.js, \u6DFB\u52A0\u63D2\u4EF6\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u914D\u7F6E\u63D2\u4EF6vuepress-plugin-thirdparty-search, \u9ED8\u8BA4\u4E3B\u9898\u7684\u641C\u7D22\u6846\u96C6\u6210\u7B2C\u4E09\u65B9\u641C\u7D22\u5F15\u64CE</span>
<span class="token punctuation">[</span>
  <span class="token string">&quot;thirdparty-search&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">thirdparty</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u53EF\u9009\uFF0C\u9ED8\u8BA4 []</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5728\u8C37\u6B4C\u4E2D\u641C\u7D22&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">frontUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://www.google.com.hk/search?q=&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5728\u767E\u5EA6\u4E2D\u641C\u7D22&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5728\u641C\u7D22\u7ED3\u679C\u663E\u793A\u7684\u6587\u5B57</span>
        <span class="token literal-property property">frontUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://www.baidu.com/s?wd=&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u641C\u7D22\u94FE\u63A5\u7684\u524D\u9762\u90E8\u5206</span>
        <span class="token literal-property property">behindUrl</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token comment">// \u641C\u7D22\u94FE\u63A5\u7684\u540E\u9762\u90E8\u5206\uFF0C\u53EF\u9009\uFF0C\u9ED8\u8BA4 &#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5728360\u4E2D\u641C\u7D22&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">frontUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://www.so.com/s?q=&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function r(i,l){return n(),a("div",null,o)}var u=s(t,[["render",r],["__file","vuepress-search.html.vue"]]);export{u as default};
