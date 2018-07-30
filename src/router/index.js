Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Vip from '@/page/Vip'
import Logoin from '@/page/Logoin'
import Register from '@/page/Register'
import Zhibo from '@/page/Zhibo'
import Protocol from '@/page/Protocol'
import UserCenter from '@/page/UserCenter'

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
      path: '/Logoin',
      name: 'Logoin',
      component: Logoin
    },{
      path: '/Register',
      name: 'Register',
      component: Register
    },{
      path: '/Zhibo',
      name: 'Zhibo',
      component: Zhibo
    },{
      path: '/Protocol',
      name: 'Protocol',
      component: Protocol
    },{
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter
    }
  ]
})
