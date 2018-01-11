

import Vue from 'vue'
import Vuex from 'vuex'
import jquery from 'jquery'
import axios from 'axios'
Vue.use(Vuex)

const state = {
	id: '',
	car: []
}

const getters = {
	money() {
		let money = 0;
		state.car.forEach((item)=>{
			if(item.isSelected) {
				money += (item.price*item.num)
			}
		})
		return Number(money)
	}
}


const mutations = {
	initCar(state,car) {
		state.car = car
	},
	initDetail(state,id) {  // 初始 详情看到id
		state.id = JSON.parse(localStorage.id)
	},
	detailGoodId(state,id){  //
		state.id = id
		localStorage.id = JSON.stringify(state.id)
		
	},
	// 添加进购物车
	addGood(state,{id,img,price,title}) {
		let isHas = state.car.some((item)=>{
			if(item.id==id) {
				item.num++
				return true
			}else{return false}
		})
		if(!isHas){
			state.car.push({id,img,price,title,num:1,isSelected:true})
		}
		localStorage.car = JSON.stringify(state.car)
	},
	// 增加商品
	addGoodList(state,{id}) {
		state.car.some((item)=>{
			if(item.id == id){
				item.num++
			}
		})
		localStorage.car = JSON.stringify(state.car)
	},
	reduceGood(state,{id}) {
		let len = state.car.length;
		for(let i = 0; i < len; i++) {
			if(state.car[i].id==id) {
				state.car[i].num--
				if(state.car[i].num == 0){
					state.car.splice(i,1)
				}
				break;
			}
		}
		localStorage.car = JSON.stringify(state.car)
	},
	removeGood(state,id){
		let len = state.car.length
		for(let i = 0; i < len;i++){
			if(state.car[i].id==id) {
				state.car.splice(i,1)
				break;
			}
		}
		localStorage.car = JSON.stringify(state.car)
	},
	seleteGood(state,val) {
		console.log(val)
		state.car.forEach(item=>item.isSelected = val)
		localStorage.car = JSON.stringify(state.car)
	}

}
const actions = {
	initCar({commit}) {
		let result = JSON.parse(localStorage.car || '[]')
		commit('initCar',result)
	},
	addGood({commit},params) {
		console.log(params)  // 获取id 对象
		commit('addGood',params)
		
	},
	// 	增加商品
	addGoodList({commit},params) {
		commit('addGoodList',params)
	},
	reduceGood({commit},params) {
		commit('reduceGood',params)
	},
	removeGood({commit},id) {
		commit('removeGood',id)
	},
	seleteGood({commit},val){
		commit('seleteGood',val)
	}

}


const store = new Vuex.Store({
    state,mutations,actions,getters
})

export default store

