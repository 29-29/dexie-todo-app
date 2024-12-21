<script setup lang="ts">
import { Notify } from 'quasar'
import type { Todo } from 'src/db'
import { db } from 'src/db'
import { ref } from 'vue'

const inputTodo = ref<string>()

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
  </q-page>
</template>
