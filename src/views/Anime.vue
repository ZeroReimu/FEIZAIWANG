<template>
  <div>
    <TopHeader :msg="PhotoMsg"></TopHeader>
    <div style="margin-top:20px;text-align:center;">
      <h2>番 剧 记 事 簿</h2>
      <div style="margin:30px 0px;">
        <el-button @click="resetDateFilter">清除日期过滤器</el-button>
        <el-button @click="clearFilter">清除所有过滤器</el-button>
      </div>
      <el-table ref="filterTable" :data="tableData"  height="516" style="width: 50%;margin:0 auto;padding:0 10px">
        <el-table-column
          prop="year"
          label=" 年 份"
          sortable
          width="160"
          column-key="date"
          :filters="[
              {text: '2010年01月',value: '2010年01月'},
              {text: '2010年04月',value: '2010年04月'},
              {text: '2010年07月',value: '2010年07月'}, 
              {text: '2010年10月',value: '2010年10月'},
              {text: '2011年01月',value: '2011年01月'},
              {text: '2011年04月',value: '2011年04月'},
              {text: '2011年07月',value: '2011年07月'}, 
              {text: '2011年10月',value: '2011年10月'},
              {text: '2012年01月',value: '2012年01月'},
              {text: '2012年04月',value: '2012年04月'},
              {text: '2012年07月',value: '2012年07月'}, 
              {text: '2012年10月',value: '2012年10月'},
              {text: '2013年01月',value: '2013年01月'},
              {text: '2013年04月',value: '2013年04月'},
              {text: '2013年07月',value: '2013年07月'}, 
              {text: '2013年10月',value: '2013年10月'},
              {text: '2014年01月',value: '2014年01月'},
              {text: '2014年04月',value: '2014年04月'},
              {text: '2014年07月',value: '2014年07月'}, 
              {text: '2014年10月',value: '2014年10月'},
              {text: '2015年01月',value: '2015年01月'},
              {text: '2015年04月',value: '2015年04月'},
              {text: '2015年07月',value: '2015年07月'}, 
              {text: '2015年10月',value: '2015年10月'},
              {text: '2016年01月',value: '2016年01月'},
              {text: '2016年04月',value: '2016年04月'},
              {text: '2016年07月',value: '2016年07月'}, 
              {text: '2016年10月',value: '2016年10月'},
              {text: '2017年01月',value: '2017年01月'},
              {text: '2017年04月',value: '2017年04月'},
              {text: '2017年07月',value: '2017年07月'}, 
              {text: '2017年10月',value: '2017年10月'},
              {text: '2018年01月',value: '2018年01月'},
              {text: '2018年04月',value: '2018年04月'},
              {text: '2018年07月',value: '2018年07月'}, 
              {text: '2018年10月',value: '2018年10月'},
              {text: '2019年01月',value: '2019年01月'},
              {text: '2019年04月',value: '2019年04月'},
              {text: '2019年07月',value: '2019年07月'}, 
              {text: '2019年10月',value: '2019年10月'},
              {text: '2020年01月',value: '2020年01月'},
              {text: '2020年04月',value: '2020年04月'},
              {text: '2020年07月',value: '2020年07月'}, 
              {text: '2020年10月',value: '2020年10月'},
              ]"
          :filter-method="filterHandler"
        ></el-table-column>

        <el-table-column prop="name" label="番 剧" width="280"></el-table-column>

        <el-table-column prop="user" label="主 要 角 色" width="250"></el-table-column>

        <el-table-column
          prop="tag"
          label="标 签"
          width="120"
          :filters="[{ text: '日常', value: '日常' },{ text: '后宫', value: '后宫' },{ text: '神作', value: '神作' },{ text: '战斗', value: '战斗' },  { text: '欢乐', value: '欢乐' },  { text: '爱情', value: '爱情' }]"
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
              scope.row.tag === '欢乐' ? 'success' : 'success' &&
              scope.row.tag === '爱情' ? '' : '' 
              "
              disable-transitions
            >{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column
          sortable
          prop="score"
          label="评 分"
          width="100"
          :filters="[ { text: '超赞', value: '5' },{ text: '推荐', value: '4' },{ text: '普通', value: '3' },{ text: '烂作', value: '1' },{ text: '差评', value: '2' }]"
          :filter-method="filterScore"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="
              scope.row.tag === '日常' ? 'success' : 'success' && 
              scope.row.tag === '后宫' ? 'warning' : 'warning' && 
              scope.row.tag === '神作' ? 'danger' : 'danger' && 
              scope.row.tag === '战斗' ? 'info' : 'info' && 
              scope.row.tag === '欢乐' ? 'success' : 'success' &&
              scope.row.tag === '爱情' ? '' : '' 
              "
              disable-transitions
            >{{scope.row.score}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        style="margin:30px 0;"
        @current-change="page"
      ></el-pagination>
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
      total:null,
      tableData: [
        {
          year: null,
          name: null,
          user: null,
          tag: null,
          score: null,
        },
      ],
    };
  },
  created() {

    const _this = this;
    axios.get("http://localhost:8181/anime/findAll/1/999").then(function (resp) {
      console.log(resp.data);
      _this.tableData = resp.data.content;
      _this.total = resp.data.totalElements
    });
  },
  methods: {
    page(currentPage){
      const _this = this;
      axios.get("http://localhost:8181/anime/findAll/"+currentPage+"/8").then(function (resp) {
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