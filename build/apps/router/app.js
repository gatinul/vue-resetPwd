import Vue from 'vue'
import VueRouter from 'vue-router'
//import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import User from './components/User.vue'
import UserProlife from './components/UserProlife.vue'
import UserPosts from './components/UserPosts.vue'
import Slot from './components/Slot.vue'
import Right from './components/Right.vue'
import Bottom from './components/Bottom.vue'
import Loading from './components/Loading.vue'


Vue.use(VueRouter)

const Foo = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['./components/Foo.vue'], () => {
    resolve(require('./components/Foo.vue'))
  },'tips')
}



//const Foo = resolve => require.ensure([], () => resolve(require('./components/Foo.vue')), '/foo')

const routes = [
  {path:'/',components:{
    default:Bar,
    right:Right,
    bottom:Bottom
  }},
  {path:'/foo',component:Foo},
  {path:'/bar',component:Bar},
  {path:'/load/:id',component:Loading},
  {path:'/user/:id',component:User,
    children:[
      {
        path:'',
        component:Slot
      },
      {
        path:'prolife',
        component:UserProlife
      },
      {
        path:'posts',
        component:UserPosts
      }
    ]
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: __dirname,
  routes
})

const app = new Vue({
  router,
  methods:{
    back:function(){
      router.go(-1)
    }
  }
}).$mount('#app')
