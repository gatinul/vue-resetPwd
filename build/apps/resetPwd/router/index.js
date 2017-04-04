import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../components/First.vue'
import Second from '../components/Second.vue'
import Third from '../components/Third.vue'
import Fourth from '../components/Fourth.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/first',component:First,alias: '/'}, //别名 指向一下
  {path:'/second',component:Second},
  {path:'/third',component:Third},
  {path:'/fourth',component:Fourth}
]

export default new VueRouter({
  routes
})
