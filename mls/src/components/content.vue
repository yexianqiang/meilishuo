<template>
  <div class="app-flash-buy">
    <div>
      <router-link></router-link>
    </div>
  </div>
  
</template>

<script>
  import jquery from 'jquery'
export default {
  name: 'app-flash-buy',
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
   console.log(res.data.nav)
  }
  });

  }

  
  
}
</script>
  
<style lang="scss">
   
</style>
