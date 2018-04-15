import presentationsApi from '../../api/presentations' 

// initial state
const state = {
    list: []
  }
  
  // getters
  const getters = {
    getList: state => state.list
  }
  
  // actions
  const actions = {
    getPresentations ({ commit }) {
      presentationsApi
        .getList()
        .then((presentations) => {
          commit('setList', presentations)
        });
    }
  }
  
  // mutations
  const mutations = {
    setList (state:any, list:any) {
      state.list = list;
    },
  }
  
  export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
  }