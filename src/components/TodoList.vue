<script setup lang="ts">
import TodoComp from './TodoComp.vue'
import type { Todo } from 'src/db'

defineProps<{
  todos: Todo[]
}>()
</script>

<template>
  <q-list class="q-py-md column q-gutter-sm">
    <q-list-item v-for="todo in todos" :key="todo.id">
      <todo-comp :todo="todo" />
    </q-list-item>
  </q-list>
</template>
