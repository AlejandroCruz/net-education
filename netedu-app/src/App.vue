<template>
  <div id="app" class="container-fluid">
    <AppContentComp/>
  </div>
</template>

<script>
import AppContentComp from './components/AppComps/AppContentComp'
export default {
  name: 'App',
  components: {
    AppContentComp
  }
}
</script>

<style lang="scss" scoped>
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
