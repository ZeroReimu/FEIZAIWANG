<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>

    <div id="Rader" class="thisbody">
        <div class="radar"></div>
    </div>
    <!-- <Footer></Footer> -->
    <Navigatio style="display:none"></Navigatio>
  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
export default {
  name: 'Radar',
  data(){
    return{
      PhotoMsg:{
        TopImg:"https://cdn.acgproject.cn/banner-"+12+".png",
        TopNavImg:"https://cdn.acgproject.cn/banner-12.png",
        Logo:"https://cdn.acgproject.cn/logo-12.png",
      }
    }
  },
  methods:{
  //检测页面高度并调整
    RadarHeight(){
        var Height=this.utils.AutoHeight();
        var RadarHeight=document.getElementById("Rader");
        RadarHeight.style.cssText="height:"+Height+"px;";
    },
  },
    mounted:function(){
      this.RadarHeight();
  },
  components:{
    TopHeader,
    Navigatio,
  }
}
</script>

<style scoped>
   @import "../assets/Css/Radar.css";

   #Navigatio{
     display: none;
   }

</style>