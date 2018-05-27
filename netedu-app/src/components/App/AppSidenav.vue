<template>
  <div id="app-sidenav">

    <MenuMain/>

    <ul class="navbar-nav sidenav-toggler">
      <li class="nav-item">
        <a id="sidenavToggler" class="nav-link text-center" @click="sidenavToggler">
          <i class="fa fa-fw fa-angle-left"/>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import MenuMain from '@/components/Menus/MenuMain'

export default {
  data () {
    return {
      toggleSidenav: true
    }
  },
  components: {
    MenuMain
  },
  methods: {
    sidenavToggler () {
      let elementB = document.body.classList
      let elementST = document.getElementById('sidenavToggler').childNodes[0].classList

      if (this.toggleSidenav) {
        elementB.add('sidenav-toggled')
        elementST.remove('fa-angle-left')
        elementST.add('fa-angle-right')
        this.toggleSidenav = false
      } else {
        elementB.remove('sidenav-toggled')
        elementST.remove('fa-angle-right')
        elementST.add('fa-angle-left')
        this.toggleSidenav = true
      }

      // TODO: Test store module
      this.$store.commit('setToggleSidenav', this.toggleSidenav)
    }
  }
}
</script>
