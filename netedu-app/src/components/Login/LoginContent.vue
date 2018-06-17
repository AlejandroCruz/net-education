<template>
  <div id="login-content">
    <form class="needs-validation" novalidate>
      <h1 class="h3 mb-3 font-weight-normal">Please log in:</h1>

      <div class="form-group">
        <input type="text" id="loginEmail" class="form-control" v-model="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="text" id="loginPass" class="form-control" v-model="password" placeholder="Password" required>
      </div>

      <footer class="form-group">
        <a :href="resetLink">Reset password</a>
      </footer>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      resetLink: '#/reset'
    }
  }
}
</script>

<style lang="scss" scoped>
#login-content {
  margin: auto;
  max-width: 35%;

  footer {
    a:hover {
      text-decoration-line: none;
    }
  }
}
</style>
