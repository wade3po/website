<template>
  <div class="home">
    <div class="first-screen">
      <div class="module animate__animated animate__zoomIn">
        <img src="../../assets/images/person/avatar.jpg" alt=""
             class="animate__animated animate__zoomInDown animate__delay-1s avatar">
        <div class="link">
          <a href="https://github.com/wade3po" target="_blank"
             class="animate__animated animate__bounceIn animate__delay-2s"><i class="wfont wgithub"></i></a>
          <a href="https://www.zhihu.com/people/wade-8-95" target="_blank"
             class="animate__animated animate__bounceIn animate__delay-2s"><i class="wfont wzhihu"></i></a>
          <a @click="showCode(true)" href="javascript:void (0)" class="animate__animated animate__bounceIn animate__delay-2s"><i class="wfont wweixingongzhonghao"></i></a>
        </div>
        <div class="template">
          <div class="item animate__animated animate__fadeInLeft animate__delay-3s">
            <i class="wfont wguanwang"></i>
            <p>企业网模板</p>
          </div>
          <div class="item animate__animated animate__fadeInRight animate__delay-3s">
            <i class="wfont wxitong2"></i>
            <p>后台系统模板</p>
          </div>
        </div>
        <h4 class="animate__animated animate__zoomInDown animate__delay-4s">个人写了一些纯静态的企业网和一个后台系统，感兴趣的可以浏览看看</h4>
      </div>
    </div>

    <transition enter-active-class="animate__bounceIn" leave-active-class="animate__bounceOut">
      <div v-if="codeShow" class="qrcode" @click="showCode(false)">
        <img src="../../assets/images/person/coding.png" alt="">
      </div>
    </transition>
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
    mounted() {

    },
    methods: {
      showCode(show){
        this.codeShow = show;
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    color: #fff;
  }
  .first-screen{
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../assets/images/person/bg1.jpg") no-repeat 100% 100%;
    .module{
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      text-align: center;
      background: rgba(0, 0, 0, .4);
      h4{
        margin-top: 60px;
      }
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
    }
    i{
      display: inline-block;
      font-size: 50px;
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
    display: flex;
    justify-content: center;
    margin-top: 80px;
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
    }
    .item:hover p{
      transform: translateY(-10px);
    }
    i{
      display: inline-block;
      font-size: 80px;
      cursor: pointer;
      transition:all 0.4s;
    }
  }
</style>
