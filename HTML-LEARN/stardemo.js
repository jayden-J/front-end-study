      // 得到canvas 并得到绘制上下文
            var canvasEI=document.getElementById('vanvas');
            var ctx=canvasEI.getContext("2d");
            var mousePos=[0,0];
    // 声明两个变量用来存储“星星”和边
    var nodes=[];
    var edges=[];
    // 让画布在窗口大小变化的时候重新绘制，并且调整自身分辨率
    window.onresize=function(){
        canvasEI.width=document.body.clientWidth;
        canvasEI.height=canvasEI.clientHeight;
        if (nodes.length==0) {
            constructNodes();
        }
        render();
    };
    window.onresize();

