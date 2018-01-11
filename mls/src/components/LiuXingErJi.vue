<template>
       <div class="erji">
       	    <router-view>
       	           {{xiangxi.title}}
       	    </router-view>
       	  
       </div>
       
</template>
<script>
       import $ from 'jquery'
       export default {
    	name:'erji',
    	props:['indexs'],
        data: function () {
               return { xiangxi: this.indexs }
                     }
       
       } 
        
    
</script>

<style scoped>
	
</style>
