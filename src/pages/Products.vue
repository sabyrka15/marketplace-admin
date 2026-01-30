<script setup>
import { useProductsStore } from '@/stores/products'
import { onMounted, reactive, ref } from 'vue'

const productsStore = useProductsStore()
const dialogVisible = ref(false)
const form = reactive({
  name: '',
  price: null,
})

const save = async () => {
  await productsStore.createProduct({
    name: form.name,
    price: form.price,
  })

  dialogVisible.value = false
  form.name = ''
  form.price = null
}

onMounted(() => {
  productsStore.fetchProducts()
})
</script>

<template>
  <el-button type="primary" @click="dialogVisible = true"> Add product </el-button>

  <el-dialog v-model="dialogVisible" title="Add product">
    <el-form :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item label="Price">
        <el-input-number v-model="form.price" :min="0" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="save"> Save </el-button>
        <el-button @click="dialogVisible = false"> Cancel </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-table :data="productsStore.items" v-loading="productsStore.loading">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="price" label="Price" />
  </el-table>
</template>
