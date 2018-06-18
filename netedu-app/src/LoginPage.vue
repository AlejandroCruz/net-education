<template>
  <div id="login-page" v-if="pageName()">

    <img :src="logo.icon" alt="logo">
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
  min-width: 251px;
  text-align: center;
  // z-index: 1021;

  img {
    margin-bottom: 1rem;
    width: 5rem;
  }
}
</style>
