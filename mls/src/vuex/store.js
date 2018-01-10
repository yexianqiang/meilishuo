

import Vue from 'vue'
import Vuex from 'vuex'
import jquery from 'jquery'

Vue.use(Vuex)

const state = {
	id: ''
}


const mutations = {

	detailGoodId(state,id){
		state.id = id
		console.log(state.id)
	}
}

const store = new Vuex.Store({
    state,mutations
})

export default store