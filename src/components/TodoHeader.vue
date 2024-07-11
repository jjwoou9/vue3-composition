<template>
  <header>
    <h1>{{ appTitle  }}</h1>
    <h4>{{ newTitle }}</h4>
  </header>
</template>

<script>
import { computed } from 'vue';

export default{
  props: ['appTitle'],
  setup(props) {
    const newTitle = computed(() => {
      return props.appTitle + '!!';
    })

    return { newTitle };
  }
}
</script>

<style scoped>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
