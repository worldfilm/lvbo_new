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
  Tag
} from 'element-ui';
import http from './utils/http.js'
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
Vue.component('v-loading', loading)
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