<template>
  <div class="app-flash-buy">
    <div class="falsh-buy">
        <ul >
          <li v-for="billboard in billboards">
            <div>{{ billboard.timeDesc}}</div>
            <div>{{ billboard.statusDesc}}</div>

          </li>
          
        </ul>
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
    that.billboards = res.data.nav
   // console.log(res)
  }
  });

  }

  
  
}
</script>
  
<style lang="scss">
   
</style>
