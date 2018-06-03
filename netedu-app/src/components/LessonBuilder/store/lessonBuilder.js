export default {
  state: {
    lessonGrade: null,
    lessonSubject: null,
    lessonBuildData: null
  },
  mutations: {
    setLessonGrade ( state, payload ) {
      state.lessonGrade = payload
    },
    setLessonSubject ( state, payload ) {
      state.lessonSubject = payload
    },
    setLessonBuildData ( state, payload ) {
    }
  },
  actions: {
    setLessonGrade ({ commit }, e ) {
      commit( 'setLessonGrade', e )
    },
    setLessonSubject ({ commit }, e ) {
      commit( 'setLessonSubject', e )
    },
    setLessonBuildData ({ commit }, e ) {
      commit( 'setLessonBuildData', e )
    }
  },
  getters: {
    getLessonGrade ( state ) {
      return state.lessonGrade
    },
    getLessonSubject ( state ) {
      return state.lessonSubject
    },
    getLessonBuildData ( state ) {
      return state.lessonBuildData
    }
  }
}
