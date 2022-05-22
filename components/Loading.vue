<template>
  <div class="loading" v-if="loadingShow">
    <div class="load-wrap">
      <div class="loader"></div>
      <div class="wavy">
        <span style="--i:1">資</span>
        <span style="--i:2">料</span>
        <span style="--i:3">更</span>
        <span style="--i:4">新</span>
        <span style="--i:5">中</span>
        <span style="--i:6">.</span>
        <span style="--i:7">.</span>
        <span style="--i:8">.</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Loading',
  computed: {
    ...mapState(['loadingShow'])
  }

}
</script>
<style lang="scss" scoped>
  .loading {
    z-index: 9999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    .load-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .loader {
      border: 8px solid #FFF;
      border-radius: 50%;
      border-top: 8px solid #8DC8FF;
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 2s linear infinite;
    }
    .wavy{
      position: relative;
      -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
      span{
        position: relative;
        display: inline-block;
        color: #8DC8FF;
        font-size: 18px;
        animation: bounce 1s ease-in-out infinite;
        animation-delay: calc(.1s*var(--i))
      }
    }
    .text {
      //position: absolute;
      //top: 60%;
      //left: 50%;
      //font-size: 18px;
      //font-weight: bold;
      //color: #8DC8FF;
      //letter-spacing: -1px;
      //transform: translateX(-38%);


      span {
        color: #8DC8FF;
        position: relative;
        animation: bounce 1s ease-in-out infinite;
        animation-delay: calc(.1s * var(--i))
        //&:nth-child(1) {
        //
        //}
        //&:nth-child(2) {
        //  animation: bounce 0.5s linear infinite ;
        //  animation-delay: 0.5s;
        //}
        //&:nth-child(3) {
        //  animation: bounce 0.5s linear infinite ;
        //  animation-delay: 1s;
        //}
        //&:nth-child(4) {
        //  animation: bounce 0.5s linear infinite ;
        //  animation-delay: 1.5s;
        //}
        //&:nth-child(5) {
        //  animation: bounce 0.5s linear infinite ;
        //  animation-delay: 2s;
        //}
        //&:nth-child(6) {
        //  animation: bounce 0.5s linear infinite ;
        //  animation-delay: 2.5s;
        //}
      }
    }
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes bounce {
      0%{
        transform: translateY(0px)
      }
      20%{
        transform: translateY(-12px)
      }
      40%, 100%{
        transform: translateY(0px)
      }
    }
  }
</style>
