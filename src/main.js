// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Utils from './common/utils.js';

import VueAwesomeSwiper from 'vue-awesome-swiper'//swiper组件


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;
Vue.prototype.utils=Utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
