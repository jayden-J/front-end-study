## <a name='list'>目录</a>

  1. [HTML部分](#html)
  1. [CSS部分](#css)
  1. [JavaScript部分](#js)


## <a name="html">HTML</a>
- Doctype 的作用？严格模式与混杂模式如何区分？它们有何意义？

```
1. <!DOCTYPE> 不是 HTML 标签，它位于 HTML 文档的第一行，用来告知浏览器的解析器用什么文档标准来解析这个文档，DOCTYPE 缺少或错误会导致文档以兼容模式显示。注意：DOCTYPE 没有结束标签，声明对大小写不敏感。
2. 标准模式的排版和 JS 模式是按照当前浏览器支持的最高标准运行的，在兼容模式中，页面会以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防站点无法正常工作。
```

- HTML5 为什么只需要写 <!DOCTYPE>

```
HTML5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要声明 doctype 来规范浏览器的行为。
```

- 行内元素有哪些？块级元素有哪些？空（void）元素有哪些？

```
行内元素：a b span img input select strong
块级元素：div p ul ol li dl dt dd h1 h2 h3 h4…
常见空元素：<br> <hr> <img> <input> <link> <meta>
鲜为人知的是：<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>
```

- 页面导入样式时，使用 link 和 @import 有什么区别？

```
1. link 除了可以加载 CSS 外，还可以用来定义指向 RSS 的超连接，而@import是CSS提供的，只能用于加载CSS;
2. 页面被加载的时候，link 会同时被加载，而 @import 引用的 CSS 会等到页面被加载完再加载;
3. import 只在IE5以上才能被识别，而 link 是 XHTML 标签，无兼容问题。
```

- 说说你对浏览器内核的理解

```
浏览器内核包括渲染引擎和 JS 引擎。
渲染引擎负责取得网页的内容（HTML,图像等），以及 整理讯息（加入 CSS ），以及计算网页的显示方式，然后输出到显示器或者打印机。浏览器的内核不同对网页的语法解释有所不同，所以渲染的效果也不一样。
JS 引擎解析和执行 JavaScript 来实现网页的动态效果。
```

- 常见的浏览器内核有哪些？

```
Webkit：chrome，Safari 等,(chrome:Blink,Webkit 的分支)；
Trident：IE,360,搜狗浏览器等；
Gecko：Firefox等；
Presto内核：Opera7及以上。(Opera 内核原为：Presto，现为：Blink;)
```
- HTML5 有哪些新特性、移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
```
HTML5 新特性：
1.HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
2. 用于绘画的 canvas 元素
3. 用于媒介回放的 video 和 audio 元素
4. 对本地离线存储的更好的支持
5. 新的特殊内容元素，比如 article、footer、header、nav、section
6. 新的表单控件，比如 calendar、date、time、email、url、search

移除的元素：
纯表现的元素：basefont，big，center，font, s，strike，tt，u;
对可用性产生负面影响的元素：frame，frameset，noframes；

支持HTML5新标签：
IE8/IE7/IE6支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式（当然最好的方式是直接使用成熟的框架、使用最多的是 html5shiv 框架）：
<!--[if lt IE 9]> 
<script> src="http://html5shiv.googlecode.com/svn/trunk/html5.js"</script> 
<![endif]--> 

如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素
```
## <a name="css">CSS</a>
- 标准的 CSS 盒子模型？与低版本的盒子模型有什么不同？

```
1. 盒模型有两种：IE 盒子模型，W3C 盒子模型（标准盒子模型）。
2. CSS 盒模型包括：margin（外边距），border（边框），padding（内边距），内容(content)。
3. IE5.X 和 6 在怪异模式中使用自己的非标准模型。这些浏览器的 width  属性不是内容的宽度，而是内容、内边距和边框的宽度的总和
```

- CSS 选择符有哪些？哪些属性可以继承？

```
1. 元素选择器（div, h1, p）
2. id 选择器（#id）
3. 类选择器（.class）
4. 属性选择器（*[name="title"]）(子串匹配属性选择器:[abc^="def"])
5. 相邻兄弟选择器（h1 + p）
6. 子选择器（ul > li）
7. 后代选择器（li a）
8. 伪类选择器（a:hover, li:nth-child）
9. 通配符选择器（ * ）

可以继承的样式： font-family font-size color, UL LI DL DD DT;
不可继承的样式： margin border padding  width height;
```

- CSS3 新增的伪类有哪些？

```
新的伪类：
:target， :enabled 和 :disabled， 
:checked， :indeterminate， :root， 
:nth-child 和 :nth-last-child， 
:nth-of-type 和 :nth-last-of-type，  
:first-of-type 和 :last-of-type，
:last-child :only-child 和 :only-of-type， 
:empty， 和 :not。
```

- CSS 优先级算法

```
1. 优先级就是一个 应用于指定的CSS声明的 权重，它由 匹配的选择器中的 每一种选择器类型的 数值 决定。而当优先级与多个CSS声明中任意一个声明的优先级相等的时候，CSS中最后的那个声明将会被应用到元素上。当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的CSS规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。
2. 优先级就近原则，同权重情况下样式定义最近者为准;载入样式以最后载入的定位为准;
   优先级为: !important >  id > class > tag
3. 注意：当在一个样式声明上使用 !important 规则时，该样式声明会覆盖CSS中任何其他的声明,。尽管技术上 !important 与优先级毫无关系，但是它们之间直接相互影响。
   使用 !important 是一个坏习惯，应该尽量避免，因为这打断了样式表中的固有的级联规则，使得调试找bug变得更加困难了。当两条相互冲突的带有!important 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用。
```
## <a name="js">JavaScript</a>
- JavaScript 的基本数据类型

```
1. 字符串（string）
2. 数字（Number）
3. 布尔值（Boolean）
4. Undefind
5. Null
```

- js有哪些内置对象？
```
Object 是 JavaScript 中所有对象的父对象。
数据封装类对象：Object、Array、Boolean、Number 和 String。
其他对象：Function、Arguments、Math、Date、RegExp、Error 。
```
- JavaScript 的基本规范

```
简单地列出一些：
1. 不要在同一行申明多个变量
2. 使用===/!==来比较 true/false
3. 使用对象字面量
4. For 循环必须使用大括号
5. If 语句必须使用大括号
6. for-in 循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染。
7. 不要使用全局函数
8. 函数不应该有时候有返回值，有时候没有返回值。
9. Switch 语句必须带有 default 分支
```
可参考百度 FEX 的 [JavaScript 编码规范](https://github.com/fex-team/styleguide)

- JavaScript 原型，原型链 ? 有什么特点？

```
每个对象都有一个 prototype （原型） 属性，这个属性是一个指针，指向这个对象。这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。（详见《JavaScript 高级程序设计》第六章第二节）。
如果让原型对象等于另一个类型的实例，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针，加入另一个原型又是另一个类型的实例，如此层层递进，就构成了原型链。

特点：
JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。
```
- JavaScript 有几种类型的值？（堆：原始数据类型和 栈：引用数据类型），你能画一下他们的内存图吗？
```
栈：原始数据类型（Undefined，Null，Boolean，Number、String） 
堆：引用数据类型（对象、数组和函数）

在 ECMAScript 中，变量可以存在两种类型的值，即原始值和引用值。
原始值:存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。
引用值:存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存处。
为变量赋值时，ECMAScript 的解释程序必须判断该值是原始类型，还是引用类型。要实现这一点，解释程序则需尝试判断该值是否为 ECMAScript 的原始类型之一，即 Undefined、Null、Boolean、Number 和 String 型。由于这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 - 栈中。这样存储便于迅速查寻变量的值。
如果一个值是引用类型的，那么它的存储空间将从堆中分配。由于引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。
```
![内存图](./ct_js_value.gif)