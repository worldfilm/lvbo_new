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
import Advert from '@/page/Advert'
import Forgetpsw from '@/page/Forgetpsw'

import Accunt from '@/page/user/Accunt';
import Favorite from '@/page/user/Favorite';
import Info from '@/page/user/Info';
import Safety from '@/page/user/Safety';
import Video from '@/page/user/Video';
import Oder from '@/page/user/Oder';
import RedemptionCode from '@/page/user/RedemptionCode';
import Transaction from '@/page/user/Transaction';
import ChangeEmail from '@/page/user/ChangeEmail';
import ChangePayPsw from '@/page/user/ChangePayPsw';
import ChangePsw from '@/page/user/ChangePsw';
import Changehead from '@/page/user/Changehead';
import payContain from '@/page/user/payContain';

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
    }, {
      path: '/Advert',
      name: 'Advert',
      component: Advert
    }, {
      path: '/Accunt',
      name: 'Accunt',
      component: Accunt
    }, {
      path: '/Favorite',
      name: 'Favorite',
      component: Favorite
    }, {
      path: '/Info',
      name: 'Info',
      component: Info
    }, {
      path: '/Safety',
      name: 'Safety',
      component: Safety
    }, {
      path: '/Video',
      name: 'Video',
      component: Video
    }, {
      path: '/Oder',
      name: 'Oder',
      component: Oder
    }, {
      path: '/RedemptionCode',
      name: 'RedemptionCode',
      component: RedemptionCode
    }, {
      path: '/Transaction',
      name: 'Transaction',
      component: Transaction
    }, {
      path: '/ChangeEmail',
      name: 'ChangeEmail',
      component: ChangeEmail
    }, {
      path: '/ChangePayPsw',
      name: 'ChangePayPsw',
      component: ChangePayPsw
    }, {
      path: '/ChangePsw',
      name: 'ChangePsw',
      component: ChangePsw
    }, {
      path: '/Changehead',
      name: 'Changehead',
      component: Changehead
    }, {
      path: '/payContain',
      name: 'payContain',
      component: payContain
    }, {
      path: '/Forgetpsw',
      name: 'Forgetpsw',
      component: Forgetpsw
    }
  ]
})
