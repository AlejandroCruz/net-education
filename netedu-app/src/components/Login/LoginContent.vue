<template>
  <div id="login-content">
    <form class="needs-validation" novalidate>
      <h1 class="h3 mb-3 font-weight-normal">Please log in:</h1>

      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="text" id="inputEmail" class="form-control" v-model="email" placeholder="Email address" required>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
