<template>
  <div class="app-flash-list">
    <div class="falsh-buy-list">
        <dl v-for="billboard in billboards">
        	<dt><img :src="billboard.image"></dt>
        	<dd>
        		<div>{{billboard.title}}</div>
        		<div><span>{{billboard.salePrice}}</span><span>{{billboard.price}}</span></div>
        	</dd>
        </dl>
        hello
        <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
  import jquery from 'jquery'
export default {
  name: 'app-flash-list',
  data (){
    return {
      billboards: [],
      title: ''
    }
  },
  mounted() {
  let that = this
 jquery.ajax({
  type:'get',
  url:"http://kq.meilishuo.com/jsonp/fastBuyListActionLet/1?bizKey=rush_main&page=1&bizKey=rush_main&token=&imgType=1&page=",/*url写异域的请求地址*/
  params: {_: Date.now()},
  dataType : 'jsonp',
  jsonp:"callback", 
  success:function(res){
    that.billboards = res.data.list
    //console.log(res.data.list)
  }
  });

  }

  
  
}
</script>
  
<style lang="scss">
   
</style>
