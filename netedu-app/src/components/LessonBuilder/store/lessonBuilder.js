export default {
  state: {
    lessonGrade: null,
    lessonSubject: null,
    lessonTitle: null,
    lessonCode: null,
    lessonBuildData: null
  },
  mutations: {
    setLessonGrade ( state, payload ) {
      state.lessonGrade = payload
    },
    setLessonSubject ( state, payload ) {
      state.lessonSubject = payload
    },
    setLessonTitle ( state, payload ) {
      state.lessonTitle = payload
    },
    setLessonCode ( state, payload ) {
      state.lessonCode = payload
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
    setLessonTitle ({ commit }, e ) {
      commit( 'setLessonTitle', e )
    },
    setLessonCode ({ commit }, e ) {
      commit( 'setLessonCode', e )
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
    getLessonTitle ( state ) {
      return state.lessonTitle
    },
    getLessonCode ( state ) {
      return state.lessonCode
    },
    getLessonBuildData ( state ) {
      return state.lessonBuildData
    }
  }
}
