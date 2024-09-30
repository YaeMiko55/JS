<template>
  <div id="app">
    <Node_Header></Node_Header>
    <Node_Main @delAll="handleDelAll" @del="handleDel" @add="handleAdd" :list="list"></Node_Main>
  </div>
</template>

<script>
import Node_Header from './components/Node_Header.vue';
import Node_Main from './components/Node_Main.vue';


export default {
  name: 'App',
  components: {
    Node_Header,
    Node_Main,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        { id: 1, name: 'coding' },
        { id: 2, name: 'watching TV' },
        { id: 3, name: 'eating' },
      ],
    }
  },
  methods: {
    handleAdd(plpanName) {
      this.list.unshift({
        id: +new Date(),
        name: plpanName,
      })
    },
    handleDel(delId) {
      this.list = this.list.filter(item => item.id !== delId)
    },
    handleDelAll() {
      this.list = []
    }
  },
  watch: {
    list: {
      deep: true,
      handler(newValue) {
        localStorage.setItem('list', JSON.stringify(newValue))
      }
    }

  }
}
</script>

<style>
body {
  background-color: #333;
}
</style>
