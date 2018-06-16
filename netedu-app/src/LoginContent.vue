<template>
  <div id="login-content" v-if="pageName()">

    <img class="mb-4" :src="logo.icon" alt="" width="300">
    <h1>Login</h1>

  </div>
</template>

<script>
import logo from '@/assets/logo-prime.png'

export default {
  name: 'LoginContent',
  data () {
    return {
      logo: {
        address: '/#/',
        alt: 'Net Education ( icon )',
        icon: logo
      }
    }
  },
  // computed: {
  //   user () {
  //     return this.$store.getters.getUser
  //   }
  // },
  // watch: {
  //   user (value) {
  //     if (value !== null && value !== undefined) {
  //       this.$router.push('/')
  //     } else {
  //       this.$router.push('/login')
  //     }
  //   }
  // },
  methods: {
    pageName () {
      if (this.$route.name === 'LoginContent') {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
