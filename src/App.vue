<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'APP',
  created () {
      setTimeout(() => {
          window.L2Dwidget.init({
          pluginRootPath: 'static/Live2D/',
          pluginJsPath: 'lib/',
          pluginModelPath: 'Live2D',
          tagMode: true,
          debug: true,
          model: { scale: 1.3,jsonPath: '../static/Live2D/niepudun/model.json' },
          display: { position: 'right', width: 280, height:350 ,hOffset: -10,vOffset: 0},
          mobile: { show: true },
          log: true
          })
      }, 1000)
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
