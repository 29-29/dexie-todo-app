<script setup lang="ts">
import type { Todo } from 'src/db'

defineProps<{
  todo: Todo
}>()
</script>

<template>
  <q-card>
    <q-checkbox v-model="todo.status">{{ todo.text }}</q-checkbox>
  </q-card>
</template>
