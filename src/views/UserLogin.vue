<template>
  <div>
    <TopHeader :msg="UserLoginMsg"></TopHeader>
      <div id="zhong2">

        <div id="zhongxia">
            <div id="zhongxiaziti"><br>

                <p align="center">
                    <font size="+3">登陆</font>
                </p><br>

                <div class="Box1">
                    <div class="One1">
                        <label for="name"></label>

                        <input type="text" id="Input1" name="name" placeholder="  账号/邮箱/手机" autocomplete="off"
                            maxlength="20">

                        <i>&nbsp;</i>
                    </div>
                </div>

                <div class="Box2">
                    <div class="One1" style="margin-top:45px">
                        <label for="password"></label>
                        <input id="Input2" type="password" placeholder="  密码(6-16个字符组成，区分大小写)" autocomplete="off"
                            maxlength="20">
                    </div>
                </div>

                <div>
                    <p align="center" style="margin-top:45px">
                    <input id="cxx" placeholder="  请输入邀请码" style="padding-left:15px;height:42px; width:435px; border:1px #C7C7C7 solid; border-radius: 3px;">
                    <input id="bxx" type="submit" value="自动认证" class="FONT1" >
                    </p>
                    <br><br>
                </div>
                <p align="center"><input type="checkbox">
                    <font color="black " size="-1" face="Lucida Console">我已同意</font>
                        <font color="#6DD2F7" size="-1" face="Lucida Console">《哔哩哔哩弹幕网用户使用协议》</font>和
                        <font color="#6DD2F7" size="-1" face="Lucida Console">《哔哩哔哩弹幕网账号中心规范》</font>
                </p>
                <br><br><br>
                <center><input id="axx" type="submit" value="立即登录" class="FONT2"></center>     
            </div>
        </div>
    </div>
    <div id="Erweima">
        <img v-bind:src="QRcode" style="margin-left: 170px"><br>
        <img v-bind:src="twothree">
    </div>
    <div id="Erweikuang">
        <p style="font-size:20px;">扫描二维码登陆</p>
        <br>
        <p style="font-size:15px;color:gray">请使用
        <a href="https://app.bilibili.com/" style="color:#6DD2F7">哔哩哔哩客户端</a>
        <br>扫码登录<br>或扫码下载APP
        </p>
    </div>
    <Navigatio></Navigatio>
    <Footer></Footer>
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
  components:{
    TopHeader,
    Navigatio,
    Footer,
  },
}
</script>

<style scoped>
  @import "../assets/Css/Input.css";
  #Top {
      /* background: url(../assets/Images/banner-8.png) no-repeat center top; */
      background-size: cover;
  }
  div >>> #Footer {
      margin-top: 328px;
  }
  #Erweima {
      margin-top: -10px;
      margin-left: 60px;
  }

  #Erweikuang {
      width: 200px;
      height: 50px;
      margin-top: -150px;
      margin-left: 200px;
      text-align: center;
  }
  .One1 {
      margin-left: 310px;
  }
  .One1.right i {
      width: 20px;
      height: 20px;
      position: absolute;
      float: right;
      margin: 13px auto auto 10px;
  }
  ;
  .One1 label {
      width: 85px;
      height: 14px;
      padding: 20px;
  }
  .One1 input {
      font-size: 16px;
  }
  .Msg {
      width: 500px;
      height: 32px;
      font-size: 17px;
      line-height: 32px;
      margin: 4px auto 6px 320px;
  }
  #Footer{
      margin-top:350px;
  }
</style>
