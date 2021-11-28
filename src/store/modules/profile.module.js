const state = {
    realname: '',
    cognome: '',
    email: ''
};
const getters = {
    getName: (state, getters, rootState, rootGetters) => {
      return state.realname + ' - ' + rootGetters['settings/getName'];
    },
    getCognome: state => {
      return state.cognome;
    },
    getEmail: state => {
      return state.email;
    }
};
const actions = {
    actionProfile: (context, profile) => {
      setTimeout(() => {
        context.commit('setName', profile.nome1);
        context.commit('setCognome', profile.cognome);
        context.commit('setEmail', profile.email);
      }, 100);
    }
};
const mutations = {
    setName: (state,nome)  => {
      state.realname = nome;
    },
    setCognome: (state,cognome)  => {
      state.cognome = cognome;
    },
    setEmail: (state,email)  => {
      state.email = email;
    }    
};

export default {
  namespaced : true,
  state,
  getters,
  actions,
  mutations
}