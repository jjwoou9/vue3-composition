<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <TodoInput @add="addTodoItem"></TodoInput>
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
  <TodoFooter></TodoFooter>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import { useTodo } from './hooks/useTodo.js'
import { onMounted, onBeforeMount } from 'vue';

  export default {
    components: {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
    },
    data(){
      return {
        title: '할일 앱'
      }
    },
    setup() {
      const { todoItems, addTodoItem, fecthTodos, removeTodoItem }
      = useTodo();

      //화면에 불려지기 전 =라이프 사이클 API 적용된 구간
      onBeforeMount (() => {        
        console.log('onBeforeMount called');
        todoItems.value = fecthTodos();
      })

      onMounted(() => {
        console.log('onMounted called');
      })


      return { todoItems, addTodoItem, onBeforeMount, onMounted, removeTodoItem }
    }   
  } 
</script>

<style scoped>

</style>