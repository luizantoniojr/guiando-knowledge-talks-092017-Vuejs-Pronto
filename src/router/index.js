import Vue from 'vue'
import Router from 'vue-router'
import Listagem from '@/components/Listagem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Listagem',
      component: Listagem
    }
  ]
})
