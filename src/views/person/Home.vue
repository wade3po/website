<template>
  <div class="wh100">
    <Head></Head>
    <div class="bg-wrap">
      <img src="../../assets/images/person/bg2.png" alt="">
    </div>
    <div>
      <p class="item-title">案例展示</p>
      <p class="item-desc">为您展示多个企业网站模板，每一个模板都是单独的，只需替换logo、图片、文字等内容直接部署上线</p>
      <ul class="demo-list">
        <li>
          <a href="">
            <div class="desc-wrap">
              <p class="title">模板1</p>
              <p class="desc">这是有关于模板1的企业官网demo</p>
            </div>
            <div class="img-wrap">
              <img src="../../assets/images/demo/demo1.jpg" alt="">
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Head from '@/views/person/Header.vue'
  export default {
    name: '',
    components: {Head},
    data(){
      return {

      }
    },
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .bg-wrap{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .item-title{
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  .item-desc{
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  .demo-list{
    width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    li{
      position: relative;
      width: 400px;
      height: 300px;
      border: 1px solid #e4e4e4;
      border-radius: 4px;
      .img-wrap{
        overflow: hidden;
        width: 100%;
        height: 300px;
      }
      img{
        width: 100%;
        height: 100%;
      }
      .desc-wrap{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 1s;
        opacity: 0;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        text-align: center;
        .title{
          margin-top: 110px;
          font-size: 20px;
        }
        .desc{
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
    li:hover .desc-wrap{
      opacity: 1;
    }
  }
</style>
