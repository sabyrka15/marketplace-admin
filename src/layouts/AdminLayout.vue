<template>
  <el-container class="layout">
    <el-aside class="aside">Aside</el-aside>

    <el-container>
      <el-header class="header">Header</el-header>
      <el-main>Main</el-main>
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
