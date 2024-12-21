<script setup lang="ts">
import { ref } from 'vue'

const inputTodo = ref<string>()
</script>
<template>
  <q-page class="q-pa-md column">
    <div class="row q-gutter-sm">
      <q-input outlined dense v-model="inputTodo" label="Todo" />
      <q-btn round flat dense icon="add" size="sm" />
    </div>
  </q-page>
</template>
