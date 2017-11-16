import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Index'
import Table from '@/components/Table'
import UserAdd from '@/components/UserAdd'
import UserEdit from '@/components/UserEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Start',
      component: Start
    },
    {
      path: '/list',
      component: Table
    },
    {
      path: '/user/add',
      component: UserAdd
    },
    {
      path: '/user/:id',
      component: UserEdit,
      props: true
    }
  ]
})
