import Vue from 'vue'
import Router from 'vue-router'

<<<<<<< HEAD

=======
>>>>>>> 689f1c6ff036864fc03a6ebad9a5efd40fa8b4ff
Vue.use(Router)

export default new Router({
  base: '/FeiZhai/', 
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home-Page',
      component: () => import('../views/HomePage.vue'),
      meta: { title: '首页' }
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue'),
      meta: { title: '首页' }
    },
    {
      path: '/ImageHouse',
      name: 'ImageHouse',
      component: () => import('../views/ImageHouse.vue'),
      meta: { title: '图库' }
    },
    {
      path: '/CanvasBackground',
      name: 'CanvasBackground',
      component: () => import('../views/CanvasBackground.vue'),
      meta: { title: '背景' }
    },
    {
      path: '/UserLogin',
      name: 'UserLogin',
      component: () => import('../views/UserLogin.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/UserRegister',
      name: 'UserRegister',
      component: () => import('../views/UserRegister.vue'),
      meta: { title: '注册' }
    },
    {
      path: '/Radar',
      name: 'Radar',
      component: () => import('../views/Radar.vue'),
      meta: { title: '测试' }
    },
    {
      path: '/Ball',
      name: 'Ball',
      component: () => import('../views/Ball.vue'),
      meta: { title: '小球' }
    },
    {
      path: '/Lamp',
      name: 'Lamp',
      component: () => import('../views/Lamp.vue'),
      meta: { title: '辉光管' }
    },
    {
      path: '/CodeRain',
      name: 'CodeRain',
      component: () => import('../views/CodeRain.vue'),
      meta: { title: '代码雨' }
    },
    {
      path: '/JOJO',
      name: 'JOJO',
      component: () => import('../views/JOJO.vue'),
      meta: { title: 'JOJO' }
    },
<<<<<<< HEAD
    {
      path: '/Anime',
      name: 'Anime',
      component: () => import('../views/Anime.vue'),
      meta: { title: '收录' }
    },
=======
>>>>>>> 689f1c6ff036864fc03a6ebad9a5efd40fa8b4ff
  ],
  
})
