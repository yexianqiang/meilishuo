

<template>
  <div class="app-detail-good">
     <div class="detail-good">
       	<div class="good_image">
       		<img :src="info.itemInfo.topImages[0]">
       	</div> 
       	<div class="detail_title">
       		<p>{{info.itemInfo.title}}</p>
       		
       		<div class="detail_price">
       			<span>{{info.itemInfo.highNowPrice | currency}}</span>
       			<span>原价{{info.itemInfo.highPrice}}</span>
       			<!-- <span>{{info.itemInfo.discountDesc}}</span> -->
       			
       		</div>
       		<div class="xiaoliang" style="">
       			<span>{{info.columns[0]}}</span>
       			<span>{{info.columns[1]}}</span>
       			<span>{{info.columns[2]}}</span>
       		</div>
       		
       	</div>
        <div class="car_nav">
               <ul>
                <li >客服</li>
                <li >店铺</li>
                <li >收藏</li>
                <li @click="car('car')">购物车</li>
                <li @click="addGood({id,img:info.itemInfo.topImages[0],price:info.itemInfo.highNowPrice,title:info.itemInfo.title})">购买</li>
              </ul>
        </div>
     </div>
  </div>
  
</template>

<script>

import {mapState} from 'vuex'
import {mapActions,mapMutations} from 'vuex'
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
  computed: {
    ...mapState(['id'])
  },
  mounted () {
  	this.minfo = this.info
  	
  },

  created() {  // 把 粗存在localS 初始化
    this.initDetail()
  },
  methods: {
    car(name) {
      
      this.$router.push({name})
    },
    ...mapActions(['addGood']),
    ...mapMutations(['initDetail'])
  }
}
</script>
  
<style lang="scss">
  html,body{background:#fff}

	.detail-good{

     
		.good_image{
			width:290px;
			height:435px;
			> img{width:100%};
      margin: 0rem .1rem;
		}
		.detail_title{
			margin: .1rem .1rem;
      font-size: .16rem;
		}
		.detail_price{
			&>span:first-child{
				line-height: .32rem;
				color: #f69;
				font-size: .22rem;
        
			}
    
    
		}
	}
   .xiaoliang{
      
      display: flex;
      justify-content: space-between;
    }




    .car_nav{
      position: fixed;
      bottom: 0;
      width: 100%;
      ul{
        
        display:flex;
        justify-content: space-between;
        
        height: .58rem;
        li{
          display:flex;
          align-items:center;
          justify-content: center;
          width: 14%;

        }
        li:nth-child(5) {
          color:red;
          width:29%;
          
          color: #fff;
          background: #f69
        }
        li:nth-child(4) {
          color:red;
          width:29%;
          color: #333;
          background: #ffe817;
        }
      }
      
    }
</style>
