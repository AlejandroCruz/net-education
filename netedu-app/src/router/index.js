import Vue from 'vue'
import Router from 'vue-router'
import DashboardContent from '@/components/Dashboard/DashboardContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashboardContent',
      component: DashboardContent
    }
  ]
})
