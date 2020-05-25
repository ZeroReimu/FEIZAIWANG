<template>
    <div id='Navigatio'>
        <ul>
            <li class='Two'><router-link to="/HomePage" active-class="span">主站</router-link></li>
            <li class='Two'><a href=''>动画</a></li>
            <li class='Two'><a href=''>音乐</a></li>
            <li class='Two'><a href=''>游戏</a></li>
            <li class='Two'><a href=''>鬼畜</a></li>
            <li class='Two'><a href=''>专业</a></li>
            <li class='Two'><a href=''>东方</a></li>
            <li class='Two'><a href=''>课程</a></li>
            <li class='Two'><a href=''>谨记</a></li>
            <li class='Two'><a href=''>心得</a></li>
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
        //浮动栏适配
        input() {
            var Navigatio = document.getElementById('Navigatio');
            var marginTop = document.documentElement.scrollTop;
            if (marginTop > 80) {
                Navigatio.style.top = "13%"
            } else if (marginTop <= 80) {
                Navigatio.style.top = "28%"
            };
        }
    },
    mounted:function(){
        //setInterval('input();', 10);
        this.timer = setInterval(this.input, 10);
    }
};
</script>

<style>
    #Navigatio{
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
    }
</style>