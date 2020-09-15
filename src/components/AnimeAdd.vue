<template>
    <div style="margin:20px auto;width:30%;text-align:center;">
      <h2>未 闻 番 名</h2>
      <div style="margin:25px 0px;">
        <router-link :to="{path:'/AnimeList'}">
          <el-button style="margin-right:20px;">番剧列表</el-button>
        </router-link>
        <el-button @click="resetForm('ruleForm')">重置内容</el-button>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

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
            <el-input type="textarea" rows="5" v-model="ruleForm.desc"></el-input>
          </el-form-item>

          <el-button style="width:200px;margin:9px auto;" type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: "AnimeAdd",
  data() {
    return {
      ruleForm: {
          name: '',//书名
          lead:'',//主人公
          date: '',//日期
          tag: [],//类型
          score: '',//评价
          desc: ''//描述
        },
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

  },
  methods: {
    submitForm(formName) {
        const _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(_this.ruleForm);
            axios.post('http://129.211.68.92:8181/anime/save',this.ruleForm).then(function(resp){
              if(resp.data == 'success'){
                _this.$message({ message: '恭喜你，成功喜加一ヽ(✿ﾟ▽ﾟ)ノ', type: 'success' });
                _this.$router.push('/AnimeList')
              } else {
                _this.$message({ message: '等一下，有什么不对劲啊w(ﾟДﾟ)w', type: 'warning' });
              }
            })
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  mounted: function () {

  },
};
</script>

<style scope>
.demo-ruleForm>.el-form-item {
    margin-top: 35px;
    margin-left: -50px;
}
</style>