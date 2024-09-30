<template>
  <div class="main">
    <!-- 添加任务 -->
    <div class="add">
      <input @keyup.enter="handleAdd" v-model="planName" autocomplete="off" placeholder="Add some plans..." type="text"
        name="add" id="add">
      <button @click="handleAdd">ADD</button>
    </div>
    <!-- 任务列表 -->
    <div class="list">
      <ul>
        <!-- 注意：在组件中使用v-for时有index时，必须要使用到index，不然会报错index未使用 -->
        <li v-for="(item, index) in list" :key="item.id">
          <span class="index">{{ index + 1 }}</span>
          <div class="plan">{{ item.name }}</div>
          <a @click="handleDel(item.id)" href="">Del</a>
        </li>
      </ul>
    </div>
    <!-- 合计 -->
    <Node_Footer @delAll="handleDelAll" :list="list"></Node_Footer>
  </div>

</template>

<script>
import Node_Footer from './Node_Footer.vue';

export default {
  components: {
    Node_Footer,
  },
  props: {
    list: Array
  },
  data() {
    return {
      planName: '',
    }
  },
  methods: {
    handleAdd() {
      // 非空判断
      if (this.planName.trim === '') {
        alert('input something...')
        return
      }
      // 将数据传递给父组件
      this.$emit('add', this.planName)
      // 清空input
      this.planName = ''
    },
    // 删除任务
    handleDel(id) {
      this.$emit('del', id)
    },
    // 删除所有任务
    handleDelAll() {
      this.$emit('delAll')
    }
  }
};
</script>

<style scoped>
.main {
  width: 400px;
  height: 500px;
  margin: 5px auto;
  padding: 20px;
  background-color: #666;
  box-shadow: 10px 5px 10px #222;
  position: relative;
}

input {
  background-color: #0000;
  border: none;
  border-bottom: 2px solid #aaa;
  padding: 5px;
  caret-color: #aaa;
  color: #aaa;
}

input[type="text"]:focus {
  outline: none;
}

input::placeholder {
  color: #888;
}

button {
  padding: 5px 10px;
  background-color: #444;
  border: 2px solid #aaa;
  border-radius: 5px;
  color: #aaa;
  margin-left: 32px;
}

ul {
  color: #aaa;
  list-style: none;
  margin-top: 20px;
  padding-left: 0;
}

li {
  margin-bottom: 10px;
}

ul:last-child {
  margin-bottom: 0;
}

span {
  background-color: #444;
  padding: 1px 8px;
  margin-right: 5px;
}

.plan {
  display: inline-block;
  width: 188px;
}

li a {
  text-align: right;
  color: #222;
}
</style>