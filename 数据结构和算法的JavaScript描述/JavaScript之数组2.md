#**存取函数&可变函数**

####1. 查找元素
```
<!-- indexOf()函数是最常用的存取函数之一，用来查找传进来的参数在目标数组中是否存在，如果目标数组包含该参数，就返回该元素在数组中的索引，如果不包含，就返回-1 -->
    var names=["David","Cynthia","Raymond","Clayton","jennifer"];
    putstr("Enter a name to seach for : ");
    var name=readline();
    var position=names.indexOf(name);
    if(position>=0){ print("Found "+name+"at position "+position); }
    else{ print(name +" not found in array."); }

    执行程序，并输入Cynthia，输出为：Found Cynthia at position 1
    <!-- 如果数组中包含多个相同的元素，indexOf()函数总是返回第一个与参数相同的元素的索引。有另一个类似的函数：lastIndexOf()，该函数返回相同元素中的最后一个元素的索引。 -->
```
####2. 数组的字符串表示
```
<!-- 用join() 和toString()可以将数组转化为字符串-->
    var names=["David","Cynthia","Raymond","Clayton","Mike","jennifer"];
    var namestr=names.join();
    print(namestr); //David,Cynthia,Raymond,Clayton,Mike,jennifer
    namestr=names.toString();
    print(namestr); //David,Cynthia,Raymond,Clayton,Mike,jennifer
```
####3. 由已有的数组创建新数组
```
<!-- concat()和splice()方法允许通过已有数组创建新数组-->
<!-- concat方法可以合并多个数组创建一个新数组 -->
    var cisDept=[1,2,3,4,5,6];
    var dmpDept=[7,8,9];
    var itDiv=cisDept.concat(dmpDept);
    print(itDiv);
    itDiv=dmpDept.concat(cisDept);
    print(itDiv);

    输出为：
    1,2,3,4,5,6,7,8,9
    7,8,9,1,2,3,4,5,6
```
####4. 为数组添加元素
####5. 从数组中删除元素
####6. 从数组中间位置添加和删除元素
####7. 为数组排序
####8. 