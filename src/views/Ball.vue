<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>

    <div id="ballbody" class="ballbody">
        <div class="ball"></div>
    </div>
    <!-- <Footer></Footer> -->
    <Navigatio></Navigatio>
  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
export default {
  name: 'Ball',
  data(){
    return{
      PhotoMsg:{
        TopImg:"https://cdn.acgproject.cn/banner-32.png",
        TopNavImg:"https://cdn.acgproject.cn/banner-32.png",
        Logo:"https://cdn.acgproject.cn/logo-32.png",
      }
    }
  },
  methods:{
    //检测页面高度并调整
    BallHeight(){
        var Height=this.utils.AutoHeight();
        var BallHeight=document.getElementById("ballbody");
        BallHeight.style.cssText="height:"+Height+"px;";
    },
  },
    mounted:function(){
        this.BallHeight();
  },
  components:{
    TopHeader,
    Navigatio,
  }
}
</script>

<style scoped>
    @import "../assets/Css/Ball.css";
</style>