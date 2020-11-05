export default [
  {
    path: '/index',
    name: 'Person',
    component: () => import(/* webpackChunkName: "person" */ '../views/person/index.vue'),
    meta: {
      title: "首页",
    },
  },
  {
    path: '/templatelist',
    name: 'TemplateList',
    component: () => import(/* webpackChunkName: "templatelist" */ '../views/person/TemplateList.vue'),
    meta: {
      title: "模板列表",
    },
  },
]
