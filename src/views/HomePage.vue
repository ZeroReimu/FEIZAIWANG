<template>
  <div>
    <TopHeader :msg="HomeMsg"></TopHeader>
    <Animation></Animation>
    <AnimationTyping></AnimationTyping>
    <Navigatio></Navigatio>
    <Footer></Footer>
  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Animation from '@/components/Animation'
import AnimationTyping from '@/components/AnimationTyping'
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
    Animation,
    AnimationTyping,
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
