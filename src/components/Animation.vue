<template>
  <div class="company">
    <h1 class="TextA">{{TextA}}</h1>
    <h2 class="TextB">{{TextB}}</h2>
    <h1 class="TextC">{{TextC}}</h1>
    <h2 class="TextD">{{TextD}}</h2>
    <h1 class="TextE">{{TextE}}</h1>
    <h2 class="TextF">{{TextF}}</h2>
    <h1 class="TextG">{{TextG}}</h1>
    <h2 class="TextH">{{TextH}}</h2>
    <h1 class="TextI">{{TextI}}</h1>
    <h2 class="TextJ">{{TextJ}}</h2>
    <h1 class="TextK">{{TextK}}</h1>
    <h2 class="TextL">{{TextL}}</h2>
  </div>
</template>

<script>
export default {
  name: "Animation",
  data() {
    return {
        TextA:'我曾踏足山巅，也曾进入低谷，二者都让我受益良多',
        TextB:'--瓦罗兰之盾·塔里克',
        TextC:'大智若愚，大巧若拙，知其愚者非大愚也，知其惑者非大惑也',
        TextD:'--庄子',
        TextE:'我们并不因罪恶而受罚，而是罪恶本身会惩罚我们',
        TextF:'--阿尔伯特·哈伯德',
        TextG:'离群索居者 非神即兽',
        TextH:'--亚里士多德',
        TextI:'何以与君识？无言泪千行',
        TextJ:'--拜伦',
        TextK:'无论刮风还是下雨，太阳照常升起',
        TextL:'--曙光女神·蕾欧娜'
    };
  },
  methods: {

    }
};
</script>

<style scoped>

.company {
  overflow: hidden;
  width: 100%;
  height: 825px;
  margin: 0 auto;
}

@keyframes TextA {
  0% {transform: translateY(-500px);opacity: 0;}
  50% {transform: translateX(250px);opacity: 1;color:rgb(78, 215, 233)}
  100% {transform: translateX(2000px)translateY(1500px);opacity: 0;color:black}
}
@keyframes TextB {
  0% {transform: translateY(2000px);opacity: 0;}
  50% {transform: translateX(900px);opacity: 1;color:rgb(78, 215, 233)}
  100% {transform: translateX(2000px)translateY(-500px);opacity: 0;color:black}
}
.TextA {
  margin-top: 3%;
  animation: TextA 9s ease-in-out 1;
  animation-iteration-count: infinite;
}
.TextB {
  margin-top: 1%;
  animation: TextB 9s ease-in-out 1;
  animation-iteration-count: infinite;
}


@keyframes TextC {
  0% {transform: translateX(-500px);opacity: 0;}
  50% {transform: translateX(600px);opacity: 1;color:rgb(253, 202, 92)}
  100% {transform: translateX(2000px);opacity: 0;color:black}
}
@keyframes TextD {
  0% {transform: translateX(2000px);opacity: 0;}
  50% {transform: translateX(1400px);opacity: 1;color:rgb(253, 202, 92)}
  100% {transform: translateX(-500px);opacity: 0;color:black}
}
.TextC {
  opacity: 0;
  margin-top: 5%;
  animation: TextC 12s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:3s;
}
.TextD {
  opacity: 0;
  margin-top: 1%;
  animation: TextD 12s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:3s;
}

@keyframes TextE {
  0% {transform: translateY(-500px);opacity: 0;}
  50% {transform: translateX(700px);opacity: 1;color:rgb(204, 82, 82)}
  100% {transform: translateY(2000px);opacity: 0;color:black}
}
@keyframes TextF {
  0% {transform: translateY(2000px);opacity: 0;}
  50% {transform: translateX(1400px);opacity: 1;color:rgb(204, 82, 82)}
  100% {transform: translateY(-500px);opacity: 0;color:black}
}
.TextE {
  opacity: 0;
  margin-top: 5%;
  animation: TextE 10s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:2s;
}
.TextF {
  opacity: 0;
  margin-top: 1%;
  animation: TextF 10s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:2s;
}


@keyframes TextG {
  0% {transform: translateY(-500px);opacity: 0;}
  50% {transform: translateX(500px);opacity: 1;color:rgb(0, 170, 37)}
  100% {transform: translateX(2000px)translateY(2000px);opacity: 0;color:black}
}
@keyframes TextH {
  0% {transform: translateY(2000px);opacity: 0;}
  50% {transform: translateX(800px);opacity: 1;color:rgb(0, 170, 37)}
  100% {transform: translateY(-500px);opacity: 0;color:black}
}
.TextG {
  opacity: 0;
  margin-top: 2%;
  animation: TextG 8s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:4s;
}
.TextH {
  opacity: 0;
  margin-top: 1%;
  animation: TextH 8s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:4s;
}


@keyframes TextI {
  0% {transform: translateX(2000px)translateY(-500px);opacity: 0;}
  50% {transform: translateX(1200px);opacity: 1;color:rgb(8, 218, 190)}
  100% {transform: translateY(1200px)translateX(100px);opacity: 0;color:black}
}
@keyframes TextJ {
  0% {transform: translateX(2000px)translateY(2000px);opacity: 0;}
  50% {transform: translateX(1500px);opacity: 1;color:rgb(8, 218, 190)}
  100% {transform: translateY(-500px);opacity: 0;color:black}
}
.TextI {
  opacity: 0;
  margin-top: -30%;
  animation: TextI 8s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:4s;
}
.TextJ {
  opacity: 0;
  margin-top: 1%;
  animation: TextJ 8s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:4s;
}


@keyframes TextK {
  0% {transform: translateX(1800px)translateY(-400px);opacity: 0;}
  50% {transform: translateX(50px);opacity: 1;color:rgb(247, 168, 230)}
  100% {transform:  translateX(-2000px)translateY(2000px);opacity: 0;color:black}
}
@keyframes TextL {
  0% {transform: translateY(1800px)translateX(2000px);opacity: 0;}
  50% {transform: translateX(480px);opacity: 1;color:rgb(247, 168, 230)}
  100% {transform:translateY(-500px);opacity: 0;color:black}
}
.TextK {
  opacity: 0;
  margin-top: 12%;
  animation: TextK 9s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:7s;
}
.TextL {
  opacity: 0;
  margin-top: 1%;
  animation: TextL 9s ease-in-out 1;
  animation-iteration-count: infinite;
  animation-delay:7s;
}

</style>