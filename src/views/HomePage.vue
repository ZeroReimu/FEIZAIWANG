<template>
  <div>
    <TopHeader :msg="HomeMsg"></TopHeader>
    <Navigatio></Navigatio>
    <Footer></Footer>
  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
import Footer from '@/components/Footer'
export default {
  name: 'HomePage',
  data(){
    return{
      HomeMsg:{
        TopImg:require('../assets/Images/banner-48.png'),
        TopNavImg:require('../assets/Images/banner-48.png'),
        Logo:require('../assets/Images/logo-48.png'),
      }
    };
  },
  components:{
    TopHeader,
    Navigatio,
    Footer,
  }
}
</script>

<style>
  #Footer {
    width: 100%;
    margin: 0 auto;
    position: fixed;
    bottom: 30.5px;
  }
</style>
