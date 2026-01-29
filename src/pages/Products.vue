<script setup>
import { useProductsStore } from '@/stores/products'
import { onMounted } from 'vue'

const productsStore = useProductsStore()

onMounted(() => {
  productsStore.fetchProducts()
})
</script>

<template>
  <el-table :data="productsStore.items" v-loading="productsStore.loading">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="price" label="Price" />
  </el-table>
</template>
