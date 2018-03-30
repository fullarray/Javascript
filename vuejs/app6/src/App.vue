<template>
  <div id="app">
    <h1 class="ui dividing centered header">Herrj Tasks List App</h1>
    <div class='ui three column centered grid'>
      <div class='column'>
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:create-todo="createTodo"></create-todo>
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [{
        title: 'Make component for app #1',
        project: 'Project #156',
        done: false,
      }, {
        title: 'Close bug #27374',
        project: 'Project #140',
        done: true,
      }, {
        title: 'Gather requirements app #234',
        project: 'Project #94',
        done: false,
      }, {
        title: 'Create test case #34',
        project: 'Project #85',
        done: false,
      }],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
  },
};
</script>
