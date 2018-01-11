<template>
  <div class="app-car">
    <div class="car_header">
 		<span class="fa fa-angle-left"></span>
 		<span>购物车</span>
 		<span>删除</span>
     </div>
     <AppCarGood v-for="item in car" :item="item"></AppCarGood>
     <div class="footer_jiesuan">
     	<div class="jiesuan">
	     	<input type="checkbox" v-model='isAllselected'>
	     	<div>合计：{{money | currency}}

	     	</div>
	     	<div>去计算</div>
	     </div>
     </div>
     <AppFooter></AppFooter>
  </div>
</template> 
<script>
  import AppCarGood from './AppCarGood'
  import AppFooter from '../footer/AppFooter'

  import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  name: 'app-car',

  components: {AppCarGood,AppFooter},
  computed: {
    ...mapState(['car']),
    ...mapGetters(['money','isAllselected']),
      isAllselected: {
        get() {
          return this.$store.state.car.every(item=>{
            if(item.isSelected) {
                return true
              }else{
                return false
              }
          })
        },
        set(newValue) {
          this.seleteGood(newValue)
        }

      }
  },
  methods: {
    ...mapActions(['initCar','seleteGood'])
  },
  created() {
  	this.initCar()
  }
}
</script>
  
<style lang="scss" scoped>
	 .app-car{
	 	padding: .2rem;
	 }
  .car_header{
 		display: flex;
 		justify-content: space-between;
 		font-size: .23rem;
 		color: #666;
 	}
 	.footer_jiesuan{
    background-color:white;
 		position: fixed;
 		bottom: .5rem
 	}
 	.jiesuan{
 		&>input:nth-child(1) {margin-top: .15rem}
 		height: .5rem;
 		line-height: .5rem;
 		border:1px solid #f66;
 		width: 3.5rem;
 		display:flex;
 		justify-content: space-between;
 		&>div:nth-child(3){
 			background-color: #f66;
 			line-height: .5rem;
		    font-size: .12rem;
		    border: 0;
		    text-align: center;
		    width: .9rem;
 		}

 	}
</style>
