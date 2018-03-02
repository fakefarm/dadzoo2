import Vue from 'vue'
import Router from 'vue-router'
import TenCmd from '@/pages/TenCmd'
import DailySchedule from '@/pages/DailySchedule'
import Genesis from '@/genesis/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TenCmd',
      component: TenCmd
    },
    {
      path: '/daily-schedule',
      name: 'DailySchedule',
      component: DailySchedule
    },
    {
      path: '/genesis',
      name: 'Genesis',
      component: Genesis
    }
  ]
})
