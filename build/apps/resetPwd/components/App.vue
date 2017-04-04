<template lang="html">
  <div class="">
    <el-steps :space="200" :active="active" :center=true finish-status="success">
      <el-step title="验证个人信息"></el-step>
      <el-step title="填写验证码"></el-step>
      <el-step title="修改密码"></el-step>
      <el-step title="修改成功"></el-step>
    </el-steps>
    <!-- <router-view></router-view> -->
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    <p>This is demo{{active}}</p>
  </div>

</template>

<script>
export default {
  data(){
    return {
      active:1
    };
  },
  methods:{
    next(){
      if(this.active++ >2)
      return
    }
  }
}
</script>

<style lang="css">
</style>
