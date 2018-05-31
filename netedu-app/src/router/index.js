import Vue from 'vue'
import Router from 'vue-router'
import DashboardContent from '@/components/Dashboard/DashboardContent'
import LessonBuildContent from '@/components/LessonBuilder/LessonBuildContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DashboardContent
    },
    {
      path: '/dashboard',
      name: 'DashboardContent',
      component: DashboardContent
    },
    {
      path: '/lesson-builder',
      name: 'LessonBuildContent',
      component: LessonBuildContent
    }
  ]
})
