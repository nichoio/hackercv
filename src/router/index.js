import { createWebHistory, createRouter } from "vue-router"

import About from "@/views/about/About"
import CV from "@/views/about/CV"
import Blog from "@/views/blog/Blog"
import BlogDetails from "@/views/blog/BlogDetails"
import Home from '@/views/home/Home'
import Imprint from '@/views/imprint/Imprint'
import Projects from "@/views/projects/Projects"
import NotFound404 from "@/components/error/NotFound404"

const routes = [
  { path: "/", name: "Home", component: Home },

  { path: "/about", name: "About", component: About },
  { path: "/cv", name: "CV", component: CV },

  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog/:fileName", name: "BlogDetails", component: BlogDetails },

  { path: "/imprint", name: "Imprint", component: Imprint },

  { path: "/projects", name: "Projects", component: Projects },
  { path: "/:catchAll(.*)", component: NotFound404 },
]

const scrollBehavior = function (to, from, savedPosition) {
  return savedPosition || { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router
