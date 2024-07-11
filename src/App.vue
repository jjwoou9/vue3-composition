<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <TodoInput @add="addTodoItem"></TodoInput>
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
  <TodoFooter></TodoFooter>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';
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
    data(){
      return {
        title: '할일 앱'
      }
    },
    setup() {
      //data
      const todoItems = ref([]);

      //methodss
      function fecthTodos() {
        const result = [];
        for (let i = 0; i < localStorage.length; i++){
          const todoItem = localStorage.key(i);
          result.push(todoItem);
        }
        return result;
      }
      
      console.log('setup called');
      //화면에 불려지기 전 =라이프 사이클 API 적용된 구간
      onBeforeMount(() => {        
        console.log('onBeforeMount called');
        todoItems.value == fecthTodos;
      })

      onMounted(() => {
        console.log('onMounted called');
      })

      function addTodoItem(todo){
        todoItems.value.push(todo);
        localStorage.setItem(todo, todo);
      }

      function removeTodoItem(item, index){
        todoItems.value.splice(index, 1);
        localStorage.removeItem(item,item);
      }

      return { todoItems, addTodoItem, removeTodoItem }
    }   
  } 
</script>

<style scoped>

</style>