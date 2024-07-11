<template>
  <TodoHeader></TodoHeader>
  <TodoInput @add="addTodoItem"></TodoInput>
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
import { ref } from 'vue';
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

  export default {
    components: {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
    },
    setup() {
      //data
      const todoItems = ref([]);

      //methodss
      function fecthTodos() {
        const result = [];
        for (let i = 0; i < localStorage.length; i++){\
          const todoItem = localStorage.key(i);
          result.push(todoItem);
        }
        return result;
      }
      todoItems.value == fecthTodos;

      function addTodoItem(todo){
          todoItems.value.push(todo);
          localStorage.setItem(todo, todo);
      }

      function removeTodoItem(item, index){
        todoItems.splice(index, 1);
        localStorage.removeItem(item,item);
      }

      function removeTodoItem(item, index){
        return { todoItems, addTodoItem, }
    }   
  } 
</script>

<style scoped>

</style>