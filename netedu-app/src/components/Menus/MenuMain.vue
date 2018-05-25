<template>
  <div id="menu-main">

    <ul id="exampleAccordion" class="navbar-nav navbar-sidenav" v-show="!showSkillsFormMenu">
      <li v-for="item in menu" :key="item.id" class="nav-item" data-toggle="tooltip" data-placement="right">
        <a class="nav-link" :href="item.address">
          <i :class="item.icon"/>
          <span class="nav-link-text">{{ item.tab }}</span>
        </a>
      </li>
    </ul>
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
export default {
  data () {
    return {
      menu: [
        { id: 0, tab: 'Dashboard', address: '/#/dashboard', icon: 'fa fa-tachometer-alt' },
        { id: 1, tab: 'Test Builder', address: '/#/test-builder', icon: 'fa fa-cogs' },
        { id: 2, tab: 'Practice', address: '/#/practice', icon: 'fa fa-pencil-alt' },
        { id: 3, tab: 'Exam', address: '/#/exam', icon: 'fa fa-clipboard' },
        { id: 4, tab: 'Skills>Form Dev', address: '/#/app/skills-form', icon: 'fa fa-ban' }
      ]
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
