<template>
    <div id='Navigatio'>
        <ul>
            <li class='Two'><router-link to="/HomePage" active-class="span">主站</router-link></li>
            <li class='Two'><a href='http://www.bilibili.com'>B站</a></li>
            <li class='Two'><a href='http://www.pcrdfans.com/battle'>公主</a></li>
            <li class='Two'><a href='http://www.baidu.com'>百度</a></li>
            <li class='Two'><a href='http://www.mail.qq.com'>邮箱</a></li>
            <li class='Two'><a href='http://www.youtube.com/'>油管</a></li>
            <li class='Two'><a href='http://live.bilibili.com/p/eden/area-tags?parentAreaId=1&areaId=199'>直播</a></li>
            <li class='Two'><a href='http://github.com/'>GIT</a></li>
            <li class='Two'><a href='http://console.cloud.tencent.com/cvm/instance/index?rid='>实例</a></li>
            <li class='Two'><router-link to="/UserLogin" active-class="span">登录</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Navigatio",
  data() {
    return {}
  },
    methods:{

        //浮动栏滚动适配
        input() {
            var Navigatio = document.getElementById('Navigatio');
            var marginTop = document.documentElement.scrollTop;
            if (marginTop > 80) {
                Navigatio.style.top = "13%"
            } else if (marginTop <= 80) {
                Navigatio.style.top = "28%"
            };
        },

        //检测页面高度并调整
        GetWindowHeight(){
            var WindowHeight=window.screen.height;
            if (WindowHeight < 1000){
                Navigatio.style.cssText="zoom: 0.9;left: 84%;";
            }else{
                Navigatio.style.cssText="zoom: 1;";
            }
        }

    },
    mounted:function(){
        this.timer = setInterval(this.input, 10);
        this.GetWindowHeight();
    }
}
</script>

<style>
    #Navigatio{
        zoom:1;
        border:1px solid #EAEAEA;
        border-radius:5px;
        left: 86%;
        top:28%;
        width:80px;
        height:510px;
        background-color: #FFFFFF;
        position: fixed;
        z-index: 5;
        
    }
    #Navigatio li{
        font-size:15px;
        position:relative;
        width:80px;
        line-height:40px;
        text-align:center;
        margin-top:10px;
        transition: all ease 0.3s;
    }
    #Navigatio li:hover {
      background: rgba(245, 245, 245, 0.6);
      box-shadow: 0px 1px 4px #a5c8fd;
    }
    
</style>