import Vuex from 'vuex'
import Vue from 'vue'
import menus from '@/components/Menus/store/menus'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    menus
  },
  state: {
  },
  mutations: {
  },
  getters: {
  }
})
