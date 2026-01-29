<script setup>
import { useRouter, RouterView } from 'vue-router'

const router = useRouter()
</script>

<template>
  <el-container class="layout">
    <el-aside class="aside">
      <el-menu>
        <el-menu-item index="1" @click="router.push('/products')">Products</el-menu-item>
        <el-menu-item index="2" @click="router.push('/orders')">Orders</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">Header</el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.aside {
  width: 200px;
}

.header {
  height: 60px;
}

.layout {
  height: 100vh;
}
</style>
