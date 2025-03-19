import{_ as i,c as t,b as r,o as a}from"./app-Ciqs_Xc9.js";const n={};function o(p,e){return a(),t("div",null,e[0]||(e[0]=[r('<p>微信小程序运行在多种平台上: iOS(iPhone/iPad)微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。</p><p>各平台脚本执行环境以及用于渲染非原生组件的环境是各不相同的:</p><ul><li><p>在 iOS 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，环境有 iOS 12、iOS 13 等；</p></li><li><p>在 Android 上，小程序逻辑层的 JavaScript 代码运行在 V8 中，视图层是由自研 XWeb 引擎基于 Mobile Chrome 内核来渲染的；</p></li><li><p>在 开发工具上，小程序逻辑层的 JavaScript 代码是运行在 NW.js 中，视图层是由 Chromium Webview 来渲染的。</p></li><li><p>在 PC 上，小程序逻辑层 JavaScript 和视图层 JavaScript 都是用 Chrome 内核</p></li><li><p>在 Mac 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，与 iOS 一致</p></li></ul><h2 id="平台差异" tabindex="-1"><a class="header-anchor" href="#平台差异"><span>平台差异</span></a></h2><p>尽管各运行环境是十分相似的，但是还是有些许区别:</p><ul><li><p>JavaScript 语法和 API 支持不一致: 语法上开发者可以通过开启 ES6 转 ES5 的功能来规避 (<a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile.html#es6-%E8%BD%AC-es5" target="_blank" rel="noopener noreferrer">详情</a>)；此外，小程序基础库内置了必要的 Polyfill，来弥补 API 的差异 (<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/js-support.html" target="_blank" rel="noopener noreferrer">详情</a>)。</p></li><li><p>WXSS 渲染表现不一致: 尽管可以通过开启 <a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile.html#%E6%A0%B7%E5%BC%8F%E8%A1%A5%E5%85%A8" target="_blank" rel="noopener noreferrer">样式补全</a> 来规避大部分的问题，还是建议开发者需要在 iOS 和 Android 上分别检查小程序的真实表现。</p></li><li><p>开发者工具仅供调试使用，最终的表现以客户端为准。</p></li></ul>',6)]))}const c=i(n,[["render",o],["__file","env.html.vue"]]),m=JSON.parse('{"path":"/code/mini-app/guide/frame/env.html","title":"小程序的运行环境","lang":"zh-CN","frontmatter":{"title":"小程序的运行环境","icon":"leaf","category":"小程序","description":"微信小程序运行在多种平台上: iOS(iPhone/iPad)微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。 各平台脚本执行环境以及用于渲染非原生组件的环境是各不相同的: 在 iOS 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebV...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/mini-app/guide/frame/env.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"小程序的运行环境"}],["meta",{"property":"og:description","content":"微信小程序运行在多种平台上: iOS(iPhone/iPad)微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。 各平台脚本执行环境以及用于渲染非原生组件的环境是各不相同的: 在 iOS 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebV..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"小程序的运行环境\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"平台差异","slug":"平台差异","link":"#平台差异","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1730715475000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1},{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.48,"words":443},"filePathRelative":"code/mini-app/guide/frame/env.md","localizedDate":"2022年8月4日","excerpt":"<p>微信小程序运行在多种平台上: iOS(iPhone/iPad)微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。</p>\\n<p>各平台脚本执行环境以及用于渲染非原生组件的环境是各不相同的:</p>\\n<ul>\\n<li>\\n<p>在 iOS 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，环境有 iOS 12、iOS 13 等；</p>\\n</li>\\n<li>\\n<p>在 Android 上，小程序逻辑层的 JavaScript 代码运行在 V8 中，视图层是由自研 XWeb 引擎基于 Mobile Chrome 内核来渲染的；</p>\\n</li>\\n<li>\\n<p>在 开发工具上，小程序逻辑层的 JavaScript 代码是运行在 NW.js 中，视图层是由 Chromium Webview 来渲染的。</p>\\n</li>\\n<li>\\n<p>在 PC 上，小程序逻辑层 JavaScript 和视图层 JavaScript 都是用 Chrome 内核</p>\\n</li>\\n<li>\\n<p>在 Mac 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，与 iOS 一致</p>\\n</li>\\n</ul>","autoDesc":true}');export{c as comp,m as data};
