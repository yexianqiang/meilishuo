<template>
  <div class="app-flash-nav">
    <div class="line"></div>
    <div class="flash-nav">
      <div @click="type='pop'" :class="{active:type=='pop'}">
         流行
      </div >

      <div @click="type='new'" :class="{active:type=='new'}">
        新款
        
      </div >
      <div @click="type='sell'" :class="{active:type=='sell'}">
         精选
      </div >
     
      
      <!-- <router-link to="/detail">流行</router-link>
      <router-link to="/detail">精选</router-link>
      <router-link to="/detail">新款</router-link> -->
    </div>

  </div>
  
</template>

<script>
  
  import bus from '../../modules/bus'
export default {
  name: 'app-flash-nav',
  data (){
    return {
      type: 'pop',  // 不能以独享的方式传了
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  watch: {
    
    type() {
      
      bus.$emit('change-type',this.type)
    }
  }
  
}
</script>
  
<style lang="scss">
  .flash-nav{
    padding-bottom:.06rem;
    height:40px;
    display:flex;
    justify-content:space-around;
    line-height:40px;
    > div{padding: 0 0.03rem 0.06rem 0.03rem;}
    -webkit-tap-highlight-color:rgba(255,255,255,0);

    .active{color:red; border-bottom: 2px solid #FF3366;}
    
  }
   .line {    
    font-size:20px;
    width: 375px;
    height: 10px;
    background: #ccc;
    opacity: .5;
    
  }
</style>
