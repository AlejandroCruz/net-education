<template>
  <div id="app-nav">
    <!-- The camelCase #id is required by startbootstrap-sb-admin -->
    <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" :href="logo.address">
        <img class="img-logo img-fluid" :src="logo.icon" :alt="logo.alt">
        <span>NetEducation</span>
      </a>
      <button
        id="hamburger"
        class="navbar-toggler navbar-toggler-right"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-target="#navbarResponsive"
        data-toggle="collapse">
        <span class="navbar-toggler-icon"/>
      </button>
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
import { EventBus } from '@/main'

export default {
  data () {
    return {
      logo: {
        address: '/#/',
        alt: 'Net Education ( icon )',
        icon: resources.primaryLogo
      }
    }
  },
  mounted () {
    this.collapseNav()
  },
  methods: {
    collapseNav () {
      EventBus.$on('navClick', ( e ) => {
      })
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
    margin-right: 0;
    padding: 0.3125rem 1rem 0 0;

    img.img-logo {
      height: auto;
      width: 2.25em;
    }
    span {
      color: $netedu-gold;
      font-size: 1.4rem;
      vertical-align: bottom;
    }
  }
}
</style>
