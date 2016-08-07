/*
 * @Author: jayden
 * @Date:   2016-08-06 21:32:39
 * @Last Modified by:   jayden
 * @Last Modified time: 2016-08-07 09:57:52
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
      editedTodo: '',
      setMore: '',
      visit: 'all'
    },
    computed: {
      filteredTodos: function() {
        return list[this.visit](this.todos);
      },
      remaining: function() {
        return list.active(this.todos).length;
      },
      allDone: {
        get: function () {
          return this.remaining === 0;
        },
        set: function (value) {
          this.todos.forEach(function (todo) {
            todo.completed = value;
          });
        }
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
            completed: false,
            endTime: '',
            comment: ''
          });
          this.newTodo = '';
        }
      },
      removeTodo: function(todo) {
        this.todos.$remove(todo);
      },
      editTodo: function(todo) {
        this.beforeValue = todo.value;
        this.editedTodo = todo;
      },
      cancelEdit: function(todo) {
        this.editedTodo = null;
        todo.value = this.beforeValue;
      },
      doneEdit: function(todo) {
        if (!this.editedTodo) {
          return;
        }
        this.editedTodo = null;
        todo.value = todo.value.trim();
        todo.endTime=todo.endTime;
        if (!todo.value) {
          this.removeTdo(todo);
        }
      },
      removeCompleted: function(){
        this.todos = list.active(this.todos);
      },
      select: function(status) {
        this.visit = status;
      }

    },
    directives: {
      'todo-focus':function(value) {
        if (!value) {
          return;
        }
        var el=this.el;
        Vue.nextTick(function(){
          el.focus();
        });
      }
    }
  });
})();