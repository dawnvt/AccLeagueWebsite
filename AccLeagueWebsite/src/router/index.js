import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Qualifiers from '../components/Qualifiers'
import Info from '../components/Info'
import MapPool from '../components/MapPool'
import SignUp from '../components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accuracy League',
      component: Hello
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/qualifiers',
      name: 'Qualifiers',
      component: Qualifiers
    },
    {
      path: '/map-pool',
      name: 'MapPool',
      component: MapPool
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})