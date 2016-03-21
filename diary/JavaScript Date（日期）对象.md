#**2016.03.17-18学习小记之JavaScript Date（日期）对象**

##JavaScript Date（日期）对象

1. 定义日期
可以通过 new 关键词来定义 Date 对象。以下代码定义了名为 myDate 的 Date 对象：
    var myDate=new date()

2.操作日期
    var myDate=new Date()
    myDate.setFullYear(2016,08,10)
>以上代码为日期对象设置了一个特定的日期。

    var myDate=new Date()
    myDate.setDate(myDate.getDate()+10)
>将日期对象设置为 10 天后的日期

3. 比较日期
日期对象可用于比较两个日期。

4. DOM对象方法

常用的DOM对象方法列表

|      方法     |              描述              |
|---------------|--------------------------------|
| Date          | 返回当日的日期和时间           |
| getDate()     | 从Date对象返回一个月中的某一天 |
| getDay()      | 从Date对象返回一周中的某一天   |
| getMonth()    | 从Date对象返回月份             |
| getFullyear() | 返回某一年                     |
| getHours()    | 返回Date对象的小时             |
| getMinutes()  | 返回Date对象的分钟             |
| getSeconds()  | 返回Date对象的秒数             |
| getTime()     | 返回1970年1月1日至今的毫秒数                               |

完整的DOM对象方法手册请参考[w3school](http://www.w3school.com.cn/jsref/jsref_obj_date.asp)