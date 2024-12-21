<script setup lang="ts">
import { computed } from 'vue'
import TodoComp from './TodoComp.vue'
import type { Todo } from 'src/db'

const props = defineProps<{
  todos: Todo[]
}>()

const filteredTodos = computed(() => {
  return props.todos.filter((todo) => todo.status != 'ARCHIVE')
})
</script>

<template>
  <q-card :bordered="!filteredTodos.length" flat>
    <q-list class="q-py-md column q-gutter-sm">
      <q-list-item v-for="todo in filteredTodos" :key="todo.id">
        <todo-comp :todo="todo" />
      </q-list-item>
      <q-item class="text-center justify-center q-pa-md" v-if="!filteredTodos.length"
        >You have nothing todo!</q-item
      >
    </q-list>
  </q-card>
</template>
