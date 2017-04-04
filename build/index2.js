import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
// 全局组件
Vue.component('child-component',{
    template: '<div v-show="someChildProperty">Child</div>',
    data:function(){
        return{
            someChildProperty:true
        }
    }
})

var user = 'shixy'

// 局部组件
var Head = {
  template:'<div><3>This is a header part</h3><p>{{user}}</p></div>',
  data:function(){
    return {
      user:`This person is ${user}`
    }
  }
}
var Foot = {
  props:{
    num:Number
  },
  template:'<div><h3>This is a footer part</h3><p>{{num}}</p></div>',
  // data:function(){
  //   return {init : this.message.toUpperCase()}
  // }
}


var Child = {
  template:'<div><h3>子组件标题</h3><slot>分发内容位置</slot></div>'
}

new Vue({
    el:'#example',
    components:{
      'my-header':Head,
      'my-footer':Foot
    }
    //template:'<my-header></my-header>' //声明之后可用在table等中..

})

new Vue({
  el:'#compotent',
  //template:"<div><h3>父组件标题</h3><Child><p>替代了分发的内容</p></Child></div>"
  components:{
    'Child':Child
  },
  template:"\
  <div>\
    <h3>父组件标题</h3>\
    <Child><p>替代了分发的内容</p></Child>\
  </div>\
  "
})
