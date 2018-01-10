<template>
  
  	 <div class="app-banner swiper-container">
	    <div class="swiper-wrapper">
	        <div v-for="billboard in billboards" class="swiper-slide" :key="billboard._id">
	        	<img :src="billboard.image">
	        	
	        </div>
	    </div>
	    
	    <div class="swiper-pagination"></div>
	</div>

</template>
  
<script>

import Swiper from 'swiper'
import axios from 'axios'

import jquery from 'jquery'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import '@/style/css/swiper.css'
import '@/style/css/swiper.js'
// import '/static/swiper'
export default {
  name: 'app-banner',
  data (){
  	return {
  		billboards: [],
  	}
  },
  methods: {
  	// getBanner() {  // 获取堆糖网的 xhr

  	// 	let _this = this
  	// 	axios.get('http://localhost:3000/api/napi/mbanner', {
		 //    params: {
		 //      app_code: "mdt"
		 //    }
		 //  })
		 //  .then(function (response) {
		 //  	// console.log(response)
		 //  	_this.billboards = response.data.data.banners
		 //    console.log(_this.billboards);
		 //  })
  	// }
  	getBanner() {
          var that=this;
  		jquery.ajax({  // 第二行 图片
		  type:'get',
		  url:"https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730",
		  params: {_: Date.now()},
		  dataType : 'jsonp',
		  jsonp:"callback", 
		  success:function(res){
		    let a = '43542'
		    
		    that.billboards = res.data[a].list
		   
		  }
		  });
  	}
  },
  created() {
  	this.getBanner()
  },
  
  updated() {
  	
  	new Swiper('.swiper-container',{
  		loop: true,
  		pagination: {
		    el: '.swiper-pagination',
		},
		autoplay:true,
	})
	
  },

  







  mounted() {
  	
  	
  	// console.log(jquery)
  	// 这是所有 列表里面的
 //  	jquery.ajax({
	// type:'get',
	// url:"http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=ec533c3f-b83a-4d04-95b9-6807e0aec997&sort=pop",/*url写异域的请求地址*/
	// params: {_: Date.now()},
	// dataType : 'jsonp',
	// jsonp:"callback", 
	// success:function(res){
	// 	console.log(res)
	// }
	// });
	// 抢购里面的
	// jquery.ajax({
	// type:'get',
	// url:"http://kq.meilishuo.com/jsonp/fastBuyListActionLet/1?bizKey=rush_main&page=1&bizKey=rush_main&token=&imgType=1&page=",/*url写异域的请求地址*/
	// params: {_: Date.now()},
	// dataType : 'jsonp',
	// jsonp:"callback", 
	// success:function(res){
	// 	console.log(res)
	// }
	// });

	// jquery.ajax({  // 第二行 图片
	// type:'get',
	// url:"https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730",
	// params: {_: Date.now()},
	// dataType : 'jsonp',
	// jsonp:"callback", 
	// success:function(res){
	// 	console.log(res)
	// }
	// });
	
	//xhr 获取 banner  /api 每次配置 要重启
	
  }
 
}
</script>

<style lang="scss">
	
	.swiper-slide>img{display:block;height:1.95rem}
</style>
