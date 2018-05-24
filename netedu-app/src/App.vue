<template>
  <div id="app" class="container-fluid">
    <AppContent/>
  </div>
</template>

<script>
import AppContent from './components/App/AppContent'
export default {
  name: 'App',
  components: {
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
