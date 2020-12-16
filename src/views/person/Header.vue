<template>
  <div class="">
    <div class="header" :class="navActive">
      <img src="../../assets/images/person/logo.png" alt="">
      <ul class="nav-list fadeInDown">
        <li class="active">首页</li>
        <li>作品</li>
        <li>关于</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {throttle} from "../../assets/js/utils";
  import ScrollReveal from 'scrollreveal';
  export default {
    name: '',
    components: {},
    data() {
      return {
        navActive: ''
      }
    },
    mounted() {

      this.navListener();
    },
    methods:{
      navListener(){
        window.addEventListener('scroll', throttle(() => {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          this.navActive = scrollTop >= 60 ? 'on' : 'off';
        }, 500))
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .header{
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0 20px;
    background-color: rgba(0, 0, 0, .1);
    img{
      height: 50px;
    }
    &.on{
      animation: navBgOn 1s linear;
      background-color: rgba(0, 0, 0, .2);
    }
    &.off{
      animation: navBgOff 1s linear;
      background-color: rgba(0, 0, 0, .1);
    }
  }
  @keyframes navBgOn {
    from{background-color: rgba(0, 0, 0, .1);}
    to{background-color: rgba(0, 0, 0, .2);}
  }
  @keyframes navBgOff {
    from{background-color: rgba(0, 0, 0, .2);}
    to{background-color: rgba(0, 0, 0, .1);}
  }
  .nav-list{
    display: flex;
    font-size: 15px;
    color: #fff;
    li{
      position: relative;
      width: 64px;
      margin: 0 20px;
      line-height: 34px;
      text-align: center;
      cursor: pointer;
      &.active{
        color: $theme-color;
        border-bottom: solid 2px $theme-color;
      }
      &:hover{
        color: $theme-color;
      }
      &:hover::after{
        height: 2px;
        background: $theme-color;
        animation: border-width .3s linear;
      }
    }
    li::after{
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 64px;
      height: 1px;
    }
  }
  @keyframes border-width {
    from{width: 0}
    to{width: 64px}
  }
</style>
