import { defineStore } from 'pinia'
import { orders } from '@/api/mock'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    items: orders,
  }),
  actions: {
    fetchOrders() {
      this.loading = true
      setTimeout(() => {
        this.items = orders
        this.loading = false
      }, 1000)
    },
  },
})
