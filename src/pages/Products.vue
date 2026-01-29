<script setup>
import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()
</script>

<template>
  <el-table :data="productsStore.items">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="price" label="Price" />
  </el-table>
</template>
