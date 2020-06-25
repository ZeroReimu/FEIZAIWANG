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
        TopImg:"http://cdn.acgproject.cn/banner-"+31+".png",
        TopNavImg:"http://cdn.acgproject.cn/banner-31.png",
        Logo0:"http://cdn.acgproject.cn/logo-31.png",
      }
    }
  },
  methods:{

  },
    mounted:function(){

  },
  components:{
    TopHeader,
    Navigatio,
  }
}
</script>

<style scoped>

</style>