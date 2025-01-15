<template>
  <div>
    <div v-for="item in taskStore.favs">
      <h1>{{ item.title }}</h1>
    </div>
    <h1>aoUCFGOASGIH</h1>
  </div>
</template>

<script setup>
import { useTaskStore } from "./stores/taskStore";
const taskStore = useTaskStore();

</script>

<style lang="scss" scoped></style>
