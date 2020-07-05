<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    <div class="swiper-pagination"></div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [ 
            "http://cdn.acgproject.cn/img-1_gaitubao_2567x1492.jpg", 
            "http://cdn.acgproject.cn/img-2_gaitubao_2567x1492.jpg", 
            "http://cdn.acgproject.cn/img-3_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-4_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-5_gaitubao_2567x1492.jpg", 
            "http://cdn.acgproject.cn/img-6_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-7_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-8_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-9_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-10_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-12_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-13_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-14_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-15_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-16_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-17_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-20_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-21_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-22_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-25_gaitubao_2567x1492.jpg",
            "http://cdn.acgproject.cn/img-26_gaitubao_2567x1492.jpg",
            
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
    margin-top:-145px;
    width: 100%;
    /* height: 105%; */
  }  

  /* 图片样式 */
  .swiper-slide img{
    width: 100%;
    max-width: 100%;
  }

  /* 分页器样式 */
  .swiper-container{
    --swiper-navigation-color: #c7e4cd;
    --swiper-navigation-size: 60px;
  }
  .swiper-pagination{
    zoom:1.4;
    --swiper-pagination-color: #5acaec;/* 分页器颜色 */
    top:30px;
  }
  .swiper-scrollbar{
    zoom:1.4;
    margin-bottom:12%;
  }
  .swiper-pagination-bullet{
    width: 12px;
    height: 12px;
  }
</style>
