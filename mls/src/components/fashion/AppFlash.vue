<template>
  <div class="app-flash">
    <app-flash-nav></app-flash-nav>
    <AppFlashGirl></AppFlashGirl>
    
    <div class="back-top">
      <BackTop v-back-top v-scroll-show:300='isBackShow' :isShow='isBackShow'></BackTop>
    </div>
    
    
    
  </div>
  
</template>

<script>
  import AppFlashNav from  './AppFlashNav'
  import AppFlashGirl from './AppFlashGirl'
  import BackTop from '../common/back-top/BackTop'
export default {
  name: 'app-flash',
  data (){
    return {
      isBackShow:{value:false}
    }
  },
  components: {AppFlashNav,AppFlashGirl,BackTop}
 
  
}
</script>
  
<style lang="scss">
  .back-top{z-index:999}

</style>
