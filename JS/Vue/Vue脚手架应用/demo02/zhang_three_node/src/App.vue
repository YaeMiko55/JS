<template>
  <div id="app">
    <Node_Header></Node_Header>
    <Node_Main></Node_Main>
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
  }
}
</script>

<style>
  body {
    background-color: #333;
  }
</style>
