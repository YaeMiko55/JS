<template>
  <div class="base">
    我是Son
    <p>来自App：{{ title }}</p>
    <button @click="handleClick()">修改Title</button>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    handleClick () {
      this.$emit('changeTitle', 'title was changed')
    }
  }
};
</script>

<style scoped>
  .base {
    width: 250px;
    border: 2px solid black;
    margin: 10px;
  }
  p {
    margin: 10px;
    padding: 5px;
    border: 1px solid black;
  }
  button {
    margin: 10px;
  }
</style>