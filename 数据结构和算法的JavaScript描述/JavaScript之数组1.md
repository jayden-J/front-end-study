#**数组的使用**

####1. JavaScript中对数组的定义

>   数组的标准定义是：一个储存元素的线性集合（collection），元素可以通过索引（通常是数字）来任意存取。

JavaScript中的数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性，索引可能是整数。但是，这些数字索引在内部被转换成字符串类型，这是因为JavaScript对象中的属性名必须是字符串。
JavaScript中的数组Array严格来说应该称作对象，因此他有许多属性和方法可以使用。

####2. 创建数组
```
var numbers=[]; //获得长度为0的空数组,可以通过调用内建的length属性来验证。
print(numbers.length); //显示0

var numbers=[1,2,3,4,5]; //也可以在声明数组变量时，直接在[]内放入一组元素。
print(numbers.length); //显示5

var numbers=new Array(); //还可以调用array的构造函数来创建数组。
print(numbers.length); //显示0

var numbers=new Array(1,2,3,4,5);
print(numbers.length); //显示5

var numbers=new Array(10); //在调用Array的构造函数时，可以只传入一个参数用来指定数组的长度
print(numbers.length); //显示10

var objects=[1,"joe",ture,null]; //在JavaScript中数组中的元素不必是同一种数据类型
```

####3. 读写数组
在一条赋值语句中，可以使用[]操作符将数据赋给数组，也可以用[]操作符读取数组中的元素。
```
var nums=[];
for (var i=0;i<100;i++){nums[i]=i+1;}

var numbers=[1,2,3,4,5];
var sum=numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4];
print(sum); //显示15

<!-- 如果要依次读取数组中的所有元素，使用for循环更简单 -->
var numbers=[1,2,3,4,5,8,13,21];
var sum=0;
for(var i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
print(sum); //显示53
```

注意：JavaScript中的数组是对象，数组的长度可以任意增长，超过其创建时指定的长度。length属性反映的是当前数组中元素的个数，使用它可以保证循环遍历了数组中的所有元素。

####4. 由字符串生成数组

调用字符串对象的split()方法也可以生成数组。
```
var sentence="hello word i love you";
var words =sentence.split(" ");
for (var i=0;i<words.length;i++){print("word "+i+":"+words[i]);}
```
该程序输出为：
word 0：hello
word 1：word
word 2：i
word 3：love
word 4：you

####5. 对数组的整体性操作
```
<!-- 将一个数组赋值给另一个数组 -->
```
