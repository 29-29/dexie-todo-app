<script setup lang="ts">
import { Notify } from 'quasar'
function makerClick() {
  Notify.create({
    message: 'Redirect to Github!',
  })
}
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Basic Todo App</q-toolbar-title>

        <div>Made by <q-chip clickable @click="makerClick">29-29</q-chip></div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
