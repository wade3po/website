<template>
  <div style="height: 100%">
    <Head></Head>
    <Fireworks></Fireworks>
    <div class="coding-wrap">
      <p class="fadeInUp">欢迎关注个人订阅号</p>
      <p class="fadeInUp delay1s">coding个人笔记</p>
      <p class="fadeInUp delay1s" ><img src="../../assets/images/person/coding.png" alt=""></p>
    </div>
  </div>
</template>
<script>
  import Head from '@/views/person/Header.vue'
  import Fireworks from '@/components/animate/Fireworks.vue'
  export default {
    name: '',
    components: {Head, Fireworks},
    data(){
      return {
        
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .coding-wrap{
    position: absolute;
    z-index: 10;
    top: 200px;
    width: 100%;
    color: $theme-color;
    font-size: 50px;
    text-align: center;
    img{
      margin-top: 20px;
    }
  }
</style>
