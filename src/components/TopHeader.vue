<template>
    <div id='Top' v-bind:style="{'backgroundImage':'url(' +msg.TopImg+ ')'}">
        <div id='Nav' >
            <div style='margin-left:180px'>
                <ul>
                    <li class='One'>
                        <router-link to="/HomePage" active-class="span">
                            <span>主站</span>
                        </router-link>
                    </li>
                    <li class='One'><a href=''>动漫</a>
                        <ul>
                        <router-link to="/test" active-class="span">
                            <li><span>收录</span></li>
                        </router-link>
                        </ul>
                    </li>
                    <li class='One'><a href=''>创意</a>
                        <ul>
                            <router-link to="/Radar" active-class="span">
                                <li><span>雷达</span></li>
                            </router-link>
                            <router-link to="/Ball" active-class="span">
                                <li><span>小球</span></li>
                            </router-link>
                        </ul>
                    </li>
                    <li class='One'>
                        <router-link to="/ImageHouse" active-class="span">
                            <span>图库</span>
                        </router-link>
                        <ul>
                            <li><span>3.1</span></li>
                            <li><span>3.2</span></li>
                            <li><span>3.3</span></li>
                        </ul>
                    </li>
                    <li class='One'><a href=''>日记</a>
                        <ul>
                            <li><span>4.1</span></li>
                            <li><span>4.2</span></li>
                        </ul>
                    </li>
                    <li class='One'>
                        <router-link to="/UserLogin" active-class="span">
                            <span>登陆</span>
                        </router-link>
                        <ul>
                            <router-link to="/UserRegister" active-class="span">
                            <li><span>注册</span></li>
                            </router-link>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id='kuang' v-bind:style="{'backgroundImage':'url(' +msg.TopNavImg+ ')'}"></div>
        </div>
        <a href='index.html'><img id='Logo' v-bind:src="msg.Logo"></a>
    </div>
    
</template>

<script>
    export default{
        name:"TopHeader",
        props:['msg'],
        data(){
            return{

            }   
        },
        methods:{

            //下拉菜单
            nav(){
                var nav = document.getElementById('Nav');
                var lis = nav.getElementsByClassName('One');
                //alert(lis[0].NodeName);
                for (var i = 0; i < lis.length; i++) {
                    lis[i].onmouseover = function () {
                        var ul = this.getElementsByTagName('ul')[0];
                        if (ul) {
                            ul.style.display = "block";
                        }
                    }
                }
                for (var ii = 0; ii < lis.length; ii++) {
                    lis[ii].onmouseout = function () {
                        var ul = this.getElementsByTagName('ul')[0];
                        if (ul) {
                            ul.style.display = "none";
                        }
                    }
                }
            },


            
        },
        
        mounted: function(){
            this.nav();
            this.utils.logo();
        },

    }
</script>

<style>

    body{background:#EEFCFF;width:100%;margin: 0 auto;}

    *{margin:0;padding:0;border:0;}

    .span{color: white} 

    #Logo{
        position: absolute;
        top:65px;
        left:180px;
    }
    #Top{
        z-index: 5;
        background-size:cover;
        background-repeat: no-repeat;
        background-position:center top;
        height:179px;

    }
    #Nav{
        position:relative;
        background-color:rgba(225,225,225,0.9);
        height:48px;
        width:100%;
        margin:auto;
        text-align:center;
        z-index:1;
        box-shadow: 0px 2px 5px #7d7d7d;
    }
    #kuang{
        position:relative;
        /* background:url(../assets/Images/banner-48.png)no-repeat center top; */
        width:100%;
        height:48px;
        filter: blur(10px);
        z-index:-1;
    }

    #Float{
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
    #Float li{
        font-size:15px;
        position:relative;
        width:80px;
        line-height:40px;
        text-align:center;
        margin-top:10px;
    }
    ul{list-style:none;}
    a{text-decoration:none;}
    /* a:visited {color: black;} */
    .One a{text-decoration:none;display:block;padding:0,20px;transition:all ease 0.3s;}
    .One a:hover{color:black;background-color:#ecf0f4;background:rgba(245,245,245,0.6);box-shadow: 0px 1px 5px #8f8f8f;}
    .Two a{text-decoration:none;display:block;padding:0,20px;transition:all ease 0.3s;}
    .Two a:hover{color:white;background-color:#87CEFF;}
    #Nav ul li{position:relative;float:left;width:100px;line-height:48px;text-align:center;}
    #Nav ul li ul{position:absolute;left:0px;top:48px;display:none;}
    #Nav ul li ul li{float:none;background-color:rgba(255,250,250,0.9);margin-top:0px;}
</style>