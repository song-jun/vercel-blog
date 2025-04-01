import{_ as a,c as n,b as t,o as i}from"./app-B-ayoO34.js";const r={};function o(l,e){return i(),n("div",null,e[0]||(e[0]=[t('<h2 id="行内元素有哪些-块级元素有哪些-空-void-元素有哪些" tabindex="-1"><a class="header-anchor" href="#行内元素有哪些-块级元素有哪些-空-void-元素有哪些"><span>行内元素有哪些？块级元素有哪些？ 空(void)元素有哪些？</span></a></h2><ul><li>行内元素：span、img、input...</li><li>块级元素：div、footer、header、section、p、h1...h6...</li><li>空元素：br、hr...</li></ul><h2 id="css的盒子模型有哪些" tabindex="-1"><a class="header-anchor" href="#css的盒子模型有哪些"><span>CSS的盒子模型有哪些</span></a></h2><p>标准盒子模型、IE盒子模型<br> CSS的盒子模型区别：<br> 标准盒子模型：margin、border、padding、content<br> IE盒子模型 ：margin、content（ border + padding + content ）<br> 通过CSS如何转换盒子模型：<br> box-sizing: content-box;标准盒子模型<br> box-sizing: border-box;IE盒子模型</p><h2 id="对bfc规范-块级格式化上下文-block-formatting-context-的理解" tabindex="-1"><a class="header-anchor" href="#对bfc规范-块级格式化上下文-block-formatting-context-的理解"><span>对BFC规范(块级格式化上下文：block formatting context)的理解</span></a></h2><p>BFC就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。</p><ol><li>了解BFC ： 块级格式化上下文。</li><li>BFC的原则：如果一个元素具有BFC，那么内部元素再怎么弄，都不会影响到外面的元素。</li><li>如何触发BFC：<br> float的值非none<br> overflow的值非visible<br> display的值为：inline-block、table-cell...<br> position的值为:absoute、fixed</li></ol><h2 id="页面导入样式时-使用link和-import有什么区别" tabindex="-1"><a class="header-anchor" href="#页面导入样式时-使用link和-import有什么区别"><span>页面导入样式时，使用link和@import有什么区别？</span></a></h2><p>区别一：link先有，后有@import（兼容性link比@import兼容）；<br> 区别二：加载顺序差别，浏览器先加载的标签link，后加载@import</p><h2 id="css实现动画主要有3种方式" tabindex="-1"><a class="header-anchor" href="#css实现动画主要有3种方式"><span>css实现动画主要有3种方式</span></a></h2><ul><li>transition实现过渡动画</li><li>transform转变动画</li><li>animation实现自定义动画</li></ul><h2 id="css动画使用margin和transform的区别" tabindex="-1"><a class="header-anchor" href="#css动画使用margin和transform的区别"><span>css动画使用margin和transform的区别</span></a></h2><p>1.margin是属于布局属性，该属性的变化会导致页面的重排。 对布局属性进行动画，浏览器需要为每一帧进行重绘并上传到GPU中进行渲染</p><p>2.transform是合成属性，浏览器会为元素创建一个独立的复合层，当元素内容没有发生变化，该层不会被重绘，通过重新复合来创建动画帧</p>',14)]))}const c=a(r,[["render",o]]),p=JSON.parse('{"path":"/interview/html.html","title":"HTML面试题","lang":"zh-CN","frontmatter":{"title":"HTML面试题","date":"2020-08-07T14:24:00.000Z","category":"面试题","tag":"HTML面试题","feed":false,"seo":false,"head":[["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"git":{"createdTime":1661765266000,"updatedTime":1663228772000,"contributors":[{"name":"MrSong","username":"MrSong","email":"289097246@qq.com","commits":4}]},"readingTime":{"minutes":1.59,"words":477},"filePathRelative":"interview/html.md","localizedDate":"2020年8月7日"}');export{c as comp,p as data};
