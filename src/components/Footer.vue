<template>
    <div id="Footer">
      <a href>关于我们</a> |
      <a href>肥宅联盟</a> |
      <a href>高级搜索</a> |
      <a href>殿堂图库</a> |
      <a href>友情链接</a>
      <br />copyright [c]2018-2020 深圳市肥宅科技不存在公司
      <a href="http://beian.miit.gov.cn">粤ICP备20007972号</a> 邮编：518054 电话：0755-17688741340
    </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {}
  }, 
  methods:{
    //检测页面高度并调整
    GetWindowHeight(){
        var WindowHeight=window.screen.height;
        var a=document.getElementById("Footer");
        if (WindowHeight < 1000){
            a.style.cssText="zoom: 0.95;";
        }
    },
  },
  mounted:function(){
      this.GetWindowHeight();
  },
};
</script>

<style scoped>
  /* #Footer {
    position: relative;
    text-align: center;
    font-family: Sans-serif;
    font-size: 15px;
    line-height: 28px;
    width: 100%;
    margin: 0 auto;
    z-index:20;
    padding-bottom:15px;
    box-shadow: 10px 2px 20px #7d7d7d;
  } */

  #Footer {
    position: fixed;
    text-align: center;
    font-family: Sans-serif;
    font-size: 15px;
    line-height: 28px;
    width: 100%;
    margin: 0 auto;
    z-index:20;
    bottom:15px;
    /* box-shadow: 10px 2px 20px #7d7d7d; */
  }
</style>