<script setup>
import { products } from '@/api/mock'
</script>

<template>
  <el-table :data="products">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="price" label="Price" />
  </el-table>
</template>
