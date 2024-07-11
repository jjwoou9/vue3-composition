import { ref } from "vue";

function useTodo(){
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
 
      function addTodoItem(todo){
        console.log('addTodoItem ', todo);
        todoItems.value.push(todo);
        localStorage.setItem(todo, todo);
      }

      function removeTodoItem(item, index){
        todoItems.value.splice(index, 1);
        localStorage.removeItem(item,item);
      }
    
      return { todoItems, addTodoItem, fecthTodos, removeTodoItem }
}
export { useTodo }