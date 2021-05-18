<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <router-view></router-view>
    <Footer style="position: relative;padding-bottom:15px;bottom:0"></Footer>

    <Navigatio></Navigatio>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import Navigatio from "@/components/Navigatio";
import Footer from "@/components/Footer";
export default {
  name: "Anime",
  data() {
    return {
      PhotoMsg: {
        TopImg: "https://cdn.acgproject.cn/banner-10.png",
        TopNavImg: "https://cdn.acgproject.cn/banner-10.png",
        Logo: "https://cdn.acgproject.cn/logo-10.png",
      },
      total:null,
      tableData: [
        {
          year: null,
        },
      ],
    };
  },
  created() {

    const _this = this;
    axios.get("https://acgproject.cn:8181/anime/findAll/1/999").then(function (resp) {
      // console.log(resp.data);
      _this.tableData = resp.data.content;
      _this.total = resp.data.totalElements
    });
  },
  methods: {
    page(currentPage){
      const _this = this;
      axios.get("https://acgproject.cn:8181/anime/findAll/"+currentPage+"/8").then(function (resp) {
      console.log(resp.data);
      _this.tableData = resp.data.content;
      _this.total = resp.data.totalElements
    });
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterScore(value, row) {
      return row.score === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
  components: {
    TopHeader,
    Navigatio,
    Footer,
  },
};
</script>

<style scoped>
</style>