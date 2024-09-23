<!--  
  组件局部注册：只能在注册的组件使用
    1.在component中创建vue文件，如此文件
    2.在App.vue中导入
      import ZsHeader from './components/ZsHeader.vue';
    3.在App.vue的 export default 添加配置项 components
    4.在 components 中添加 组件名：组件对象 => ZsHeader: ZsHeader
    5.在App.vue中的 template添加组件 => <ZsHeader></ZsHeader>
-->

<template>
  <div class="zs-header">
    我是zs-header
    <ZsBtn></ZsBtn>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .zs-header {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 30px;
    color: white;
    background-color: rgb(129, 201, 239);
    margin-bottom: 10px;
  }
</style>