import Vue from 'vue'
import Router from 'vue-router'
import DashboardContent from '@/components/Dashboard/DashboardContent'
import LessonBuildContent from '@/components/LessonBuilder/LessonBuildContent'
import LessonForm from '@/components/LessonBuilder/LessonForm'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '../LoginPage'
import ResetPassword from '@/ResetPassword'

Vue.use( Router )

export default new Router({
  routes: [
    {
      path: '/hello-world',
      component: HelloWorld
    },
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
    },
    {
      path: '/lesson-builder/form',
      name: 'LessonForm',
      component: LessonForm
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/reset',
      name: 'ResetPassword',
      component: ResetPassword
    }
  ]
})
