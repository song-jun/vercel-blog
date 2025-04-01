import{_ as s,c as a,b as e,o as l}from"./app-B-ayoO34.js";const n={};function h(t,i){return l(),a("div",null,i[0]||(i[0]=[e(`<h1 id="时间管理" tabindex="-1"><a class="header-anchor" href="#时间管理"><span>时间管理</span></a></h1><h2 id="date-命令" tabindex="-1"><a class="header-anchor" href="#date-命令"><span>date 命令</span></a></h2><p><code>date</code> 命令用于输出当前时间</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> date</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2016年</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 03月</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 14日</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 星期一</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 17:32:35</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CST</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>date</code> 命令后面用加号(<code>+</code>)指定显示的格式。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%d_%b_%Y</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">10_Sep_2018</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%D</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">09/10/18</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%F-%T</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2018-09-10-11:09:51</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的格式参数如下。</p><ul><li>%a 星期名的缩写(Sun)</li><li>%A 星期名的全称(Sunday)</li><li>%b 月份的缩写(Jan)</li><li>%B 月份的全称(January)</li><li>%c 日期和时间(Thu Mar 3 23:05:25 2005)</li><li>%C 世纪，就是年份数省略后两位(20)</li><li>%d 一个月的第几天(01)</li><li>%D 日期，等同于<code>%m/%d/%y</code></li><li>%e 一个月的第几天，用空格补零，等同于<code>%_d</code></li><li>%F 完整的日期，等同于<code>%Y-%m-%d</code></li><li>%g last two digits of year of ISO week number (see %G)</li><li>%G year of ISO week number (see %V); normally useful only with %V</li><li>%h 等同于<code>%b</code></li><li>%H 小时(00..23)</li><li>%I 小时(01..12)</li><li>%j day of year (001..366)</li><li>%k hour ( 0..23)</li><li>%l hour ( 1..12)</li><li>%m month (01..12)</li><li>%M minute (00..59)</li><li>%N nanoseconds (000000000..999999999)</li><li>%p locale’s equivalent of either AM or PM; blank if not known</li><li>%P like %p, but lower case</li><li>%r locale’s 12-hour clock time (e.g., 11:11:04 PM)</li><li>%R 24-hour hour and minute; same as %H:%M</li><li>%s seconds since 1970-01-01 00:00:00 UTC</li><li>%S second (00..60)</li><li>%T time; same as %H:%M:%S</li><li>%u day of week (1..7); 1 is Monday</li><li>%U week number of year, with Sunday as first day of week (00..53)</li><li>%V ISO week number, with Monday as first day of week (01..53)</li><li>%w day of week (0..6); 0 is Sunday</li><li>%W week number of year, with Monday as first day of week (00..53)</li><li>%x locale’s date representation (e.g., 12/31/99)</li><li>%X locale’s time representation (e.g., 23:13:48)</li><li>%y last two digits of year (00..99)</li><li>%Y year</li><li>%z +hhmm numeric timezone (e.g., -0400)</li><li>%😒 +hh:mm numeric timezone (e.g., -04:00)</li><li>%:😒 +hh:mm:ss numeric time zone (e.g., -04:00:00)</li><li>%Z alphabetic time zone abbreviation (e.g., EDT)</li></ul><h2 id="cal-命令" tabindex="-1"><a class="header-anchor" href="#cal-命令"><span>cal 命令</span></a></h2><p><code>cal</code> 命令用于显示日历。不带有参数时，显示的是当前月份。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cal</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      三月</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2016</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">日</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 一</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 二</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 三</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 四</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 五</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 六</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">       1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> 6</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  7</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  8</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 12</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">13</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 14</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 15</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 17</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 19</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">20</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 21</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 22</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 23</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 24</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 25</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 26</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">27</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 28</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 29</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 30</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 31</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const d=s(n,[["render",h]]),p=JSON.parse('{"path":"/linux/bash/archives/time.html","title":"时间管理","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","feed":false,"seo":false,"head":[["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","username":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.61,"words":482},"filePathRelative":"linux/bash/archives/time.md","localizedDate":"2020年6月4日"}');export{d as comp,p as data};
