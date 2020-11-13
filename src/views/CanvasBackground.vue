<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <div id="Background"  @click="yiyan()">
      
      <div class="instructions" >
        <div id="hitokoto">
          『 <a id="hitokoto_text"  >我从未惧怕孤独，直到我遇见了你</a> 』<br>
          <div>--《<a id="hitokoto_from">本人</a>》</div>
        </div>
      </div>
      <Background></Background>
    </div>
    <!-- <Footer></Footer> -->
    <Navigatio></Navigatio>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import Navigatio from "@/components/Navigatio";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
export default {
  name: "CanvasBackground",
  data() {
    return {
      PhotoMsg: {
        //TopImg:"http://cdn.acgproject.cn/banner-48.png",
        TopNavImg: "http://cdn.acgproject.cn/banner-9.png"
        //Logo:"http://cdn.acgproject.cn/logo-48.png",
      }
    };
  },

  methods: {

    yiyan:function(){
      //axios.get('https://v1.hitokoto.cn/?c=a&c=b&c=c')//一言地址 a:动画 b:漫画 c:游戏
      axios.get('https://v1.hitokoto.cn/?c=h&c=i&c=k')//h:影视 i:诗词 k:哲学
        .then(({ data }) => {
          const hitokoto = document.getElementById('hitokoto_text')
          const hitokoto_from = document.getElementById('hitokoto_from')
          //hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid //返回一言信息
          hitokoto.innerText = data.hitokoto //返回一言正文
          hitokoto_from.innerText = data.from //返回出处
        })
        .catch(console.error) // 报错
    },

    //检测页面高度并调整
    GetWindowHeight() {
      var Height = this.utils.AutoHeight();
      var Height2 = Height + 131;
      var BackgroundHeight = document.getElementById("Background");
      BackgroundHeight.style.cssText = "height:" + Height2 + "px;";
    }
  },
  mounted: function() {
    this.GetWindowHeight();
    this.yiyan()

  },
  components: {
    TopHeader,
    Navigatio,
    Footer,
    Background
  },

};


      
</script>

<style scoped>
#Navigatio {
  display: none;
}
#Top {
  height: 48px;
}
#Background{
    background:black;
}
.instructions {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  letter-spacing: 3px;
  pointer-events: none;
}
.instructions>div{
  font-size:20px;
  width: auto;
}
.instructions>div>a{
  color:#fff;
}
.instructions>div>div{
  margin-top:5%;
  margin-right:-60px;
  float:right;
}
</style>