import Vue from 'vue'
import App from './App.vue'
// import './components/video'
Vue.config.productionTip = false
// import video from 'video.js'
// Vue.use(video)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
