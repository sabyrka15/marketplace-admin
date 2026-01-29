<script setup>
import { products } from '@/api/mock'
</script>

<template>
  <div v-for="product in products" :key="product.id">{{ product.name }} - {{ product.price }}</div>
</template>
