<template>
  <div class="app-flash-girl">
    
    
    
    <div class="flash-girl" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="30">
        <dl @click="detailGoodId(billboard.iid)" v-for="billboard in billboards" >
          
       
        
         <dt @click="detailGood('detail')"><img :src="billboard.show.img"></dt>
         <dd>
           <p>{{ billboard.title}}</p>
           <span>{{ billboard.price}}</span>
         </dd>
         
       </dl>
    </div>
    
    
    <router-view></router-view>
  </div>
  
</template>

<script>
  import { mapMutations} from 'vuex'
 
  import jquery from 'jquery'
  import bus from '../../modules/bus'

  import { InfiniteScroll } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import { Toast } from 'mint-ui';

  

export default {
  name: 'app-flash-girl',
  
  data (){
    return {
      billboards: [],
      title: '',
      type: 'pop',
      loading: false,
      frame: 1,
      page: 1,
      isOver:false,
      
    }
  },
  
  methods: {
    detailGood(name) {
       this.$router.push({name})
    },
    ...mapMutations(['detailGoodId']),
    getFlash() {
        let that = this
        let params={sort:this.type,_:Date.now()}
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        jquery.ajax({

          type:'get',
          url:"http://list.meilishuo.com/search?frame="+this.page+"&page="+this.frame+"&cKey=wap-index",/*url写异域的请求地址*/
          data: params,
          dataType : 'jsonp',
          
          success:function(res){
           
            Indicator.close()
            that.billboards=that.billboards.concat(res.data.list)
            that.loading = false
            // console.log(res)
            that.frame++
            that.page++
            // console.log(that.page)
            if(that.page == 5) {
              that.isOver = true
              Toast({
                message: '没有更多数据',
                position:'bottom'
              });
              return false
            }
            
                
          }
        });
    },
    loadMore() {
      if(this.isOver) {
        return false
      }
      let that = this
      this.getFlash()
      

    },
    changeType() {
        this.frame = 1
        this.page = 1
        this.billboards = []
        this.isLoading = false
        this.getFlash()
    }
  },
  mounted() {
      let that = this
      bus.$on('change-type',(type)=>{
          // console.log(type)
          that.type = type
          that.changeType() 
      })
  }
  
}
</script>
  
<style lang="scss" scoped>
  .flash_girl{
    height:40px;
    display:flex;
    justify-content:space-around;
    align-items: center;
    -webkit-tap-highlight-color:rgba(255,255,255,0);
    
    a{    color: #666;}
  }
   .line {    
    font-size:20px;
    width: 375px;
    height: 10px;
    background: #ccc;
    opacity: .5;
    
  }
  
</style>
