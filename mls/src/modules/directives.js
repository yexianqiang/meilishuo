
import Vue from 'vue'
// console.log(Vue)

Vue.directive('scroll-show', {
  inserted: function (el,binding) {
    let scope = binding.arg || '200'
    window.addEventListener('scroll',function(e){
    	// console.log(this.scrollY)
    	if(this.scrollY>Number(binding.arg)){
    		// console.log(binding.value.value)
    		binding.value.value=true
    	}else{
    		binding.value.value=false
    	}
    })
  }
})

Vue.directive('back-top',{
	inserted(el,binding) {
		let e = binding.arg || 'click'
		el.addEventListener(e,()=>{
			//console.log(document.body.scrollTop)
			document.documentElement.scrollTop =0
		})
	}
})
