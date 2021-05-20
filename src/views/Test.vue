<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>

 
    <Footer></Footer>
    <Navigatio style="display:none"></Navigatio>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
import utils from '@/common/utils'
export default {
  name: "Test",
  data() {
    var ramdomSum=utils.sum(1,50);
    return {
      PhotoMsg:{
        TopImg:"https://cdn.acgproject.cn/banner-"+ramdomSum+".png",
        TopNavImg:"https://cdn.acgproject.cn/banner-"+ramdomSum+".png",
        Logo:"https://cdn.acgproject.cn/logo-"+ramdomSum+".png",
      }
    };
  },
  created() {
   
  },
  methods: {

  },
  mounted: function () {
   
  },
  components:{
    TopHeader,
    Navigatio,
  }
};
</script>