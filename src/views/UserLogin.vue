<template>
  <div>
    <TopHeader :msg="UserLoginMsg"></TopHeader>

    <div id="main">

        <div>

            <div>
                <p style="color:black"><font size="+3">登陆</font></p>

                <div>
                    <input id="username" type="text"  name="name" placeholder="账号/邮箱/手机" maxlength="20">
                </div>

                <div>
                    <input id="password" type="password" placeholder="密码(6-16个字符组成，区分大小写)" maxlength="20">
                </div>

                <div>
                    <div id="code">
                        <input placeholder="  请输入邀请码">
                        <input type="submit" value="自动认证" class="button" >
                    </div>
                </div>

                <p class="msg"><input type="checkbox">
                    <font color="black"   size="-1" face="Lucida Console">我已同意</font>
                    <font color="#6DD2F7" size="-1" face="Lucida Console">《哔哩哔哩弹幕网用户使用协议》</font>
                    <font color="black"   size="-1" face="Lucida Console">和</font>
                    <font color="#6DD2F7" size="-1" face="Lucida Console">《哔哩哔哩弹幕网账号中心规范》</font>
                </p>

                <center><input type="submit" value="立即登录" class="loginbutton"></center>   

            </div>

        </div>
                    
    </div>

    <div id="Erweima">
        <img v-bind:src="QRcode"><br>
        <img v-bind:src="twothree">
    </div>

    <div id="Erweikuang">
        <p style="font-size:20px;">扫描二维码登陆</p>
        <br>
        <p style="font-size:15px;color:gray">请使用<a href="https://app.bilibili.com/" style="color:#6DD2F7">哔哩哔哩客户端</a>
            <br>
            扫码登录
            <br>
            或扫码下载APP
        </p>
    </div>

    <Footer></Footer>

    <Navigatio></Navigatio>

  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
import Footer from '@/components/Footer'
export default {
  name: 'UserLogin',
  data(){
    return{
      QRcode:"http://cdn.acgproject.cn/QRcode.png",
      twothree:"http://cdn.acgproject.cn/logo2233.png",
      UserLoginMsg:{
        TopImg:"http://cdn.acgproject.cn/banner-8.png",
        TopNavImg:"http://cdn.acgproject.cn/banner-8.png",
        Logo:"http://cdn.acgproject.cn/logo-8.png",
      }
    };
  },
  methods:{
    //检测页面高度并调整
    GetWindowHeight(){
        var WindowHeight=window.screen.height;
        var ErweimaHeight=document.getElementById("Erweima");
        var ErweikuangHeight=document.getElementById("Erweikuang");
        var ErweikuangHeight=document.getElementById("main");
        if (WindowHeight > 1000){
            console.log(ErweikuangHeight.style);
            ErweimaHeight.style.cssText="zoom: 0.85;margin-top:5%";
            ErweikuangHeight.style.cssText="zoom: 0.85;margin-top:5%";
            ErweikuangHeight.style.cssText="height:600px";
        }
    },
  },
  mounted:function(){
      this.GetWindowHeight();
  },
  components:{
    TopHeader,
    Navigatio,
    Footer,
  },
}
</script>

<style scoped>
    #Top {
      background-size: cover;
    }

    #Erweima {
      top: 400px;
      left: 40px;
      position: absolute;
    }

    #Erweima :first-child{
      margin-left:35%;
    }

    #Erweikuang {
      width: 200px;
      height: 50px;
      top: 550px;
      left:8.7%;
      text-align: center;
      position: absolute;
    }

    #main{
        margin:0 auto;
        height: 685px;
        width: 1300px;
        font-family:"华文楷体";
        position: relative;
    }   

    #main> div{ 
        margin-left:80px;
        margin-top: 10px;
        width:1120px;
        height: 690px;
        text-align: center;
    }   

    #main> div > div{
        font-size: 18px;
        color: #6DD2F7;
        font-family: '华文楷体';
        text-indent: 1em;
        margin-top:65px;
    }   

    #main> div > div> .msg{
        margin-top:50px;
    }   

    input {
        font-size: 16px;
    }

    #username,#password{
        height:42px;
        width:435px;
        border:1px #C7C7C7 solid;
        border-radius: 3px;
        padding-left:15px;
        margin-top:45px;
    }   

    #code{
        margin-top:45px;
    }

    #code>input:first-child {
        padding-left:15px;
        height:42px; width:435px; 
        border:1px #C7C7C7 solid; 
        border-radius: 3px;
    }   

    .button {
        font-size:14px;
        color:#FFFFFF;
        width:126px;
        height:44.3px;
        background:#4FB9EC;
        margin-left:-130px;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0,0,0,.1);
        transition: all .5s;
        line-height: 2px;
    }   

    .button:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,.3);
    }   

    .loginbutton {
        margin-top:70px;
        font-size:17px;
        color:#FFFFFF;
        width:452px;
        height:42px;
        background:#4FB9EC;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0,0,0,.1);
        transition: all .5s;
    }   

    .loginbutton:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,.3);
    }
</style>
