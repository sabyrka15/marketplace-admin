<script setup>
import { ref } from 'vue'

const activePage = ref('Products')
</script>

<template>
  <el-container class="layout">
    <el-aside class="aside">
      <el-menu>
        <el-menu-item @click="activePage = 'Products'">Products</el-menu-item>
        <el-menu-item @click="activePage = 'Orders'">Orders</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">Header</el-header>
      <el-main>
        {{ activePage }}
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
