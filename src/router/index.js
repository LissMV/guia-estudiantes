import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapaView from '@/views/MapaView.vue'
import MemesView from '@/views/MemesView.vue'
import PostView from '@/views/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/memes',
      name: 'memes',
      component: MemesView,
    },
    {
      path: '/mapa',
      name: 'mapa',
      component: MapaView,
    },

    {
      path: '/posts',
      name: 'posts',
      component: PostView,
    },

  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
