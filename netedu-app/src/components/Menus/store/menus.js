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
    getToggleSidenav (state) {
      return state.toggleSidenav
    }
  }
}
