<script setup>
import { useOrdersStore } from '@/stores/orders'

const ordersStore = useOrdersStore()
</script>

<template>
  <el-table :data="ordersStore.items">
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="product" label="Product" />
    <el-table-column prop="status" label="Status" />
  </el-table>
</template>
