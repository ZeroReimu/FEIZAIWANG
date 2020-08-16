// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
<<<<<<< HEAD
import './plugins/axios'
=======
>>>>>>> 689f1c6ff036864fc03a6ebad9a5efd40fa8b4ff
import App from './App'
import router from './router'
import Utils from './common/utils.js';
import APlayer from '@moefe/vue-aplayer';//音乐组件
import VueAwesomeSwiper from 'vue-awesome-swiper'//swiper组件
<<<<<<< HEAD
import ElementUI from 'element-ui';//饿了吗组件
import 'element-ui/lib/theme-chalk/index.css';//饿了吗css

Vue.use(APlayer);
Vue.use(ElementUI);
=======

Vue.use(APlayer);

>>>>>>> 689f1c6ff036864fc03a6ebad9a5efd40fa8b4ff
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;
Vue.prototype.utils=Utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
  render: h => h(App),
=======
>>>>>>> 689f1c6ff036864fc03a6ebad9a5efd40fa8b4ff
  components: { App },
  template: '<App/>'
})
