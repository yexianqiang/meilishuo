

import Vue from 'vue'
// console.log(Vue)

Vue.filter('formatDate',(value)=>{
	var date = new Date(value)
	return `${date.getMonth()+1}月${date.getDate()}日上映`
})
Vue.filter('currency',function(value){
	return ('￥ ' +value)
})