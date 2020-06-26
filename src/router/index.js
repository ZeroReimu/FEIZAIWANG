import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: '/FeiZhai/', 
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
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
  ],
  
})
