<template lang="html">
  <div class="elForm">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
      <el-form-item label="员工账号" prop="staffId">
        <el-input  v-model="ruleForm.staffId" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="员工姓名" prop="staffName">
        <el-input  v-model="ruleForm.staffName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="staffPhone">
        <el-input v-model="ruleForm.staffPhone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="staffEmail" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]">
        <el-input type="email" v-model="ruleForm.staffEmail"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" class="nextBtn" @click="submitForm('ruleForm')">下一步</el-button> -->
        <el-button type="primary" class="nextBtn" @click="test">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {

  data() {
      var validateId = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('员工账号不能为空'));
        }else{
          callback();
        }
      };
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入员工姓名'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          staffId: '',
          staffName: '',
          staffPhone: ''
        },
        rules: {
          staffId: [
            { validator: validateId, trigger: 'blur' },
            { min: 2, max:18, message: '长度为2-18个字符', trigger: 'blur' }
          ],
          staffName: [
            { validator: validateName, trigger: 'blur' },
            { min: 2, max:8, message: '长度为2-8个字符', trigger: 'blur' }
          ],
          staffPhone: [
            { required: true, message:'请填写手机号',trigger: 'blur' },
            { min: 11, max:11, message: '长度为11个字符', trigger: 'blur' }
          ]
        }
      };
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // 通过 `vm` 访问组件实例
        vm.$store.state.active = 1;
      })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 差一步ajax
            this.$store.state.flag = 2;
            this.$router.replace('/second')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      test(){
        this.$store.state.flag = 2;
        this.$router.replace('/second')
      }
    }

}
</script>

<style lang="css">
.elForm{
  position: relative;
  width: 270px;
  margin: 50px auto;
}
.ruleForm{
  margin-left: -90px
}
.nextBtn{
  margin-top: 25px;
  position: absolute;
  right: 0px;
}
</style>
