import presentationsApi from '../../api/presentations' 

// initial state
const state = {
    list: []
  }
  
  // getters
  const getters = {
    getList: function(state: any) {
      return state.list
    }
  }
  
  // actions
  const actions = {
    getPresentations ({ commit }: { commit: any }) {
      presentationsApi
        .getList()
        .then((presentations: any) => {
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