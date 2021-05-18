<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>

 
    <Footer></Footer>
    <Navigatio style="display:none"></Navigatio>
  </div>
</template>

<script>
export default {
  name: "AnimeAdd",
  data() {
    return {

    };
  },
  created() {

  },
  methods: {
    setUsername(){
        let myName = prompt('请输入你的名字。');
        localStorage.setItem('name', myName);
        alert(localStorage.myName)
    }
  },
  mounted: function () {
    this.setUsername()
  },
};
</script>