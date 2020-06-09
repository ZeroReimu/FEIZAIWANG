<template>
  <div>
    <TopHeader :msg="UserRegisterMsg"></TopHeader>
        <div id="zhong2">

        <div id="zhongxia">
            <div id="zhongxiaziti"><br>

                <p align="center">
                    <font size="+3">加入我们</font>
                </p><br>

                <div class="Box1">
                    <div class="One1">
                        <label for="name"></label>

                        <input type="text" id="Input1" name="name" placeholder="  昵称(例：哔哩哔哩)" autocomplete="off"
                            maxlength="20">

                        <!-- <i>&nbsp;</i> -->
                    </div>
                    <div class="Msg">
                        <i style="margin-left:5px"></i>
                        <span></span>
                    </div>
                </div>

                <div class="Box2">
                    <div class="One1">
                        <label for="password"></label>

                        <input id="Input2" type="password" placeholder="  密码(6-16个字符组成，区分大小写)" autocomplete="off"
                            maxlength="20">

                        <!-- <i>&nbsp;</i> -->
                    </div>
                    <div class="Msg">
                        <i style="margin-left:5px"></i>
                        <span></span>
                    </div>
                </div>

                <div class="One1">
                    <select name="cars" style="height:41px; width:101px; border:1px #C7C7C7 solid; border-radius: 3px;">
                        <option value="1">中国大陆</option>
                        <option value="2">香港特别行政区</option>
                        <option value="3">澳门特别行政区</option>
                        <option value="4">美国</option>
                        <option value="5">比利时</option>
                        <option value="6">澳大利亚</option>
                        <option value="7">法国</option>
                        <option value="8">加拿大</option>
                        <option value="9">新加坡</option>
                        <option value="10">日本</option>
                        <option value="11">韩国</option>
                        <option value="12">马来西亚</option>
                    </select>
                    <input id="Input3" type="text" placeholder="  填写常用手机号哟">
                </div>
                <p align="right" style="margin-right:300px; margin-top:14px;">
                    <font size="-1" color="#1DA3F8">

                        <a href="https://passport.bilibili.com/register/mail.html">用邮箱注册>></a></font>
                </p>

                <p align="center" style="margin-top:15px"><input type="text" placeholder="  获取验证码"
                        style="height:42px; width:450px; border:1px #C7C7C7 solid; border-radius: 3px;">
                    <input id="xx" type="submit"  value="点击获取" class="FONT1"></p><br><br>

                <p align="center"><input type="checkbox">
                    <font size="-1" face="Lucida Console">我已同意<font color="#6DD2F7">《哔哩哔哩弹幕网用户使用协议》</font>和<font color="#6DD2F7">《哔哩哔哩弹幕网账号中心规范》</font></font>
                </p>
                <br><br><br>
                <center><input id="yy" type="submit"  value="立即注册" class="FONT2"></center>
            </div>
        </div>
    </div>

    <main>
        <div class="title">吸</div>
        <div class="gaizi"></div>
        <div class="beizi">
            <div class="water">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="xiguan1"></div>
        <div class="xiguan2"></div><br><br>
    <h1>肥宅快乐🍋水</h1>
    </main>

    <Navigatio></Navigatio>
    <Footer></Footer>
  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
import Footer from '@/components/Footer'
export default {
  name: 'UserRegister',
  data(){
    return{
      UserRegisterMsg:{
        TopImg:"http://cdn.acgproject.cn/banner-5.png",
        TopNavImg:"http://cdn.acgproject.cn/banner-5.png",
        Logo:"http://cdn.acgproject.cn/logo-5.png",
      }
    }
  },
  components:{
    TopHeader,
    Navigatio,
    Footer,
  }
}
</script>

<style scoped>
    @import "../assets/Css/Input.css";
    @import "../assets/Css/Drink.css";
    #Top {
        /* background: url(Images/banner-5.png) no-repeat center top; */
        background-size: cover;
    }
    div >>> #Footer {
        margin-top: 248px;
    }
    .One1 {
        margin-left: 310px;
    }
    .One1.error {
        border: thin solid #f00
    }
    .One1.right i {
        width: 20px;
        height: 20px;
        background: url(../assets/Images/Right.png) no-repeat;
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
    .Msg i {
        width: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px
    }
    .Msg span {
        color: #ccc;
        width: 200px
    }
    .Msg.default i {
        background: url(../assets/Images/Default.png)no-repeat center center;
        text-align: center
    }
    .Msg.hide {
        display: none
    }
    .Msg.error i {
        background: url(../assets/Images/Error.png)no-repeat center center;
        text-align: center
    }
    .Msg.error span {
        color: #f00;
    }
</style>
