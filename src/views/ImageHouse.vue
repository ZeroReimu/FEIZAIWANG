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

<style scoped>

</style>