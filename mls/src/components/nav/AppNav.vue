<template>
  <div class="app-nav">
    <div class="app-nav-list">
        <div v-for="billboard in billboards" class="app-nav">
            <dl>
              <dt><img :src="billboard.image"></dt>
              <dd>{{ billboard.title }}</dd>
            </dl>
        </div>

    </div>
   
    </router-view>
  </div>
  
</template>

<script>
  import jquery from 'jquery'
export default {
  name: 'app-nav',
  data (){
    return {
      billboards: [],
      title: ''
    }
  },
  mounted() {
  let that = this
  jquery.ajax({  // 第二行 图片
  type:'get',
  url:"https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730",
  params: {_: Date.now()},
  dataType : 'jsonp',
  jsonp:"callback", 
  success:function(res){
    let a = '13730'
    that.billboards = res.data[a].list;
    that.title = res.data[a].title
   //console.log(res.data[a])
  }
  });

  }

  
  
}
</script>
  
<style lang="scss">
   
</style>
