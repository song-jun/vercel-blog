import{_ as a,o as t,c as e,a as s,d as n,e as p}from"./app.a315357f.js";const o={},l=s("p",null,"\u5F53\u6211\u4EEC\u5728\u4F20\u5165\u51FD\u6570\u65F6\uFF0C\u6709\u4E9B\u65F6\u5019\uFF0C\u4E0D\u9700\u8981\u663E\u5F0F\u5730\u5B9A\u4E49\u51FD\u6570\uFF0C\u76F4\u63A5\u4F20\u5165\u533F\u540D\u51FD\u6570\u66F4\u65B9\u4FBF\u3002",-1),c=s("p",null,[n("\u5728 Python \u4E2D\uFF0C\u5BF9\u533F\u540D\u51FD\u6570\u63D0\u4F9B\u4E86\u6709\u9650\u652F\u6301\u3002\u8FD8\u662F\u4EE5 "),s("code",null,"map()"),n(" \u51FD\u6570\u4E3A\u4F8B\uFF0C\u8BA1\u7B97 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("msup",null,[s("mi",null,"x"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"f(x)=x^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),n(" \u65F6\uFF0C\u9664\u4E86\u5B9A\u4E49\u4E00\u4E2A "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(x)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")")])])]),n(" \u7684\u51FD\u6570\u5916\uFF0C\u8FD8\u53EF\u4EE5\u76F4\u63A5\u4F20\u5165\u533F\u540D\u51FD\u6570:")],-1),i=p(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">*</span>x<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u5BF9\u6BD4\u53EF\u4EE5\u770B\u51FA\uFF0C\u533F\u540D\u51FD\u6570 <code>lambda x: x* x</code> \u5B9E\u9645\u4E0A\u5C31\u662F:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u952E\u5B57 <code>lambda</code> \u8868\u793A\u533F\u540D\u51FD\u6570\uFF0C\u5192\u53F7\u524D\u9762\u7684 <code>x</code> \u8868\u793A\u51FD\u6570\u53C2\u6570\u3002</p><p>\u533F\u540D\u51FD\u6570\u6709\u4E2A\u9650\u5236\uFF0C\u5C31\u662F\u53EA\u80FD\u6709\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u7528\u5199 <code>return</code>\uFF0C\u8FD4\u56DE\u503C\u5C31\u662F\u8BE5\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u3002</p><p>\u7528\u533F\u540D\u51FD\u6570\u6709\u4E2A\u597D\u5904\uFF0C\u56E0\u4E3A\u51FD\u6570\u6CA1\u6709\u540D\u5B57\uFF0C\u4E0D\u5FC5\u62C5\u5FC3\u51FD\u6570\u540D\u51B2\u7A81\u3002\u6B64\u5916\uFF0C\u533F\u540D\u51FD\u6570\u4E5F\u662F\u4E00\u4E2A\u51FD\u6570\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u628A\u533F\u540D\u51FD\u6570\u8D4B\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF\uFF0C\u518D\u5229\u7528\u53D8\u91CF\u6765\u8C03\u7528\u8BE5\u51FD\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">*</span> x
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f
<span class="token operator">&lt;</span>function <span class="token operator">&lt;</span><span class="token keyword">lambda</span><span class="token operator">&gt;</span> at <span class="token number">0x101c6ef28</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\uFF0C\u4E5F\u53EF\u4EE5\u628A\u533F\u540D\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8FD4\u56DE\uFF0C\u6BD4\u5982:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">build</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">lambda</span><span class="token punctuation">:</span> x <span class="token operator">*</span>x <span class="token operator">+</span> y<span class="token operator">*</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>Python \u5BF9\u533F\u540D\u51FD\u6570\u7684\u652F\u6301\u6709\u9650\uFF0C\u53EA\u6709\u4E00\u4E9B\u7B80\u5355\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4F7F\u7528\u533F\u540D\u51FD\u6570\u3002</p>`,11),r=[l,c,i];function u(m,d){return t(),e("div",null,r)}var h=a(o,[["render",u],["__file","anonymous-function.html.vue"]]);export{h as default};