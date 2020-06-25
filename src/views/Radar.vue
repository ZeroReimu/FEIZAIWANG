<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>

    <div id="test" class="thisbody">
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
  name: 'ImageHouse',
  data(){
    return{
      PhotoMsg:{
        TopImg:"http://cdn.acgproject.cn/banner-"+7+".png",
        TopNavImg:"http://cdn.acgproject.cn/banner-41.png",
        Logo0:"http://cdn.acgproject.cn/logo-41.png",
      }
    }
  },
  methods:{
  //检测页面高度并调整
    GetWindowHeight(){
        var WindowHeight=window.screen.height;
        var RadarHeight=document.getElementById("test");
        if (WindowHeight < 1000){    
            RadarHeight.setAttribute("class", "thisbodysmall");
        }
    },
  },
    mounted:function(){
      this.GetWindowHeight();
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