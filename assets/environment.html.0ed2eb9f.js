import{_ as p,o as l,c,a as n,b as a,w as i,d as s,e as r,r as e}from"./app.1b51a7e0.js";const u={},d=n("p",null,[s("\u7531\u4E8E Node.js \u9700\u8981\u7F16\u7801\u3001\u8FD0\u884C\u3001\u8C03\u8BD5\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A IDE \u96C6\u6210\u5F00\u53D1\u73AF\u5883\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5927\u5927\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002\u7EFC\u5408\u8003\u5BDF\u540E\uFF0CMr.Song \u9686\u91CD\u5411\u5927\u5BB6\u63A8\u8350 Node.js \u96C6\u6210\u5F00\u53D1\u73AF\u5883: "),n("strong",null,"Visual Studio Code"),s("\u3002\u5B83\u542F\u52A8\u901F\u5EA6\u5FEB\uFF0C\u6267\u884C\u7B80\u5355\uFF0C\u8C03\u8BD5\u65B9\u4FBF\u8FD9\u4E09\u70B9\u4E0A\u3002\u5F53\u7136\uFF0C\u514D\u8D39\u4F7F\u7528\u662F\u4E00\u4E2A\u52A0\u5206\u9879\u3002")],-1),v={class:"custom-container info"},k=n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F",-1),m=s("\u6709\u5173 VS Code \u4F7F\u7528\u6559\u7A0B\u8BF7"),q=s("\u8BBF\u95EE\u8FD9\u91CC"),b=r(`<h2 id="\u8FD0\u884C\u548C\u8C03\u8BD5-javascript" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u548C\u8C03\u8BD5-javascript" aria-hidden="true">#</a> \u8FD0\u884C\u548C\u8C03\u8BD5 JavaScript</h2><p>\u5728 VS Code \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u8FD0\u884C JavaScript \u6587\u4EF6\u3002</p><p>VS Code \u4EE5\u6587\u4EF6\u5939\u4F5C\u4E3A\u5DE5\u7A0B\u76EE\u5F55 (Workspace Dir)\uFF0C\u6240\u6709\u7684 JavaScript \u6587\u4EF6\u90FD\u5B58\u653E\u5728\u8BE5\u76EE\u5F55\u4E0B\u3002\u6B64\u5916\uFF0CVS Code \u5728\u5DE5\u7A0B\u76EE\u5F55\u4E0B\u8FD8\u9700\u8981\u4E00\u4E2A <code>.vscode</code> \u7684\u914D\u7F6E\u76EE\u5F55\uFF0C\u91CC\u9762\u5B58\u653E\u91CC VS Code \u9700\u8981\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u5728 <code>C:\\Work\\</code> \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E86\u4E00\u4E2A hello \u76EE\u5F55\u4F5C\u4E3A\u5DE5\u7A0B\u76EE\u5F55\uFF0C\u5E76\u7F16\u5199\u4E86\u4E00\u4E2A <code>hello.js</code> \u6587\u4EF6\uFF0C\u5219\u8BE5\u5DE5\u7A0B\u76EE\u5F55\u7684\u7ED3\u6784\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hello/ &lt;-- workspace dir
|
\u251C\u2500 hello.js &lt;-- JavaScript file
|
\u2514\u2500 .vscode/ &lt;-- VS Code config
      |
      \u2514 launch.json &lt;-- VS Code config file for JavaScript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u7528 VS Code \u5FEB\u901F\u521B\u5EFA <code>launch.json</code>\uFF0C\u7136\u540E\u4FEE\u6539\u5982\u4E0B:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Run hello.js&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}/hello.js&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stopOnEntry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;preLaunchTask&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;--nolazy&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;externalConsole&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sourceMaps&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u4E86\u914D\u7F6E\u6587\u4EF6\uFF0C\u5373\u53EF\u4F7F\u7528 VS Code \u8C03\u8BD5 JavaScript\u3002</p><h2 id="\u89C6\u9891\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891\u6F14\u793A" aria-hidden="true">#</a> \u89C6\u9891\u6F14\u793A</h2>`,9),h={href:"https://www.bilibili.com/video/av5827351/",target:"_blank",rel:"noopener noreferrer"},_=s("\u89C6\u9891\u6F14\u793A");function g(f,y){const o=e("RouterLink"),t=e("ExternalLinkIcon");return l(),c("div",null,[d,n("div",v,[k,n("p",null,[m,a(o,{to:"/software/vscode/"},{default:i(()=>[q]),_:1})])]),b,n("ul",null,[n("li",null,[n("a",h,[_,a(t)])])])])}var x=p(u,[["render",g],["__file","environment.html.vue"]]);export{x as default};