<template>
  <div class="" style="overflow: hidden">
    <Head></Head>
    <div class="articla-wrap" :style="{height: height}">
      <ul :style="{height: listHeight}" class="articla-list">
        <li v-for="val in articalList" @click="goTo(val.url)">{{val.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Head from '@/views/person/Header.vue';
  import {articalList} from "./urls/collectArticle";
  export default {
    name: '',
    components: {Head},
    data() {
      return {
        articalList:articalList
      }
    },
    mounted() {
      
    },
    computed: {
      height() {
        return window.innerHeight - 110 + 'px';
      },
      listHeight() {
        return window.innerHeight - 110 + 'px';
      },
    },
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .articla-wrap{
    overflow: hidden;
    width: 60%;
    margin: 80px auto 0 auto;
    background: #fff;
    .articla-list{
      overflow: auto;
      width: 101%;
    }
    li{
      border-bottom: solid 1px $border-color;
      line-height: 50px;
      text-indent: 20px;
      cursor: pointer;
      &:hover{
        color: $theme-color;
      }
    }
  }
</style>
