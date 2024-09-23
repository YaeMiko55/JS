// 文件核心作用：导入App.vue 基于App.vue创建解构渲染index.html

// 1.导入Vue核心包
import Vue from 'vue'


// 2.导入App.vue根组件
import App from './App.vue'
// 导入组件
import ZsBtn from './components/ZsBtn.vue'

// 进行全局注册
// Vue.component(组件名, 组件对象)
Vue.component('ZsBtn', ZsBtn)

// 提示：当前处于什么环境（生产环境 / 开发环境）
Vue.config.productionTip = false

// 3.Vue实例化，提供render方法 => 基于App.vue创建构建渲染indeex.html
new Vue({
  render: h => h(App),  // 基于App创建元素结构
}).$mount('#app')  // .$mount('#app') 的作用与 el: '#app' 作用一致 用于指定 Vue 管理的容器
