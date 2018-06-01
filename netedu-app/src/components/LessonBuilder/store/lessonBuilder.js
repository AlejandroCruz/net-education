/* From a deprecated test */
// export default {
//   state: {
//     toggleSidenav: null
//   },
//   mutations: {
//     setToggleSidenav (state, payload) {
//       state.toggleSidenav = payload
//     }
//   },
//   getters: {
//     getToggleSidenav (state) {
//       return state.toggleSidenav
//     }
//   }
// }

// methods: {
//   mutateEvent () {
//     this.$store.commit('setToggleSidenav', this.toggleSidenav)
//   },
//   getEvent () {
//     console.log('\\src\\components\\App\\AppNav.vue --> should say true:')
//     console.log(this.$store.getters.getToggleSidenav)
//     console.log('<--')
//   }
// }
export default {
  state: {
    lessonBuildData: {}
  },
  mutations: {
    setLessonBuildData (state, payload) {
      state.lessonBuildData.add = payload
    }
  },
  actions: {
    setLessonBuildData (context) {
      context.commit('setLessonBuildData')
    }
  },
  getters: {
    getLessonBuildData (state) {
      return state.lessonBuildData
    }
  }
}
