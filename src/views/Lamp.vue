<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>

    <div id="Lamp" class="Lamp">

        <div class="nixcont">

            <div class="nixpair">

                <div class="nixbg">
                    <div id="nix_h1_0" class="nix">0</div>
                    <div id="nix_h1_1" class="nix">1</div>
                    <div id="nix_h1_2" class="nix">2</div>
                    <div id="nix_h1_3" class="nix">3</div>
                    <div id="nix_h1_4" class="nix">4</div>
                    <div id="nix_h1_5" class="nix">5</div>
                    <div id="nix_h1_6" class="nix">6</div>
                    <div id="nix_h1_7" class="nix">7</div>
                    <div id="nix_h1_8" class="nix">8</div>
                    <div id="nix_h1_9" class="nix">9</div>
                </div>

                <div class="nixbg">
                    <div id="nix_h2_0" class="nix">0</div>
                    <div id="nix_h2_1" class="nix">1</div>
                    <div id="nix_h2_2" class="nix">2</div>
                    <div id="nix_h2_3" class="nix">3</div>
                    <div id="nix_h2_4" class="nix">4</div>
                    <div id="nix_h2_5" class="nix">5</div>
                    <div id="nix_h2_6" class="nix">6</div>
                    <div id="nix_h2_7" class="nix">7</div>
                    <div id="nix_h2_8" class="nix">8</div>
                    <div id="nix_h2_9" class="nix">9</div>
                </div>

            </div>


            <div class="nixpair">

                <div class="nixbg">
                    <div id="nix_m1_0" class="nix">0</div>
                    <div id="nix_m1_1" class="nix">1</div>
                    <div id="nix_m1_2" class="nix">2</div>
                    <div id="nix_m1_3" class="nix">3</div>
                    <div id="nix_m1_4" class="nix">4</div>
                    <div id="nix_m1_5" class="nix">5</div>
                    <div id="nix_m1_6" class="nix">6</div>
                    <div id="nix_m1_7" class="nix">7</div>
                    <div id="nix_m1_8" class="nix">8</div>
                    <div id="nix_m1_9" class="nix">9</div>
                </div>

                <div class="nixbg">
                    <div id="nix_m2_0" class="nix">0</div>
                    <div id="nix_m2_1" class="nix">1</div>
                    <div id="nix_m2_2" class="nix">2</div>
                    <div id="nix_m2_3" class="nix">3</div>
                    <div id="nix_m2_4" class="nix">4</div>
                    <div id="nix_m2_5" class="nix">5</div>
                    <div id="nix_m2_6" class="nix">6</div>
                    <div id="nix_m2_7" class="nix">7</div>
                    <div id="nix_m2_8" class="nix">8</div>
                    <div id="nix_m2_9" class="nix">9</div>
                </div>

            </div>


            <div class="nixpair">

                <div class="nixbg">
                    <div id="nix_s1_0" class="nix">0</div>
                    <div id="nix_s1_1" class="nix">1</div>
                    <div id="nix_s1_2" class="nix">2</div>
                    <div id="nix_s1_3" class="nix">3</div>
                    <div id="nix_s1_4" class="nix">4</div>
                    <div id="nix_s1_5" class="nix">5</div>
                    <div id="nix_s1_6" class="nix">6</div>
                    <div id="nix_s1_7" class="nix">7</div>
                    <div id="nix_s1_8" class="nix">8</div>
                    <div id="nix_s1_9" class="nix">9</div>
                </div>

                <div class="nixbg">
                    <div id="nix_s2_0" class="nix">0</div>
                    <div id="nix_s2_1" class="nix">1</div>
                    <div id="nix_s2_2" class="nix">2</div>
                    <div id="nix_s2_3" class="nix">3</div>
                    <div id="nix_s2_4" class="nix">4</div>
                    <div id="nix_s2_5" class="nix">5</div>
                    <div id="nix_s2_6" class="nix">6</div>
                    <div id="nix_s2_7" class="nix">7</div>
                    <div id="nix_s2_8" class="nix">8</div>
                    <div id="nix_s2_9" class="nix">9</div>
                </div>

            </div>
        </div>
    </div>
    <!-- <Footer></Footer> -->
    <Navigatio></Navigatio>
  </div>

</template>

