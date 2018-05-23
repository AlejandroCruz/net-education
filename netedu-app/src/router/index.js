import Vue from 'vue'
import Router from 'vue-router'
import DashboardComp from '@/components/DashboardComps/DashboardComp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashboardComp',
      component: DashboardComp
    }
  ]
})
