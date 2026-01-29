import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Products from '@/pages/Products.vue'
import Orders from '@/pages/Orders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AdminLayout,
      redirect: '/products',
      children: [
        { path: 'products', component: Products },
        { path: 'orders', component: Orders },
      ],
    },
  ],
})

export default router
