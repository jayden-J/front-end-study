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

<!-- splice()方法从现有数组里截取一个新数组，该方法第一个参数是截取的起始索引，第二个参数是截取的长度 -->
    var itDiv=["David","Cynthia","Raymond","Clayton","Mike","jennifer"];
    var dmpDept=itDiv.splice(1,3);
    var cisDept=itDiv;
    print(dmpDept); //Cynthia,Raymond,Clayton
    print(cisDept); //David,Mike,Jennifer
```
####4. 为数组添加元素
```
<!-- 使用push()和unshift()方法可以为数组添加元素。 -->
<!-- push() 方法可以将一个元素添加到数组的末尾-->
    var nums=[1,2,3,4,5];
    print(nums);//1,2,3,4,5
    nums.push(6);
    print(nums);//1,2,3,4,5,6

<!-- unshift()方法可以将元素添加在数组的开头-->
    var nums=[2,3,4,5];
    print(nums);//2,3,4,5
    var newnum=1;
    nums.unshift(newnum);
    print(nums);//1,2,3,4,5
    nums=[3,4,5];
    nums.unshift(newnum,1,2);
    print(nums);//1,2,3,4,5
```
####5. 从数组中删除元素
```
<!-- 使用pop()方法可以删除数组末尾的元素 -->
    var nums=[1,2,3,4,5,9];
    nums.pop();
    print(nums);//1,2,3,4,5
<!-- 使用shift()方法可以删除数组的第一个元素 -->
    var nums=[9,2,3,4,5];
    nums.shift();
    print(nums);//2,3,4,5
```
####6. 从数组中间位置添加和删除元素
```
<!-- 使用splice()方法可以为数组添加或删除元素，需要提供的参数有：起始索引，需要删除的元素个数，想要添加进数组的元素 -->
    var nums=[1,2,3,7,8,9];
    nums.splice(3,0,4,5,6);
    print(nums);//1,2,3,4,5,6,7,8,9
    nums.splice(3,2);
    print(nums);//1,2,3,6,7,8,9
```
####7. 为数组排序
```
<!-- 使用reverse()方法可以将数组中元素的顺序进行翻转 -->
<!-- 使用sort()方法也可以对数组进行排序。-->
```