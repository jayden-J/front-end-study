# 良好的编程习惯
#### 1. 在团队合作中如何避免JS冲突
- 添加必要的注释。
- 避免全局变量泛滥的方法：使用匿名函数把脚本抱起来，让变量的作用域控制在匿名函数内。(function(){}) ();
- 如果不同的匿名函数之间需要通信，可以定义一个{}对象类型的变量作为全局变量，同时可以使用命名空间来避免变量被覆盖。
```
     <div>
     xxxxxxxxxxxx
     </div>
     <script type="text/javascript">
        var GLOBAL={};
     </script>
     <script type="text/javascript">
        (function(){
            var a=123,b="hello,world";
            GLOBAL.A={};
            GLOBAL.A.str2=a;
            GLOBAL.A.str=b;
            ……
            })();
     </script>
    <div>
    xxxxxxxxxxxx
    </div>
    <script type="text/javascript">
        (function(){
            var a=GLOBAL.A.str2,b=GLOBAL.A.str; 
            var d="xxxxxxx";
            d=b+d+a;
            })();
    </script>
    <script type="text/javascript">
        (function(){
            var test=GLOBAL.B.str;
            alert(test);
        })();
    </script>
```
#### 2.  给程序一个统一的入口：window.onload和DOMReady
#### 3.  CSS放在页头，JavaScript放在页尾
#### 4. 文件压缩：JavaScript压缩工具：Packer、YUI Compressor。注意要保存压缩前的原始文件，以便阅读和维护。同时源文件的文件名和压缩后的文件名应该建立对应关系。