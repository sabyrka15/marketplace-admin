<script setup>
import { useProductsStore } from '@/stores/products'
import { onMounted, reactive, ref } from 'vue'

const productsStore = useProductsStore()
const dialogVisible = ref(false)

const form = reactive({
  name: '',
  price: null,
})

const editingId = ref(null)

const save = async () => {
  if (editingId.value) {
    await productsStore.updateProduct(editingId.value, {
      name: form.name,
      price: form.price,
    })
  } else {
    await productsStore.createProduct({
      name: form.name,
      price: form.price,
    })
  }

  dialogVisible.value = false
  editingId.value = null
  form.name = ''
  form.price = null
}

const remove = async (id) => {
  await productsStore.deleteProduct(id)
}

const edit = (row) => {
  editingId.value = row.id
  form.name = row.name
  form.price = row.price
  dialogVisible.value = true
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
    <el-table-column label="Actions" width="120">
      <template #default="{ row }">
        <td class="actions">
          <button class="btn btn-edit" @click="edit(row)">Edit</button>
          <button class="btn btn-delete" @click="remove(row.id)">Delete</button>
        </td>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
.actions {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.btn {
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: 0.2s;
}

.btn-edit {
  background: #f1f5f9;
  color: #0f172a;
}

.btn-edit:hover {
  background: #e2e8f0;
}

.btn-delete {
  background: #fee2e2;
  color: #b91c1c;
}

.btn-delete:hover {
  background: #fecaca;
}
</style>
