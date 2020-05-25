<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <Navigatio></Navigatio>
    <Footer></Footer>
  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
import Footer from '@/components/Footer'
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
  }
}
</script>

<style scoped>
  div >>> #Footer {
    width: 100%;
    margin: 0 auto;
    position: fixed;
    bottom: 30.5px;
  }
</style>
