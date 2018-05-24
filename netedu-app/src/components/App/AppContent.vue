<template>
  <div id="app-content" class="content-wrapper">
    <div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li class="breadcrumb-item active">Test Chart</li>
      </ol>

      <router-view/>

    </div>
  </div>
</template>

<style lang="scss" scoped>
#app-content {
  background-color: fff;
}
// .content-wrapper {
//   min-height: calc(100vh - 56px - 56px);
// }
</style>
