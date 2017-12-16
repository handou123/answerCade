import Vue from 'vue'
import Router from 'vue-router'
import cade from '@/components/cade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cade',
      component: cade
    }
  ]
})
