
<template>
	<div class="app-footer-list ">
		<div class="footer-list" v-for="nav in navs">
			<li >{{nav.content}}</li>
		</div>
		
	</div>	
</template>

<script >
	export default {
		name:'app-footer-list',
		props: ['navs'],
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-footer-list{
		display: flex;
		z-index:399
	}

</style>