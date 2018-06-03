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
      let elB = document.body.classList
      let elST = document.getElementById( 'sidenavToggler' ).childNodes[ 0 ].classList

      if (this.toggleSidenav) {
        elB.add( 'sidenav-toggled' )
        elST.remove( 'fa-angle-left' )
        elST.add( 'fa-angle-right' )
        this.toggleSidenav = false
      } else {
        elB.remove( 'sidenav-toggled' )
        elST.remove( 'fa-angle-right' )
        elST.add( 'fa-angle-left' )
        this.toggleSidenav = true
      }
    }
  }
}
</script>
