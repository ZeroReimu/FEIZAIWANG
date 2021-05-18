<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <Swiper></Swiper>
    <!-- <Footer></Footer> -->
    <Navigatio></Navigatio>
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
        TopImg:"https://cdn.acgproject.cn/banner-48.png",
        TopNavImg:"https://cdn.acgproject.cn/banner-48.png",
        Logo:"https://cdn.acgproject.cn/logo-48.png",
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

<style scoped>
   #Navigatio{
     display: none;
   }
</style>