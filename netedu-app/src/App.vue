<template>
  <div id="app">
    <font-awesome-icon :icon="icon" pulse />
    <router-view/>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'
export default {
  name: 'App',
  computed: {
    icon () {
      return faSpinner
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
