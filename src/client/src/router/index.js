import Vue from 'vue'
import Router from 'vue-router'
import Modals from '@/components/Modals'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/modal/:list',
      name: 'modals',
      component: Modals
    }
  ]
})
