<template>
  <div class="list-item">
    <label class="container">
      <input type="checkbox">
      <span class="checkmark"></span>
      <span class="text-content">{{ this.info.content }}</span>
    </label>
    <div class="delete" @click="deleteRow" >
      <svg-icon icon-class="trash-can" width="24px" height="24px"/>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'ListItem',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    ...mapActions('todo', ['deleteListInfo']),
    deleteRow () {
      this.deleteListInfo(this.info.id)
    }
  }
}
</script>
<style lang="scss" scoped>
.list-item {
  width: 100%;
  margin-bottom: 65.75px;
  justify-content: space-between;
  box-sizing: border-box;
  @include align-center;
  input {
    flex: 0 1 auto;
    width: 22px;
    height: 19.25px;
    border: 1px solid $gray;
  }
  .text-content {
    margin-left: 32px;
    text-align: left;
    flex: 1 1 auto;
    font-weight: 400;
    font-size: 18px;
  }
  img {
    flex: 0 1 auto;
  }




  .container {
    display: block;
    position: relative;
    padding-left: 26px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      &:checked ~ .checkmark {
        border-color: $theme-blue;
        &:after {
          display: block;
          border-color: $theme-blue;
        }
      }
      &:checked ~ .text-content {
        color: $theme-blue;
      }
    }
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 4.5px;
    left: 0;
    height: 19.25px;
    width: 22px;
    border: 2px solid $gray;
    border-radius: 3px;
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
    &:after {
      left: 6px;
      top: -2px;
      width: 8px;
      height: 15px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  .delete {
    cursor: pointer;
  }
}
</style>
