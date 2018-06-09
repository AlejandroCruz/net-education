export default {
  state: {
    anyNavClicked: false
  },
  mutations: {
    setAnyNavClicked ( state, payload ) {
      state.lessonGrade = payload
    }
  },
  actions: {
    setAnyNavClicked ({ commit }, e ) {
      commit( 'setAnyNavClicked', e )
    }
  },
  getters: {
    getAnyNavClicked ( state ) {
      return state.anyNavClicked
    }
  }
}
