<template>
  <div id="app-content">

    <div class="content-wrapper">
      <div class="container-fluid">

        <!-- Breadcrumbs
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Chart</li>
        </ol> -->

        <router-view/>

      </div>
      <footer class="sticky-footer">{{ appTitle }} {{ dateFooter }}</footer>
    </div>

    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"/>
    </a>

  </div>
</template>

<script>
import { resources } from './app.config'

export default {
  data () {
    return {
      appTitle: resources.appTitle,
      dateFooter: null
    }
  },
  mounted () {
    this.dateFooter = new Date().getFullYear()
  }
}
</script>

<style lang="scss" scoped>
@import '../../main';

#app-content {
  background-color: fff;
  text-align: center;
}
.content-wrapper {
  min-height: calc(100vh - 56px - 55px) !important;
}

#app-content {
  color: $nav-dark-accent;
}
</style>
