<template>
  <div class="base">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 50
    }
  }
};
</script>

<style scoped>
  .base {
    margin: 30px;
  }
  button {
    vertical-align: middle;
  }
  span {
    height: 18px;
    text-align: 18px;
    font-size: 18px;
  }
</style>