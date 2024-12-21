<script setup lang="ts">
import { from, useObservable } from '@vueuse/rxjs'
import { liveQuery } from 'dexie'
import { Notify } from 'quasar'
import TodoComp from 'src/components/TodoComp.vue'
import type { Todo } from 'src/db'
import { db } from 'src/db'
import { ref } from 'vue'

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
    <div class="row q-gutter-sm">
      <q-input outlined dense v-model="inputTodo" label="Todo" />
      <q-btn round flat dense icon="add" size="sm" @click="addTodo" />
    </div>
    <div>
      <todo-comp v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </q-page>
</template>
