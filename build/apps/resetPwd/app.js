import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Step from './components/Step.vue'
import router from './router'
import { mapState } from 'vuex'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state:{
    active:1,
    flag:0,
    staffId:''
  },
  mutations: {
    next(state){
      // if(state.active++ >2)
      // return
      state.active<4 ? state.active++ :state.active=1
    }
  }
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(Step)
})
