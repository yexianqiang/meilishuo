

<template>
  <div class="app-detail">
    <AppDetailGood :info='detail_good'></AppDetailGood>
  </div>
  
</template>

<script>
import AppDetailGood from './AppDetailGood'
import axios from 'axios'

import {mapState} from 'vuex'


export default {
  name: 'app-detail',
   components: {AppDetailGood},

   data() {
  	return {
  		detail_good: {
  			columns: [],
  			itemInfo:{
  				topImages: []
  			},
  			detailInfo:{

  				desc: ''
  			}
  			 
  		},


  	}

  },
  computed: {
  	...mapState(['id'])
  },
  methods: {
  	detailGood() {
  		let _this = this
  		// alert(111)
  		axios.get('api/detail/mls/v1/h5',{
  			params: {
  				iid: this.id
  			}
  		})
  		.then((res)=>{
  			// console.log(res)
  			_this.detail_good = res.data.result
  			console.log( _this.detail_good)
  		})
  	}
  },
  mounted() {
  	// console.log(this)  // 指向组件
  	this.detailGood()
  }
}
</script>
  
<style lang="scss">
   
</style>
