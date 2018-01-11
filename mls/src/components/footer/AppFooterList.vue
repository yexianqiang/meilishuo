
<template>
	<div class="app-footer-list ">
		<div class="footer-list" v-for="nav in navs">
			<ul>
				<li @click="turnout(nav.name)">{{nav.content}}</li>
			</ul>
			
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
		},
		methods: {
			turnout(name) {
				
				this.$router.push({name})
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