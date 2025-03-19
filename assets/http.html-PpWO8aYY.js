import{_ as e,c as l,b as r,o as i}from"./app-Ciqs_Xc9.js";const n={};function o(a,t){return i(),l("div",null,t[0]||(t[0]=[r('<h2 id="浏览器渲染原理" tabindex="-1"><a class="header-anchor" href="#浏览器渲染原理"><span>浏览器渲染原理</span></a></h2><p><strong>构建DOM树</strong></p><ul><li>浏览器从网络或本地获取HTML文档后，会将其按照HTML规范进行解析。解析过程中，浏览器会识别HTML标签、属性等信息，然后根据这些信息构建出一个文档对象模型（DOM）树。DOM树的每个节点对应着HTML文档中的一个元素，例如<code>&lt;html&gt;</code>、<code>&lt;body&gt;</code>、<code>&lt;div&gt;</code>等标签都会成为DOM树中的节点，节点之间的关系反映了HTML元素的嵌套结构。</li></ul><p><strong>构建CSSOM树</strong></p><ul><li>浏览器在解析HTML的同时，也会对CSS样式进行解析。它会根据CSS规则，将所有的样式信息整理成一个层叠样式表对象模型（CSSOM）树。CSSOM树中的每个节点对应着HTML元素的一个样式属性，例如元素的颜色、字体、大小等信息。通过CSSOM树，浏览器可以知道每个元素应该如何进行样式渲染。</li></ul><p><strong>生成渲染树</strong></p><ul><li>渲染树是将DOM树和CSSOM树结合起来生成的。它会过滤掉DOM树中不需要渲染的节点，比如<code>&lt;script&gt;</code>、<code>&lt;meta&gt;</code>等标签，只保留需要进行视觉渲染的元素。然后，将CSSOM树中的样式信息应用到对应的DOM节点上，形成渲染树。渲染树中的每个节点都包含了元素的内容以及对应的样式信息，它决定了页面上每个元素的最终显示效果。</li></ul><p><strong>布局（Layout）</strong></p><ul><li>布局阶段也称为回流（Reflow），浏览器会根据渲染树中每个节点的样式信息和几何属性，计算出它们在页面上的位置和大小。这个过程会从渲染树的根节点开始，递归地计算每个节点的布局。例如，浏览器会根据父元素的宽度、子元素的宽度和间距等信息，确定子元素在水平方向上的位置；根据元素的高度、行高、外边距等信息，确定元素在垂直方向上的位置。</li></ul><p><strong>绘制（Paint）</strong></p><ul><li>在完成布局后，浏览器会将渲染树中的每个节点绘制到屏幕上。绘制过程是按照渲染树的顺序，从根节点开始逐个绘制每个节点。对于每个节点，浏览器会根据其样式属性，如颜色、背景、边框等，使用图形绘制API将其绘制到对应的位置上。绘制的结果是一个位图，它包含了页面上所有可见元素的图像信息。</li></ul><p><strong>合成（Composite）</strong></p><ul><li>合成阶段是将绘制好的各个图层按照一定的顺序合并成最终的页面图像。在现代浏览器中，为了提高渲染性能，页面通常会被分成多个图层，例如具有3D变换、透明度变化、动画等属性的元素会被单独提升为一个图层。浏览器会根据图层的顺序和属性，将各个图层的位图进行合成，最终显示在屏幕上。</li></ul><p>在页面加载和交互过程中，浏览器会根据用户操作和页面变化，适时地重复以上部分或全部步骤，以更新页面的显示内容。</p><h2 id="浏览器输入url后经历的过程" tabindex="-1"><a class="header-anchor" href="#浏览器输入url后经历的过程"><span>浏览器输入url后经历的过程</span></a></h2><p>1、首先，在浏览器地址栏中输入url</p><p>2、浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。</p><p>3、在发送http请求前，需要域名解析(DNS解析)，解析获取相应的IP地址。</p><p>4、浏览器向服务器发起tcp连接，与浏览器建立tcp三次握手。</p><p>5、握手成功后，浏览器向服务器发送http请求，请求数据包。</p><p>6、服务器处理收到的请求，将数据返回至浏览器</p><p>7、浏览器收到HTTP响应</p><p>8、读取页面内容，浏览器渲染，解析html源码</p><p>9、生成Dom树、解析css样式、js交互</p><p>10、客户端和服务器交互</p><p>11、ajax查询</p><p>其中，步骤2的具体过程是：</p><p>浏览器缓存：浏览器会记录DNS一段时间，因此，只是第一个地方解析DNS请求；<br> 操作系统缓存：如果在浏览器缓存中不包含这个记录，则会使系统调用操作系统，获取操作系统的记录(保存最近的DNS查询缓存)；<br> 路由器缓存：如果上述两个步骤均不能成功获取DNS记录，继续搜索路由器缓存；<br> ISP缓存：若上述均失败，继续向ISP搜索。</p><h2 id="https如何加密" tabindex="-1"><a class="header-anchor" href="#https如何加密"><span>HTTPS如何加密</span></a></h2><p>HTTPS（超文本传输安全协议）是在HTTP的基础上通过传输加密和身份认证来确保通信安全，主要利用SSL/TLS协议实现加密，具体的加密过程涉及到对称加密、非对称加密和哈希算法等多种技术，以下是HTTPS加密的一般过程：</p><ol><li><strong>客户端发起请求</strong>：用户在浏览器中输入一个HTTPS网址，浏览器向网站服务器发起一个HTTPS连接请求。</li><li><strong>服务器发送证书</strong>：服务器接收到请求后，将自己的数字证书发送给客户端。这个数字证书包含了服务器的公钥、证书颁发机构（CA）的信息等。</li><li><strong>客户端验证证书</strong>：客户端收到服务器的数字证书后，会检查证书的有效性，包括证书是否过期、颁发机构是否受信任等。如果证书验证通过，客户端会从证书中提取出服务器的公钥。</li><li><strong>生成随机密钥（对称加密密钥）</strong>：客户端使用伪随机数生成器生成一个随机的对称加密密钥，用于后续通信过程中的数据加密和解密。这个密钥只有客户端和服务器知道。</li><li><strong>使用服务器公钥加密随机密钥</strong>：客户端使用从服务器证书中获取的公钥，对生成的对称加密密钥进行加密。由于公钥加密只能由对应的私钥解密，所以只有服务器能够解密这个被加密的对称密钥。</li><li><strong>发送加密后的密钥</strong>：客户端将加密后的对称密钥发送给服务器。</li><li><strong>服务器解密获取对称密钥</strong>：服务器接收到客户端发送的加密后的对称密钥后，使用自己的私钥进行解密，得到原始的对称加密密钥。</li><li><strong>数据加密传输</strong>：在之后的通信过程中，客户端和服务器之间的数据传输都使用这个对称加密密钥进行加密和解密。对称加密算法的效率较高，适合大量数据的加密传输。</li><li><strong>完整性校验</strong>：为了确保数据在传输过程中没有被篡改，HTTPS还使用了哈希算法。在数据发送端，会对数据进行哈希计算，生成一个哈希值；在接收端，对接收到的数据进行同样的哈希计算，然后将计算得到的哈希值与发送端的哈希值进行比较。如果两个哈希值相同，说明数据在传输过程中没有被篡改。</li></ol><p>通过以上过程，HTTPS利用非对称加密来安全地交换对称加密密钥，然后使用对称加密来高效地加密和解密实际传输的数据，并结合哈希算法保证数据的完整性，从而实现了安全的网络通信。</p><h2 id="http的缓存机制" tabindex="-1"><a class="header-anchor" href="#http的缓存机制"><span>HTTP的缓存机制</span></a></h2><p>HTTP缓存可以分为强缓存与协商缓存</p><ul><li><p>强制缓存<br> 当缓存数据库中已经有所请求的数据时，客户端直接从缓存数据库中获取数据。<br> 当缓存数据库中没有要请求的数据时，客户端才会从服务端获取数据，并且服务器会将数据和缓存规则一起返回，缓存规则信息包含在响应头中。<br> Expires: 将资源失效的日期告知客户端。Expires是HTTP1.0的产物，先都用Cache-Control代替。<br> Cache-Control: 属性很多，用来控制缓存机制。 private：对指定客户端提供缓存<br> public：任何客户端与代理服务器都可以缓存<br> max-age：缓存内容在t秒之后失效<br> no-cache: 需要使用协商缓存来验证缓存数据<br> no-store: 所有资源都不缓存</p></li><li><p>协商缓存<br> 客户端会先从缓存数据库中获取到一个缓存数据的标识，得到标识后请求服务器端验证是否失效，如果没有失效服务器端会返回304，此时客户端就可以直接从缓存数据库中获取数据。如果标识失效了，服务器会返回更新后的数据。<br> Last-Modified（服务器携带）： 服务器在响应请求时，会告诉浏览器资源的最后修改时间<br> if-Modified-Since（浏览器携带）：浏览器再次请求服务器的时候，请求头包含此字段，后面跟着上一次获取资源的时间。（与上面Last-Modified相匹配）<br> 如果资源在这个时间之后更新过，则响应更新后的资源，返回200 OK ；<br> 如果资源在这个时间之后没有更新过，则响应一个header，返回304 Not Modified。<br> if-UnModified-Since（浏览器携带）： 与上面Last-Modified相匹配<br> 如果资源在这个字段值之后没有更新过，则请求服务器资源，返回 200 OK；<br> 如果资源在这个字段值之后更新了，则返回 412 Precondition failed（预处理错误）<br> Etag（服务器携带）: 服务器响应请求时，通过此字段告诉浏览器当前资源在服务器生成的唯一标识。服务器为每一份资源分配对应的ETag值，当资源更新时，ETag值也需要更新。<br> If-None-Match（浏览器携带）：如果If-None-Match与E-tag匹配，则代表内容未变，通知浏览器使用本地缓存。（与上面的Etag相匹配）<br> 如果同时带有E-tag和Last-Modified，服务端会优先检查E-tag</p></li></ul>',35)]))}const s=e(n,[["render",o],["__file","http.html.vue"]]),d=JSON.parse('{"path":"/interview/http.html","title":"浏览器面试题","lang":"zh-CN","frontmatter":{"title":"浏览器面试题","category":"面试题","tag":"HTTP的缓存机制","feed":false,"seo":false,"head":[["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"浏览器渲染原理","slug":"浏览器渲染原理","link":"#浏览器渲染原理","children":[]},{"level":2,"title":"浏览器输入url后经历的过程","slug":"浏览器输入url后经历的过程","link":"#浏览器输入url后经历的过程","children":[]},{"level":2,"title":"HTTPS如何加密","slug":"https如何加密","link":"#https如何加密","children":[]},{"level":2,"title":"HTTP的缓存机制","slug":"http的缓存机制","link":"#http的缓存机制","children":[]}],"git":{"createdTime":1662690818000,"updatedTime":1741748168000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":2},{"name":"君陌离","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":8.83,"words":2648},"filePathRelative":"interview/http.md","localizedDate":"2022年9月9日"}');export{s as comp,d as data};
