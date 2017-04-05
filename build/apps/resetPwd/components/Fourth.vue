<template lang="html">
  <div class="elLastForm">
    <i class="el-icon-circle-check"> 修改成功 </i>
    <p>新密码将在10分钟后生效</p>
  </div>
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
        vm.$loading().close()
      }
    })
  }
}
</script>

<style lang="css">
.elLastForm{
  position: relative;
  width: 270px;
  margin: 100px auto;
}
</style>
