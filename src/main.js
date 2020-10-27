import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

//css styles
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.sass'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data: {
    bus: new Vue()
  },
  render: h => h(App)
}).$mount('#app')
