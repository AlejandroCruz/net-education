<template>
  <div class="hello">
    <!-- TODO: How to use individual FA icons -->
    <!-- <font-awesome-icon icon="spinner" pulse /> -->
    <h2>Test Component</h2>
    <button @click="testBtn">Test</button>
  </div>
</template>

<script>
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  data () {
    return {
    }
  },
  methods: {
    testBtn () {
      let sW = screen.width
      alert( 'Screen width: ' + sW )
    }
  },
  components: {
    // FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
</style>
