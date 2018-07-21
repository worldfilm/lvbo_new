Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Vip from '@/page/Vip'
import videoList from '@/page/VideoList'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Home',
      name: 'Home',
      component: Home
    },{
      path: '/Vip',
      name: 'Vip',
      component: Vip
    },{
      path: '/VideoList',
      name: 'VideoList',
      component: VideoList
    }
  ]
})
