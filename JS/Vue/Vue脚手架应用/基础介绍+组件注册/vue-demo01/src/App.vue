<template>
  <div class="App">
    <!-- <div class="box" @click="fn"></div> -->

    <!-- 组件使用 -->
    <!-- 头部组件 -->
    <ZsHeader></ZsHeader>
    <!-- 主体组件 -->
    <ZsMain></ZsMain>
    <!-- 底部组件 -->
    <ZsFooter></ZsFooter>
    <!-- 若ZsFooter + tab(两次) 出不来 <ZsFooter></ZsFooter> -->
    <!-- 设置中搜索 trigger in tab 勾选 Emmet: Trigger Expansion On Tab-->
  </div>


</template>

<script>
// 组件导入
import ZsFooter from './components/ZsFooter.vue';
import ZsHeader from './components/ZsHeader.vue';
import ZsMain from './components/ZsMain.vue';

// 导出的是当前组件的配置项
// 里面可提供 data methods watch computed 生命周期钩子
export default {
  // created () {
  //   console.log('I\'m created.')

  // },
  // methods: {
  //   fn () {
  //     alert('Hello')
  //   }
  // }

  // 组件注册
  components: {
    // 组件名：组件对象
    ZsHeader: ZsHeader,
    // 同名可省略  
    ZsFooter,
    ZsMain
  }
}
</script>

<style lang="less">
/* 
  让style支持less
  1.给tsyle加上 lang="less"
  2.安装依赖包 less less-loader
*/
.App {
  padding: 10px;
  width: 400px;
  height: 700px;
  background-color: pink;

  .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
}
</style>
