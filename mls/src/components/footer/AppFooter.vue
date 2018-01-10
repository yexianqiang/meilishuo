

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
					{id:1,content:'首页',name:'souye'},
					{id:2,content:'分类',name:'fenlei'},
					{id:3,content:'购物车',name:'gwc'},
					{id:4,content:'我',name:'wo'},
				]
			}
		},
		components: {
			AppFooterList
		}
	}
</script>

<style lang="scss" scoped>
	.app-footer{z-index:399}

</style>