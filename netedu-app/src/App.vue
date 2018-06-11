<template>
  <div id="app">
    <AppNav/>
    <AppContent/>
  </div>
</template>

<script>
import AppContent from './components/App/AppContent'
import AppNav from './components/App/AppNav'

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
    }
  },
  components: {
    AppNav,
    AppContent
  }
}
</script>
