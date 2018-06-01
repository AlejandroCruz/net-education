import Vuex from 'vuex'
import Vue from 'vue'
import lessonBuilder from '@/components/LessonBuilder/store/lessonBuilder'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    lessonBuilder
  },
  state: {
  },
  mutations: {
  },
  getters: {
  }
})
