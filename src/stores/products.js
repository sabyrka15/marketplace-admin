import { defineStore } from 'pinia'
import { products } from '@/api/mock'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: products,
    loading: false,
  }),
  actions: {
    fetchProducts() {
      this.loading = true
      setTimeout(() => {
        this.items = products
        this.loading = false
      }, 1000)
    },
  },
})
