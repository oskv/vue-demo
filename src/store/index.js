import Vue from 'vue'
import Vuex from 'vuex'
import presentations from './modules/presentations'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      presentations,
    }
  })