<template>
  <div class="list-board">
    <div class="title">Todo List</div>
    <div class="item-container">
      <ListItem v-for="info in listInfo" :key="info.id" :info="info"/>
    </div>
    <ListInput/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ListBoard',
  computed: {
    ...mapState('todo', ['listInfo'])
  }
}
</script>
<style lang="scss" scoped>
  .list-board {
    width: 800px;
    position: absolute;
    top: 71px;
    left: 50%;
    transform: translatex(-50%);
    background-color: #FFF;
    border: #C7C3C6;
    padding: 15px 15px 10px;
    box-sizing: border-box;
    .title {
      margin-left: 18px;
      font-size: 36px;
      font-weight: 700;
      line-height: 42px;
      text-align: left;
    }
    .item-container {
      box-sizing: border-box;
      padding-left: 40px;
      padding-right: 32px;
      margin-top: 43px;
    }
  }
</style>
