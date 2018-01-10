

<template>
  	<div class="app-main">
        <app-header ></app-header>
        <app-banner ></app-banner>
        <app-nav ></app-nav>
        <app-flash-buy></app-flash-buy>
        <app-flash></app-flash>
        <app-footer></app-footer>
    </div>
</template>

<script>

  import AppHeader from '../header/AppHeader'
  import AppBanner from '../banner/AppBanner'
  import AppNav from '../nav/AppNav'
  import AppFlashBuy from '../flashbuy/AppFlashBuy'
  import AppFlashBuyList from '../flashbuy/AppFlashBuyList'
  import AppFlash from '../fashion/AppFlash'
  import AppFooter from '../footer/AppFooter'

  
export default {
  name: 'app-main',
 
  components: {AppHeader,AppBanner,AppNav,AppFlashBuy,AppFlashBuyList,AppFlash,AppFooter

  }
  
}
</script>
  
<style lang="scss">
   .app-main{z-index:199}
</style>
