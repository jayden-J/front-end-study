// admin
function getData(url, type, id) {
        $.getJSON('test.php?type=' + type, { param1: 'value1' }, function(json, textStatus) {
            var data = data.data.content;
            return data;
        });

}
function getDataById(type, id){
 $.getJSON('test.php?type=' + type + '&id=' + id, { param1: 'value1' }, function(date) {
        var data = data.data.content;
        return data;
    });
}
// front
function changeColor(class_name){
 var label=document.getElementsByClassName(class_name);
 for (var i = 0; i < label.length; i++) {
 (function(_i) {
  label[_i].onclick=function(){
   for (var j = 0; j < label.length; j++) {
   label[j].style="color:#ccc";
   label[_i].style="color:red";
  }
 };
 })(i);
}
}