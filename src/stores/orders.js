import { defineStore } from 'pinia'
import { orders } from '@/api/mock'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    items: orders,
  }),
})
