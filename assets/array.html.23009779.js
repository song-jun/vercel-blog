import{_ as n,o as s,c as a,e as p}from"./app.c585cf24.js";const t={},e=p(`<h2 id="_1-join" tabindex="-1"><a class="header-anchor" href="#_1-join" aria-hidden="true">#</a> 1. join()</h2><ul><li>\u529F\u80FD\uFF1A\u5C06\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u90FD\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\u5E76\u8FDE\u63A5\u5728\u4E00\u8D77\u3002</li></ul><h2 id="_2-reverse" tabindex="-1"><a class="header-anchor" href="#_2-reverse" aria-hidden="true">#</a> 2. reverse()</h2><ul><li>\u529F\u80FD\uFF1A\u5C06\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u98A0\u5012\u987A\u5E8F\u3002</li></ul><h2 id="_3-concat" tabindex="-1"><a class="header-anchor" href="#_3-concat" aria-hidden="true">#</a> 3. concat()</h2><ul><li>\u529F\u80FD\uFF1A\u6570\u7EC4\u62FC\u63A5\u7684\u529F\u80FD ,\u8FD4\u56DE\u65B0\u6570\u7EC4\uFF0C\u539F\u6570\u7EC4\u4E0D\u53D7\u5F71\u54CD\u3002</li></ul><h2 id="_4-slice" tabindex="-1"><a class="header-anchor" href="#_4-slice" aria-hidden="true">#</a> 4. slice()</h2><ul><li>\u622A\u53D6\u6570\u7EC4\u751F\u6210\u65B0\u6570\u7EC4\uFF0C\u539F\u6570\u7EC4\u4E0D\u53D7\u5F71\u54CD\u3002 \u8FD4\u56DE\u7684\u6570\u7EC4\u5305\u542B\u7B2C\u4E00\u4E2A\u53C2\u6570\u6307\u5B9A\u7684\u4F4D\u7F6E\u548C\u6240\u6709\u5230\u4F46\u4E0D\u542B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6307\u5B9A\u4F4D\u7F6E\u4E4B\u95F4\u7684\u6240\u6709\u5143\u7D20\u3002\u5982\u679C\u4E3A\u8D1F\u6570\uFF0C\u8868\u793A\u76F8\u5BF9\u4E8E\u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E\u3002\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u8868\u793A\u5230\u6570\u7EC4\u672B\u5C3E\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> aa <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[3,4,5,6]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[3,4,5,6] \u8D85\u8FC7\u6700\u5927\u957F\u5EA6\uFF0C\u53EA\u663E\u793A\u5230\u6700\u540E\u7ED3\u679C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[3,4,5]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[3,4,5] \u76F8\u5BF9\u4E8E\u5012\u6570\u7B2C\u4E00\u4E2A\u4E4B\u524D</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[3,4] \u76F8\u5BF9\u4E8E\u5012\u6570\u7B2C\u4E8C\u4E2A\u4E4B\u524D</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[4,5,6] \u4E00\u4E2A\u53C2\u6570\u4ECE\u7B2C\u4E09\u4E2A\u5230\u6700\u540E</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[5,6] \u4E00\u4E2A\u53C2\u6570\u8D1F\u503C\u4ECE\u5012\u6570\u7B2C\u4E8C\u4E2A\u5230\u6700\u540E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-splice" tabindex="-1"><a class="header-anchor" href="#_5-splice" aria-hidden="true">#</a> 5. splice()</h2><ul><li>\u529F\u80FD\uFF1A\u4ECE\u6570\u7EC4\u4E2D\u5220\u9664\u5143\u7D20\u3001\u63D2\u5165\u5143\u7D20\u5230\u6570\u7EC4\u4E2D\u6216\u8005\u540C\u65F6\u5B8C\u6210\u8FD9\u4E24\u79CD\u64CD\u4F5C\u3002 \u8F93\u5165\uFF1A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u6307\u5B9A\u63D2\u5165\u6216\u5220\u9664\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u8981\u5220\u9664\u7684\u4E2A\u6570\u3002\u4E4B\u540E\u7684\u53C2\u6570\u8868\u793A\u9700\u8981\u63D2\u5165\u5230\u6570\u7EC4\u4E2D\u7684\u5143\u7D20 \u3002\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u5220\u9664\u53C2\u6570\u540E\u8FB9\u7684\u6240\u6709\u5143\u7D20\u3002 \u8F93\u51FA\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u7531\u5220\u9664\u5143\u7D20\u7EC4\u6210\u7684\u6570\u7EC4\u3002 \u6CE8\u610F\uFF1A\u65B0\u5EFA\u4E86\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5E76\u4FEE\u6539\u4E86\u539F\u6570\u7EC4</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> aa <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[5,6]  \u8FD4\u56DE\u5220\u9664\u540E\u7684\u6570\u7EC4</span>
aa<span class="token punctuation">;</span><span class="token comment">// [1,2,3,4]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[3,4] \u4ECE\u7B2C\u4E8C\u4F4D\u8D77\u5220\u9664\u4E24\u4E2A\u5143\u7D20</span>
aa<span class="token punctuation">;</span><span class="token comment">//[1,2]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[]\u4ECE\u7B2C\u4E00\u4F4D\u8D77\u5220\u96640\u4E2A\u5143\u7D20\uFF0C\u6DFB\u52A07,8\u5230\u539F\u6570\u7EC4</span>
aa<span class="token punctuation">;</span><span class="token comment">//[1,7,8,2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-push" tabindex="-1"><a class="header-anchor" href="#_6-push" aria-hidden="true">#</a> 6. push()</h2><ul><li>\u5728\u6570\u7EC4\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u65B0\u6570\u7EC4\u957F\u5EA6</li></ul><h2 id="_7-pop" tabindex="-1"><a class="header-anchor" href="#_7-pop" aria-hidden="true">#</a> 7. pop()</h2><ul><li>\u4ECE\u6570\u7EC4\u672B\u5C3E\u5220\u96641\u4E2A\u5143\u7D20(\u5220\u4E14\u53EA\u5220\u96641\u4E2A), \u5E76\u8FD4\u56DE \u88AB\u5220\u9664\u7684\u5143\u7D20</li></ul><h2 id="_8-shift" tabindex="-1"><a class="header-anchor" href="#_8-shift" aria-hidden="true">#</a> 8. shift()</h2><ul><li>\u5728\u6570\u7EC4\u5F00\u59CB\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u65B0\u6570\u7EC4\u957F\u5EA6</li></ul><h2 id="_9-unshift" tabindex="-1"><a class="header-anchor" href="#_9-unshift" aria-hidden="true">#</a> 9. unshift()</h2><p>\u5728\u6570\u7EC4\u5F00\u59CB\u5220\u9664\u4E00\u4E2A\u5143\u7D20(\u5220\u4E14\u53EA\u5220\u96641\u4E2A),\u5E76\u8FD4\u56DE \u88AB\u5220\u9664\u7684\u5143\u7D20</p><h2 id="_10-tostring-\u548Ctolocalestring" tabindex="-1"><a class="header-anchor" href="#_10-tostring-\u548Ctolocalestring" aria-hidden="true">#</a> 10. toString()\u548CtoLocaleString()</h2><ul><li>\u5C06\u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5E76\u4E14\u8F93\u5165\u7528\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\u5217\u8868\u3002\u529F\u80FD\u7C7B\u4F3Cjoin();</li></ul><h2 id="_11-indexof-\u548Clastindexof" tabindex="-1"><a class="header-anchor" href="#_11-indexof-\u548Clastindexof" aria-hidden="true">#</a> 11. indexOf()\u548ClastIndexOf()</h2><ul><li>indexOf() \u4E24\u4E2A\u53C2\u6570\uFF1A\u8981\u67E5\u627E\u7684\u9879\u548C\uFF08\u53EF\u9009\u7684\uFF09\u8868\u793A\u67E5\u627E\u8D77\u70B9\u4F4D\u7F6E\u7684\u7D22\u5F15\u3002\u5176\u4E2D\uFF0C \u4ECE\u6570\u7EC4\u7684\u5F00\u5934\uFF08\u4F4D\u7F6E 0\uFF09\u5F00\u59CB\u5411\u540E\u67E5\u627E\u3002\u6CA1\u627E\u5230\u8FD4\u56DE-1. \u8FD4\u56DE\u67E5\u627E\u9879\u7684\u7D22\u5F15\u503C lastIndexOf() \u4ECE\u6570\u7EC4\u7684\u672B\u5C3E\u5F00\u59CB\u5411\u524D\u67E5\u627E\u3002\u8FD4\u56DE\u67E5\u627E\u9879\u7684\u7D22\u5F15\u503C(\u7D22\u5F15\u503C\u6C38\u8FDC\u662F\u6B63\u5E8F\u7684\u7D22\u5F15\u503C),\u6CA1\u627E\u5230\u8FD4\u56DE-1</li></ul><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h2><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0Bsort()\u65B9\u6CD5\u6CA1\u6709\u4F20\u6BD4\u8F83\u51FD\u6570\u7684\u8BDD\uFF0C\u9ED8\u8BA4\u6309\u5B57\u6BCD\u5347\u5E8F\uFF0C\u5982\u679C\u4E0D\u662F\u5143\u7D20\u4E0D\u662F\u5B57\u7B26\u4E32\u7684\u8BDD\uFF0C\u4F1A\u8C03\u7528toString()\u65B9\u6CD5\u5C06\u5143\u7D20\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\u7684Unicode(\u4E07\u56FD\u7801)\u4F4D\u70B9\uFF0C\u7136\u540E\u518D\u6BD4\u8F83\u5B57\u7B26\u3002\u6240\u4EE5\u7528\u9ED8\u8BA4\u65B9\u6CD5\u6392\u5E8F\u6570\u636E\u662F\u6709\u95EE\u9898\u7684\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [1, 10, 2, 20, 3]</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token operator">-</span>b<span class="token punctuation">;</span>    <span class="token comment">//\u5347\u5E8F</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//[1, 2, 3, 10, 20]</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> b<span class="token operator">-</span>a<span class="token punctuation">;</span>    <span class="token comment">//\u964D\u5E8F</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//[20,10,3,2,1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach()</h2><ul><li>\u4ECE\u5934\u81F3\u5C3E\u904D\u5386\u6570\u7EC4\uFF0C\u4E3A\u6BCF\u4E2A\u5143\u7D20\u8C03\u7528\u6307\u5B9A\u51FD\u6570 \u8F93\u5165\u4E3A\u4E00\u4E2A\u5F85\u904D\u5386\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u53C2\u6570\u4F9D\u6B21\u4E3A\uFF1A\u6570\u7EC4\u5143\u7D20\u3001\u5143\u7D20\u7684\u7D22\u5F15\u3001\u6570\u7EC4\u672C\u8EAB</li></ul><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map()</h2><ul><li>\u8C03\u7528\u7684\u6570\u7EC4\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u4F20\u9012\u7ED9\u6307\u5B9A\u7684\u51FD\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4 ,\u4E0D\u4FEE\u6539\u539F\u6570\u7EC4\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bb<span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> x<span class="token operator">*</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bb<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [4, 9, 16, 25, 36]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter()</h2><p>-\u8FC7\u6EE4\u529F\u80FD\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u9879\u8FD0\u884C\u7ED9\u5B9A\u51FD\u6570\uFF0C\u8FD4\u56DE\u6EE1\u8DB3\u8FC7\u6EE4\u6761\u4EF6\u7EC4\u6210\u7684\u6570\u7EC4\u3002 \u53EF\u4EE5\u5DE7\u5999\u7684\u7528\u6765\u53BB\u91CD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span>i<span class="token punctuation">,</span>self</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">==</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//[1, 2, 3, 4, 5, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="every-\u548Csome" tabindex="-1"><a class="header-anchor" href="#every-\u548Csome" aria-hidden="true">#</a> every()\u548Csome()</h2><ul><li>every() \u5224\u65AD\u6570\u7EC4\u4E2D\u6BCF\u4E00\u9879\u90FD\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u53EA\u6709\u6240\u6709\u9879\u90FD\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u624D\u4F1A\u8FD4\u56DEtrue\u3002 some() \u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u6EE1\u8DB3\u6761\u4EF6\u7684\u9879\uFF0C\u53EA\u8981\u6709\u4E00\u9879\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u5C31\u4F1A\u8FD4\u56DEtrue\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token operator">=&gt;</span>x<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//return true;</span>
arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token operator">=&gt;</span>x<span class="token operator">&gt;</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//return false;</span>
arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token operator">=&gt;</span>x<span class="token operator">&gt;</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//return true;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reduce-\u548Creduceright" tabindex="-1"><a class="header-anchor" href="#reduce-\u548Creduceright" aria-hidden="true">#</a> reduce()\u548CreduceRight()</h2><ul><li>reduce() \u4E24\u4E2A\u53C2\u6570\uFF1A\u51FD\u6570\u548C\u9012\u5F52\u7684\u521D\u59CB\u503C\u3002\u4ECE\u6570\u7EC4\u7684\u7B2C\u4E00\u9879\u5F00\u59CB\uFF0C\u9010\u4E2A\u904D\u5386\u5230\u6700\u540E reduceRight() \u4ECE\u6570\u7EC4\u7684\u6700\u540E\u4E00\u9879\u5F00\u59CB\uFF0C\u5411\u524D\u904D\u5386\u5230\u7B2C\u4E00\u9879</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u53EF\u4EE5\u7528reduce\u5FEB\u901F\u6C42\u6570\u7EC4\u4E4B\u548C</span>
<span class="token keyword">var</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),c=[e];function o(u,l){return s(),a("div",null,c)}var r=n(t,[["render",o],["__file","array.html.vue"]]);export{r as default};