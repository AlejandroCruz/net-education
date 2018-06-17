<template>
  <div id="login-page" v-if="pageName()">

    <img class="mb-4" :src="logo.icon" alt="" width="100">
    <h1>Net Education</h1>
    <login-content/>

  </div>
</template>

<script>
import logo from '@/assets/logo-prime.png'
import LoginContent from '@/components/Login/LoginContent'

export default {
  data () {
    return {
      logo: {
        alt: 'Net Education ( icon )',
        icon: logo
      }
    }
  },
  components: {
    LoginContent
  },
  /* computed: {
    user () {
      return this.$store.getters.getUser
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      } else {
        this.$router.push('/login')
      }
    }
  }, */
  methods: {
    pageName () {
      if (this.$route.name === 'LoginPage') {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#login-page {
  color: white;
  text-align: center;
  // z-index: 1021;
}
</style>
