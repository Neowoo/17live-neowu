<template>
  <div class="header">
    <div class="menu">
      <img src="~/static/images/svg/burger.svg" width="32" height="24.5" alt="">
      {{ $t('handsUp') }}
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
    background-color: $theme-blue;
    width: 100%;
    height: 55px;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 11px;
    @include align-center;
    .menu {
      font-size: 36px;
      font-weight: 400;
      text-align: left;
      color: $white;
      flex: 0 1 auto
    }
    .logout {
      flex: 0 1 auto;
    }
  }
</style>
