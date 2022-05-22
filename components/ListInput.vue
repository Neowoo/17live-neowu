<template>
  <div class="list-input">
    <input type="text" placeholder="請輸入要做的事情" v-model="todo" @keypress="sendDataByKey">
    <button @click="sendData">
      <svg-icon icon-class="add" width="21px" height="18.38px"/>
    </button>
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
    justify-content: space-between;
    @include align-center;
    input {
      flex: 1 0 auto;
      border: 1px solid $gray;
      height: 34px;
      box-sizing: border-box;
      padding-left: 14px;
      border-radius: 4px;
      &::placeholder {
        color: $deep-gray;
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
      justify-content: center;
      background-color: $theme-blue;
      cursor: pointer;
      @include align-center;
    }
  }
</style>
