<script setup>
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()
</script>

<template>
  <el-container class="layout">
    <el-aside class="aside">
      <el-menu router :default-active="route.path">
        <el-menu-item index="/products">Products</el-menu-item>
        <el-menu-item index="/orders">Orders</el-menu-item>
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
