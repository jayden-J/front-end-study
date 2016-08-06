/*
 * @Author: jayden
 * @Date:   2016-08-06 21:32:39
 * @Last Modified by:   jayden
 * @Last Modified time: 2016-08-06 23:27:41
 */


 var vm = new Vue({
  el: '.todoapp',
  data: {
   todos: [],
   newTodo: '',
   visit: 'all'
  },
  methods: {
   addTodo: function() {
    var newTodo = this.newTodo && this.newTodo.trim();

    if (!newTodo) {
     return;
    } else {
     this.todos.push({
      value: newTodo,
      completed:false
     });
     this.newTodo = '';
    }
   },
   removeTodo:function(todo){
    this.todos.$remove(todo);
   }
  }
 });
