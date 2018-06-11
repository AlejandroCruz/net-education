import Vuex from 'vuex'
import Vue from 'vue'
import lessonBuilder from '@/components/LessonBuilder/store/lessonBuilder'
import menus from '@/components/Menus/store/menus'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    lessonBuilder,
    menus
  },
  state: {
    windowSize: {
      h: 0,
      w: 0
    }
  },
  mutations: {
    setWindowSize ( state, payload ) {
      state.windowSize.h = payload[0]
      state.windowSize.w = payload[1]
    }
  },
  actions: {
    setWindowSize ({ commit }, e ) {
      commit( 'setWindowSize', e )
    }
  },
  getters: {
    getWindowSize ( state ) {
      return state.windowSize
    }
  }
})
