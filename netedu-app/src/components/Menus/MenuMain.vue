<template>
  <div id="menu-main">

    <ul id="exampleAccordion" class="navbar-nav navbar-sidenav">
      <li
        class="nav-item"
        data-toggle="tooltip"
        data-placement="right"
        v-for="item in menu"
        :key="item.id">
        <a
          class="nav-link"
          :href="item.address"
          @click="navClick">
          <i :class="item.icon"/>
          <span class="nav-link-text">{{ item.tab }}</span>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
// import util from '@/utils/UtilWindowSize'
// import { EventBus } from '@/main'

export default {
  data () {
    return {
      menu: [
        { id: 0, tab: 'Dashboard', address: '/#/dashboard', icon: 'fa fa-tachometer-alt' },
        { id: 1, tab: 'Lesson Builder', address: '/#/lesson-builder', icon: 'fa fa-cogs' },
        // { id: 2, tab: 'Practice', address: '/#/practice', icon: 'fa fa-pencil-alt' },
        { id: 3, tab: 'Exam', address: '/#/exam', icon: 'fa fa-clipboard' },
        { id: 4, tab: 'Lesson>Form Dev', address: '/#/lesson-builder/form', icon: 'fa fa-ban' }
      ]
    }
  },
  methods: {
    navClick () {
      console.log('MenuMain>navClick --> windowSize:')
      console.log( this.$store.getters.getWindowSize.h )
      console.log( this.$store.getters.getWindowSize.w )
      console.log('<--')

      // if ( this.$window.width < 992 ) {
      //   EventBus.$emit( 'navClick', true )
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../main.scss";

#app-sidenav {
  .navbar-sidenav {
    overflow-x: hidden;
    overflow-y: auto;
  }

  li {
    border-top: 1px solid #2a2f35;
      &:last-child {
        border-bottom: 1px solid #2a2f35;
      }

      svg { // After ViewJS interpolation <i> converts to <svg>
        width: 1.28571429em;
      }
  }
  #exampleAccordion li a[href*="form"] { // TODO: Delete test code
    color: $nav-dark-accent !important;
    border-bottom:  $nav-dark-accent;
  }

  ul.sidenav-toggler > li {
    border: none;
  }
}
</style>
