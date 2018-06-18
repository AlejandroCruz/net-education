export default {
  state: {
    user: null
  },
  mutations: {
    setUser ( state, payload ) {
      state.user = payload
    }
  },
  actions: {
    setUser ({ commit }, e ) {
      console.log('Login>store --> email & pass:')
      console.log( e )
      console.log('<--')
      // firebase.auth().signInWithEmailAndPassword( e.email, e.password ).then(
      //   user => {
      //     const newUser = {
      //       id: user.uid,
      //       email: user.email
      //     }
      //     commit( 'setUser', newUser )
      //   }
      // ).catch(
      //   error => {
      //     console.log( error )
      //   }
      // )
    }
  },
  getters: {
    getUser ( state ) {
      return state.user
    }
  }
}
