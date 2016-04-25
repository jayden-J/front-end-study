# JavaScript分层概念与JavaScript库
1. JavaScript分层的必要性：让代码组织条理更加清晰，减少冗余，提高代码重用率。
    分层经验：
    1. base层
        - 封装不同浏览器下JavaScript的差异，提供统一的接口。
        - 扩展JavaScript语言底层提供的接口，让它提供更多易用的接口。
        - 给common层和page层提供接口。
    2. common层
        - 提供可供复用的组件，给page层提供组件。
    3. page层
        - 完成页面内的功能需求
2. 典型的JavaScript兼容问题。
    1.透明度：IE下透明度通过滤镜实现，Firefox下透明度通过CSS的opacity属性实现。可使用如下代码来解决。
    ```
    <style type="text/css">
    #test1{background: blue;height: 100px;}
    #test2{background:green;height:100px;}
    </style>
    <div id="test1"></div>
    <div id="test2"></div>
    <script type="text/javascript">
        function setOpacity(node,level){
            node=typeof node=="string"?document.getElementById(node):node;
            if(document.all){node.style.filter='alpha(opacity=' +level+ ')';}
            else{node.style.opacity=level/100;}
        }
        setOpacity("test1",20);
        setOpacity("test2",80);
    </script>
    ```