<template lang="html">
  <div class="elForm">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="nextBtn" type="primary" @click="submitForm('ruleForm2')">确定</el-button>
        <!-- <router-link @click="submitForm('ruleForm2')" to="/fourth"><el-button class="nextBtn" type="primary" @click="submitForm('ruleForm2')">确定</el-button></router-link> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 差一步ajax
          this.$store.state.flag = 4;
          this.$router.replace('/fourth')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      if(vm.$store.state.flag != 3){
        vm.$router.replace('/first')
      }else{
        vm.$store.state.active = 3;
      }
    })
  }
}
</script>

<style lang="css">
</style>
