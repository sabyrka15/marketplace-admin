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
    async createProduct(payload) {
      const { data } = await http.post('/products', payload)
      this.items.push(data)
    },
    async deleteProduct(id) {
      await http.delete(`/products/${id}`)
      this.items = this.items.filter((item) => item.id !== id)
    },
  },
})
