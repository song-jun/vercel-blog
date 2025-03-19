import{_ as t,c as i,b as n,o as a}from"./app-Ciqs_Xc9.js";const p={};function o(r,e){return a(),i("div",null,e[0]||(e[0]=[n('<p>由于 GFW 的存在，GitHub 的访问速度在大部分国内地区都很慢，甚至不稳定。如果需要克隆体积比较大的项目，可能需要很长时间，也很大概率会在中途因为网络波动、终端问题导致克隆失败。</p><p>本文介绍如何使用 Gitee 加快 GitHub 项目克隆。</p><h2 id="gitee" tabindex="-1"><a class="header-anchor" href="#gitee"><span>Gitee</span></a></h2><p>Gitee 又称码云，是一个国内的代码托管商，国内访问 Gitee 的速度是十分 Amazing 的。</p><h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册"><span>注册</span></a></h3><p>Gitee 账户可以很方便的通过 GitHub 账户 + 绑定手机号注册。</p><h3 id="添加公钥" tabindex="-1"><a class="header-anchor" href="#添加公钥"><span>添加公钥</span></a></h3><p>完成注册后，您需要上传本地公钥，以保证可以从 Gitee 上拉取或克隆，其步骤与 GitHub 大致相同。</p><h3 id="导入-github-仓库" tabindex="-1"><a class="header-anchor" href="#导入-github-仓库"><span>导入 GitHub 仓库</span></a></h3><p>码云的企业专线访问 GitHub 的速度很快，而码云在新建仓库的时候提供了导入选项，这就给我们的加速提供了方式。</p><p>我们只需要在码云上新建仓库，选择导入，然后输入自己想要克隆的 GitHub 仓库地址，交给码云完成导入即可。</p><p>稍等片刻后，码云即会将 GitHub 的仓库同步到自己的服务器上，此时我们只需要克隆码云上的这个仓库地址，就可以高速克隆这个项目。</p><h3 id="远程库地址修改" tabindex="-1"><a class="header-anchor" href="#远程库地址修改"><span>远程库地址修改</span></a></h3><p>在克隆完毕后，本地的 origin 远程库会默认为 Gitee 的仓库，此时我们需要使用 <code>git remote rename origin gitee</code> 命令，将码云的远程仓库重命名为 <code>gitee</code>，并使用 <code>git remote add origin &lt;github url&gt;</code> 命令重新添加 GitHub 的远程仓库为 origin。</p><p>这样我们稍后在做出本地提交后，即可直接推送到 GitHub 仓库。</p><h3 id="同步仓库" tabindex="-1"><a class="header-anchor" href="#同步仓库"><span>同步仓库</span></a></h3><p>如果以导入的形式创建码云仓库。则可以随时点击仓库页面上的同步图标，让码云随时拉取最新的 gitee 代码，以便在本地通过 <code>git fetch gitee</code>，通过码云服务器高速拉取最新代码。</p>',17)]))}const c=t(p,[["render",o],["__file","speedup.html.vue"]]),s=JSON.parse('{"path":"/code/github/speedup.html","title":"加速 GitHub 克隆","lang":"zh-CN","frontmatter":{"title":"加速 GitHub 克隆","icon":"speed","category":"GitHub","order":5,"description":"由于 GFW 的存在，GitHub 的访问速度在大部分国内地区都很慢，甚至不稳定。如果需要克隆体积比较大的项目，可能需要很长时间，也很大概率会在中途因为网络波动、终端问题导致克隆失败。 本文介绍如何使用 Gitee 加快 GitHub 项目克隆。 Gitee Gitee 又称码云，是一个国内的代码托管商，国内访问 Gitee 的速度是十分 Amazin...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/github/speedup.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"加速 GitHub 克隆"}],["meta",{"property":"og:description","content":"由于 GFW 的存在，GitHub 的访问速度在大部分国内地区都很慢，甚至不稳定。如果需要克隆体积比较大的项目，可能需要很长时间，也很大概率会在中途因为网络波动、终端问题导致克隆失败。 本文介绍如何使用 Gitee 加快 GitHub 项目克隆。 Gitee Gitee 又称码云，是一个国内的代码托管商，国内访问 Gitee 的速度是十分 Amazin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"加速 GitHub 克隆\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"Gitee","slug":"gitee","link":"#gitee","children":[{"level":3,"title":"注册","slug":"注册","link":"#注册","children":[]},{"level":3,"title":"添加公钥","slug":"添加公钥","link":"#添加公钥","children":[]},{"level":3,"title":"导入 GitHub 仓库","slug":"导入-github-仓库","link":"#导入-github-仓库","children":[]},{"level":3,"title":"远程库地址修改","slug":"远程库地址修改","link":"#远程库地址修改","children":[]},{"level":3,"title":"同步仓库","slug":"同步仓库","link":"#同步仓库","children":[]}]}],"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.75,"words":524},"filePathRelative":"code/github/speedup.md","localizedDate":"2022年8月4日","excerpt":"<p>由于 GFW 的存在，GitHub 的访问速度在大部分国内地区都很慢，甚至不稳定。如果需要克隆体积比较大的项目，可能需要很长时间，也很大概率会在中途因为网络波动、终端问题导致克隆失败。</p>\\n<p>本文介绍如何使用 Gitee 加快 GitHub 项目克隆。</p>\\n<h2>Gitee</h2>\\n<p>Gitee 又称码云，是一个国内的代码托管商，国内访问 Gitee 的速度是十分 Amazing 的。</p>\\n<h3>注册</h3>\\n<p>Gitee 账户可以很方便的通过 GitHub 账户 + 绑定手机号注册。</p>\\n<h3>添加公钥</h3>\\n<p>完成注册后，您需要上传本地公钥，以保证可以从 Gitee 上拉取或克隆，其步骤与 GitHub 大致相同。</p>","autoDesc":true}');export{c as comp,s as data};
