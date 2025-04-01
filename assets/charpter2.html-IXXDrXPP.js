import{_ as p,c as t,b as r,o as i}from"./app-B-ayoO34.js";const e={};function $(l,a){return i(),t("div",null,a[0]||(a[0]=[r('<h2 id="四个热力学函数" tabindex="-1"><a class="header-anchor" href="#四个热力学函数"><span>四个热力学函数</span></a></h2><p>$$ \\begin{aligned} H =&amp; U + pV\\ F =&amp; U - TS\\ G =&amp; U - TS + pV \\end{aligned} $$</p><p>微分形式:</p><p>$$U = TdS - pdV$$</p><p>$$F = -SdT - pdV$$</p><p>$$H = TdS + Vdp$$</p><p>$$G = -SdT + Vdp$$</p><p>$$H=G-T\\frac{\\partial G}{\\partial T}$$</p><p>$$U=F-T\\frac{\\partial F}{\\partial T} =G-T\\frac{\\partial G}{\\partial T}-p\\frac{\\partial G}{\\partial p}$$</p><h2 id="麦克斯韦关系" tabindex="-1"><a class="header-anchor" href="#麦克斯韦关系"><span>麦克斯韦关系</span></a></h2><p>$$ \\Big(\\frac{\\partial T}{\\partial V}\\Big)_S = -\\Big(\\frac{\\partial p}{\\partial S}\\Big)_V $$</p><p>$$ \\Big(\\frac{\\partial T}{\\partial p}\\Big)_S = \\Big(\\frac{\\partial V}{\\partial S}\\Big)_p $$</p><p>$$ \\Big(\\frac{\\partial S}{\\partial V}\\Big)_T = \\Big(\\frac{\\partial p}{\\partial T}\\Big)_V $$</p><p>$$ \\Big(\\frac{\\partial S}{\\partial p}\\Big)_T = -\\Big(\\frac{\\partial V}{\\partial T}\\Big)_p $$</p><p>一些扩展:</p><p>$$ C_v = \\Big(\\frac{\\partial U}{\\partial T}\\Big)_V = T \\Big(\\frac{\\partial S}{\\partial T}\\Big)_V $$</p><p>$$ C_p = \\Big(\\frac{\\partial U}{\\partial T}\\Big)_p + p \\Big(\\frac{\\partial V}{\\partial T}\\Big)_p = \\Big(\\frac{\\partial H}{\\partial T}\\Big)_p = T \\Big(\\frac{\\partial S}{\\partial T}\\Big)_p $$</p><p>$$ \\Big(\\frac{\\partial U}{\\partial V}\\Big)_T = T\\Big(\\frac{\\partial p}{\\partial T}\\Big)_V - p = \\frac{T}{p}\\beta - p $$</p><p>$$ (\\frac{\\partial H}{\\partial p})_T = V - T(\\frac{\\partial V}{\\partial T})_p = V - \\frac{T}{V}\\alpha $$</p><h2 id="节流过程" tabindex="-1"><a class="header-anchor" href="#节流过程"><span>节流过程</span></a></h2><p>气体在节流过程中焓不变。</p><p>$\\mu=\\Big(\\cfrac{\\partial T}{\\partial p}\\Big)_H = \\cfrac{V}{C_p}(T\\alpha - 1)=\\cfrac{1}{C_p}\\Big[T\\Big(\\cfrac{\\partial V}{\\partial T}\\Big)_p -V\\Big]$ 称为焦汤系数。</p><p>可以利用节流过程中 $\\mu &gt; 0$ 一侧制冷区，利用节流过程使得液体降温而液化。</p><h2 id="内能与焓的积分形式" tabindex="-1"><a class="header-anchor" href="#内能与焓的积分形式"><span>内能与焓的积分形式</span></a></h2><p>$$ U = \\int{C_vdT+[T(\\frac{\\partial p}{\\partial T})_V -p]dV}+U_0 $$</p><p>$$ S = \\int[\\frac{C_v}{T}dT+(\\frac{\\partial p}{\\partial T}dV)]+S_0 $$</p><h2 id="热辐射" tabindex="-1"><a class="header-anchor" href="#热辐射"><span>热辐射</span></a></h2><p>辐射压强 $p=\\cfrac{1}{3}u$，而能态密度 $u=aT^4$。</p><p>$S=\\cfrac{4}{3}aT^3V$ (可逆绝热下有 $T^3V$ 常数)</p><p>辐射通量密度 $J_u=\\cfrac{1}{4}CU$</p><h2 id="磁介质" tabindex="-1"><a class="header-anchor" href="#磁介质"><span>磁介质</span></a></h2><p>$m=MV$ 是介质的总磁矩</p><p>所做的功为 $dW =\\mu_0Hdm$</p><p>磁介质的内能满足 $dU=TdS+\\mu_0hdm$</p><p>磁介质的吉布斯函数满足 $dG=-SdT-\\mu_0mdH$</p><p>磁介质的热容 $C_H=T(\\cfrac{\\partial S}{\\partial T})_H$ 则 $(\\cfrac{\\partial T}{\\partial H})_S=-\\cfrac{\\mu_0T}{C_H}(\\cfrac{\\partial m}{\\partial T})_M$</p><p>居里定律: $m=\\cfrac{C_V}{T}H$ 可以得出: $(\\cfrac{\\partial T}{\\partial H})_S=\\cfrac{C_V}{C_HT}\\mu_0H$ 和 $TdS =C_VdT+T\\cfrac{\\alpha}{\\kappa_T}dV$</p><h2 id="重要习题" tabindex="-1"><a class="header-anchor" href="#重要习题"><span>重要习题</span></a></h2><ol><li><p>证明 $\\cfrac{\\kappa_s}{\\kappa_T} = \\cfrac{C_v}{C_p}$</p></li><li><p>证明 $C_p - C_V = -T\\cfrac{(\\cfrac{\\partial p}{\\partial T})_V^2}{(\\cfrac{\\partial p}{\\partial V})_T}$</p></li></ol>',39)]))}const n=p(e,[["render",$]]),d=JSON.parse('{"path":"/physics/tsp/charpter2.html","title":"第二章","lang":"zh-CN","frontmatter":{"title":"第二章","category":"物理","date":"2020-12-28T00:00:00.000Z","tag":["热统"],"description":"四个热力学函数 $$ \\\\begin{aligned} H =& U + pV\\\\ F =& U - TS\\\\ G =& U - TS + pV \\\\end{aligned} $$ 微分形式: $$U = TdS - pdV$$ $$F = -SdT - pdV$$ $$H = TdS + Vdp$$ $$G = -SdT + Vdp$$ $$H=G-T\\\\fr...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/physics/tsp/charpter2.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"第二章"}],["meta",{"property":"og:description","content":"四个热力学函数 $$ \\\\begin{aligned} H =& U + pV\\\\ F =& U - TS\\\\ G =& U - TS + pV \\\\end{aligned} $$ 微分形式: $$U = TdS - pdV$$ $$F = -SdT - pdV$$ $$H = TdS + Vdp$$ $$G = -SdT + Vdp$$ $$H=G-T\\\\fr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:tag","content":"热统"}],["meta",{"property":"article:published_time","content":"2020-12-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第二章\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1730715475000,"updatedTime":1730715475000,"contributors":[{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.84,"words":551},"filePathRelative":"physics/tsp/charpter2.md","localizedDate":"2020年12月28日","excerpt":"<h2>四个热力学函数</h2>\\n<p>$$\\n\\\\begin{aligned}\\nH =&amp; U + pV\\\\\\nF =&amp; U - TS\\\\\\nG =&amp; U - TS + pV\\n\\\\end{aligned}\\n$$</p>\\n<p>微分形式:</p>\\n<p>$$U = TdS - pdV$$</p>\\n<p>$$F = -SdT - pdV$$</p>\\n<p>$$H = TdS + Vdp$$</p>\\n<p>$$G = -SdT + Vdp$$</p>\\n<p>$$H=G-T\\\\frac{\\\\partial G}{\\\\partial T}$$</p>\\n<p>$$U=F-T\\\\frac{\\\\partial F}{\\\\partial T} =G-T\\\\frac{\\\\partial G}{\\\\partial T}-p\\\\frac{\\\\partial G}{\\\\partial p}$$</p>","autoDesc":true}');export{n as comp,d as data};
