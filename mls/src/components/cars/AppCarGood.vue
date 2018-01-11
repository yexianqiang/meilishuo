
<template>
  <div class="app-car-list">   	
     	<div class="car_main">
     		  <div  class="car_list">
            <input type="checkbox" v-model="item.isSelected"> 
            <img :src="item.img">

            <div class="zhongjian">
                <p class="good_title">{{item.title}}</p>
                <div class="jiajian">
                    <div @click='reduceGood({id:item.id})'>-</div>
                    <div>{{item.num}}</div>
                    <div @click='addGoodList({id:item.id})'>+</div>
                </div>
            </div>

            <div class="good_price">{{item.price}}
                <div class="del" @click='removeGood(item.id)'>
                  <i class="fa fa-trash-o"></i>
                </div>
            </div>
          </div>
     	</div>
  </div>
  
</template>

<script> 
  import {mapActions,mapState,} from 'vuex'

export default {
  name: 'app-car-list',
  props: ['item'],
  methods: {
    ...mapActions(['reduceGood','addGoodList','removeGood']),
    
  },

}
</script>
<style lang="scss" scoped>
  .app-car-list {
    padding: .20rem 0;
    flex: 1;
  }
	.car_list{
		height: 100%;
		>input{
      margin: .5rem .2rem 0 0;
      display: block;
    }
	}
 	.good_title{
    overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    width: 1.5rem;
  }
  .car_main{
    .car_list{
      display: flex;
    }
    &>div>img{
      width: 1rem;
      height: 1rem;
    }
  }
  .zhongjian{
    flex-direction: column;
    display: flex;
    justify-content: space-between;
  }
  .jiajian{
   
    display: flex;
    justify-content: space-around; 
    & > div{
        line-height: center;
        text-align: center;
        width: .3rem;
        height: .3rem;
        box-shadow: 0 0  5px #ccc;
    } 
  }
  .good_price{
    color: #ff7a9a;
    margin-top: .2rem;
  }
  .del{
    font-size: .25rem;
    margin-top: .2rem;
    margin-left: .1rem;
  }
</style>

