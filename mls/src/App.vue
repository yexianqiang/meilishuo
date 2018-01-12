<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>


  
export default {
  name: 'app',
  // components: {AppHeader,AppBanner,AppNav,AppFlashBuy,AppFlashBuyList,AppFlash,AppFooter}
}
</script>
  
<style lang="scss">
  	#app{overflow-x: hidden;-webkit-overflow-scrolling:touch}
</style>
