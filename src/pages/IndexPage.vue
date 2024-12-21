<script setup lang="ts">
import { from, useObservable } from '@vueuse/rxjs'
import { liveQuery } from 'dexie'
import { Notify } from 'quasar'
import type { Todo } from 'src/db'
import { db } from 'src/db'
import { ref } from 'vue'

import TodoList from 'src/components/TodoList.vue'

const inputTodo = ref<string>()
const todos = useObservable(from(liveQuery(async () => db.todos.toArray())))

async function addTodo() {
  try {
    const id = await db.todos.add({
      text: inputTodo.value,
      status: false,
    } as Todo)

    Notify.create({
      message: `Successfuly created todo! Todo ID: ${id}`,
    })

    inputTodo.value = ''
  } catch (error) {
    Notify.create({
      message: `Failed to add todo! Error: ${error}`,
    })
  }
}
</script>
<template>
  <q-page class="q-pa-md column">
    <div class="col-5">
      <q-input outlined v-model="inputTodo" label="Todo" class="full-width">
        <template #append>
          <q-btn round flat icon="add" @click="addTodo" />
        </template>
      </q-input>
    </div>
    <todo-list :todos="todos || []" />
  </q-page>
</template>
