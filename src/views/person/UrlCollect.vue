<template>
  <div class="wh100" style="overflow: auto">
    <Head></Head>
    <div class="main-content" :style="{maxHeight: height}">
      <ul class="main-menu" ref="mainMenu">
        <li v-for="val in mainMenu" :class="currentKey == val.key ? 'active' : ''"
        @click="changeUrls(val.key)" :key="val.key">{{val.name}}</li>
      </ul>
      
      <div class="url-list" :style="{height: listHeight}" ref="urlList">
        <div v-for="val in mainMenu" class="item-wrap" :ref="val.key" :key="val.key">
          <p class="menu-title">{{val.name}}</p>
          <ul>
            <li v-for="item in val.list" @click="toOfficial(item.url)" :key="item.name">
              <div class="name-logo">
                <img :src="require('@/assets/images/urlsLogo/' + item.logo)" alt="">
                <span class="name">{{item.name}}</span>
              </div>
              <p>{{item.desc}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Head from '@/views/person/Header.vue';
  import {mainMenu} from "./urls/mainMenu";
  import urls from './urls/index.js'
  import {throttle} from "../../assets/js/utils";
  export default {
    name: '',
    components: {Head},
    data() {
      return {
        mainMenu: [],
        itemOffsetTop: [],
        currentKey: '',
        throttledScrollHandler: '',
        firstOffsetTop: 0
      }
    },
    mounted() {
      mainMenu.forEach((val) => {
        val.list = urls[val.key];
      })
      this.mainMenu = mainMenu;
      this.currentKey = this.mainMenu[0].key;
      this.$nextTick((() => {
        this.firstOffsetTop = this.$refs[this.currentKey][0].offsetTop;
        this.throttledScrollHandler = throttle(this.onScroll, 100);
        this.$refs.urlList.addEventListener('scroll', this.throttledScrollHandler);
        mainMenu.forEach((val) => {
          this.itemOffsetTop.push({
            key: val.key,
            num: this.$refs[val.key][0].offsetTop - this.firstOffsetTop,
            height: this.$refs[val.key][0].clientHeight
          });
        });
      }));
    },
    computed: {
      height() {
        return window.innerHeight - 110 + 'px';
      },
      listHeight() {
        return window.innerHeight - 170 + 'px';
      },
    },
    methods: {
      onScroll(){
        const scrollTop = this.$refs.urlList.scrollTop;
        this.itemOffsetTop.forEach((val, index) => {
          if(scrollTop > val.num && scrollTop - val.num > val.height / 2){
            if(index == this.itemOffsetTop.length - 1){
              this.currentKey = this.itemOffsetTop[index].key;
            }else {
              this.currentKey = this.itemOffsetTop[index + 1].key;
            }
          }else if(scrollTop < this.itemOffsetTop[0].height / 2){
            this.currentKey = this.itemOffsetTop[0].key;
          }
        })
      },
      //点击锚点定位
      changeUrls(key){
        this.$refs.urlList.removeEventListener('scroll', this.throttledScrollHandler);
        this.currentKey = key;
        let to = this.$refs[key][0].offsetTop - this.firstOffsetTop;
        this.animationScrollTo(this.$refs.urlList, to);
      },
      //打开新标签
      toOfficial(url){
        window.open(url);
      },
      //锚点定位动画滚动
      animationScrollTo(el, to) {
        let scrollY = 0;
        const beginY = el.scrollTop;
        const raf = window.requestAnimationFrame || (func => setTimeout(func, 10));
        const moveFn = () => {
          if (beginY - to < 0) {
            scrollY += (to - beginY) / 30;
            if(scrollY <= (to - beginY)){
              el.scrollTop = beginY + scrollY;
              raf(moveFn);
            }else {
              el.scrollTop = to;
              el.addEventListener('scroll', this.throttledScrollHandler);
            }
          }else if(beginY - to > 0){
            scrollY += (beginY - to) / 30;
            if(scrollY <= (beginY - to)){
              el.scrollTop = beginY - scrollY;
              raf(moveFn);
            }else {
              el.scrollTop = to;
              el.addEventListener('scroll', this.throttledScrollHandler);
            }
          }
        };
        raf(moveFn);
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .main-menu{
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    li{
      padding: 4px 20px;
      margin: 5px;
      border: solid 1px $border-color;
      border-radius: 20px;
      cursor: pointer;
      &:hover{
        color: #fff;
        border-color: $theme-color;
        background: $theme-color;
      }
      &.active{
        color: #fff;
        border-color: $theme-color;
        background: $theme-color;
      }
    }
  }
  .url-list{
    overflow-y: scroll;
    width: 101%;
    .item-wrap{
      padding-bottom: 10px;
    }
    .menu-title{
      margin-top: 10px;
      line-height: 30px;
      font-size: 18px;
      text-indent: 30px;
      font-weight: bold;
      color: $theme-color;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
    }
    li{
      width: 300px;
      height: 100px;
      padding: 20px;
      margin: 10px 20px;
      border: solid 1px $border-color;
      border-radius: 10px;
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      .name-logo{
        margin-bottom: 10px;
        .name{
          font-size: 20px;
        }
        img{
          width: 60px;
          height: 60px;
          margin-right: 10px;
          vertical-align: middle;
        }
      }
    }
  }
  .main-content{
    overflow: hidden;
  }
</style>
