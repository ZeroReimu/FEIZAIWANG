<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <div style="margin-top:20px;text-align:center;">
      <h2>番 剧 记 事 簿</h2>
      <div style="margin:30px 0px;">
        <el-button @click="resetDateFilter">清除日期过滤器</el-button>
        <el-button @click="clearFilter">清除所有过滤器</el-button>
      </div>
      <el-table ref="filterTable" :data="tableData" style="width: 50%;margin:0 auto;">
        <el-table-column
          prop="date"
          label=" 年 份"
          sortable
          width="300"
          column-key="date"
          :filters="[{text: '2019', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        ></el-table-column>
        <el-table-column prop="name" label="番 剧" width="300"></el-table-column>
        <el-table-column prop="address" label="主 要 角 色" :formatter="formatter"></el-table-column>
        <el-table-column
          prop="tag"
          label="标 签"
          width="100"
          :filters="[{ text: '公司', value: '公司' },{ text: '家', value: '家' },  { text: '12', value: '12' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="
              scope.row.tag === '日常' ? 'success' : 'success' && 
              scope.row.tag === '后宫' ? 'warning' : 'warning' && 
              scope.row.tag === '神作' ? 'danger' : 'danger' && 
              scope.row.tag === '战斗' ? 'info' : 'info' && 
              scope.row.tag === '恋爱' ? '' : '' 
              "
              disable-transitions
            >{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000" style="margin:30px 0"></el-pagination>
    </div>
    <Footer></Footer>

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
        TopImg: "http://cdn.acgproject.cn/banner-8.png",
        TopNavImg: "http://cdn.acgproject.cn/banner-8.png",
        Logo: "http://cdn.acgproject.cn/logo-8.png",
      },

      tableData: [
        {
          date: "2019年1月",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "日常",
        },
        {
          date: "2019年2月",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "恋爱",
        },
        {
          date: "2029年1月",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "后宫",
        },
        {
          date: "2013年1月",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "神作",
        },
        {
          date: "2019年5月",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "战斗",
        },
        {
          date: "2019年1月",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "暴击",
        },
        {
          date: "2019年2月",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "暴击",
        },
        {
          date: "2011年1月",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
        },
      ],
    };
  },
  methods: {
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