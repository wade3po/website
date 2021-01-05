<template>
  <div id="app">
    <router-view/>
    <p class="copyright">Copyright ©️ 2020-2020，code 版权所有. <a href="http://beian.miit.gov.cn">闽ICP备2020020205号</a></p>
  </div>
</template>

<style lang="scss" type="text/scss" scoped>
  #app{
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
  .copyright{
    position: fixed;
    bottom: 5px;
    z-index: 10;
    width: 100%;
    font-size: 14px;
    color: $theme-color;
    text-align: center;
    a{
      color: $theme-color;
    }
  }
</style>
