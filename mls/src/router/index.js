import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'





import AppMain from '../components/main/AppMain'
import AppDetail from '../components/detail/AppDetail'

Vue.use(Router)
	

export default new Router({
  
  routes: [
  	
    {path: '/main',name:'main', component: AppMain },
    {path: '/detail',name:'detail', component: AppDetail },
    
  ]
})
