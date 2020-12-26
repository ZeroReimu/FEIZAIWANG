<template>
  <div id="app">
    
    <div id="music" style="top:200px"><aplayer :audio="audio" :lrcType="0" 
     style="position:fixed;top:178px;z-index:999"/></div>
     <el-button plain style="display:none"> 可自动关闭 </el-button>
   <router-view v-if="isRouterAlive"></router-view>
   
  </div>
</template>

<script>

export default {
  name: 'APP',
  provide(){//父组件中通过provide来提供变量，在子组件中通过inject来注入变量。 
    return{
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true,  //控制视图是否显示的变量

      //音乐播放器数据
      audio: [
        {
          name: 'Heartless',//歌名
          artist: 'Jacob Tillberg',//歌手
          url: 'http://cdn.acgproject.cn/Jacob%20Tillberg%20-%20Heartless.mp3',//音乐地址
          cover: 'http://cdn.acgproject.cn/HEARTLESS.jpg', //音乐封面
          lrc: '',//歌词 默认无
        },
        {
          name: 'VOODOO KINGDOM',
          artist: '迪奥·布兰多',
          url: 'http://cdn.acgproject.cn/Dio%E5%A4%84%E5%88%91%E6%9B%B2.mp3',
          cover: 'http://cdn.acgproject.cn/DIO.gif',
          lrc: '',
        },
        {
          name: 'Bloody Stream',
          artist: '乔瑟夫·乔斯达',
          url: 'http://cdn.acgproject.cn/Bloody%20Stream.mp3',
          cover: 'http://cdn.acgproject.cn/NICE.gif',
          lrc: '',
        },
        {
          name: '高潔なる教皇',
          artist: '花京院典明',
          url: 'http://cdn.acgproject.cn/%E9%AB%98%E6%B4%81%E7%9A%84%E6%B3%95%E7%9A%87.mp3',
          cover: 'http://cdn.acgproject.cn/REOREO.gif',
          lrc: '',
        },
        {
          name: 'il vento doro',
          artist: '乔鲁诺·乔巴拿',
          url: 'http://cdn.acgproject.cn/il%20vento%20d%27oro.mp3',
          cover: 'http://cdn.acgproject.cn/PR.gif',
          lrc: '',
        },
        {
          name: 'RAGE OF DUST',
          artist: '卡其·脱离太',
          url: 'http://cdn.acgproject.cn/%E5%8D%A1%E5%85%B6%E8%84%B1%E7%A6%BB%E5%A4%AA.mp3',
          cover: 'http://cdn.acgproject.cn/COKO.GIF',
          lrc: '',
        },
        {
          name: 'Brain Power',
          artist: 'Neko',
          url: 'http://cdn.acgproject.cn/%E8%90%9D%E5%8D%9C%E5%A4%B4.mp3',
          cover: 'http://cdn.acgproject.cn/NEKO.gif',
          lrc: '',
        },
        {
          name: 'Dont say lazy',
          artist: '桜高軽音部',
          url: 'http://cdn.acgproject.cn/%E8%BD%BB%E9%9F%B3%E5%B0%91%E5%A5%B3.mp3',
          cover: 'http://cdn.acgproject.cn/QYSN.gif',
          lrc: '',
        },
        {
          name: 'ミスターフィクサー',
          artist: 'Sou',
          url: 'http://cdn.acgproject.cn/%E5%BC%82%E5%BA%A6%E4%BE%B5%E5%85%A5.mp3',
          cover: 'http://cdn.acgproject.cn/YDQR.png',
          lrc: '',
        },
      ],
    };
  },

  methods: {
    //组件刷新
    reload () {
        this.isRouterAlive = false;            //先关闭，
        this.$nextTick(function () {
            this.isRouterAlive = true;         //再打开
        }) 
    },
    //提示弹框
    tips() {
        const h = this.$createElement;
        this.$notify({
          title: 'Ohhhhhhh',
          message: h('i', { style: 'color: teal'}, '欢迎来到我的草窝    ヾ(ﾟ∀ﾟゞ)'),
          offset: 100,
          showClose: false
        });
    },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  
  created () {
    
      //Live2D导入
      setTimeout(() => {
          window.L2Dwidget.init({
          pluginRootPath: 'http://cdn.acgproject.cn/static/Live2D/',
          pluginJsPath: 'http://cdn.acgproject.cn/static/Live2D/lib/',
          pluginModelPath: 'http://cdn.acgproject.cn/static/Live2D',
          tagMode: true,
          debug: false,
          model: { scale: 1.0,jsonPath: 'http://cdn.acgproject.cn/static/Live2D/niepudun/model.json' },
          display: { position: 'left', width: 320, height:390 ,hOffset: -50,vOffset:-50},
          mobile: { show: true },
          log: true
          })
      }, 1000)
      console.log = function() {}
  },
 
  mounted() {
    this.tips();
    if (this._isMobile()) {
      alert("在做了在做了，建好文件夹了");
      this.$router.replace('/PhonePage');
    } else {
      this.$router.replace('/HomePage');
    }
  }
}


</script>

<style scoped>

</style>