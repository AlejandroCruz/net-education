<template>
  <div id="app">
    <AppNav/>
    <AppContent/>
  </div>
</template>

<script>
import AppContent from './components/App/AppContent'
import AppNav from './components/App/AppNav'

export default {
  name: 'App',
  components: {
    AppNav,
    AppContent
  }
}
</script>
