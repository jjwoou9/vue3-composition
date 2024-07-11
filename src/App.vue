<template>
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <TodoList :todoItems="todoItems"></TodoList>
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

      return { todoItems }
    }   
  } 
</script>

<style scoped>

</style>