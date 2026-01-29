import { defineStore } from 'pinia'
import { products } from '@/api/mock'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: products,
  }),
})
