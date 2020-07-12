<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <Note></Note>
    <Footer></Footer>
    <Navigatio></Navigatio>

  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import Animation from "@/components/Animation";
import Navigatio from "@/components/Navigatio";
import Footer from "@/components/Footer";
import Note from "@/components/Note";
export default {
  name: "HomePage",
  data() {
    return {
      PhotoMsg: {
        TopImg: "http://cdn.acgproject.cn/banner-48.png",
        TopNavImg:"http://cdn.acgproject.cn/banner-48.png",
        Logo: "http://cdn.acgproject.cn/logo-48.png"
      }
    };
  },
  components: {
    TopHeader,
    Navigatio,
    Footer,
    Note
  }
};
</script>

<style scoped>

</style>
