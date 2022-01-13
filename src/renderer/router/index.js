import Vue from 'vue'
import Router from 'vue-router'
import IconsLanding from '../components/IconsLanding'
import DrawArea from '../components/DrawArea'
import IconDetail from '../components/IconDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/iconslanding',
      name: 'IconsLanding',
      component: IconsLanding
    },
    {
      path: '/drawarea',
      name: 'DrawArea',
      component: DrawArea
    },
    {
      path: '/icondetail',
      name: 'IconDetail',
      component: IconDetail
    }
  ]
})
