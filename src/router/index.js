import Vue from 'vue'
import VueRouter from 'vue-router'
import person from "./person";

const routerReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch((error) => error);
};
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

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
