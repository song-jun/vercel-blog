import{_ as c,o as l,c as u,a as s,b as a,w as e,e as o,d as n,r as p}from"./app.c585cf24.js";const r={},d=o(`<p>\u5C0F\u7A0B\u5E8F\u4F7F\u7528 JSON \u6587\u4EF6\u6765\u63CF\u8FF0\u81EA\u8EAB\u7684\u914D\u7F6E\uFF0C\u5C0F\u7A0B\u5E8F\u7684\u914D\u7F6E\u4E3B\u8981\u5206\u4E3A\u5168\u5C40\u914D\u7F6E\u3001\u9875\u9762\u914D\u7F6E\u4E24\u79CD\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E3A\u4E86\u8865\u5145\u5168\u5C40\u914D\u7F6E\u3001\u9875\u9762\u914D\u7F6E\u7684\u7F3A\u5931\uFF0C\u5C0F\u7A0B\u5E8F\u914D\u7F6E\u8FD8\u5305\u62EC\u9879\u76EE\u914D\u7F6E\u4E0E sitemap \u914D\u7F6E\u3002</p></div><h2 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u5C40\u914D\u7F6E</h2><p>\u5C0F\u7A0B\u5E8F\u6839\u76EE\u5F55\u4E0B\u7684 <code>app.json</code> \u6587\u4EF6\u7528\u6765\u5BF9\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8FDB\u884C\u5168\u5C40\u914D\u7F6E\uFF0C\u51B3\u5B9A\u9875\u9762\u6587\u4EF6\u7684\u8DEF\u5F84\u3001\u7A97\u53E3\u8868\u73B0\u3001\u8BBE\u7F6E\u7F51\u7EDC\u8D85\u65F6\u65F6\u95F4\u3001\u8BBE\u7F6E tabBar \u7B49\u3002</p><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5305\u542B\u4E86\u90E8\u5206\u5E38\u7528\u914D\u7F6E\u9009\u9879\u7684 <code>app.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pages/logs/index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9996\u9875&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65E5\u5FD7&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;networkTimeout&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;downloadFile&quot;</span><span class="token operator">:</span> <span class="token number">10000</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;navigateToMiniProgramAppIdList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;wxe5f52902cf4de896&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k=n("\u66F4\u591A\u8BE6\u60C5\u8BF7\u89C1 "),v=n("\u5168\u5C40\u914D\u7F6E\u6587\u6863"),m=o(`<h2 id="\u9875\u9762\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u914D\u7F6E" aria-hidden="true">#</a> \u9875\u9762\u914D\u7F6E</h2><p>\u6BCF\u4E00\u4E2A\u5C0F\u7A0B\u5E8F\u9875\u9762\u4E5F\u53EF\u4EE5\u4F7F\u7528\u540C\u540D <code>.json</code> \u6587\u4EF6\u6765\u5BF9\u672C\u9875\u9762\u7684\u7A97\u53E3\u8868\u73B0\u8FDB\u884C\u914D\u7F6E\uFF0C\u9875\u9762\u4E2D\u914D\u7F6E\u9879\u4F1A\u8986\u76D6 <code>app.json</code> \u7684 <code>window</code> \u4E2D\u76F8\u540C\u7684\u914D\u7F6E\u9879\u3002</p><p>\u4F8B\u5982:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5FAE\u4FE1\u63A5\u53E3\u529F\u80FD\u6F14\u793A&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#eeeeee&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;backgroundTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;light&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),q=n("\u66F4\u591A\u8BE6\u60C5\u8BF7\u89C1 "),g=n("\u9875\u9762\u914D\u7F6E\u6587\u6863"),h={id:"\u7D22\u5F15\u914D\u7F6E",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#\u7D22\u5F15\u914D\u7F6E","aria-hidden":"true"},"#",-1),_=n(" \u7D22\u5F15\u914D\u7F6E "),f=o('<p>\u5FAE\u4FE1\u73B0\u5DF2\u5F00\u653E\u5C0F\u7A0B\u5E8F\u5185\u641C\u7D22\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7 sitemap.json \u914D\u7F6E\uFF0C\u6216\u8005\u7BA1\u7406\u540E\u53F0\u9875\u9762\u6536\u5F55\u5F00\u5173\u6765\u914D\u7F6E\u5176\u5C0F\u7A0B\u5E8F\u9875\u9762\u662F\u5426\u5141\u8BB8\u5FAE\u4FE1\u7D22\u5F15\u3002\u5F53\u5F00\u53D1\u8005\u5141\u8BB8\u5FAE\u4FE1\u7D22\u5F15\u65F6\uFF0C\u5FAE\u4FE1\u4F1A\u901A\u8FC7\u722C\u866B\u7684\u5F62\u5F0F\uFF0C\u4E3A\u5C0F\u7A0B\u5E8F\u7684\u9875\u9762\u5185\u5BB9\u5EFA\u7ACB\u7D22\u5F15\u3002\u5F53\u7528\u6237\u7684\u641C\u7D22\u8BCD\u6761\u89E6\u53D1\u8BE5\u7D22\u5F15\u65F6\uFF0C\u5C0F\u7A0B\u5E8F\u7684\u9875\u9762\u5C06\u53EF\u80FD\u5C55\u793A\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u3002\u722C\u866B\u8BBF\u95EE\u5C0F\u7A0B\u5E8F\u5185\u9875\u9762\u65F6\uFF0C\u4F1A\u643A\u5E26\u7279\u5B9A\u7684 <code>user-agent</code>: <code>mpcrawler</code> \u53CA\u573A\u666F\u503C <code>1129</code>\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u82E5\u5C0F\u7A0B\u5E8F\u722C\u866B\u53D1\u73B0\u7684\u9875\u9762\u6570\u636E\u548C\u771F\u5B9E\u7528\u6237\u7684\u5448\u73B0\u4E0D\u4E00\u81F4\uFF0C\u90A3\u4E48\u8BE5\u9875\u9762\u5C06\u4E0D\u4F1A\u8FDB\u5165\u7D22\u5F15\u4E2D\u3002</p><h3 id="\u5177\u4F53\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5177\u4F53\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> \u5177\u4F53\u914D\u7F6E\u8BF4\u660E</h3><ol><li>\u9875\u9762\u6536\u5F55\u8BBE\u7F6E: \u53EF\u5BF9\u6574\u4E2A\u5C0F\u7A0B\u5E8F\u7684\u7D22\u5F15\u8FDB\u884C\u5173\u95ED\uFF0C\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0-\u8BBE\u7F6E-\u57FA\u672C\u8BBE\u7F6E-\u9875\u9762\u6536\u5F55\u8BBE\u7F6E</li><li>sitemap \u914D\u7F6E: \u53EF\u5BF9\u7279\u5B9A\u9875\u9762\u7684\u7D22\u5F15\u8FDB\u884C\u5173\u95ED</li></ol><h3 id="sitemap-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#sitemap-\u914D\u7F6E" aria-hidden="true">#</a> sitemap \u914D\u7F6E</h3><p>\u5C0F\u7A0B\u5E8F\u6839\u76EE\u5F55\u4E0B\u7684 sitemap.json \u6587\u4EF6\u7528\u6765\u914D\u7F6E\u5C0F\u7A0B\u5E8F\u53CA\u5176\u9875\u9762\u662F\u5426\u5141\u8BB8\u88AB\u5FAE\u4FE1\u7D22\u5F15\u3002</p>',5),x=n("\u5B8C\u6574\u914D\u7F6E\u9879\u8BF4\u660E\u8BF7\u53C2\u8003 "),y=n("sitemap \u914D\u7F6E");function j(B,w){const t=p("RouterLink"),i=p("Badge");return l(),u("div",null,[d,s("p",null,[k,a(t,{to:"/code/mini-app/guide/config/app-config.html"},{default:e(()=>[v]),_:1})]),m,s("p",null,[q,a(t,{to:"/code/mini-app/guide/config/page-config.html"},{default:e(()=>[g]),_:1})]),s("h2",h,[b,_,a(i,{text:"\u521D\u5B66\u65E0\u9700\u9605\u8BFB",type:"grey"})]),f,s("p",null,[x,a(t,{to:"/code/mini-app/guide/config/sitemap-config.html"},{default:e(()=>[y]),_:1})])])}var N=c(r,[["render",j],["__file","index.html.vue"]]);export{N as default};