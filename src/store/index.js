import { createStore } from 'vuex'

export default createStore({
  state: {
    realname: 'Donato'
  },
  getters: {
    getName: state => {
      return state.realname;
    }
  },
  mutations: {
    setName: (state,nome)  => {
      state.realname = nome;
    }
  },
  actions: {
  },
  modules: {
  }
})
