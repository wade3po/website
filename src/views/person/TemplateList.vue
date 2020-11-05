<template>
  <div class="">
    <ul class="template-list">
      <li class="rotateIn" v-for="val in 10" :class="'rotateIn' + val"></li>
    </ul>
  </div>
</template>
<script>
  import {WOW} from 'wowjs'
  import ScrollReveal from 'scrollreveal';
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    mounted() {
      new WOW().init();
      for (let i = 1; i < 11; i++) {
        ScrollReveal().reveal('.rotateIn' + i, {
          distance: '200%',
          origin: 'top',
          reset: true,
          duration: 2000,
          rotate: {
            x: 0,
            y: 0,
            z: -90
          },
          delay: 200 * (i % 3)
        })
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .template-list{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 10%;
    li{
      width: 30%;
      height: 500px;
      margin: 20px;
      background: red;
    }
  }
</style>
