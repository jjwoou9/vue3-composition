<template>
  <div>
    <p>{{  message  }}</p>
    <button @click="changeMessage">change</button>

  </div>
</template>

<script>
import { ref } from 'vue';

  export default {
    setup(){
      const message = ref('hello');

    }
    
    // data() {
    //   return {
    //     message: 'hello'
    //   }
    // },
    // methods: {
    //   changeMessage() {
    //     this.message = 'hi'
    //   }
    // }
  }
</script>

<style scoped>

</style>