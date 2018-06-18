<template>
  <div id="login-content">
    <form class="needs-validation" novalidate>

      <div v-if="resetMode">
        <h3 class="mb-3 font-weight-normal">Enter email to send new password:</h3>
      </div>
      <div v-else>
        <h3 class="mb-3 font-weight-normal">Please log in:</h3>
      </div>

      <div class="form-group">
        <input
          class="form-control"
          id="login-email"
          placeholder="Email"
          required
          type="email"
          v-model="email">
        <div class="invalid-feedback">
          Valid email required
        </div>
      </div>

      <div class="form-group" >
        <input
          class="form-control"
          disabled
          id="login-reset"
          placeholder="Password"
          type="text"
          v-if="resetMode"
        >
        <input
          class="form-control"
          id="login-pass"
          placeholder="Password"
          required
          type="text"
          v-else
          v-model="password"
        >
        <div class="invalid-feedback">
          Required field
        </div>
      </div>

      <footer class="form-group">
        <a v-if="resetMode" @click="resetPass">Login</a>
        <a v-else @click="resetPass">Reset password</a>
        <!-- <a :href="resetLink">Reset password</a> -->
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
      resetLink: '#/reset',
      resetMode: false
    }
  },
  methods: {
    resetPass () {
      if (this.resetMode) {
        this.resetMode = false
      } else {
        this.resetMode = true
      }
      console.log('LoginContent>resetPass --> this.resetMode:')
      console.log(this.resetMode)
      console.log('<--')
    }
  }
}
</script>

<style lang="scss" scoped>
#login-content {
  margin: auto;
  width: 70%;

  #login-reset {
    background-color: #b7b5b5;
    border-color: #4a4a4a;
    color: white;
  }

  .invalid-feedback {
    color: #ffa500;
    font-size: 1rem;
    text-align: left;
  }

  footer {
    font-size: 1rem;

    a {
      color: #007bff;
      text-decoration-line: none;

      &:hover {
        color: #0056b3;
      }
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
