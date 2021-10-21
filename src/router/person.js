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
  },{
    path: '/urlcollect',
    name: 'urlcollect',
    component: () => import(/* webpackChunkName: "urlcollect" */ '../views/person/UrlCollect.vue'),
    meta: {
      title: "网址导航",
    },
  },{
    path: '/collectarticle',
    name: 'collectarticle',
    component: () => import(/* webpackChunkName: "collectarticle" */ '../views/person/CollectArticle.vue'),
    meta: {
      title: "精选文章",
    },
  },{
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/person/About.vue'),
    meta: {
      title: "关于",
    },
  },
]
