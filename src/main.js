// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/index.css'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/github.css'

Vue.config.productionTip = false

// particlesJS.load('particles-js', '../static/particles.json', function() {
//   console.log('callback - particles.js config loaded')
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
