<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <Swiper></Swiper>
    <Navigatio style="display:none"></Navigatio>
    <Footer></Footer>
  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
import Footer from '@/components/Footer'
import Swiper from '@/components/Swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'ImageHouse',
  data(){
    return{
      PhotoMsg:{
        TopImg:require('../assets/Images/banner-18.png'),
        TopNavImg:require('../assets/Images/banner-18.png'),
        Logo:require('../assets/Images/logo-18.png'),
      }
    }
  },
  components:{
    TopHeader,
    Navigatio,
    Footer,
    Swiper,
  }
}
</script>

<style>
  #Footer {
    width: 100%;
    margin: 0 auto;
    position: fixed;
    bottom: 30.5px;
    z-index:20;
  }
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