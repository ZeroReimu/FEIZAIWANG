<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    1231232131231312313123213123123213123131231312321312312321312313123131232131231232131231312313123213
    <Footer style="position: relative;padding-bottom:15px;bottom:0"></Footer>

    <Navigatio></Navigatio>
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