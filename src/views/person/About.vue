<template>
  <div class="wh100">
    <Head></Head>
    <div class="mask-wrap"></div>
    <div class="swiper-wrap">
      <swiper ref="mySwiper" :options="swiperOption" style="height: 100%">
        <swiper-slide>
          <div class="info-wrap">
            <img src="../../assets/images/person/avatar.jpg" alt="">
            <ul>
              <li><span>姓名：</span>张璐麟</li>
              <li><span>性别：</span>男</li>
              <li><span>年龄：</span>{{age}}</li>
              <li><span>学历：</span>本科</li>
              <li><span>开发经验：</span>{{experience}}</li>
              <li><span>工作性质：</span>全职</li>
              <li><span>期望职业：</span>前端开发工程师</li>
              <li><span>工作地区：</span>厦门</li>
              <li><span>期望月薪：</span>面议</li>
              <li><span>目前状况：</span>我目前处于离职状态</li>
            </ul>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <ul class="swiper-menu">
      <li>个人信息</li>
      <li>工作经历</li>
      <li>专业技能</li>
      <li>项目经验</li>
      <li>教育经历</li>
      <li>其他</li>
      <li>联系方式</li>
    </ul>
  </div>
</template>
<script>
  import Head from '@/views/person/Header.vue'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: '',
    components: {Head, Swiper, SwiperSlide},
    data() {
      return {
        swiperOption: {
          mousewheel: true,
          direction : 'vertical',
          speed: 1500,
        },
        age: 0,
        experience: 0,
      }
    },
    mounted() {
      this.age = new Date().getFullYear() - 1993;
      this.experience = new Date().getFullYear() - 2016;
    },
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .wh100{
    background: url("../../assets/images/person/bg3.png") no-repeat;
    background-size:100% 100%;
  }
  .swiper-wrap{
    position: relative;
    z-index: 20;
    height: 100%;
    width: 100%;
  }
  .info-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    img{
      width: 300px;
      height: 300px;
      margin-right: 30px;
    }
    li{
      color: #fff;
      font-size: 16px;
      line-height: 28px;
      span{
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
  .swiper-menu{
    position: fixed;
    z-index: 30;
    right: 20px;
    top: 30%;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
  }
</style>
