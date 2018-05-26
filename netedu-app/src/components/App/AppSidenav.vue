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
      let bST = document.body.classList
      let sT = document.getElementById('sidenavToggler').childNodes[0].classList

      if (this.toggleSidenav) {
        bST.add('sidenav-toggled')
        sT.remove('fa-angle-left')
        sT.add('fa-angle-right')
        this.toggleSidenav = false
      } else {
        bST.remove('sidenav-toggled')
        sT.remove('fa-angle-right')
        sT.add('fa-angle-left')
        this.toggleSidenav = true
      }
    }
  }
}
</script>
