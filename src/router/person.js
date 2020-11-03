export default [
  {
    path: '/index',
    name: 'Person',
    component: () => import(/* webpackChunkName: "person" */ '../views/person/index.vue')
  },
]
