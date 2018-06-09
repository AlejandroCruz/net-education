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
  },
  mutations: {
  },
  getters: {
  }
})
