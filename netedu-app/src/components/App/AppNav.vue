<template>
  <div id="app-nav">
    <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" :href="logo.address">
        <img class="img-fluid" :src="logo.icon" :alt="logo.alt">
      </a>
    </nav>

  </div>
</template>

<script>
import { resources } from '@/app.config'
export default {
  data() {
    return {
      logo: {
        address: '/#/dashboard',
        alt: 'Net Education (icon)',
        icon: resources.primaryLogo,
        toggleNav: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
