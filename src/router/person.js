export default [
  {
    path: '/index',
    name: 'Person',
    component: () => import(/* webpackChunkName: "person" */ '../views/person/Index.vue'),
    meta: {
      title: "首页",
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/person/Home.vue'),
    meta: {
      title: "首页",
    },
  },
]
