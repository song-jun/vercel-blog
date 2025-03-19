import{_ as r,c as i,b as p,d as n,a as o,f as l,r as u,o as m,g as a}from"./app-Ciqs_Xc9.js";const g={};function d(c,t){const e=u("RouteLink");return m(),i("div",null,[t[8]||(t[8]=p('<p>函数是 Python 内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。</p><p>而函数式编程(请注意多了一个“式”字)——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。</p><p>我们首先要搞明白计算机(Computer)和计算(Compute)的概念。</p><p>在计算机的层次上，CPU 执行的是加减乘除的指令代码，以及各种条件判断和跳转指令，所以，汇编语言是最贴近计算机的语言。</p><p>而计算则指数学意义上的计算，越是抽象的计算，离计算机硬件越远。</p><p>对应到编程语言，就是越低级的语言，越贴近计算机，抽象程度低，执行效率高，比如 C 语言；越高级的语言，越贴近计算，抽象程度高，执行效率低，比如 Lisp 语言。</p><p>函数式编程就是一种抽象程度很高的编程范式，纯粹的函数式编程语言编写的函数没有变量，因此，任意一个函数，只要输入是确定的，输出就是确定的，这种纯函数我们称之为没有副作用。而允许使用变量的程序设计语言，由于函数内部的变量状态不确定，同样的输入，可能得到不同的输出，因此，这种函数是有副作用的。</p><p>函数式编程的一个特点就是，允许把函数本身作为参数传入另一个函数，还允许返回一个函数!</p><p>Python 对函数式编程提供部分支持。由于 Python 允许使用变量，因此，Python 不是纯函数式编程语言。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>',10)),n("ul",null,[n("li",null,[n("p",null,[o(e,{to:"/code/language/python/functional-programming/high-order-function/intro.html"},{default:l(()=>t[0]||(t[0]=[a("高阶函数介绍")])),_:1})])]),n("li",null,[n("p",null,[o(e,{to:"/code/language/python/functional-programming/high-order-function/map-and-reduce.html"},{default:l(()=>t[1]||(t[1]=[a("map / reduce")])),_:1})])]),n("li",null,[n("p",null,[o(e,{to:"/code/language/python/functional-programming/high-order-function/filter.html"},{default:l(()=>t[2]||(t[2]=[a("filter")])),_:1})])]),n("li",null,[n("p",null,[o(e,{to:"/code/language/python/functional-programming/high-order-function/sorted.html"},{default:l(()=>t[3]||(t[3]=[a("sorted")])),_:1})])]),n("li",null,[n("p",null,[o(e,{to:"/code/language/python/functional-programming/return-function.html"},{default:l(()=>t[4]||(t[4]=[a("返回函数")])),_:1})])]),n("li",null,[n("p",null,[o(e,{to:"/code/language/python/functional-programming/anonymous-function.html"},{default:l(()=>t[5]||(t[5]=[a("匿名函数")])),_:1})])]),n("li",null,[n("p",null,[o(e,{to:"/code/language/python/functional-programming/decorator.html"},{default:l(()=>t[6]||(t[6]=[a("装饰器")])),_:1})])]),n("li",null,[n("p",null,[o(e,{to:"/code/language/python/functional-programming/parital-function.html"},{default:l(()=>t[7]||(t[7]=[a("偏函数")])),_:1})])])])])}const h=r(g,[["render",d],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/code/language/python/functional-programming/","title":"函数式编程","lang":"zh-CN","frontmatter":{"title":"函数式编程","icon":"function","author":"廖雪峰","category":"Python","description":"函数是 Python 内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。 而函数式编程(请注意多了一个“式”字)——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。...","head":[["meta",{"property":"og:url","content":"https://www.songjun520.cn/code/language/python/functional-programming/"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"函数式编程"}],["meta",{"property":"og:description","content":"函数是 Python 内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。 而函数式编程(请注意多了一个“式”字)——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-04T09:52:31.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:modified_time","content":"2022-08-04T09:52:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数式编程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-08-04T09:52:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]}],"git":{"createdTime":1659606751000,"updatedTime":1659606751000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":1.88,"words":565},"filePathRelative":"code/language/python/functional-programming/README.md","localizedDate":"2022年8月4日","excerpt":"<p>函数是 Python 内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。</p>\\n<p>而函数式编程(请注意多了一个“式”字)——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。</p>\\n<p>我们首先要搞明白计算机(Computer)和计算(Compute)的概念。</p>\\n<p>在计算机的层次上，CPU 执行的是加减乘除的指令代码，以及各种条件判断和跳转指令，所以，汇编语言是最贴近计算机的语言。</p>","autoDesc":true}');export{h as comp,f as data};
