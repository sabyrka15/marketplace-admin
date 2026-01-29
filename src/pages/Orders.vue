<script setup>
import { useOrdersStore } from '@/stores/orders'
import { onMounted } from 'vue'

const ordersStore = useOrdersStore()

onMounted(() => {
  ordersStore.fetchOrders()
})
</script>

<template>
  <el-table :data="ordersStore.items" v-loading="ordersStore.loading">
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="product" label="Product" />
    <el-table-column prop="status" label="Status" />
  </el-table>
</template>
