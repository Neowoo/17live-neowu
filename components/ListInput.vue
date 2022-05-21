<template>
  <div class="list-input">
    <input type="text" placeholder="請輸入要做的事情" v-model="todo" @keyup="sendDataByKey">
    <button @click="sendData"><img src="~/static/images/svg/add.svg" width="21" height="18.38" alt=""></button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    ...mapActions('todo', ['addListInfo']),
    sendData () {
      this.addListInfo(this.todo)
      this.todo = '' // 清空
    },
    sendDataByKey (e) {
      // 非Enter禁止觸發
      if (e.keyCode !== 13) return
      this.sendData()
    }
  }
}
</script>
<style lang="scss" scoped>
  .list-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      flex: 1 0 auto;
      border: 1px solid #C7C3C6;
      height: 34px;
      box-sizing: border-box;
      padding-left: 14px;
      border-radius: 4px;
      &::placeholder {
        color: #C1C1C1;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      margin-left: 25px;
      width: 35px;
      height: 34px;
      border: none;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: #8DC8FF;
      cursor: pointer;
    }
  }
</style>
