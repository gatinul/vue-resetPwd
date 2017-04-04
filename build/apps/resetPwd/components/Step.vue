<template lang="html">
  <div class="step">
    <el-steps :space="200" :active="this.$store.state.active" :center=true finish-status="success">
      <el-step title="验证个人信息"></el-step>
      <el-step title="填写验证码"></el-step>
      <el-step title="修改密码"></el-step>
      <el-step title="修改成功"></el-step>
    </el-steps>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="css">
.step{
  margin-top: 45px
}
</style>
