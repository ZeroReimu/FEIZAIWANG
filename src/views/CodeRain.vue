<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <div id="CodeRainBody">
      <canvas id=q></canvas>
    </div>
    <!-- <Footer></Footer> -->
    <Navigatio></Navigatio>
  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
export default {
  name: 'CodeRain',
  data(){
    return{
      PhotoMsg:{
        //TopImg:"https://cdn.acgproject.cn/banner-12.png",
        TopNavImg:"https://cdn.acgproject.cn/banner-41.png",
        //Logo:"https://cdn.acgproject.cn/logo-12.png",
      }
    }
  },
  methods:{
    //检测页面高度并调整
    CodeRainHeight(){
        var Height=this.utils.AutoHeight();
        var Height2=Height+131;
        var BallHeight=document.getElementById("CodeRainBody");
        BallHeight.style.cssText="height:"+Height2+"px;";
    },
    CodeRain(){
      const s = window.screen;
      const w = (q.width = s.width);
      const h = (q.height = s.height);
      const ctx = q.getContext("2d");

      const p = Array(Math.floor(w / 10) + 1).fill(0);

      const random = (items) => items[Math.floor(Math.random() * items.length)];

      const hex = "0123456789ABCDEF".split("");

      setInterval(() => {
        ctx.fillStyle = "rgba(0,0,0,.05)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#0f0";
        p.map((v, i) => {
          ctx.fillText(random(hex), i * 10, v);
          p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
        });
      }, 1000 / 30);
    }
  },
    mounted:function(){
        this.CodeRain();
        this.CodeRainHeight();
  },
  components:{
    TopHeader,
    Navigatio,
  }
}
</script>

<style scoped>
  #q{
    width: 100%;
    height: 100%;
  }
  #Top{
     height:48px;
  }
  #Navigatio{
     display: none;
  }
</style>