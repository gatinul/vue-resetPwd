<template lang="html">
  <div class="elForm">
    <el-form label-width="100px" class="ruleForm">
      <el-form-item label="验证码">
        <el-input  v-model="code" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" :disabled="disabled"class="getMsg" @click="getMsg">{{btnText}}</el-button>
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
        code:'',
        disabled:false,
        btnText:'获取验证码',
        wait:60
      };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      if(vm.$store.state.flag != 2){
        vm.$router.replace('/second')
      }else{
        vm.$store.state.active = 2;
        vm.$loading().close()
      }
    })
  },
  methods:{
    time(){
      if(this.wait ==0){
        this.disabled = false
        this.btnText = '获取验证码'
        this.wait = 60;
      }else{
        this.disabled = true
        this.btnText = `${this.wait}s后重发`
        this.wait--;
        var _this = this ;
        setTimeout(function(){
          _this.time()
        },1000)
      }
    },
    getMsg(){
      this.time()
    },
    validateMsg(){
      this.$loading({text:'请稍后...'});
      this.axios.post('/code',{
        'code':this.code
      }).then(response=>{
        let data = response.data;
        if(data == 'success'){
          this.$store.state.flag = 3;
          this.$router.replace('/third')
        }else{
          console.log('验证码错误')
          this.$loading().close();
          this.$message.error(data);
        }
      })
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
