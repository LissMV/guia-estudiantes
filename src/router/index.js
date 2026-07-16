import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapaView from '@/views/MapaView.vue'
import MemesView from '@/views/MemesView.vue'
import PostView from '@/views/PostView.vue'
import BookReviewView from '@/views/BookReviewView.vue'
import EntrevistaView from '@/views/EntrevistaView.vue'
import ComunicacionView from '@/views/ComunicacionView.vue'

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
      path: '/entrevista',
      name: 'entrevista',
      component: EntrevistaView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: BookReviewView,
    },
    // 2. Agrega la ruta de la nueva sección
    {
      path: '/comunicacion',
      name: 'comunicacion',
      component: ComunicacionView,
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
