<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <div id="photobody">
      <div class="box">
        <div class="imgBox">
          <img src="https://cdn.acgproject.cn/JO1_gaitubao_1200x1630.jpg" alt="">
        </div>
        <div class="content">
          <h2>乔纳森·乔斯达<br><br>
          <span>《幻影之血》</span></h2>
        </div>
      </div>

      <div class="box">
        <div class="imgBox">
          <img src="https://cdn.acgproject.cn/JO2_gaitubao_1200x1630.jpg" alt="">
        </div>
        <div class="content">
          <h2>乔瑟夫·乔斯达<br><br>
          <span>《战斗潮流》</span></h2>
        </div>
      </div>

      <div class="box">
        <div class="imgBox">
          <img src="https://cdn.acgproject.cn/JO3_gaitubao_1200x1630.jpg" alt="">
        </div>
        <div class="content">
          <h2>空条承太郎<br><br>
          <span>《星尘斗士》</span></h2>
        </div>
      </div>

      <div class="box">
        <div class="imgBox">
          <img src="https://cdn.acgproject.cn/JO4_gaitubao_1200x1630.jpg" alt="">
        </div>
        <div class="content">
          <h2>东方仗助<br><br>
          <span>《不灭钻石》</span></h2>
        </div>
      </div>

      <div class="box">
        <div class="imgBox">
          <img src="https://cdn.acgproject.cn/JO5_gaitubao_1200x1630.jpg" alt="">
        </div>
        <div class="content">
          <h2>乔鲁诺·乔巴拿<br><br>
          <span>《黄金之风》</span></h2>
        </div>
      </div>
    </div>
    <Navigatio></Navigatio>

  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import Animation from "@/components/Animation";
import Navigatio from "@/components/Navigatio";
import Footer from "@/components/Footer";
export default {
  name: "JOJO",
  data() {
    return {
      PhotoMsg: {
        TopImg: "https://cdn.acgproject.cn/banner-7.png",
        TopNavImg:"https://cdn.acgproject.cn/banner-7.png",
        Logo: "https://cdn.acgproject.cn/logo-7.png"
      }
    };
  },
  methods:{
    //检测页面高度并调整
    GetWindowHeight(){
      var Height=this.utils.AutoHeight();
      var WindowHeight=window.screen.height;
      if (WindowHeight < 1000){
          photobody.style.cssText="zoom: 0.8;";
          var Height=this.utils.AutoHeight();//因zoom缩小重新获取高度
          photobody.style.height=Height
      }else{
          photobody.style.cssText="zoom: 1;height:"+Height+"px;";
      }
    }
  },

  mounted:function(){
    //this.PhotoHeight();
    this.GetWindowHeight();
  },
  components: {
    TopHeader,
    Navigatio,
    Footer,
  }
};
</script>

<style scoped>
body{
  background:black
}
#Navigatio{
  display: none;
}
#photobody{
    position:fixed;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;/*拆行*/
    height: 700px; /*800px*/
    background: black;
    box-sizing: border-box;
    font-family: "Cambria Math",sans-serif;
}

.box{
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    transition: 0.5s;
    background: #060c21;
    float: left;
}

.box .imgBox{
    position: absolute;
    top: 0;     
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.box:hover{
    height: 500px;
}

.box .imgBox img{
    max-width:100%;
    opacity: 0.1;
    transition: 0.5s;
}

.box:hover .imgBox img{
     opacity: 1;
}

.box:before{
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background:linear-gradient(235deg,#89ff00,#010615,#00bcd4);
    z-index:-1;
}
.box:after{
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background:linear-gradient(235deg,#89ff00,#010615,#00bcd4);
    z-index:-2;
    filter: blur(40px);
}
.box:before,.box :after{
    background:linear-gradient(235deg,#89ff00,#010615,#00bcd4);
}
.box:nth-child(2):before,
.box:nth-child(2):after
{
    background:linear-gradient(235deg,#ff005e,#010615,#fbff00);
}
.box:nth-child(3):before,
.box:nth-child(3):after
{
    background:linear-gradient(235deg,#772aff,#010615,#2196fc);
}
.box:nth-child(4):before,
.box:nth-child(4):after
{
    background:linear-gradient(235deg,#41c958c2,#010615,#eccd43);
}
.box:nth-child(5):before,
.box:nth-child(5):after
{
    background:linear-gradient(235deg,#6e4bce,#010615,#af1e8b);
}
.box .content{
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    height: 90px;
    background: rgba(0,0,0,0.4);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    /*设置div盒子元素的背景透明度越靠近1越不透明*/
    transition: 0.5s;
    /*向下伸长实现效果时间*/

}

.box .content{
    bottom: 10px;
}

.box:hover .content{
    opacity: 1;

}
.box .content h2{
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1px;
}
.box .content h2 span{
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 2px;
}

</style>
