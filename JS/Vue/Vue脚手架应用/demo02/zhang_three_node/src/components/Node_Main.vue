<template>
  <div class="main">
    <!-- 添加任务栏 -->
    <div class="add">
      <input placeholder="Add some plans..." type="text" name="add" id="add">
      <button>ADD</button>
    </div>
    <!-- 任务列表 -->
    <div class="list">
      <ul>
        <li>
          <div class="plan">coding...</div>
          <a href="#">Del</a>
        </li>
        <li>
          <div class="plan">coding...</div>
          <a href="#">Del</a>
        </li>
        <li>
          <div class="plan">coding...</div>
          <a href="#">Del</a>
        </li>
      </ul>
    </div>
    <!-- 合计 -->
    <Node_Footer></Node_Footer>
  </div>
   
</template>

<script>
import Node_Footer from './Node_Footer.vue';

export default {
  components: {
    Node_Footer,
  }
};
</script>

<style scoped>
.main {
  width: 400px;
  height: 500px;
  margin: 5px auto;
  background-color: #666;
  box-shadow: 10px 5px 10px #222;
  position: relative;
}

input {
  background-color: #0000;
  border: none;
  border-bottom: 2px solid #aaa;
  margin: 20px;
  padding: 5px;

  caret-color: #aaa;
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
}

ul {
  color: #aaa;
}

li {
  margin-bottom: 10px;
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