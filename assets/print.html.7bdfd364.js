import{_ as a,o as t,c as p,a as n,b as e,e as o,d as l,r as c}from"./app.1b51a7e0.js";const i={},u=o(`<div class="custom-container tip"><p class="custom-container-title">vue-easy-print\u5C01\u88C5</p><p>\u5B9E\u4F8B\u7528\u6CD5<br> \u53C2\u6570props\u8BF4\u660E<br> ......</p></div><h2 id="\u5B9E\u4F8B\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u7528\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u7528\u6CD5</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>print-root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>print-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>w-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doPrint<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u6253\u5370 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>w-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myprint</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myprint<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6D4B\u8BD5\u5C01\u88C5print<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:row</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:print-info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>printInfo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text, record, index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        myprint
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text, record, index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        address12345
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text, record, index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> name <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text, record, index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        footer
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>myprint</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> myprint <span class="token keyword">from</span> <span class="token string">&quot;./index.vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> mocdData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./test&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;vuePrint&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> myprint <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">printInfo</span><span class="token operator">:</span> mocdData<span class="token punctuation">.</span>printInfo<span class="token punctuation">,</span>
        <span class="token literal-property property">columns</span><span class="token operator">:</span> mocdData<span class="token punctuation">.</span>columns<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">doPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>myprint<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

  // \u6253\u5370\u5E03\u5C40\u5916\u90E8\u4F1A\u8986\u76D6\u5185
  // \u8C03\u6574\u6253\u5370\u9875\u8FB9\u8DDD
  <span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@page</span></span> <span class="token punctuation">{</span>
      // <span class="token property">size</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span> // \u6253\u5370\u53EF\u9009\u62E9\u5E03\u5C40\u7EB5\u5411\u6A2A\u5411\u6253\u5370
      <span class="token property">size</span><span class="token punctuation">:</span> A4 landscape<span class="token punctuation">;</span> //\u8BBE\u7F6E\u7EB8\u5F20\u53CA\u5176\u65B9\u5411 portrait\uFF1A\u7EB5\u5411\uFF1B  <span class="token property">landscape</span><span class="token punctuation">:</span> \u6A2A\u5411
      // <span class="token property">margin-top</span><span class="token punctuation">:</span> 0mm<span class="token punctuation">;</span> //\u53BB\u6389\u9875\u7709
      // <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0mm<span class="token punctuation">;</span> //\u53BB\u6389\u9875\u811A
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  // \u6253\u5370\u65F6\uFF0C\u9875\u9762\u6837\u5F0F\uFF08\u5B57\u4F53\u989C\u8272\uFF0C\u80CC\u666F\u8272\uFF09\u4E0D\u663E\u793A
  // \u7ED9\u5BF9\u5E94\u7684\u989C\u8272\u6837\u5F0F\u52A0\u4E0A <span class="token important">!important</span><span class="token punctuation">,</span><span class="token property">\u4EE5\u53CA\u5728\u6837\u5F0F\u4E2D\u52A0\u4E0A-webkit-print-color-adjust</span><span class="token punctuation">:</span> exact<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570props\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570props\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570props\u8BF4\u660E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6253\u5370\u6570\u636E</span>
  <span class="token literal-property property">printInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u5C55\u793A\u5E8F\u53F7</span>
  <span class="token literal-property property">showIndex</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5E8F\u53F7</span>
  <span class="token literal-property property">indexTitle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;\u5E8F\u53F7&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6253\u5370\u6807\u9898</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;\u5DE5\u7A0B\u6750\u6599&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6BCF\u9875\u591A\u5C11\u884C</span>
  <span class="token literal-property property">row</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// table\u914D\u7F6E</span>
  <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> columns<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="columns\u652F\u6301table\u5C5E\u6027slot-\u4E0Eantdesgin-table\u7EC4\u4EF6columns\u914D\u7F6E\u4E00\u81F4" tabindex="-1"><a class="header-anchor" href="#columns\u652F\u6301table\u5C5E\u6027slot-\u4E0Eantdesgin-table\u7EC4\u4EF6columns\u914D\u7F6E\u4E00\u81F4" aria-hidden="true">#</a> columns\u652F\u6301table\u5C5E\u6027slot,\u4E0EantDesgin table\u7EC4\u4EF6columns\u914D\u7F6E\u4E00\u81F4</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scopedSlots</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">customRender</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5E74\u9F84&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">customRender</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> record<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">customRender</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>record<span class="token punctuation">.</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ellipsis</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u4F4F\u5740&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scopedSlots</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">customRender</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u6635\u79F0&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;nickname&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;nickname&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u4E0B\u8F7D-zip\u5305" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E0B\u8F7D-zip\u5305" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E0B\u8F7D\uFF08zip\u5305\uFF09</h2><p><a href="/assets/zip/print.zip">\u4E0B\u8F7D</a></p><h2 id="\u7EC4\u4EF6\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u9884\u89C8" aria-hidden="true">#</a> \u7EC4\u4EF6\u9884\u89C8</h2>`,10),r={href:"https://static.songjun520.cn/dist",target:"_blank",rel:"noopener noreferrer"},k=l("just go");function d(v,m){const s=c("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[k,e(s)])])])}var g=a(i,[["render",d],["__file","print.html.vue"]]);export{g as default};