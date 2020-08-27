<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>

    <div id="main">

        <div>

            <div>
                <p><font size="+3" color="black">加入我们</font></p>

                <div>
                    <input id="username" type="text" name="name" placeholder="昵称(例：哔哩哔哩)" maxlength="20">
                </div>

                <div>
                    <input id="password" type="password" placeholder="密码(6-16个字符组成，区分大小写)" maxlength="20">
                </div>

                <div>
                    <select name="cars">
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
                    <input id="phone" type="text" placeholder="  填写常用手机号哟">
                </div>

                <p class="email" align="right">
                    <font size="-1" color="#1DA3F8">
                    <a href="https://passport.bilibili.com/register/mail.html">用邮箱注册>></a></font>
                </p>

                <div>
                    <div id="code">
                        <input placeholder="  请输入邀请码">
                        <input type="submit" value="点击获取" class="button" >
                    </div>
                </div>

                <p class="msg"><input type="checkbox">
                    <font color="black"   size="-1" face="Lucida Console">我已同意</font>
                    <font color="#6DD2F7" size="-1" face="Lucida Console">《哔哩哔哩弹幕网用户使用协议》</font>
                    <font color="black"   size="-1" face="Lucida Console">和</font>
                    <font color="#6DD2F7" size="-1" face="Lucida Console">《哔哩哔哩弹幕网账号中心规范》</font>
                </p>

                <center><input class="loginbutton" type="submit"  value="立即注册" @click="register"></center>

            </div>

        </div>
        
    </div>

    <main id="drink" style="position:absolute;top:330px;">
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

    
    <Footer></Footer>
    <Navigatio></Navigatio>
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
      PhotoMsg:{
        TopImg:"http://cdn.acgproject.cn/banner-5.png",
        TopNavImg:"http://cdn.acgproject.cn/banner-5.png",
        Logo:"http://cdn.acgproject.cn/logo-5.png",
      }
    }
  },
  methods:{
    //检测页面高度并调整
    GetWindowHeight(){
        var WindowHeight=window.screen.height;
        var RegisterBody=document.getElementById("main");
        if (WindowHeight < 1000){
            RegisterBody.style.cssText="zoom: 0.77;height:625px;margin-top:-20px;";
        }
    },
    register(){
        this.$message({
          message: '暂时不开放注册',
          type: 'warning'
        });
    }
  },
  mounted:function(){
      this.GetWindowHeight();
  },
  components:{
    TopHeader,
    Navigatio,
    Footer,
  }
}
</script>

<style scoped>
    @import "../assets/Css/Drink.css";
    #Top {
        background-size: cover;
    }

    #main{
        margin:0 auto;
        height: 690px;
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
        margin-top:60px;
        text-align: center;
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

    #phone{
        height:42px;
        width:330px;
        border:1px #C7C7C7 solid;
        border-radius: 3px;
        padding-left:15px;
    }

    select{
        height:44px;
        width:101px; 
        border:1px #C7C7C7 solid; 
        border-radius: 3px;
        margin-top: 45px;
    }

    .email{
        margin-right:300px; 
        margin-top:15px;
    }

    #code{
        margin-top:15px; 
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
        margin-top:40px;
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
