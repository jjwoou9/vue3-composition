<template>
  <section>
    <ul>
      <li v-for="(item, index) in todoItems" :key="index">
        <span>{{ item }}</span>
        <button @click="removeTodo(item, index)"> 삭제 </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { watch } from 'vue';

export default {
  props: ['todoItems'],
  setup(props, context) {
      function removeTodo(item, index){
        context.emit('remove', item, index)
      }

      watch(props.todoItems, (newValue) => {
        console.log(newValue);
        //watch는 지양
      })

    return { removeTodo };
  },
}
</script>

<style scoped>
</style>
