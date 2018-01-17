import Vue from 'vue'
import Router from 'vue-router'
import AppShell from '@/components/AppShell'
import Home from '@/components/Home'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],

  mode: 'history'
})
