/*
 * @Author: jayden
 * @Date:   2016-08-06 21:32:39
 * @Last Modified by:   jayden
 * @Last Modified time: 2016-08-07 00:22:29
 */


(function() {
 var list = {
  all: function(todos) {
   return todos;
  },
  active: function(todos) {
   return todos.filter(function(todo) {
    return !todo.completed;
   });
  },
  completed: function(todos) {
   return todos.filter(function(todo) {
    return todo.completed;
   });
  }
 };

 var vm = new Vue({
  el: '.todoapp',
  data: {
   todos: [],
   newTodo: '',
   visit: 'all'
  },
  computed:{
   filteredTodos: function () {
    return list[this.visit](this.todos);
   },
   remaining: function () {
    return list.active(this.todos).length;
   }
  },
  methods: {
   addTodo: function() {
    var newTodo = this.newTodo && this.newTodo.trim();

    if (!newTodo) {
     return;
    } else {
     this.todos.push({
      value: newTodo,
      completed: false
     });
     this.newTodo = '';
    }
   },
   removeTodo: function(todo) {
    this.todos.$remove(todo);
   },
   select: function(status) {
    this.visit = status;
   }
  }
 });
})();