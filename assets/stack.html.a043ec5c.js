import{_ as e,o as n,c as s,e as d}from"./app.16f1d1b9.js";const a={},i=d(`<p>\u4E3A\u4E86\u65B9\u4FBF\u7528\u6237\u5728\u4E0D\u540C\u76EE\u5F55\u4E4B\u95F4\u5207\u6362\uFF0CBash \u63D0\u4F9B\u4E86\u76EE\u5F55\u5806\u6808\u529F\u80FD\u3002</p><h2 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd -</h2><p>Bash \u53EF\u4EE5\u8BB0\u5FC6\u7528\u6237\u8FDB\u5165\u8FC7\u7684\u76EE\u5F55\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u53EA\u8BB0\u5FC6\u524D\u4E00\u6B21\u6240\u5728\u7684\u76EE\u5F55\uFF0C<code>cd -</code> \u547D\u4EE4\u53EF\u4EE5\u8FD4\u56DE\u524D\u4E00\u6B21\u7684\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F53\u524D\u76EE\u5F55\u662F /path/to/foo</span>
$ <span class="token builtin class-name">cd</span> bar

<span class="token comment"># \u91CD\u65B0\u56DE\u5230 /path/to/foo</span>
$ <span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u7528\u6237\u539F\u6765\u6240\u5728\u7684\u76EE\u5F55\u662F <code>/path/to/foo</code>\uFF0C\u8FDB\u5165\u5B50\u76EE\u5F55 <code>bar</code> \u4EE5\u540E\uFF0C\u4F7F\u7528 <code>cd -</code> \u53EF\u4EE5\u56DE\u5230\u539F\u6765\u7684\u76EE\u5F55\u3002</p><h2 id="pushd-popd" tabindex="-1"><a class="header-anchor" href="#pushd-popd" aria-hidden="true">#</a> pushd\uFF0Cpopd</h2><p>\u5982\u679C\u5E0C\u671B\u8BB0\u5FC6\u591A\u91CD\u76EE\u5F55\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>pushd</code> \u547D\u4EE4\u548C <code>popd</code> \u547D\u4EE4\u3002\u5B83\u4EEC\u7528\u6765\u64CD\u4F5C\u76EE\u5F55\u5806\u6808\u3002</p><p><code>pushd</code> \u547D\u4EE4\u7684\u7528\u6CD5\u7C7B\u4F3C <code>cd</code> \u547D\u4EE4\uFF0C\u53EF\u4EE5\u8FDB\u5165\u6307\u5B9A\u7684\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pushd</span> <span class="token function">dirname</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4F1A\u8FDB\u5165\u76EE\u5F55 <code>dirname</code>\uFF0C\u5E76\u5C06\u8BE5\u76EE\u5F55\u653E\u5165\u5806\u6808\u3002</p><p>\u7B2C\u4E00\u6B21\u4F7F\u7528 <code>pushd</code> \u547D\u4EE4\u65F6\uFF0C\u4F1A\u5C06\u5F53\u524D\u76EE\u5F55\u5148\u653E\u5165\u5806\u6808\uFF0C\u7136\u540E\u5C06\u6240\u8981\u8FDB\u5165\u7684\u76EE\u5F55\u4E5F\u653E\u5165\u5806\u6808\uFF0C\u4F4D\u7F6E\u5728\u524D\u4E00\u4E2A\u8BB0\u5F55\u7684\u4E0A\u65B9\u3002\u4EE5\u540E\u6BCF\u6B21\u4F7F\u7528 <code>pushd</code> \u547D\u4EE4\uFF0C\u90FD\u4F1A\u5C06\u6240\u8981\u8FDB\u5165\u7684\u76EE\u5F55\uFF0C\u653E\u5728\u5806\u6808\u7684\u9876\u90E8\u3002</p><p><code>popd</code> \u547D\u4EE4\u4E0D\u5E26\u6709\u53C2\u6570\u65F6\uFF0C\u4F1A\u79FB\u9664\u5806\u6808\u7684\u9876\u90E8\u8BB0\u5F55\uFF0C\u5E76\u8FDB\u5165\u65B0\u7684\u5806\u6808\u9876\u90E8\u76EE\u5F55(\u5373\u539F\u6765\u7684\u7B2C\u4E8C\u6761\u76EE\u5F55)\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F53\u524D\u5904\u5728\u4E3B\u76EE\u5F55\uFF0C\u5806\u6808\u4E3A\u7A7A</span>
$ <span class="token builtin class-name">pwd</span>
/home/me

<span class="token comment"># \u8FDB\u5165 /home/me/foo</span>
<span class="token comment"># \u5F53\u524D\u5806\u6808\u4E3A /home/me/foo /home/me</span>
$ <span class="token function">pushd</span> ~/foo

<span class="token comment"># \u8FDB\u5165 /etc</span>
<span class="token comment"># \u5F53\u524D\u5806\u6808\u4E3A /etc /home/me/foo /home/me</span>
$ <span class="token function">pushd</span> /etc

<span class="token comment"># \u8FDB\u5165 /home/me/foo</span>
<span class="token comment"># \u5F53\u524D\u5806\u6808\u4E3A /home/me/foo /home/me</span>
$ <span class="token function">popd</span>

<span class="token comment"># \u8FDB\u5165 /home/me</span>
<span class="token comment"># \u5F53\u524D\u5806\u6808\u4E3A /home/me</span>
$ <span class="token function">popd</span>

<span class="token comment"># \u76EE\u5F55\u4E0D\u53D8\uFF0C\u5F53\u524D\u5806\u6808\u4E3A\u7A7A</span>
$ <span class="token function">popd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E24\u4E2A\u547D\u4EE4\u7684\u53C2\u6570\u5982\u4E0B\u3002</p><ol><li><p><strong><code>-n</code> \u53C2\u6570</strong></p><p><code>-n</code> \u7684\u53C2\u6570\u8868\u793A\u4EC5\u64CD\u4F5C\u5806\u6808\uFF0C\u4E0D\u6539\u53D8\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">popd</span> -n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u547D\u4EE4\u4EC5\u5220\u9664\u5806\u6808\u9876\u90E8\u7684\u8BB0\u5F55\uFF0C\u4E0D\u6539\u53D8\u76EE\u5F55\uFF0C\u6267\u884C\u5B8C\u6210\u540E\u8FD8\u505C\u7559\u5728\u5F53\u524D\u76EE\u5F55\u3002</p></li><li><p><strong>\u6574\u6570\u53C2\u6570</strong></p><p>\u8FD9\u4E24\u4E2A\u547D\u4EE4\u8FD8\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u6574\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BE5\u6574\u6570\u8868\u793A\u5806\u6808\u4E2D\u6307\u5B9A\u4F4D\u7F6E\u7684\u8BB0\u5F55(\u4ECE 0 \u5F00\u59CB)\uFF0C\u4F5C\u4E3A\u64CD\u4F5C\u5BF9\u8C61\u3002\u8FD9\u65F6\u4E0D\u4F1A\u5207\u6362\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4ECE\u6808\u9876\u7B97\u8D77\u76843\u53F7\u76EE\u5F55(\u4ECE0\u5F00\u59CB)\uFF0C\u79FB\u52A8\u5230\u6808\u9876</span>
$ <span class="token function">pushd</span> +3

<span class="token comment"># \u4ECE\u6808\u5E95\u7B97\u8D77\u76843\u53F7\u76EE\u5F55(\u4ECE0\u5F00\u59CB)\uFF0C\u79FB\u52A8\u5230\u6808\u9876</span>
$ <span class="token function">pushd</span> -3

<span class="token comment"># \u5220\u9664\u4ECE\u6808\u9876\u7B97\u8D77\u76843\u53F7\u76EE\u5F55(\u4ECE0\u5F00\u59CB)</span>
$ <span class="token function">popd</span> +3

<span class="token comment"># \u5220\u9664\u4ECE\u6808\u5E95\u7B97\u8D77\u76843\u53F7\u76EE\u5F55(\u4ECE0\u5F00\u59CB)</span>
$ <span class="token function">popd</span> -3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u7684\u6574\u6570\u7F16\u53F7\u90FD\u662F\u4ECE 0 \u5F00\u59CB\u8BA1\u7B97\uFF0C<code>popd +0</code> \u662F\u5220\u9664\u7B2C\u4E00\u4E2A\u76EE\u5F55\uFF0C<code>popd +1</code> \u662F\u5220\u9664\u7B2C\u4E8C\u4E2A\uFF0C<code>popd -0</code> \u662F\u5220\u9664\u6700\u540E\u4E00\u4E2A\u76EE\u5F55\uFF0C\uFF0C<code>popd -1</code> \u662F\u5220\u9664\u5012\u6570\u7B2C\u4E8C\u4E2A\u3002</p></li><li><p><strong>\u76EE\u5F55\u53C2\u6570</strong></p><p><code>pushd</code> \u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u76EE\u5F55\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8868\u793A\u5C06\u8BE5\u76EE\u5F55\u653E\u5230\u5806\u6808\u9876\u90E8\uFF0C\u5E76\u8FDB\u5165\u8BE5\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pushd</span> <span class="token function">dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>popd</code> \u6CA1\u6709\u8FD9\u4E2A\u53C2\u6570\u3002</p></li></ol><h2 id="dirs-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#dirs-\u547D\u4EE4" aria-hidden="true">#</a> dirs \u547D\u4EE4</h2><p><code>dirs</code> \u547D\u4EE4\u53EF\u4EE5\u663E\u793A\u76EE\u5F55\u5806\u6808\u7684\u5185\u5BB9\uFF0C\u4E00\u822C\u7528\u6765\u67E5\u770B <code>pushd</code> \u548C <code>popd</code> \u64CD\u4F5C\u540E\u7684\u7ED3\u679C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">dirs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B83\u6709\u4EE5\u4E0B\u53C2\u6570\u3002</p><ul><li><code>-c</code>: \u6E05\u7A7A\u76EE\u5F55\u6808\u3002</li><li><code>-l</code>: \u7528\u6237\u4E3B\u76EE\u5F55\u4E0D\u663E\u793A\u6CE2\u6D6A\u53F7\u524D\u7F00\uFF0C\u800C\u6253\u5370\u5B8C\u6574\u7684\u76EE\u5F55\u3002</li><li><code>-p</code>: \u6BCF\u884C\u4E00\u4E2A\u6761\u76EE\u6253\u5370\u76EE\u5F55\u6808\uFF0C\u9ED8\u8BA4\u662F\u6253\u5370\u5728\u4E00\u884C\u3002</li><li><code>-v</code>: \u6BCF\u884C\u4E00\u4E2A\u6761\u76EE\uFF0C\u6BCF\u4E2A\u6761\u76EE\u4E4B\u524D\u663E\u793A\u4F4D\u7F6E\u7F16\u53F7(\u4ECE 0 \u5F00\u59CB)\u3002</li><li><code>+N</code>: <code>N</code> \u4E3A\u6574\u6570\uFF0C\u8868\u793A\u663E\u793A\u5806\u9876\u7B97\u8D77\u7684\u7B2C N \u4E2A\u76EE\u5F55\uFF0C\u4ECE\u96F6\u5F00\u59CB\u3002</li><li><code>-N</code>: <code>N</code> \u4E3A\u6574\u6570\uFF0C\u8868\u793A\u663E\u793A\u5806\u5E95\u7B97\u8D77\u7684\u7B2C N \u4E2A\u76EE\u5F55\uFF0C\u4ECE\u96F6\u5F00\u59CB\u3002</li></ul>`,21),c=[i];function o(l,p){return n(),s("div",null,c)}var r=e(a,[["render",o],["__file","stack.html.vue"]]);export{r as default};