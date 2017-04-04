<template lang="html">
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="名称4">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域4">
      <el-input v-model="formLabelAlign.region"></el-input>
    </el-form-item>
    <el-form-item label="活动形式4">
      <el-input v-model="formLabelAlign.type"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      if(vm.$store.state.flag != 4){
        vm.$router.replace('/first')
      }else{
        vm.$store.state.active = 4;
      }
    })
  }
}
</script>

<style lang="css">
</style>
