import{_ as a,o,c,a as n,b as t,e as p,d as e,r as i}from"./app.16f1d1b9.js";const d={},l=p(`<p>JavaScript \u8BED\u8A00\u7684\u6BCF\u4E00\u4E2A\u503C\uFF0C\u90FD\u5C5E\u4E8E\u67D0\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u3002</p><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>JavaScript \u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5171\u6709\u516D\u79CD\u3002(ES6 \u53C8\u65B0\u589E\u4E86\u7B2C\u4E03\u79CD Symbol \u7C7B\u578B\u7684\u503C\uFF0C\u672C\u6559\u7A0B\u4E0D\u6D89\u53CA\u3002)</p><ul><li>\u6570\u503C(number): \u6574\u6570\u548C\u5C0F\u6570(\u6BD4\u5982 <code>1</code> \u548C <code>3.14</code>)</li><li>\u5B57\u7B26\u4E32(string): \u6587\u672C(\u6BD4\u5982 <code>Hello World</code>)\u3002</li><li>\u5E03\u5C14\u503C(boolean): \u8868\u793A\u771F\u4F2A\u7684\u4E24\u4E2A\u7279\u6B8A\u503C\uFF0C\u5373 <code>true</code>(\u771F)\u548C <code>false</code>(\u5047)</li><li><code>undefined</code>: \u8868\u793A\u201C\u672A\u5B9A\u4E49\u201D\u6216\u4E0D\u5B58\u5728\uFF0C\u5373\u7531\u4E8E\u76EE\u524D\u6CA1\u6709\u5B9A\u4E49\uFF0C\u6240\u4EE5\u6B64\u5904\u6682\u65F6\u6CA1\u6709\u4EFB\u4F55\u503C</li><li><code>null</code>: \u8868\u793A\u7A7A\u503C\uFF0C\u5373\u6B64\u5904\u7684\u503C\u4E3A\u7A7A\u3002</li><li>\u5BF9\u8C61(object): \u5404\u79CD\u503C\u7EC4\u6210\u7684\u96C6\u5408\u3002</li></ul><p>\u901A\u5E38\uFF0C\u6570\u503C\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\u8FD9\u4E09\u79CD\u7C7B\u578B\uFF0C\u5408\u79F0\u4E3A\u539F\u59CB\u7C7B\u578B(primitive type)\u7684\u503C\uFF0C\u5373\u5B83\u4EEC\u662F\u6700\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4E0D\u80FD\u518D\u7EC6\u5206\u4E86\u3002\u5BF9\u8C61\u5219\u79F0\u4E3A\u5408\u6210\u7C7B\u578B(complex type)\u7684\u503C\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u5F80\u5F80\u662F\u591A\u4E2A\u539F\u59CB\u7C7B\u578B\u7684\u503C\u7684\u5408\u6210\uFF0C\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u4E2A\u5B58\u653E\u5404\u79CD\u503C\u7684\u5BB9\u5668\u3002\u81F3\u4E8E <code>undefined</code> \u548C <code>null</code>\uFF0C\u4E00\u822C\u5C06\u5B83\u4EEC\u770B\u6210\u4E24\u4E2A\u7279\u6B8A\u503C\u3002</p><p>\u5BF9\u8C61\u662F\u6700\u590D\u6742\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u53C8\u53EF\u4EE5\u5206\u6210\u4E09\u4E2A\u5B50\u7C7B\u578B\u3002</p><ul><li>\u72ED\u4E49\u7684\u5BF9\u8C61(object)</li><li>\u6570\u7EC4(array)</li><li>\u51FD\u6570(function)</li></ul><p>\u72ED\u4E49\u7684\u5BF9\u8C61\u548C\u6570\u7EC4\u662F\u4E24\u79CD\u4E0D\u540C\u7684\u6570\u636E\u7EC4\u5408\u65B9\u5F0F\uFF0C\u9664\u975E\u7279\u522B\u58F0\u660E\uFF0C\u672C\u6559\u7A0B\u7684\u201C\u5BF9\u8C61\u201D\u90FD\u7279\u6307\u72ED\u4E49\u7684\u5BF9\u8C61\u3002\u51FD\u6570\u5176\u5B9E\u662F\u5904\u7406\u6570\u636E\u7684\u65B9\u6CD5\uFF0CJavaScript \u628A\u5B83\u5F53\u6210\u4E00\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u8D4B\u503C\u7ED9\u53D8\u91CF\uFF0C\u8FD9\u4E3A\u7F16\u7A0B\u5E26\u6765\u4E86\u5F88\u5927\u7684\u7075\u6D3B\u6027\uFF0C\u4E5F\u4E3A JavaScript \u7684\u201C\u51FD\u6570\u5F0F\u7F16\u7A0B\u201D\u5960\u5B9A\u4E86\u57FA\u7840\u3002</p><h2 id="typeof-\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#typeof-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> typeof \u8FD0\u7B97\u7B26</h2><p>JavaScript \u6709\u4E09\u79CD\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u786E\u5B9A\u4E00\u4E2A\u503C\u5230\u5E95\u662F\u4EC0\u4E48\u7C7B\u578B\u3002</p><ul><li><code>typeof</code> \u8FD0\u7B97\u7B26</li><li><code>instanceof</code> \u8FD0\u7B97\u7B26</li><li><code>Object.prototype.toString</code> \u65B9\u6CD5</li></ul><p><code>instanceof</code> \u8FD0\u7B97\u7B26\u548C <code>Object.prototype.toString</code> \u65B9\u6CD5\uFF0C\u5C06\u5728\u540E\u6587\u4ECB\u7ECD\u3002\u8FD9\u91CC\u4ECB\u7ECD <code>typeof</code> \u8FD0\u7B97\u7B26\u3002</p><p><code>typeof</code> \u8FD0\u7B97\u7B26\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002</p><p>\u6570\u503C\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\u5206\u522B\u8FD4\u56DE <code>number</code>\u3001<code>string</code>\u3001<code>boolean</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// &quot;number&quot;</span>
<span class="token keyword">typeof</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;string&quot;</span>
<span class="token keyword">typeof</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// &quot;boolean&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u8FD4\u56DE <code>function</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">typeof</span> f<span class="token punctuation">;</span>
<span class="token comment">// &quot;function&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>undefined</code> \u8FD4\u56DE <code>undefined</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;undefined&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528\u8FD9\u4E00\u70B9\uFF0C<code>typeof</code> \u53EF\u4EE5\u7528\u6765\u68C0\u67E5\u4E00\u4E2A\u6CA1\u6709\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u800C\u4E0D\u62A5\u9519\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>v<span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: v is not defined</span>

<span class="token keyword">typeof</span> v<span class="token punctuation">;</span>
<span class="token comment">// &quot;undefined&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53D8\u91CF <code>v</code> \u6CA1\u6709\u7528 <code>const</code> <code>var</code> \u6216 <code>let</code> \u547D\u4EE4\u58F0\u660E\uFF0C\u76F4\u63A5\u4F7F\u7528\u5C31\u4F1A\u62A5\u9519\u3002\u4F46\u662F\uFF0C\u653E\u5728 <code>typeof</code> \u540E\u9762\uFF0C\u5C31\u4E0D\u62A5\u9519\u4E86\uFF0C\u800C\u662F\u8FD4\u56DE <code>undefined</code>\u3002</p><p>\u5B9E\u9645\u7F16\u7A0B\u4E2D\uFF0C\u8FD9\u4E2A\u7279\u70B9\u901A\u5E38\u7528\u5728\u5224\u65AD\u8BED\u53E5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9519\u8BEF\u7684\u5199\u6CD5</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// ReferenceError: v is not defined</span>

<span class="token comment">// \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> v <span class="token operator">===</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u8FD4\u56DE <code>object</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> window<span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7A7A\u6570\u7EC4(<code>[]</code>)\u7684\u7C7B\u578B\u4E5F\u662F <code>object</code>\uFF0C\u8FD9\u8868\u793A\u5728 JavaScript \u5185\u90E8\uFF0C\u6570\u7EC4\u672C\u8D28\u4E0A\u53EA\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5BF9\u8C61\u3002\u8FD9\u91CC\u987A\u4FBF\u63D0\u4E00\u4E0B\uFF0C<code>instanceof</code> \u8FD0\u7B97\u7B26\u53EF\u4EE5\u533A\u5206\u6570\u7EC4\u548C\u5BF9\u8C61\u3002<code>instanceof</code> \u8FD0\u7B97\u7B26\u7684\u8BE6\u7EC6\u89E3\u91CA\uFF0C\u8BF7\u89C1\u300A\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u300B\u4E00\u7AE0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

o <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
a <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>null</code> \u8FD4\u56DE <code>object</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>null</code> \u7684\u7C7B\u578B\u662F <code>object</code>\uFF0C\u8FD9\u662F\u7531\u4E8E\u5386\u53F2\u539F\u56E0\u9020\u6210\u7684\u30021995 \u5E74\u7684 JavaScript \u8BED\u8A00\u7B2C\u4E00\u7248\uFF0C\u53EA\u8BBE\u8BA1\u4E86\u4E94\u79CD\u6570\u636E\u7C7B\u578B(\u5BF9\u8C61\u3001\u6574\u6570\u3001\u6D6E\u70B9\u6570\u3001\u5B57\u7B26\u4E32\u548C\u5E03\u5C14\u503C)\uFF0C\u6CA1\u8003\u8651 <code>null</code>\uFF0C\u53EA\u628A\u5B83\u5F53\u4F5C <code>object</code> \u7684\u4E00\u79CD\u7279\u6B8A\u503C\u3002\u540E\u6765 <code>null</code> \u72EC\u7ACB\u51FA\u6765\uFF0C\u4F5C\u4E3A\u4E00\u79CD\u5355\u72EC\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4E3A\u4E86\u517C\u5BB9\u4EE5\u524D\u7684\u4EE3\u7801\uFF0C<code>typeof null</code> \u8FD4\u56DE <code>object</code> \u5C31\u6CA1\u6CD5\u6539\u53D8\u4E86\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,32),r=e("Axel Rauschmayer, "),u={href:"http://www.2ality.com/2011/11/improving-typeof.html",target:"_blank",rel:"noopener noreferrer"},v=e("Improving the JavaScript typeof operator");function m(k,b){const s=i("ExternalLinkIcon");return o(),c("div",null,[l,n("ul",null,[n("li",null,[r,n("a",u,[v,t(s)])])])])}var y=a(d,[["render",m],["__file","general.html.vue"]]);export{y as default};