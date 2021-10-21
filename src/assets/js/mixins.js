import Vue from 'vue';
Vue.mixin({
  methods: {
    goTo(url){
      if(url.indexOf('http') != -1){
        window.open(url);
      }else{
        this.$router.push(url);
      }
    }
  }
});
