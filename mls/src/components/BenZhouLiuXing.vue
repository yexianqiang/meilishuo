<template>
       <div class="benzhou">
       	     <div class="biaoti">本周流行</div>
       	     <ul>
       	     	<router-link  to ='liuxingerji' :indexs='indexs' class='li'  v-for = 'indexs in meiliwu'>
       	     		<a  :href='kan'>
       	     			<img :src="indexs.image" alt="" />
       	     			
       	     		    <div class="shang">{{indexs.title}}</div>
       	     		</a>
       	     	</router-link>
       	     </ul> 
       	    
       </div>
</template>
<script>
        import $ from 'jquery'
       export default {
    	name:'benzhou',
         data(){
           return {
               meiliwu:[],
               kan:[]	
              
               
      }
         },
         methods:{
         
         },
         mounted(){
          let that = this
          $.ajax({
               type:'get',
               url :'https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=',
               params: {_: Date.now()},
               dataType:'jsonp',
               jsonp:'callback',
                success:function(res){
                   console.log(res.value[0].link)
                   console.log(res.value[1].link)
                   that.meiliwu = res.value,
                   that.kan = res.value.link
                   
            }
          })
         
         }
         
       } 
        
    
</script>

<style scoped>
	.benzhou a {
		text-decoration: none;
		color:#666;
		font-size: 0.12rem;
	}
	.shang{text-align: center;}
	.benzhou{
		width:100%;
		
		padding-top: 0.5rem;
	}
  .biaoti{
  	font-size: 0.2rem;
  	padding-left:0.2rem;
  }
   .benzhou ul{
   	
   	box-sizing: border-box;
   	padding: 0;
   	margin: 0;
   	width: 100%;
   }
   .benzhou .li{
   
   	float: left;
   	 width: 25%;
   }
   .benzhou img {
   	width: 100%;
   	padding:0 0.15rem 0.05rem 0.15rem ;
   	
   }
</style>
