<template>
  <div id="app-nav">
    <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" :href="logo.address">
        <img class="img-logo img-fluid" :src="logo.icon" :alt="logo.alt">
        <span>NetEducation</span>
      </a>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <app-topnav/>
        <app-sidenav/>
      </div>
    </nav>
  </div>
</template>

<script>
import AppTopnav from './AppTopnav'
import AppSidenav from './AppSidenav'
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
  },
  components: {
    AppTopnav,
    AppSidenav
  }
}
</script>

<style lang="scss" scoped>
@import '../../main.scss';

nav {
  a:first-child {
    padding: 0.3125rem 1rem 0 0;

    img.img-logo{
      height: auto;
      width: 50px;
    }
    span {
      color: $netedu-gold;
      font-size: 1.4rem;
      vertical-align: bottom;
    }
  }
}
</style>
