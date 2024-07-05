import{_ as n,o as s,c as a,e}from"./app.c585cf24.js";const t={},p=e(`<h2 id="css\u9AD8\u9636\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#css\u9AD8\u9636\u7528\u6CD5" aria-hidden="true">#</a> CSS\u9AD8\u9636\u7528\u6CD5</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
  :root</span> <span class="token punctuation">{</span>
    <span class="token property">--size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">--comCol</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">--align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.title</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--background<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--comCol<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--align<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  CSS\u9AD8\u9636\u8BED\u6CD5
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-css\u7A7F\u900F\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#vue-css\u7A7F\u900F\u7528\u6CD5" aria-hidden="true">#</a> VUE CSS\u7A7F\u900F\u7528\u6CD5</h2><ul><li>\u201C/deep/\u201D</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style lang=&quot;scss&quot; scoped&gt;
.myBox</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token selector">/deep/ .el-input__inner</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u201C&gt;&gt;&gt;\u201D</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style lang=&quot;scss&quot; scoped&gt;
.select</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token selector">&gt;&gt;&gt; .el-input__inner</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u201C::deep\u201D</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style lang=&quot;scss&quot; scoped&gt;
.select</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token selector">::deep .el-input__inner</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u201C:v-deep\u201D</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style lang=&quot;scss&quot; scoped&gt;
.select</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token selector">:v-deep .el-input__inner</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6CE8\u610F\uFF1A\u5982\u679Cvue\u6253\u5305scss\u7F16\u8BD1\u62A5\u9519\uFF0C\u90A3\u5C31\u66F4\u6362css\u7A7F\u900F\u65B9\u5F0F\uFF0C\u4EE5\u4E0A\u56DB\u79CD\u7A7F\u900F\u65B9\u6CD5\u603B\u6709\u4E00\u79CD\u662F\u7B26\u5408scss\u7F16\u8BD1\u3002 \u53E6\u5916\uFF0C\u7A7F\u900F\u6A21\u5F0F\u4E0B\uFF0C\u4E0D\u53D7scoped\u7684\u9650\u5236\u3002</p></div>`,13),c=[p];function l(i,o){return s(),a("div",null,c)}var d=n(t,[["render",l],["__file","deep.html.vue"]]);export{d as default};
