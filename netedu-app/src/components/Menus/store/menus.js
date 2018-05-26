export default {
  state: {
    toggleSidenav: null
  },
  mutations: {
    setToggleSidenav (state, payload) {
      state.toggleSidenav = payload
    }
  },
  getters: {
    toggleSidenav (state) {
      return state.toggleSidenav
    }
  }
}