import{_ as n,o as s,c as a,e}from"./app.c585cf24.js";const i={},t=e(`<h2 id="windowfn-npm\u5305\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#windowfn-npm\u5305\u5F15\u7528" aria-hidden="true">#</a> windowfn npm\u5305\u5F15\u7528</h2><ul><li>\u4F7F\u7528\u65B9\u6CD5</li></ul><div class="language-bash,shell ext-bash,shell line-numbers-mode"><pre class="language-bash,shell"><code>npm i windowfn -D
#\u6216\u8005
cnpm i windowfn -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728vue\u4E2D\u4F7F\u7528</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> fn <span class="token keyword">from</span> <span class="token string">&#39;windowfn&#39;</span><span class="token punctuation">;</span>

## \u65B9\u6CD5\u8C03\u7528\u5982\u4E0B

<span class="token comment">// js \u5192\u6CE1\u6392\u5E8F</span>
fn<span class="token punctuation">.</span><span class="token function">bubbleSort</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>

<span class="token comment">// \u5E73\u5747\u503C,\u5C0F\u6570\u70B9\u53EF\u80FD\u4F1A\u6709\u5F88\u591A\u4F4D\uFF0C\u8FD9\u91CC\u4E0D\u505A\u5904\u7406\uFF0C\u5904\u7406\u4E86\u4F7F\u7528\u5C31\u4E0D\u7075\u6D3B\u4E86\uFF01</span>
fn<span class="token punctuation">.</span><span class="token function">covArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">// css\u6837\u5F0F id\u6216\u8005class</span>
fn<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> index<span class="token punctuation">,</span> json<span class="token punctuation">)</span>

<span class="token comment">// \u517C\u5BB9</span>
fn<span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

<span class="token comment">// \u6E05\u9664\u5BF9\u8C61\u4E2D\u503C\u4E3A\u7A7A\u7684\u5C5E\u6027</span>
fn<span class="token punctuation">.</span><span class="token function">filterParams</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6cookie</span>
fn<span class="token punctuation">.</span><span class="token function">getCookie</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

<span class="token comment">// \u5230\u67D0\u4E00\u4E2A\u65F6\u95F4\u7684\u5012\u8BA1\u65F6</span>
fn<span class="token punctuation">.</span><span class="token function">getEndTime</span><span class="token punctuation">(</span>endTime<span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6css\u5C5E\u6027\u503C</span>
fn<span class="token punctuation">.</span><span class="token function">getStyle</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> attr<span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u7CFB\u7EDF\u5F53\u524D\u65F6\u95F4</span>
fn<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> type<span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\uFF0C\u8BBE\u7F6Eurl\u53C2\u6570</span>
fn<span class="token punctuation">.</span><span class="token function">getUrlPrmt</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>

<span class="token comment">// \u9690\u85CF id\u6216\u8005class</span>
fn<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> index<span class="token punctuation">)</span>

<span class="token comment">// \u63D2\u5165\u6392\u5E8F</span>
fn<span class="token punctuation">.</span><span class="token function">insertSort</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>

<span class="token comment">// \u65B9\u5411\u952E\u4E0A\u4E0B</span>
fn<span class="token punctuation">.</span><span class="token function">keyCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u952E\u76D8\u4E8B\u4EF6</span>
fn<span class="token punctuation">.</span><span class="token function">keybroad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6570\u7EC4\u6700\u5927\u503C</span>
fn<span class="token punctuation">.</span><span class="token function">maxArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">// \u6570\u7EC4\u6700\u5C0F\u503C</span>
fn<span class="token punctuation">.</span><span class="token function">minArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">// \u963B\u6B62\u6EDA\u52A8\u6761\u5192\u6CE1\u4E8B\u4EF6</span>
fn<span class="token punctuation">.</span><span class="token function">preventScroll</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>

<span class="token comment">// \u968F\u673A\u4EA7\u751F\u989C\u8272</span>
fn<span class="token punctuation">.</span><span class="token function">randomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u968F\u673A\u8FD4\u56DE\u4E00\u4E2A\u8303\u56F4\u7684\u6570\u5B57</span>
fn<span class="token punctuation">.</span><span class="token function">randomNumber</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span>n2<span class="token punctuation">)</span>

<span class="token comment">// \u968F\u673A\u7801</span>
fn<span class="token punctuation">.</span><span class="token function">randomNumberOne</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>

<span class="token comment">// \u4ECE\u6570\u7EC4\u4E2D\u968F\u673A\u83B7\u53D6\u5143\u7D20</span>
fn<span class="token punctuation">.</span><span class="token function">randomOne</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">// \u5220\u9664cookie</span>
fn<span class="token punctuation">.</span><span class="token function">removeCookie</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

<span class="token comment">// \u8BBE\u7F6Ecookie</span>
fn<span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> iDay<span class="token punctuation">)</span>

<span class="token comment">// \u8BBE\u7F6Eurl\u53C2\u6570</span>
<span class="token comment">// setUrlPrmt({&#39;a&#39;:1,&#39;b&#39;:2})</span>
<span class="token comment">// \u663E\u793A a=1&amp;b=2</span>
fn<span class="token punctuation">.</span><span class="token function">setUrlPrmt</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token comment">// \u663E\u793A</span>
<span class="token comment">// id\u6216\u8005class</span>
fn<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> index<span class="token punctuation">)</span>

<span class="token comment">// \u963B\u6B62\u5192\u6CE1\u884C\u4E3A</span>
fn<span class="token punctuation">.</span><span class="token function">stopBubble</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

<span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A</span>
fn<span class="token punctuation">.</span><span class="token function">stopDefault</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

<span class="token comment">// \u6C42\u548C</span>
fn<span class="token punctuation">.</span><span class="token function">sumArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">// js \u5229\u7528sort\u8FDB\u884C\u6392\u5E8F</span>
fn<span class="token punctuation">.</span><span class="token function">systemSort</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>

<span class="token comment">// \u5343\u5206\u4F4D\u5904\u7406</span>
fn<span class="token punctuation">.</span><span class="token function">toFormatData</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

<span class="token comment">// \u53BB\u91CD\u52A0\u62FC\u63A5</span>
fn<span class="token punctuation">.</span><span class="token function">toGether</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> array<span class="token punctuation">)</span>

<span class="token comment">// \u7EDF\u8BA1\u6570\u91CF</span>
fn<span class="token punctuation">.</span><span class="token function">totalNum</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>

<span class="token comment">// \u73B0\u91D1\u989D\u5927\u5199\u8F6C\u6362\u51FD\u6570</span>
fn<span class="token punctuation">.</span><span class="token function">upDigit</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function p(l,o){return s(),a("div",null,c)}var d=n(i,[["render",p],["__file","npm.html.vue"]]);export{d as default};
