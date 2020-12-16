<template>
  <div style="height: 100%">
    <Head></Head>
    <swiper :options="swiperOption" style="height: 100%">
      <swiper-slide>
        <Fireworks>
          <div class="first-screen">
            <p class="fadeInUp">欢迎关注个人订阅号</p>
            <p class="fadeInUp delay1s">coding个人笔记</p>
            <p class="fadeInUp delay2s" ><img src="../../assets/images/person/coding.png" alt=""></p>
          </div>
        </Fireworks>
      </swiper-slide>
      <swiper-slide>
        111111111111
      </swiper-slide>
      <swiper-slide>
        2222222222222
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  import Head from '@/views/person/Header.vue'
  import Fireworks from '@/components/animate/Fireworks.vue'
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import 'swiper/css/swiper.css'
  export default {
    name: '',
    components: {Head, Fireworks, Swiper, SwiperSlide},
    data(){
      return {
        swiperOption: {
          mousewheel: true,
          direction : 'vertical',
          speed: 1500,
        }
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .first-screen{
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
