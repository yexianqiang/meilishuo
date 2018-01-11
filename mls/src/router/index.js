

import Vue from 'vue'
import Router from 'vue-router'
import BenZhouLiuXing from '../components/BenZhouLiuXing'
import FenLei from '../components/FenLei'
import LiuXingErJi from '../components/LiuXingErJi'
Vue.use(Router)
const routes = [ 
   {path:'',redirect:'/fenlei'},
   {path:'/fenlei',name:'fenlei',component:FenLei},
   {path:'/benzhouliuxing',name:'benzhouliuxing',component:BenZhouLiuXing},
   {path:'/liuxingerji',name:'liuxingerji',component:LiuXingErJi}
]

const router = new Router({
  routes
})

export default router