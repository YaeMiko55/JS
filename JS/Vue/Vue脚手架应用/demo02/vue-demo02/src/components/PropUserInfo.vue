<template>
  <div class="card">
    <p>姓名：{{ userName }}</p>
    <p>年龄：{{ age }}</p>
    <p>是否单身：{{ isSingle ? '是' : '否' }}</p>
    <p>座驾：{{ car.brand }}</p>
    <p>爱好：{{ hobby.join('、') }}</p>
    <div class="cnt">
      <button @click="handleSub">-</button>
      <span>{{ count }}</span>
      <button @click="handleAdd">+</button>
    </div>
  </div>
</template>

<script>
export default {
  // 无需数据类型校验写法
  // props: ['userName', 'age', 'isSingle', 'car', 'hobby'],

  // 需要类型校验写法
  // props: {
  //   userName: String,
  //   age: Number,
  //   isSingle: Boolean,
  //   car: Object,
  //   hobby: Array,
  // },

  // 完整写法
  props: {
    userName: {
      type: String
    },
    age: {
      type: Number,  // 校验数据类型
      // required: true,  // 校验非空
      default: 0,  // 默认值
      validator (value) {  // 自定义校验
        if (value >= 0) {
          return true
        }
        else {
          console.error('传入的 prop age 的值必须大于等于0')
          return false
        }
      }
    },
    isSingle: {
      type: Boolean
    },
    car: {
      type: Object
    },
    hobby: {
      type: Array
    },
    count: {
      type: Number
    }
  },

  methods: {
    handleSub () {
      this.$emit('changeCount', this.count - 1)
    },
    handleAdd () {
      this.$emit('changeCount', this.count + 1)
    }
  }
};
</script>

<style scoped>
.card {
  padding: 10px;
  border: 2px solid black;
}
</style>