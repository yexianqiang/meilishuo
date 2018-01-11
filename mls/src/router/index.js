import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'





import AppMain from '../components/main/AppMain'
import AppDetail from '../components/detail/AppDetail'
import AppCar from '../components/cars/AppCar'

Vue.use(Router)
	

export default new Router({
  mode: 'history',
  routes: [
  	{path:'',redirect:{name:'main'}},
    {path: '/main',name:'main', component: AppMain },
    {path: '/detail',name:'detail', component: AppDetail },
    {path: '/car', name:'car',component: AppCar}
    
  ]
})
