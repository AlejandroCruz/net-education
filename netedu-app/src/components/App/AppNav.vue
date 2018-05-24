<template>
  <div id="app-nav">
    <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" :href="logo.address">
        <img class="img-logo img-fluid" :src="logo.icon" :alt="logo.alt">
      </a>
      <!-- <app-sidenav/>
      <app-topnav/> -->
    </nav>
  </div>
</template>

<script>
import { resources } from './app.config'
export default {
  data () {
    return {
      logo: {
        address: '/#/',
        alt: 'Net Education (icon)',
        icon: resources.primaryLogo,
        toggleNav: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  a:first-child {
    padding: .3rem 1rem;

    img.img-logo{
      height: auto;
      width: 50px;
    }
  }
}
</style>
