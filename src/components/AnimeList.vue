<template>
  <div style="margin:25px auto;margin-top:20px;text-align:center;">
    <h2>番 剧 记 事 簿</h2>
    <div style="margin:25px 0px;">
      <router-link :to="{path:'/AnimeAdd'}">
        <el-button style="margin-right:20px;">添加番剧</el-button>
      </router-link>

      <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button> -->
      <el-button @click="clearFilter">清除过滤</el-button>
    </div>
    <el-table
      v-loading="loading"
      element-loading-text="在努力了 o(*≧▽≦)ツ"
      ref="filterTable"
      :data="tableData"
      height="516"
      style="width:66%;margin:0 auto;padding:0 10px"
    >
      <el-table-column
        prop="date"
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

      <el-table-column prop="lead" label="主 要 角 色" width="250"></el-table-column>

      <el-table-column
        prop="tag"
        label="标 签"
        width="120"
        :filters="[{ text: '日常', value: '日常' },{ text: '后宫', value: '后宫' },{ text: '神作', value: '神作' },{ text: '战斗', value: '战斗' },  { text: '欢乐', value: '欢乐' },  { text: '爱情', value: '爱情' }, { text: '电影', value: '电影' }]"
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
        :filters="[ { text: '超赞', value: '5' },{ text: '推荐', value: '4' },{ text: '普通', value: '3' },{ text: '差评', value: '2' },{ text: '烂作', value: '1' }]"
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
          <el-button @click="edit(scope.row),look = true" type="text" size="small">查看</el-button>
          <el-button @click="edit(scope.row),dialogFormVisible = false,verify=true" type="text" size="small" >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total+38"
      style="margin:30px 0;"
      @current-change="page"
    ></el-pagination>


    <el-dialog title="详细信息" :visible.sync="look" width="30%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="番剧编号" prop="id" style="display:none">
            <el-input v-model="ruleForm.id" :disabled="true" size="small"></el-input>
        </el-form-item>
        <el-form-item label="番剧名称" prop="name">
            <el-input v-model="ruleForm.name" :disabled="true" size="small"></el-input>
        </el-form-item>
        <el-form-item label="主要人物" prop="lead">
            <el-input v-model="ruleForm.lead" :disabled="true" size="small"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" required>
            <el-date-picker prop="date" type="month" :disabled="true" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%" format="yyyy 年 MM 月" value-format="yyyy年MM月" size="small"></el-date-picker>
        </el-form-item>
        <el-form-item label="番剧类型" prop="tag">
          <el-radio-group v-model="ruleForm.tag" size="small">
            <el-radio-button label="日常"></el-radio-button>
            <el-radio-button label="后宫"></el-radio-button>
            <el-radio-button label="战斗"></el-radio-button>
            <el-radio-button label="欢乐"></el-radio-button>
            <el-radio-button label="爱情"></el-radio-button>
            <el-radio-button label="电影"></el-radio-button>
            <el-radio-button label="神作"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="个人评价" prop="score">
          <el-radio-group v-model="ruleForm.score">
            <el-radio label="5">超赞</el-radio>
            <el-radio label="4">推荐</el-radio>
            <el-radio label="3">普通</el-radio>
            <el-radio label="2">差评</el-radio>
            <el-radio label="1">烂作</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="look = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="权限不足" :visible.sync="verify" width="30%">
      <el-input v-model="VerifyNumber" placeholder="请输入密码以进行编辑" type="password" style="width:70%" ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="test()">验证</el-button>
      </span>
    </el-dialog>

    <el-dialog title="设定修正" :visible.sync="dialogFormVisible" boolean="false" style="margin:0 auto;width:70%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
        <el-form-item label="番剧编号" prop="id" style="display:none">
            <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="番剧名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="主要人物" prop="lead">
            <el-input v-model="ruleForm.lead"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" required>
            <el-date-picker prop="date" type="month" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%" format="yyyy 年 MM 月" value-format="yyyy年MM月"></el-date-picker>
        </el-form-item>
        <el-form-item label="番剧类型" prop="tag">
          <el-radio-group v-model="ruleForm.tag" size="medium">
            <el-radio-button label="日常"></el-radio-button>
            <el-radio-button label="后宫"></el-radio-button>
            <el-radio-button label="战斗"></el-radio-button>
            <el-radio-button label="欢乐"></el-radio-button>
            <el-radio-button label="爱情"></el-radio-button>
            <el-radio-button label="电影"></el-radio-button>
            <el-radio-button label="神作"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="个人评价" prop="score">
          <el-radio-group v-model="ruleForm.score">
            <el-radio label="5">超赞</el-radio>
            <el-radio label="4">推荐</el-radio>
            <el-radio label="3">普通</el-radio>
            <el-radio label="2">差评</el-radio>
            <el-radio label="1">烂作</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="简单介绍" prop="desc">
          <el-input type="textarea" rows="3" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="deleteAnime(),dialogFormVisible = false">删 除</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm'),dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>



  </div>
