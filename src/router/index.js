import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderProductView from '@/views/OrderProductView.vue'
import DetailsView from '@/views/DetailsView.vue'
import PayBillView from '@/views/PayBillView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: OrderProductView
  },
  {
    path: '/bill',
    name: 'bill',
    component: PayBillView
  },
  {
    path: '/details:item',
    name: 'details',
    component: DetailsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
