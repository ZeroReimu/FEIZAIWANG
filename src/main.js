// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


//import Vue from 'vue'
//import ElementUI from 'element-ui';//饿了吗组件
//import 'element-ui/lib/theme-chalk/index.css';//饿了吗css

import router from './router'
import './plugins/axios'
import App from './App'
import Utils from './common/utils.js';//全局方法
import APlayer from '@moefe/vue-aplayer';//音乐组件
import VueAwesomeSwiper from 'vue-awesome-swiper'//swiper组件



//Vue.use(ElementUI);
Vue.use(APlayer);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;//全局关闭console方法
Vue.prototype.utils=Utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
