import { defineStore } from 'pinia'
import http from '@/api/http'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [],
    loading: false,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const { data } = await http.get('/products')
        this.items = data
      } finally {
        this.loading = false
      }
    },
  },
})
