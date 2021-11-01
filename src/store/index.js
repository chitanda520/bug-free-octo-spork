import Vue from 'vue'
import Vuex from 'vuex'
//引入持久化模块
import createPersistedState from "vuex-persistedstate"

import cinemaModule from "./modules/cinemaModule"
import cityModule from "./modules/cityModule"
import filmModule from "./modules/filmModule"
import tabBarModule from "./modules/tabBarModule"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState()], // 数据持久化
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cinemaModule,
    cityModule,
    filmModule,
    tabBarModule
  }
})
