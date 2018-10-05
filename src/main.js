import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Upload,
  Radio,
  Button,
  Switch,
  Message,
  MessageBox,
  DatePicker,
  Tag,
  Steps,
  Step,
  Form,
  Checkbox
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import http from './utils/http.js'
import './utils/filters.js'
import loading from './components/loading.vue'

// Message和MessageBox需要通过Vue.protype处理
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

// element-ui 按需引入
Vue.use(http)
Vue.use(Upload)
Vue.use(Radio)
Vue.use(Button)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Tag)
Vue.component('el-steps', Steps)
Vue.component('el-step', Step)
Vue.component('v-loading', loading)
Vue.component('el-form', Form)
Vue.component('el-form-item', Form)
Vue.component('el-checkbox', Checkbox)
Vue.component('el-checkbox-group', Checkbox)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
})
