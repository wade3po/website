import Vue from 'vue'
import VueRouter from 'vue-router'
import person from "./person";

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index'
  },
]
routes = routes.concat(person)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
