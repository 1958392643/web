import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Login from '@/components/core/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:"/",
      component:Layout,
      redirect:'/home',
      children:[
        {
          path:'home',
          component:Home,
        }
      ]
    },
    {
      path:"/login",
      component:Login
    }
  ]
})

export default router
