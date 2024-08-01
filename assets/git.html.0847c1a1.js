import{_ as n,o as s,c as a,e}from"./app.16f1d1b9.js";const i={},t=e(`<h2 id="git\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#git\u6307\u4EE4" aria-hidden="true">#</a> GIT\u6307\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u7248\u672C\u56DE\u9000</span>
<span class="token function">git</span> log <span class="token comment">##\u67E5\u770B\u7248\u672C\u53F7</span>
<span class="token comment">#\u6216\u8005</span>
<span class="token function">git</span> log --oneline <span class="token comment">##\u67E5\u770B\u7B80\u6D01\u4FE1\u606F</span>
<span class="token function">git</span> revert -n <span class="token punctuation">(</span>\u7248\u672C\u53F7<span class="token punctuation">)</span> <span class="token comment">##\u518D\u5F53\u524D\u7248\u672C\u7684\u57FA\u7840\u4E0A\u65B0\u589E\u4E00\u4E2A\u7248\u672C\uFF0C\u4E0D\u5F71\u54CD\u4EE5\u524D\u7684\u4EE3\u7801</span>
<span class="token comment">##\u6216\u8005</span>
<span class="token function">git</span> reset --hard <span class="token punctuation">(</span>\u7248\u672C\u53F7<span class="token punctuation">)</span> <span class="token comment">##\u8BE5\u547D\u4EE4\u4F1A\u5F3A\u884C\u8986\u76D6\u5F53\u524D\u7248\u672C\u548C\u8981\u56DE\u9000\u7684\u7248\u672C\u4E4B\u95F4\u7684\u5176\u4ED6\u7248\u672C\uFF08\u4E0D\u592A\u5EFA\u8BAE\uFF09</span>
<span class="token comment">##\u6700\u540E</span>
<span class="token function">git</span> push -f <span class="token comment">##\u5F3A\u5236\u63A8\u9001</span>

<span class="token comment">#\u5220\u9664\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch -d dev

<span class="token comment">#\u5206\u652F\u7684\u5FEB\u901F\u521B\u5EFA\u4E0E\u5207\u6362</span>
<span class="token function">git</span> checkout -b master

<span class="token comment">#\u5C06\u672C\u5730\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push -u origin \u672C\u5730\u5206\u652F\u540D\u79F0:\u8FDC\u7A0B\u5206\u652F\u540D\u79F0

<span class="token comment">#\u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> push origin -d dev

<span class="token comment">#\u64A4\u9500\u5408\u5E76</span>
 <span class="token function">git</span> merge --abort

<span class="token comment">#\u64A4\u9500commit\uFF08\u4E0D\u5220\u9664\u5DE5\u4F5C\u7A7A\u95F4\u6539\u52A8\u4EE3\u7801\uFF0C\u64A4\u9500commit\uFF0C\u4E0D\u64A4\u9500git add . \uFF09</span>
<span class="token comment">#HEAD^ \u8868\u793A\u4E0A\u4E00\u4E2A\u7248\u672C\uFF0C\u5373\u4E0A\u4E00\u6B21\u7684commit\uFF0C\u51E0\u4E2A^\u4EE3\u8868\u51E0\u6B21\u63D0\u4EA4\uFF0C\u5982\u679C\u56DE\u6EDA\u4E24\u6B21\u5C31\u662FHEAD^^\u3002</span>
<span class="token comment">#\u4E5F\u53EF\u4EE5\u5199\u6210HEAD~1\uFF0C\u5982\u679C\u8FDB\u884C\u4E24\u6B21\u7684commit\uFF0C\u60F3\u8981\u90FD\u64A4\u56DE\uFF0C\u53EF\u4EE5\u4F7F\u7528HEAD~2\u3002</span>
<span class="token function">git</span> reset --soft HEAD^

<span class="token comment">#\u64A4\u9500commit\u5E76\u64A4\u9500git add .\uFF08\u4E0D\u5220\u9664\u5DE5\u4F5C\u7A7A\u95F4\u6539\u52A8\u4EE3\u7801\uFF0C\u64A4\u9500commit\uFF0C\u5E76\u4E14\u64A4\u9500git add . \uFF09</span>
<span class="token function">git</span> reset --mixed HEAD^
<span class="token comment">#\u6216\u8005</span>
<span class="token function">git</span> reset HEAD^

<span class="token comment">#\u64A4\u9500commit\u5E76\u64A4\u9500git add .\uFF08\u5220\u9664\u5DE5\u4F5C\u7A7A\u95F4\u6539\u52A8\u4EE3\u7801\uFF0C\u64A4\u9500commit\uFF0C\u64A4\u9500git add . \uFF09</span>
<span class="token function">git</span> reset --hard HEAD^ 

<span class="token comment">#\u5982\u679Ccommit\u540E\u9762\u7684\u6CE8\u91CA\u5199\u9519\u4E86\uFF0C\u5148\u522B\u6025\u7740\u64A4\u9500\uFF0C\u53EF\u4EE5\u8FD0\u884C</span>
<span class="token comment">#\u8FDB\u5165vim\u7F16\u8F91\u6A21\u5F0F\uFF0C\u4FEE\u6539\u5B8C\u4FDD\u5B58\u5373\u53EF</span>
<span class="token function">git</span> commit --amend 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-\u8BBE\u7F6E\u4EE3\u7406\u548C\u53D6\u6D88\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#git-\u8BBE\u7F6E\u4EE3\u7406\u548C\u53D6\u6D88\u4EE3\u7406" aria-hidden="true">#</a> git \u8BBE\u7F6E\u4EE3\u7406\u548C\u53D6\u6D88\u4EE3\u7406</h2><ul><li>\u5982\u679C\u4EE3\u7406\u7C7B\u578B\u662Fsocks5\u8FDB\u884C\u5982\u4E0B\u8BBE\u7F6E\u5373\u53EF</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global http.proxy socks5://127.0.0.1:1080 
<span class="token function">git</span> config --global https.proxy socks5://127.0.0.1:1080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u679C\u662F\u666E\u901A\u7684http-https\u8FDB\u884C\u5982\u4E0B\u8BBE\u7F6E\u5373\u53EF" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u662F\u666E\u901A\u7684http-https\u8FDB\u884C\u5982\u4E0B\u8BBE\u7F6E\u5373\u53EF" aria-hidden="true">#</a> \u5982\u679C\u662F\u666E\u901A\u7684http/https\u8FDB\u884C\u5982\u4E0B\u8BBE\u7F6E\u5373\u53EF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global https.proxy http://127.0.0.1:1080 
<span class="token function">git</span> config --global https.proxy https://127.0.0.1:1080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D6\u6D88\u4EE3\u7406\u8BBE\u7F6E-\u89E3\u51B3\u65E0\u6CD5\u62C9\u53D6github" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u4EE3\u7406\u8BBE\u7F6E-\u89E3\u51B3\u65E0\u6CD5\u62C9\u53D6github" aria-hidden="true">#</a> \u53D6\u6D88\u4EE3\u7406\u8BBE\u7F6E(\u89E3\u51B3\u65E0\u6CD5\u62C9\u53D6github)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global --unset http.proxy 
<span class="token function">git</span> config --global --unset https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[t];function l(d,o){return s(),a("div",null,c)}var p=n(i,[["render",l],["__file","git.html.vue"]]);export{p as default};