</template>

<style scope>
  body {
    margin: 0;
  }
</style>

<script>
export default {
  inject:['reload'],      
  name: "AnimeList",
  data() {
    return {
      VerifyNumber:'',
      total: null,
      tableData: [
        {
          year: null,
        },
      ],
      loading: true,
      dialogFormVisible: false,
      look: false,
      verify: false,
      ruleForm: {
        id:'',
        name: '',//书名
      },
      formLabelWidth: '120px',
      rules: {
        name: [
          { required: true, message: '请输入番剧名称', trigger: 'blur' },
        ],
        lead: [
          { required: true, message: '请输入主人公名称', trigger: 'blur' },
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        tag: [
          { required: true, message: '请至少选择一个类型', trigger: 'change' }
        ],
        score: [
          { required: true, message: '请选择评价', trigger: 'change' }
        ],
      } 
    };
  },
  created() {
    const _this = this;
    axios
      .get("http://129.211.68.92:8181/anime/findAll/1/999")
      .then(function (resp) {
        console.log(resp.data);
        _this.tableData = resp.data.content;
        _this.total = resp.data.totalElements;
        _this.loading = false;
      });
  },
  methods: {
    test(){
      if(this.VerifyNumber=='2508957142'){
        this.verify = false;
        this.dialogFormVisible=true;
        this.$message.success('信息核实成功');
      }else{
        this.$message.error('审核未通过');
        this.verify = true;
      }
    },
    submitForm(formName) {//修改数据并保存
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.put('http://129.211.68.92:8181/anime/update',this.ruleForm).then(function(resp){
            if(resp.data == 'success'){
             
              _this.$message({ message: '修改成功 ヽ(✿ﾟ▽ﾟ)ノ', type: 'success' });
              _this.reload()
            } else {
              _this.$message({ message: '等一下，有什么不对劲啊 w(ﾟДﾟ)w', type: 'warning' });
            }
          })
        }
      });
    },
    edit(row){//模态框展示数据
      const _this = this
      axios.get('http://129.211.68.92:8181/anime/findById/'+row.id).then(function(resp){
        _this.ruleForm = resp.data
      })
    },
    deleteAnime(){//删除数据
      const _this = this
      axios.delete('http://129.211.68.92:8181/anime/deleteById/'+_this.ruleForm.id).then(function(resp){
        _this.$message({ message: '删除成功 ヽ(✿ﾟ▽ﾟ)ノ', type: 'success' });
        _this.reload()
      })
    },
    page(currentPage) {//页数
      const _this = this;
      axios
        .get("http://129.211.68.92:8181/anime/findAll/" + currentPage + "/8")
        .then(function (resp) {
          _this.tableData = resp.data.content;
          _this.total = resp.data.totalElements;
        });
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    // formatter(row, column) {
    //   return row.address;
    // },
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
  mounted: function () {},
};
</script>

