import { createRouter, createWebHistory } from 'vue-router'
import PowerView from '../views/power-view/power-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'PowerView',
        component: PowerView
      }
  ]
})

export default router
