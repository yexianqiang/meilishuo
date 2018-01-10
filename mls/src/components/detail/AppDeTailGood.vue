

<template>
  <div class="app-detail-good">
     <div class="detail-good">
     	<div class="good_image">
     		<img :src="info.itemInfo.topImages[0]">
     	</div> 
     	<div class="detail_title">
     		<p>{{info.detailInfo.desc}}</p>
     		
     		<div class="detail_price">
     			<span>{{info.itemInfo.highNowPrice}}</span>
     			<span>{{info.itemInfo.highPrice}}</span>
     			<!-- <span>{{info.itemInfo.discountDesc}}</span> -->
     			
     		</div>
     		<div>
     			<span>{{info.columns[0]}}</span>
     			<span>{{info.columns[1]}}</span>
     			<span>{{info.columns[2]}}</span>
     			
     		</div>
     		
     	</div>
     </div>
  </div>
  
</template>

<script>

import axios from 'axios'
  // console.log(axios)
export default {
  name: 'app-detail-good',
  props: ['info'],
  data () {
  	return {
  		minfo: this.info,
  		
  	}
  },
  mounted () {
  	this.minfo = this.info
  	
  },
  
  
}
</script>
  
<style lang="scss">
	.detail-good{
		.good_image{
			width:290px;
			height:435px;
			> img{width:100%}
		}
		.detail_title{
			margin: .1rem .02rem
		}
		.detail_price{
			&>span:first-child{
				line-height: .22rem;
				color: #f69;
				font-size: .22rem;
			}
			
    
    
		}
	}
   
</style>
