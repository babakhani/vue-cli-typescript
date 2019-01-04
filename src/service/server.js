import Vue from 'vue'
import VueResource from 'vue-resource'
import Api from './api'
import store from '@/store'
import router from '@/router'
Vue.use(VueResource)
const allApi = {
  ...Api
}
// Note: Before Request
Vue.http.interceptors.push((request, next) => {
  // Note: Add custom headers
  request.headers.set('X-CSRF-TOKEN', 'TOKEN')
  request.headers.set('Authorization', `Bearer fdslfihsdkjfh`)
  request.headers.set('Accept', 'application/json')
  next()
})
// Note: After Request
Vue.http.interceptors.push((request, next) => {
  next(function (response) {
    if (response.ok === false) {
      alert('XHR Error')
    }
  })
})
const Server = Vue.resource('sample{/id}', {}, allApi)
export default Server
