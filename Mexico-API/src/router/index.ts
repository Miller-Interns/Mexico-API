import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home-page.vue'
import content from '../views/content-page.vue'

const routes = [
  { path: '/', component: home },
  { path: '/content', component: content }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
