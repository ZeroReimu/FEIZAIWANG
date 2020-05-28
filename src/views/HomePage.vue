<template>
  <div>
    <TopHeader :msg="HomeMsg"></TopHeader>
    <Animation></Animation>
    <div>
      <img v-bind:src="CoKe" style="position:fixed;left:60px;bottom:0px;">
    </div>
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
      CoKe:require('../assets/Images/CoKe.gif'),
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

<style scoped>
</style>
