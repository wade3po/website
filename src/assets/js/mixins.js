import Vue from 'vue';
Vue.mixin({
  methods: {
    goTo(url){
      this.$router.push(url);
    }
  }
});
