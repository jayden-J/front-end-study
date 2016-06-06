#高质量的 CSS
1. 怪异模式。
    - IE对于盒模型的解析：在标准模式中，网页元素的宽度是由 padding , border, width 三者的宽度相加决定的。在怪异模式中，width 本身就包括了 padding 和 border 的宽度。此外，标准模式下块级元素的经典居中的方法也无法在怪异模式中正常工作。
2. 如何组织 CSS
    - 可将网站的所有样式，按照职能分成三大类：base、common 和 page 
    - 使用 ` .blockCenter{margin-left:auto;margin-right:auto;}`来让块级元素居中的时候，直接使用它是不足以让块级元素居中的。还需要设定宽度（width）。
    - `.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden;} .clearfix{display:inline-block} *html clearfix{height:1%} .Clearfix{display:block;} `使用 .clearfix 类可以用于在父容器直接清除子元素浮动。通常情况下，为了让浮动元素的父容器能够根据浮动元素的高度而自适应高度，有三种做法：
        + 让父级元素同时浮动起来，例如：`<div class="fl"><div class="fl"></div></div>`; **这种方法会让父容器也浮动起来，影响父级元素后面元素的布局。**
        + 让浮动元素后面紧跟一个用于清除浮动的空标签，例如：`<div><div class="fl"></div><div class="cb"></div></div>`; **这种方法增加了一个空标签，会破坏语义化。**
        + 给父元素挂一个特殊的 class ，直接从父容器清除浮动元素的浮动：`<div class="clearfix"><div class="fl"></div></div>`; **无副作用，推荐使用。**
    - zoom 类,用来触发 IE 浏览器的 hasLayout 。
3. 模块化 CSS
    - 拆分模块的第一个技巧：模块与模块之间尽量不要包含相同的部分，如果有相同的部分，应将他们提取出来，拆分成一个独立的模块。
    - 模块应在保证数量尽可能少的原则下，做到尽可能简单，以提高重用性。
    - CSS 命名:驼峰命名法和划线命名法。驼峰命名法可以用来区分不同的单词，划线用来表明从属关系。在团队写作中为了避免冲突，可以在每个人的 CSS 命名前加上名字的前缀。
    - 多用组合，少用继承。
    - 上下margin 的处理：相邻的 margin-top 和 margin-bottom 会产生重合。所以最好统一使用 margin-top 或者 margin-bottom 。
4. 低权重原则——避免滥用子选择器
    - 当不同选择符的样式设置冲突时，会采用权重高的选择符设置的样式。权重的规则：HTML 标签的权重是 1，class 的权重是 10，id 的权重是 100，例如 p 的权重是 1，“ div em ”的权重是 1+1=2，“ strong .demo ”的权重是 10+1=11，“ #test .red ”的权重是 100+10=110。如果 CSS 选择符权重相同，那么样式会遵循就近原则，哪个选择符最后定义，就采用哪个选择符的样式。为了保证样式易被覆盖，提高可维护性，CSS 选择符需保证权重尽可能低。 
5. CSS sprite

    代码清单：

    ```
    <style type="text/css">
    .nav li{float: left;display:inline;margin-right: 10px;font-family: 黑体;}
    .nav a{float: left;width: 139px;height: 31px;line-height: 31px;font-size: 24px;color: #fff;text-decoration: none;text-align: center;background: url(img3.gif);}
    .nav a:hover{background-position: 0,-31px;}
    </style>
    <ul class="nav">
        <li><a href="#">联系我们</a></li>
        <li><a href="#">产品答疑</a></li>
        <li><a href="#">广告服务</a></li>
    </ul>
    ```

    - 使用图片翻转技术将多张图片合并为一张，然后使用 background-position 属性来展示我们需要的部分。
    - CSS sprite 能合并的只能是用于背景的图片，对于`<img src=""/>`设置的图片，是不能合并到CSS sprite 大图中的。
    - 对于横向和纵向都平铺的图片，也不能使用 CSS sprite；如果是横向平铺的，只能将所有横向平铺的图合并成一张大图，只能竖直排列，不能水平排列。如果是纵向平铺的，只能所有纵向平铺的图合成一张大图，只能水平排列，不能竖直排列。
    - 好处是减少 HTTP 请求数。

6. CSS 常见问题
    1. CSS 的编码风格：多行式和一行式。多行式便于阅读，一行式有利于提高开发速度。
    2. id 和 class 
        - 同一个页面，相同的 id 只能出现一次，不可重复，而 class 可以任意出现多次。
        - id 的 CSS 选择符权重为 100，而 class 为 10。
        - 原生 JS 提供 getElementbyId() 方法。
        - 一般来说，id 不能重用，使用 id 会限制网页扩展性，最好尽量使用 class，少用 id。
