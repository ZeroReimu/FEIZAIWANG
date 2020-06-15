<template>
    <div id="Footer">
      <a href>关于我们</a> |
      <a href>肥宅联盟</a> |
      <a href>高级搜索</a> |
      <a href>殿堂图库</a> |
      <a href>友情链接</a>
      <br />copyright [c]2010 深圳市创世肥宅科技有限公司
      <a href="http://beian.miit.gov.cn">粤ICP备20007972号</a> 邮编：518054 电话：0755-17688741340
    </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {}
  }
};
</script>

<style scoped>
  #Footer {
    position: relative;
    text-align: center;
    font-family: Sans-serif;
    font-size: 15px;
    line-height: 28px;
    width: 100%;
    margin: 0 auto;
    z-index:20;
    padding-bottom:15px;
    /* box-shadow: 10px 2px 20px #7d7d7d; */
  }
</style>