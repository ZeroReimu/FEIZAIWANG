<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <div id="Background">
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
        TopNavImg: "http://cdn.acgproject.cn/banner-48.png"
        //Logo:"http://cdn.acgproject.cn/logo-48.png",
      }
    };
  },
  methods: {
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
  },
  components: {
    TopHeader,
    Navigatio,
    Footer,
    Background
  }
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
</style>