import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)


const state = {
  user: {},
  token: null,
  title: ''
}

const mutations = {
  [types.LOGIN]: (state, data) => {
    localStorage.token = data
    state.token = data
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.token = null
  },
  [types.TITLE]: (state, data) => {
    state.title = data
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations
})
