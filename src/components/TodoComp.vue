<script setup lang="ts">
import { Notify } from 'quasar'
import { db, type Todo } from 'src/db'
import { ref } from 'vue'

const props = defineProps<{
  todo: Todo
}>()

const status = ref(props.todo.status)

function onArchive() {
  db.todos.update(props.todo.id, { status: 'ARCHIVE' })
  Notify.create(`Archived successfully: ${props.todo.text}`)
}

function onDelete() {
  db.todos.delete(props.todo.id)
  Notify.create(`Deleted successfully: ${props.todo.text}`)
}

const onUpdate = (value: Todo['status']) => {
  db.todos.update(props.todo.id, { status: value })
}
</script>

<template>
  <q-card flat bordered class="q-pa-xs row justify-between">
    <q-checkbox
      v-model="status"
      :class="[status == 'DONE' ? 'text-strike' : '']"
      true-value="DONE"
      false-value="TODO"
      @update:model-value="onUpdate"
      >{{ props.todo.text }}</q-checkbox
    >
    <q-card-actions>
      <q-btn v-if="status == 'DONE'" flat round icon="inventory_2" @click="onArchive">
        <q-tooltip>Archive</q-tooltip>
      </q-btn>
      <q-btn flat round icon="delete" color="red" @click="onDelete">
        <q-tooltip>Delete</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>
