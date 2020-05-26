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
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,//缩小导航点
            clickable :true,//点击切换
          },
          navigation: {//左右箭头
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: true,//点击时隐藏
          },
          scrollbar: {//底部滚动条
            el: '.swiper-scrollbar',
            hide: true,//是否自动隐藏
             draggable: true,//允许拖动滚动条
          },
          keyboard : true,//允许键盘操纵
          mousewheel: true,//允许鼠标滚轮操纵
          swiperContainer:'.swiper-container',//默认容器类型
          initialSlide :0,//设定初始图
          autoplay: {
            delay:2000,//X秒切换一次
            disableOnInteraction: false,//手操后不停止
            // waitForTransition: false,
          },
          speed:600,//切换所需时间
          freeMode : false,//默认完全贴合
          loop : true,//启动循环
          threshold : 20,//拖动临界值
          //zoom : true, //开启缩放功能
          effect : 'fade',//切换效果
          //direction:'vertical',//设置方向(默认横向)
        },
        
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(1,2000, true)
    }
  }
</script>
<style>

</style>
