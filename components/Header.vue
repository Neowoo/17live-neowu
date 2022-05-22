<template>
  <div class="header">
    <div class="menu">
      <svg-icon icon-class="burger" width="32px" height="24px"/>
      <span>
        {{ $t('handsUp') }}
      </span>
    </div>
    <svg-icon icon-class="logout" width="32px" height="24.5px"/>
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
      flex: 0 1 auto;
      @include align-center;
      &::v-deep {
        .svg-icon {
          margin-right: 25px;
        }
      }
    }
    .logout {
      flex: 0 1 auto;
    }
  }
</style>
