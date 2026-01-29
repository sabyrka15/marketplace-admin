import { defineStore } from 'pinia'
import http from '@/api/http'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    items: [],
    loading: false,
  }),
  actions: {
    async fetchOrders() {
      this.loading = true
      try {
        const { data } = await http.get('/orders')
        this.items = data
      } finally {
        this.loading = false
      }
    },
  },
})
