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
  components: {
    AppNav,
    AppContent
  }
}
</script>

<style lang="scss" scoped>
// #app {
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-font-smoothing: antialiased;
//   color: #2c3e50;
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   text-align: center;
// }
</style>
