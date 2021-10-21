<template>
  <div class="wh100">
    <div class="first-screen">
      <div class="content">
        <img src="../../assets/images/person/avatar.jpg" alt=""
             class="bounceIn1 avatar delay1s">
        <div class="link">
          <a href="https://github.com/wade3po" target="_blank" class="bounceIn1 delay2s">
            <i class="wfont wgithub"></i>
          </a>
          <a href="https://www.zhihu.com/people/wade-8-95" target="_blank"class="bounceIn1 delay2s">
            <i class="wfont wzhihu"></i>
          </a>
          <a @click="showCode(true)" href="javascript:void (0)" class="bounceIn1 delay2s">
            <i class="wfont wweixingongzhonghao"></i>
          </a>
        </div>
        <div class="template">
          <div @click="goTo('/home')" class="item bounceIn1 delay3s">
            <i class="wfont wguanwang"></i>
            <p>个人网站</p>
          </div>
          <div @click="locationTo" class="item bounceIn1 delay3s">
            <i class="wfont wxitong2"></i>
            <p>后台系统</p>
          </div>
        </div>
      </div>
    </div>

    <transition enter-active-class="animate__bounceIn" leave-active-class="animate__bounceOut">
      <div v-if="codeShow" class="qrcode" @click="showCode(false)">
        <img src="../../assets/images/person/coding.png" alt="">
      </div>
    </transition>
    <div class="back-mask"></div>
  </div>
</template>
<script>
  
  export default {
    name: '',
    components: {},
    data() {
      return {
        codeShow: false
      }
    },
    methods: {
      showCode(show){
        this.codeShow = show;
      },
      locationTo(){
        location.href = '/system/'
      }
    },
    
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .back-mask{
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
  }
  .first-screen{
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../assets/images/person/bg1.jpg") no-repeat;
    background-size:100% 100%;
    .content{
      position: absolute;
      z-index: 3;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
  .avatar{
    width: 150px;
    margin-top: 150px;
    border-radius: 50%;
  }
  .link{
    width: 100%;
    margin-top: 30px;
    a{
      display: inline-block;
      margin: 30px;
      cursor: pointer;
    }
    a:hover i{
      transform: translateY(-10px);
      color: $theme-color;
    }
    i{
      display: inline-block;
      font-size: 60px;
      color: #fff;
      transition:all 0.4s;
    }
  }
  .qrcode{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    text-align: center;
    img{
      width: 300px;
      margin-top: 20%;
    }
  }
  .template{
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: #FFF;
    .item{
      margin: 0 30px;
      text-align: center;
      p{
        margin-top: 5px;
        transition:all 0.4s;
      }
    }
    .item:hover i{
      transform: translateY(-10px);
      color: $theme-color;
    }
    .item:hover p{
      transform: translateY(-10px);
      color: $theme-color;
    }
    i{
      display: inline-block;
      font-size: 60px;
      cursor: pointer;
      transition:all 0.4s;
    }
  }
</style>
