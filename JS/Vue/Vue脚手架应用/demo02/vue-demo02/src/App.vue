<template>
  <!-- 
    1. vue组件的全局样式与局部样式
      全局样式：
        .vue文件中style标签没有 scoped 属性 如 <style>...</style> 样式作用于所有组件
      局部样式：
        style标签添加了 scoped 属性 <style scoped>...</style> 样式只作用域当前组件
      原理：
        style 标签添加 scoped 后 组件的 标签会添加一个 data-v-hash值属性 样式选择器会添加一个属性选择器 [data-v-hash]

    2.组件的 data 必须是一个函数 保证每个组件实例，维护独立的一份数据对象

    3.组件通信：
      通过 props 父传子：
        1.在 App.vue 中 子组件 添加 v-bind 动态属性绑定
        2.在子组件 中 export default 中添加 props 接收 父组件传值
        3.渲染
      通过 $emit 子传父
        1.$emit('事件名称', '传入的值') 向父组件发送消息通知
        2.父组件中的子组件标签对消息进行监听 @事件名称=父组件处理子组件传入数据的方法
        3.在父组件方法中处理并使用子组件传入的值

    4.prop：
      定义：组件上注册的一些自定义属性
      作用：向子组件床底数据
      特点：可以传递任意数量prop 可以传递任意类型prop 可校验数据

      data 是自己的数据可以直接改
      prop 是外部的数据 不能直接改

      单项数据流：父组件的prop更新，会单向向下流动，影响到子组件
  -->

  <div id="app">
    <!-- 局部样式 -->
    <div class="scoped">
      <h3>scoped局部样式</h3>
      <MyBox01></MyBox01>
      <MyBox02></MyBox02>
    </div>
    <!-- 组件data -->
    <div class="data-is-a-func">
      <h3>组件的 data 是一个方法 实现数据独立管理</h3>
      <DataFunction></DataFunction>
      <DataFunction></DataFunction>
      <DataFunction></DataFunction>
    </div>
    <!-- 组件传值 -->
    <h3>组件传值</h3>
    <div class="props">
      我是App
      <span>MyTitle = {{ MyTitle }}</span>
      <MySon :title="MyTitle" @changeTitle="changeFn"></MySon>
    </div>
    <!-- prop -->
    <div class="prop">
      <h3>Prop</h3>
      <PropUserInfo
        :userName="userName"
        :age="age"
        :isSingle="isSingle"
        :car="car"
        :hobby="hobby"
        :count="count"
        @changeCount="changeCountFn"
      ></PropUserInfo>
    </div>
  </div>
</template>

<script>
import DataFunction from './components/DataFunction.vue';
import MyBox01 from './components/MyBox01.vue';
import MyBox02 from './components/MyBox02.vue';
import MySon from './components/MySon.vue';
import PropUserInfo from './components/PropUserInfo.vue';



export default {
  name: 'App',
  data () {
    return {
      MyTitle: 'lisi',
      userName: '张三',
      age: 18,
      isSingle: true,
      car: {
        brand: '迈巴赫'
      },
      hobby: ['唱', '跳', 'rap', '篮球'],
      count: 666
    }
  },
  components: {
    MyBox01,
    MyBox02,
    DataFunction,
    MySon,
    PropUserInfo,

  },
  methods: {
    changeFn (newTitle) {
      this.MyTitle = newTitle
    },
    changeCountFn (newCount) {
      this.count = newCount
    }
  }
}
</script>

<style>
.props {
  border: 2px solid black;
}
</style>
