<!-- 
  全局组件注册
    1.写好组件
    2.在main.js中导入组件文件
      import ZsBtn from './components/ZsBtn.vue'
    3.在main.js中进行全局注册
      Vue.component(组件名, 组件对象)
      Vue.component('ZsBtn', ZsBtn)
-->

<template>
  <button @click="fn" class="zs-btn">通用组件</button>
</template>

<script>
export default {

};
</script>

<style>
.zs-btn {
  box-sizing: content-box;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  background-color: #339c52;
  border-radius: 5px;
  color: white;
  border: none;
  vertical-align: middle;
  cursor: pointer;
}
.zs-btn:hover {
  background-color: #40c066;
}
</style>