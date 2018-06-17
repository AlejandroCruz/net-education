<template>
  <div id="login-content">
    <form class="needs-validation" novalidate>
      <h1 class="h3 mb-3 font-weight-normal">Please log in:</h1>

      <div class="form-group">
        <input type="email" id="loginEmail" class="form-control" v-model="email" placeholder="Email" required>
        <div class="invalid-feedback">
          Valid email required
        </div>
      </div>
      <div class="form-group">
        <input type="text" id="loginPass" class="form-control" v-model="password" placeholder="Password" required>
        <div class="invalid-feedback">
          Required field
        </div>
      </div>

      <footer class="form-group">
        <a :href="resetLink">Reset password</a>
      </footer>

      <div class="form-group">
        <div class="actions">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import './Utils'

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
  width: 70%;

  .invalid-feedback {
    color: #ffa500;
    font-size: 1rem;
    text-align: left;
  }

  footer {
    a:hover {
      text-decoration-line: none;
    }
  }

  @media (min-width: 576px) {
    width: 290px;
  }
  @media (min-width: 992px) {
    width: 25%;
  }
}
</style>
