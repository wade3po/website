import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'animate.css';
import "@/assets/css/reset.scss";

import "@/assets/js/mixins.js";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
