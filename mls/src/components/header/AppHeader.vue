<template>
  <div class="app-header">
  	<div class="header">
  		<div>
	   		<i class="yo-ico">&#xe604;</i>
	   	</div>
	   	<div class="search">
	   		<i class="yo-ico">&#xe605;</i>
	   		<input type="text">
	   	</div>
	   	<div>
	   		<i class="yo-ico">&#xe676;</i>
	   		
	   	</div>
  	</div>
  </div>

</template>
  
<script>



export default {
  name: 'app-header',
  data() {
  	return {

  	}
  },
   // 这里的<div class="app-header">能在$el console.log(this)找到
  mounted() {
  	// console.log(this)
  	
  }

}
</script>

<style lang="scss">
	.app-header{
		header: 0.88rem;
		
	}

</style>
