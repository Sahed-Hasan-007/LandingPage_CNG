<template>
  <div>
    <div>
      <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
      <h1>{{ $t('anik') }}</h1>
      <form>
        <label for="locale-select">{{ $t('language') }}: </label>
        <select id="locale-select" v-model="$i18n.locale">
          <option value="en">en</option>
          <option value="bn">bn</option>
        </select>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>