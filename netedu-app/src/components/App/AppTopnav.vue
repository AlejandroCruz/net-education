<template>
  <div id="navbar-top" class="collapse navbar-collapse">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fa fa-user"/> User Role</a>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-power-off"/>
          Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#navbar-top {
  ul:first-child {
    float: left;
    margin-left: 0 !important;
    vertical-align: baseline;

    a {
      padding-left: 0;

      svg { // After ViewJS interpolation <i> converts to <svg>
        vertical-align: baseline;
      }
    }
  }
  ul:nth-child( 2 ) {
    float: right;
    margin-left: auto;
  }
}
</style>
