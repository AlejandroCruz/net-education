<template>
  <div id="app">
    <div v-if="pageName()">
      <AppNav/>
      <AppContent/>
    </div>
    <div v-else>
      <login-page/>
    </div>
  </div>
</template>

<script>
import AppContent from './components/App/AppContent'
import AppNav from './components/App/AppNav'
import LoginPage from './LoginPage'

export default {
  name: 'App',
  created () {
    window.addEventListener('resize', this.handleResize)
  },
  mounted () {
    this.handleResize()
  },
  methods: {
    handleResize () {
      this.$store.dispatch( 'setWindowSize', [
        window.innerHeight,
        window.innerWidth
      ])
    },
    pageName () {
      let route = this.$route.path

      if (route === '/login') {
        return false
      } else {
        return true
      }
    }
  },
  components: {
    AppNav,
    AppContent,
    LoginPage
  }
}
</script>
