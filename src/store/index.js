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
  },
  actions: {
  },
  modules: {
  }
})
