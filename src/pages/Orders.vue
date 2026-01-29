<script setup>
import { orders } from '@/api/mock'
</script>

<template>
  <el-table :data="orders">
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="product" label="Product" />
    <el-table-column prop="status" label="Status" />
  </el-table>
</template>
