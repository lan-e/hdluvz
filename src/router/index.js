import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/organization',
    name: 'organization',
    component: function () {
      return import('../views/OrganizationView.vue')
    }
  },
  {
    path: '/members',
    name: 'members',
    component: function () {
      return import('../views/MembersView.vue')
    }
  },
  {
    path: '/archive',
    name: 'archive',
    component: function () {
      return import('../views/ArchiveView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
