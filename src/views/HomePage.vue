<template>
  <div>
    <TopHeader :msg="HomeMsg"></TopHeader>
    <Animation></Animation>
    <div class="Coke">
      <img v-bind:src="CoKe" style="width:100%"/>
    </div>
    <AnimationTyping></AnimationTyping>
    <Navigatio></Navigatio>
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import Animation from "@/components/Animation";
import AnimationTyping from "@/components/AnimationTyping";
import Navigatio from "@/components/Navigatio";
import Footer from "@/components/Footer";
export default {
  name: "HomePage",
  data() {
    return {
      CoKe: "http://cdn.acgproject.cn/CoKe.gif",
      HomeMsg: {
        TopImg: "http://cdn.acgproject.cn/banner-48.png",
        TopNavImg:"http://cdn.acgproject.cn/banner-48.png",
        Logo: "http://cdn.acgproject.cn/logo-48.png"
      }
    };
  },
  components: {
    TopHeader,
    Animation,
    AnimationTyping,
    Navigatio,
    Footer
  }
};
</script>

<style scoped>
.Coke {
  width: 25%;
  position: fixed;
  left: 60px;
  bottom: -2px;
}
</style>
