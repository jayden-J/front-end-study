#**数组**

1. JavaScript中对数组的定义

>   数组的标准定义是：一个储存元素的线性集合（collection），元素可以通过索引（通常是数字）来任意存取。

JavaScript中的数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性，索引可能是整数。但是，这些数字索引在内部被转换成字符串类型，这是因为JavaScript对象中的属性名必须是字符串。
JavaScript中的数组Array严格来说应该称作对象，因此他有许多属性和方法可以使用。

2. 创建数组
```
var numbers=[]; //获得长度为0的空数组,可以通过调用内建的length属性来验证。
print(numbers.length); //显示0

var numbers=[1,2,3,4,5]; //也可以在声明数组变量时，直接在[]内放入一组元素。
print(numbers.length); //显示5

var numbers=new Array();


```