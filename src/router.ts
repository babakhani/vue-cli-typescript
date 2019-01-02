import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Error404 from './views/Error404.vue'
import i18n from './i18n'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: '404',
      component: Error404,
      meta: {
        title: i18n.t('messages.404')
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
