<template lang="html">
  <div class="elForm">
    <el-form label-width="100px" class="ruleForm">
      <el-form-item label="验证码">
        <el-input  v-model="code" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" class="getMsg">获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="nextBtn" type="primary" @click="validateMsg">下一步</el-button>
        <!-- <router-link @click="submitForm('ruleForm2')" to="/fourth"><el-button class="nextBtn" type="primary" @click="submitForm('ruleForm2')">确定</el-button></router-link> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        code:''
      };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      if(vm.$store.state.flag != 2){
        vm.$router.replace('/first')
      }else{
        vm.$store.state.active = 2;
      }
    })
  },
  methods:{
    validateMsg(){
      this.$store.state.flag = 3
      this.$router.replace('/third')
    }
  }
}
</script>

<style lang="css">
/*.preBtn{
  margin-top: 25px;
  position: absolute;
  left: 0px;
}*/
</style>