<script>
import TopHeader from '@/components/TopHeader'
import Navigatio from '@/components/Navigatio'
export default {
  name: 'Lamp',
  data(){
    return{
      classList:null,
      PhotoMsg:{
        TopImg:"https://cdn.acgproject.cn/banner-9.png",
        TopNavImg:"https://cdn.acgproject.cn/banner-9.png",
        Logo:"https://cdn.acgproject.cn/logo-9.png",
      }
    }
  },
  methods:{
        LampHeight(){
            var Height=this.utils.AutoHeight();
            var LampHeight=document.getElementById("Lamp");
            LampHeight.style.cssText="height:"+Height+"px;";
        },

        set_nix_class(target, val) {
            for (var i = 0; i < 10; i++) {
                if (i != val) {
                    this.rem_class("nix_" + target + "_" + i, "nix_open");
                }
            }
            this.add_class("nix_" + target + "_" + val, "nix_open");
        },

        tog_class(id, cl,classList) {
            var elem = document.getElementById(id);
            if (elem.classList.contains(cl) === true) {
                elem.classList.remove(cl);
            } else {
                elem.classList.add(cl);
            }
        },

        add_class(id, cl,classList) {
            var elem = document.getElementById(id);
            if (elem.classList.contains(cl) !== true) {
                elem.classList.add(cl);
            }
        },

        rem_class(id, cl,classList) {
            var elem = document.getElementById(id);
            if (elem.classList.contains(cl) === true) {
                elem.classList.remove(cl);
            }
        },

        startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();

            var h1 = (h - h % 10) / 10;
            var h2 = h % 10;

            var m1 = (m - m % 10) / 10;
            var m2 = m % 10;

            var s1 = (s - s % 10) / 10;
            var s2 = s % 10;

            this.set_nix_class("s1", s1);
            this.set_nix_class("s2", s2);

            this.set_nix_class("m1", m1);
            this.set_nix_class("m2", m2);

            this.set_nix_class("h1", h1);
            this.set_nix_class("h2", h2);

            var t = setTimeout(this.startTime, 500);
        },
  },
    mounted:function(){
        this.startTime();
        this.LampHeight();
  },
  components:{
    TopHeader,
    Navigatio,
  }
}
</script>

<style scoped>
        .Lamp{
            background: black;
        }

        .nixcont {
            zoom:1.5;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
            overflow: hidden;
        }

        .nixcont {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }


        .nixpair {
            padding: 0px 5px;
            float: left;
            height: 100px;
            pointer-events: none;
        }

        .nixbg {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 70px;
            box-sizing: border-box;
            position: relative;
            height: 80px;
            line-height: 80px;
            width: 50px;
            float: left;
            border-radius: 20px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            padding-top: 8px;
            margin: 0px 5px;
            box-shadow: inset 0px 1px 3px 2px rgba(90, 0, 0, 0.9), inset 0px 2px 2px 3px rgba(230, 220, 0, 1), inset 0px 4px 4px 3px rgba(255, 0, 0, 0.9);
            background-image: url("../assets/Images/lamp.png"), -webkit-linear-gradient(top, rgba(35, 20, 40, 0.7), rgba(35, 20, 40, 0.5), rgba(35, 20, 110, 0.7));
            background-image: url("../assets/Images/lamp.png"), -moz-linear-gradient(top, rgba(35, 20, 40, 0.7), rgba(35, 20, 40, 0.5), rgba(35, 20, 110, 0.7));
            background-image: url("../assets/Images/lamp.png"), -ms-linear-gradient(top, rgba(35, 20, 40, 0.7), rgba(35, 20, 40, 0.5), rgba(35, 20, 110, 0.7));
            background-image: url("../assets/Images/lamp.png"), -o-linear-gradient(top, rgba(35, 20, 40, 0.7), rgba(35, 20, 40, 0.5), rgba(35, 20, 110, 0.7));
            background-image: url("../assets/Images/lamp.png"), linear-gradient(top, rgba(35, 20, 40, 0.7), rgba(35, 20, 40, 0.5), rgba(35, 20, 110, 0.7));
            background-repeat: repeat, no-repeat;
            background-size: 12px, 100%;
        }
        .nixbg:after {
            content: '';
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 20%;
            background-color: gray;
            border-bottom-left-radius: 35%;
            border-bottom-right-radius: 35%;
            background-image: -webkit-radial-gradient( 40% 100%, #ea4 0%, #f93 15%, #caa 50%, #778 75%, #345 100% );
            background-image: -moz-radial-gradient( 40% 100%, #ea4 0%, #f93 15%, #caa 50%, #778 75%, #345 100% );
            background-image: -ms-radial-gradient( 40% 100%, #ea4 0%, #f93 15%, #caa 50%, #778 75%, #345 100% );
            background-image: -o-radial-gradient( 40% 100%, #ea4 0%, #f93 15%, #caa 50%, #778 75%, #345 100% );
            background-image: radial-gradient( 40% 100%, #ea4 0%, #f93 15%, #caa 50%, #778 75%, #345 100% );
        }
        .nixbg .nix {
            width: 100%;
            text-align: center;
            position: absolute;
            color: rgba(60, 40, 20, 1 );
            pointer-events: none;
            transition: color 0.5s, text-shadow 0.5s;
            transition-timing-function: ease-out;
        }
        .nixbg .nix_open {
            transition: color 0.2s, text-shadow 0.2s;
            transition-timing-function: ease-out;
            color: transparent;
            text-shadow: 0 0 1px rgba(254, 252, 124, 1 ), 0 0 3px rgba(255, 217, 54, 0.7 ), 0 0 5px rgba(255, 0, 0, 1 ), 0 0 14px rgba(255, 0, 0, 1 ), 0 0 17px rgba(255, 0, 0, 1 ), 0 0 20px rgba(255, 0, 0, 1 ), 0 5px 25px rgba(0, 0, 255, 0.9 );
            font-weight: 300;
            z-index: 10;
        }
</style>