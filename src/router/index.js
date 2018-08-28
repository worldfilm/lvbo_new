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
import VideoMore from '@/page/VideoMore'
import VideoDetil from '@/page/VideoDetil'
import LineStation from '@/page/LineStation'
import Upload from '@/page/Upload'
import Integral from '@/page/integral'

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
    },{
      path: '/VideoMore',
      name: 'VideoMore',
      component: VideoMore
    },{
      path: '/VideoDetil',
      name: 'VideoDetil',
      component: VideoDetil
    },{
      path: '/LineStation',
      name: 'LineStation',
      component: LineStation
    },{
      path: '/Upload',
      name: 'Upload',
      component: Upload
    }, {
      path: '/Integral',
      name: 'Integral',
      component: Integral
    }
  ]
})
