import{_ as n,o as s,c as a,e as p}from"./app.16f1d1b9.js";var t="/assets/img/array1.png",e="/assets/img/array2.png";const o={},c=p(`<h2 id="_1-\u4F7F\u7528sort-\u5BF9\u6570\u7EC4\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528sort-\u5BF9\u6570\u7EC4\u6392\u5E8F" aria-hidden="true">#</a> 1.\u4F7F\u7528sort()\u5BF9\u6570\u7EC4\u6392\u5E8F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">-</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-reverse-\u9006\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-reverse-\u9006\u5E8F" aria-hidden="true">#</a> 2. reverse()\u9006\u5E8F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_3-\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> 3.\u5192\u6CE1\u6392\u5E8F</h2><p>\u6982\u5FF5\uFF1A\u6570\u7EC4\u4E2D\u76F8\u90BB\u5143\u7D20\u4E24\u4E24\u6BD4\u8F83\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u5143\u7D20\u5927\u4E8E\u7B2C\u4E8C\u5143\u7D20\uFF0C\u4EA4\u6362\u7B2C\u4E00\u4E2A\u5143\u7D20\u548C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u7B2C\u4E00\u8F6E\u6BD4\u8F83\u7ED3\u675F\uFF0C\u80FD\u786E\u5B9A\u4E00\u4E2A\u6700\u5927\u503C\uFF0C\u7136\u540E\u8FDB\u884C\u7B2C\u4E8C\u8F6E\u2026</p><img src="`+t+`" alt=""><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>     <span class="token comment">//\u7B2C\u4E00\u8F6E\u5FAA\u73AF\u8868\u793A\u5FAA\u73AF\u7684\u8F6E\u6570</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//\u8FD9\u8F6E\u7684for\u5FAA\u73AF\u6307\u7684\u662F\u6BCF\u6B21\u5FAA\u73AF\u7684\u6B21\u6570</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&gt;</span>arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">let</span> temp<span class="token operator">=</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
          arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>temp<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u9009\u62E9\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_4-\u9009\u62E9\u6392\u5E8F" aria-hidden="true">#</a> 4.\u9009\u62E9\u6392\u5E8F</h2><p>\u6982\u5FF5\uFF1A</p><p>\u5148\u5047\u5B9A\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u6700\u5C0F\u503C\uFF0C\u5BF9\u5E94\u7684\u7D22\u5F15\u4E3AminIndex\uFF0C\u8BA9\u8BE5\u503C\u4E0E\u5269\u4F59\u5143\u7D20\u6BD4\u8F83\uFF0C\u5982\u679C\u6709\u6BD4\u8BE5\u503C\u5C0F\u7684\uFF0C\u6539\u53D8minIndex\u7684\u6307\u5411\uFF0C\u8BA9\u5176\u6307\u5411\u8F83\u5C0F\u7684\u503C\u7684\u7D22\u5F15\uFF0C\u8BA9minIndex\u5BF9\u5E94\u7684\u503C\u548C\u5269\u4E0B\u7684\u503C\u8FDB\u884C\u6BD4\u8F83<br> \u7B2C\u4E00\u8F6E\u6BD4\u8F83\u5B8C\u6210\u4E4B\u540E\uFF0C\u6211\u4EEC\u80FD\u786E\u5B9A\u6700\u5C0F\u503C\u5BF9\u5E94\u7684minIndex\uFF0C\u7136\u540E\u8BA9\u5176\u4E0E\u7B2C\u4E00\u4E2A\u5143\u7D20\u8FDB\u884C\u4EA4\u6362<br> \u5047\u5B9A\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4E3A\u6700\u5C0F\u503C\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u2026</p><img src="`+e+`" alt=""><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> minIndex<span class="token operator">=</span>i<span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token operator">&gt;</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          minIndex<span class="token operator">=</span>j<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>z

  <span class="token keyword">let</span> temp<span class="token operator">=</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token operator">=</span>temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[c];function u(i,r){return s(),a("div",null,l)}var d=n(o,[["render",u],["__file","array-sort.html.vue"]]);export{d as default};