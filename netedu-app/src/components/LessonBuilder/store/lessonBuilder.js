export default {
  state: {
    lessonGrade: null,
    lessonBuildData: null
  },
  mutations: {
    setLessonGrade ( state, payload ) {
      state.lessonGrade = payload
    },
    setLessonBuildData ( state, payload ) {
    }
  },
  actions: {
    setLessonGrade ({ commit }, e ) {
      commit( 'setLessonGrade', e )
    },
    setLessonBuildData ({ commit }, e ) {
      commit( 'setLessonBuildData', e )
    }
  },
  getters: {
    getLessonGrade ( state ) {
      return state.lessonGrade
    },
    getLessonBuildData ( state ) {
      return state.lessonBuildData
    }
  }
}
