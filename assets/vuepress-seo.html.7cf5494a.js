import{_ as i,o as u,c as l,a as n,b as a,w as p,e as t,d as s,r as c}from"./app.005c9d90.js";const r={},d=t('<h1 id="vuepress-\u7684-seo-\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#vuepress-\u7684-seo-\u4F18\u5316" aria-hidden="true">#</a> vuepress \u7684 seo \u4F18\u5316</h1><h2 id="\u5B89\u88C5\u767E\u5EA6\u81EA\u52A8\u63A8\u9001\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u767E\u5EA6\u81EA\u52A8\u63A8\u9001\u4EE3\u7801" aria-hidden="true">#</a> \u5B89\u88C5\u767E\u5EA6\u81EA\u52A8\u63A8\u9001\u4EE3\u7801</h2><p>\u5B9E\u73B0\u8D44\u6E90\u81EA\u52A8\u63A8\u9001\u5230\u767E\u5EA6\u641C\u7D22\u5F15\u64CE\u3002</p><h3 id="\u9A8C\u8BC1\u7AD9\u70B9" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u7AD9\u70B9" aria-hidden="true">#</a> \u9A8C\u8BC1\u7AD9\u70B9</h3>',4),k=s("\u8BE6\u60C5\u8BF7\u67E5\u9605"),v=s("\u63A8\u9001\u8D44\u6E90\u5230\u767E\u5EA6\u7AD9\u957F-\u9A8C\u8BC1\u7AD9\u70B9"),h=s("\u8BBF\u95EE"),m={href:"https://ziyuan.baidu.com",target:"_blank",rel:"noopener noreferrer"},b=s("\u767E\u5EA6\u7AD9\u957F"),g=s(", \u6DFB\u52A0\u7AD9\u70B9, \u7CFB\u7EDF\u4F1A\u7ED9\u51FA\u9A8C\u8BC1\u4EE3\u7801, \u590D\u5236\u9A8C\u8BC1\u4EE3\u7801, \u5E76\u914D\u7F6E\u5230 config.js \u4E2D"),_=n("br",null,null,-1),f=s(" \u4FEE\u6539 config.js"),j=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u767E\u5EA6\u7AD9\u957F\u7684\u9A8C\u8BC1, \u4E0D\u80FD\u5220\u9664\uFF08\u5DF2\u4E0B\u4EE3\u7801\u4E0D\u53EF\u5B8C\u5168\u590D\u5236\uFF09 \u5173\u4E8Econtent\u81EA\u5DF1\u5728\u767E\u5EA6\u7AD9\u957F\u4E2D\u83B7\u53D6</span>
<span class="token punctuation">[</span><span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;baidu-site-verification&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;****************&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u81EA\u52A8\u63A8\u9001\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u81EA\u52A8\u63A8\u9001\u4EE3\u7801" aria-hidden="true">#</a> \u5B89\u88C5\u81EA\u52A8\u63A8\u9001\u4EE3\u7801</h3>`,2),q=s("\u53C2\u8003"),x=s("\u63A8\u9001\u8D44\u6E90\u5230\u767E\u5EA6\u7AD9\u957F-\u9A8C\u8BC1\u7AD9\u70B9"),y=t(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 vuepress-plugin-baidu-autopush \u63D2\u4EF6\u5B9E\u73B0\u8BE5\u529F\u80FD\u3002\u4F46\u4E3A\u4E86\u548C\u5176\u5B83\u7AD9\u957F\u7684\u5B89\u88C5\u65B9\u6CD5\u7EDF\u4E00\uFF0C\u5219\u4E0D\u501F\u52A9\u7B2C\u4E09\u65B9\u63D2\u4EF6\u5B9E\u73B0\u3002</p></div><h4 id="\u521B\u5EFA-vuepress-public-assets-js-autopush-baidu-js" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-vuepress-public-assets-js-autopush-baidu-js" aria-hidden="true">#</a> \u521B\u5EFA.vuepress/public/assets/js/autopush-baidu.js</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6700\u597D\u4E0D\u8981\u5728\u672C\u5730\u8BBF\u95EE\u9875\u9762\uFF0C\u4EE5\u514D\u9020\u6210\u591A\u57DF\u540D\u91CD\u590D\u63A8\u9001\u95EE\u9898</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> bp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> curProtocol <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>protocol<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curProtocol <span class="token operator">===</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bp<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;https://zz.bdstatic.com/linksubmit/push.js&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    bp<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;http://push.zhanzhang.baidu.com/push.js&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  s<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>bp<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539-config-js" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-config-js" aria-hidden="true">#</a> \u4FEE\u6539 config.js</h4><p>\u4FEE\u6539 .vuepress/config.js head \u9879\u589E\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6DFB\u52A0\u767E\u5EA6\u7AD9\u957F\u7684\u81EA\u52A8\u63A8\u9001\u4EE3\u7801</span>
<span class="token punctuation">[</span>
  <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;/assets/js/autopush-baidu.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5-360-\u81EA\u52A8\u63A8\u9001\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-360-\u81EA\u52A8\u63A8\u9001\u4EE3\u7801" aria-hidden="true">#</a> \u5B89\u88C5 360 \u81EA\u52A8\u63A8\u9001\u4EE3\u7801</h2><p>\u5B9E\u73B0\u7AD9\u70B9\u8D44\u6E90\u81EA\u52A8\u63A8\u9001\u5230 360 \u641C\u7D22\u5F15\u64CE\u3002</p><h3 id="\u9A8C\u8BC1\u7AD9\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u7AD9\u70B9-1" aria-hidden="true">#</a> \u9A8C\u8BC1\u7AD9\u70B9</h3>`,9),E=s("\u8BE6\u60C5\u8BF7\u67E5\u9605"),w=s("\u63A8\u9001\u8D44\u6E90\u5230 360 \u7AD9\u957F-\u9A8C\u8BC1\u7AD9\u70B9"),A=s("\u8BBF\u95EE"),B={href:"http://zhanzhang.so.com",target:"_blank",rel:"noopener noreferrer"},z=s("360 \u7AD9\u957F"),N=s(", \u6DFB\u52A0\u7AD9\u70B9, \u7CFB\u7EDF\u4F1A\u7ED9\u51FA\u9A8C\u8BC1\u4EE3\u7801, \u590D\u5236\u9A8C\u8BC1\u4EE3\u7801, \u5E76\u914D\u7F6E\u5230 config.js \u4E2D"),C=n("br",null,null,-1),L=s(" \u4FEE\u6539 config.js"),V=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//360\u7AD9\u957F\u7684\u9A8C\u8BC1\u4EE3\u7801 \uFF08\u5DF2\u4E0B\u4EE3\u7801\u4E0D\u53EF\u5B8C\u5168\u590D\u5236\uFF09 \u5173\u4E8Econtent\u81EA\u5DF1\u5728360\u7AD9\u957F\u4E2D\u83B7\u53D6</span>
<span class="token punctuation">[</span>
  <span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;360-site-verification&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;****************&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u81EA\u52A8\u63A8\u9001\u4EE3\u7801-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u81EA\u52A8\u63A8\u9001\u4EE3\u7801-1" aria-hidden="true">#</a> \u5B89\u88C5\u81EA\u52A8\u63A8\u9001\u4EE3\u7801</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E0D\u8981\u4F7F\u7528 vuepress-plugin-qihu-autopush \u63D2\u4EF6,\u8BE5\u63D2\u4EF6\u6709 bug\uFF0C\u4E0D\u4F1A\u53D1\u751F\u63A8\u9001\u8BF7\u6C42\u3002</p></div><h4 id="\u521B\u5EFA-vuepress-public-assets-js-autopush-360-js" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-vuepress-public-assets-js-autopush-360-js" aria-hidden="true">#</a> \u521B\u5EFA.vuepress/public/assets/js/autopush-360.js</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6700\u597D\u4E0D\u8981\u5728\u672C\u5730\u8BBF\u95EE\u9875\u9762\uFF0C\u4EE5\u514D\u9020\u6210\u591A\u57DF\u540D\u91CD\u590D\u63A8\u9001\u95EE\u9898</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> src <span class="token operator">=</span>
    <span class="token string">&quot;https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba&quot;</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;script src=&quot;&#39;</span> <span class="token operator">+</span> src <span class="token operator">+</span> <span class="token string">&#39;&quot; id=&quot;sozz&quot;&gt;&lt;/script&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539-config-js-1" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-config-js-1" aria-hidden="true">#</a> \u4FEE\u6539 config.js</h4><p>\u4FEE\u6539 .vuepress/config.js head \u9879\u589E\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6DFB\u52A0360\u7AD9\u957F\u7684\u81EA\u52A8\u63A8\u9001\u4EE3\u7801</span>
<span class="token punctuation">[</span>
  <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;/assets/js/autopush-360.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function F(I,P){const e=c("RouterLink"),o=c("ExternalLinkIcon");return u(),l("div",null,[d,n("blockquote",null,[n("p",null,[k,a(e,{to:"/seo-push-baidu.html#%E9%AA%8C%E8%AF%81%E7%AB%99%E7%82%B9"},{default:p(()=>[v]),_:1})])]),n("p",null,[h,n("a",m,[b,a(o)]),g,_,f]),j,n("blockquote",null,[n("p",null,[q,a(e,{to:"/seo-push-baidu.html#%E6%8E%A8%E9%80%81%E4%BB%A3%E7%A0%81"},{default:p(()=>[x]),_:1})])]),y,n("blockquote",null,[n("p",null,[E,a(e,{to:"/seo-push-360.html#%E9%AA%8C%E8%AF%81%E7%AB%99%E7%82%B9"},{default:p(()=>[w]),_:1})])]),n("p",null,[A,n("a",B,[z,a(o)]),N,C,L]),V])}var S=i(r,[["render",F],["__file","vuepress-seo.html.vue"]]);export{S as default};