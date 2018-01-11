

<template>
	<div class="app-footer">
		<AppFooterList :navs='navs'></AppFooterList>
	</div>


</template>

<script >

	import AppFooterList from './AppFooterList'
	export default {
		name: 'app-footer',	
		data: function() {
			return {
				navs: [
					{id:1,content:'首页',name:'main'},
					{id:2,content:'分类',name:'main'},
					{id:3,content:'购物车',name:'car'},
					{id:4,content:'我',name:'main'},
				]
			}
		},
		components: {
			AppFooterList
		}
	}
</script>

<style lang="scss" scoped>
	

</style>