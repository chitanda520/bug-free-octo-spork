import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: () => import("../views/Film.vue"),
    children: [
      {
        path: "hotplaying",
        component: () => import("../views/film/HotPlaying.vue"),
      },
      {
        path: "willplaying",
        component: () => import("../views/film/WillPlaying.vue"),
      },
      {
        path: "",
        redirect:"hotplaying",
      },
    ]
  },
  {
    path: '/cinema',
    component: () => import("../views/Cinema.vue")
  },
  {
    path: '/zx',
    component: () => import("../views/Zhixun.vue")
  },
  {
    path: '/mine',
    component: () => import("../views/Mine.vue")
  },
  {
    path: '/detail/:id',
    component: () => import("../views/Detail.vue")
  },
  //城市列表路由
  {
      path:"/city",
      component: () => import("../views/City")
  },
  {
      path:"/search",
      component: () => import("../views/Search.vue")
  },
  {
    path: '*',
    redirect:"/film"
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
