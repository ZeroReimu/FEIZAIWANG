<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [ 
            require('../assets/Images/img-1_gaitubao_2567x1492.jpg'), 
            require('../assets/Images/img-2_gaitubao_2567x1492.jpg'), 
            require('../assets/Images/img-3_gaitubao_2567x1492.jpg'),
            require('../assets/Images/img-4_gaitubao_2567x1492.jpg'),
            require('../assets/Images/img-5_gaitubao_2567x1492.jpg'), 
            require('../assets/Images/img-6_gaitubao_2567x1492.jpg'),
            require('../assets/Images/img-7_gaitubao_2567x1492.jpg'),
            require('../assets/Images/img-8_gaitubao_2567x1492.jpg'),
            require('../assets/Images/img-9_gaitubao_2567x1492.jpg'),
            require('../assets/Images/img-10_gaitubao_2567x1492.jpg'),
        ],
        swiperOption: {
          swiperContainer:'.swiper-container',//默认容器类型
          pagination: {//分页器
            el: '.swiper-pagination',
            dynamicBullets: true,//启动分页器缩放模式
            clickable :true,//启动点击切换
          },
          navigation: {//左右箭头
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: true,//点击时隐藏
          },
          scrollbar: {//底部滚动条
            el: '.swiper-scrollbar',
            hide: true,//启动自动隐藏
             draggable: true,//允许拖动滚动条
          },
          keyboard : true,//允许键盘操纵
          mousewheel: true,//允许鼠标滚轮操纵
          initialSlide :0,//设定初始图
          autoplay: {
            delay:4000,//设定X毫秒切换一次 
            disableOnInteraction: false,//手动操作不打断计时器
            waitForTransition: true,//允许计时器未结束操作
          },
          speed:1500,//设定切换动画所需毫秒
          freeMode : false,//默认完全贴合
          loop : true,//启动循环
          threshold : 20,//设定拖动最小生效临界值
          zoom : false, //启动缩放功能
          effect : 'fade',//设置切换效果'slide'(滑动),"fade"(淡入)"cube"(方块)"coverflow"(3d流)"flip"(3d翻转)
          //direction:'vertical',//设置方向(默认横向)
        },
        
      }
    },
    mounted() {
      // console.log('Current Swiper instance object', this.mySwiper)
      // this.mySwiper.slideTo(1,2000, true)
    }
  }
</script>

<style scoped>
  .swiper-wrapper{
   transition-timing-function:ease-in;
   
  }
  /* 容器样式 */
  .swiper-container {
    position:absolute;
    z-index: 0;
    margin-top:-230px;
    width: 100%;
    height: 105%;
  }  

  /* 图片样式 */
  .swiper-slide img{
    width: 100%;
    max-width: 100%;
  }

  /* 分页器样式 */
  .swiper-container{
    --swiper-navigation-color: #c7e4cd;/* 按钮颜色 */
    --swiper-navigation-size: 60px;/* 设置按钮大小 */
  }
  .swiper-pagination{
    --swiper-pagination-color: #5acaec;/* 分页器颜色 */
    top:120px;
  }
  .swiper-scrollbar{
    margin-bottom:8px;
  }
  .swiper-pagination-bullet{
    width: 12px;
    height: 12px;
  }
</style>
