<script setup lang="ts">
import type { Todo } from 'src/db'
import { ref } from 'vue'

const props = defineProps<{
  todo: Todo
}>()

const status = ref<boolean>(props.todo.status)
</script>

<template>
  <q-card flat bordered>
    <q-checkbox v-model="status">{{ props.todo.text }}</q-checkbox>
  </q-card>
</template>
