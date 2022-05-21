<template>
  <div class="header">
    <div class="menu">
      <img src="~/static/images/svg/burger.svg" width="32" height="24.5" alt="">
      HandsUP
    </div>
    <img class="logout" src="~/static/images/svg/logout.svg" width="32" height="24.5" alt="">
<!--    <svg-icon name="burger" />-->
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  .header {
    z-index: 1;
    position: fixed;
    top: 0;
    background-color: #8DC8FF;
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 11px;
    .menu {
      font-size: 36px;
      font-weight: 400;
      text-align: left;
      color: #FFF;
      flex: 0 1 auto
    }
    .logout {
      flex: 0 1 auto;
    }
  }
</style>
