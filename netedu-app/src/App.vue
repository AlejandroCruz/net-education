<template>
  <div id="app" class="container-fluid">
    <!-- TODO:Reminder FA template -->
    <!-- <font-awesome-icon icon="spinner" pulse /> -->
    <router-view/>
  </div>
</template>

<script>
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  name: 'App',
  components: {
    // FontAwesomeIcon
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
