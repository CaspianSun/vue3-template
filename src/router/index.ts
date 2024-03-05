import { createRouter, createWebHashHistory } from "vue-router"
import type { RouterOptions } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/decorators",
    children: [
      {
        path: "music",
        name: "music",
        component: () => import("@/views/music/index.vue"),
        meta: {
          title: "音乐播放",
        },
      },
    ],
  },
]

const router = createRouter(<RouterOptions>{
  history: createWebHashHistory(),
  routes: [...routes],
})

router.beforeEach((to, form, next) => {
  next()
})
router.afterEach(() => {})

export default router
