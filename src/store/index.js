import { createStore } from 'vuex'

export default createStore({
    state: {
      realname: '',
      cognome: '',
      email: ''
    },
    getters: {
      getName: state => {
        return state.realname;
      },
      getCognome: state => {
        return state.cognome;
      },
      getEmail: state => {
        return state.email;
      }
    },
    mutations: {
      setName: (state,nome)  => {
        state.realname = nome;
      },
      setCognome: (state,cognome)  => {
        state.cognome = cognome;
      },
      setEmail: (state,email)  => {
        state.email = email;
      }
    },
    actions: {
      actionProfile: (context, profile) => {
        setTimeout(() => {
          context.commit('setName', profile.nome1);
          context.commit('setCognome', profile.cognome);
          context.commit('setEmail', profile.email);
        }, 2000);
      }
    },
    modules: {
    }
})
