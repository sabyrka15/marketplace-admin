<script setup>
import { orders } from '@/api/mock'
</script>

<template>
  <div v-for="order in orders" :key="order.id">{{ order.id }}: {{ order.product }} - {{ order.status }}</div>
</template>
