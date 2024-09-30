<template>
  <div class="ft">
    <span class="total">Total: {{ list.length }}</span>
    <span class="delAll">
      <a @click="handleDelAll" href="">
        Del All
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods: {
    handleDelAll () {
      this.$emit('delAll')
    }
  }
};
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .ft {
    width: 260px;
    margin: 20px 0 10px;
    padding: 5px 0 0;
    position: absolute;
    bottom: 0;
    border-top: 2px solid #aaaa;
    color: #aaa;

    display: flex;
    justify-content: space-between;
  }

  a {
    color: #222;
  }
</style>