<template>
  <div class="flex items-center gap-2">
    <button 
      @click="$emit('prev-slide')"
      class="prev text-xl px-6 py-2 rounded-full bg-orange-400 text-white"
    >
      ←
    </button>
    <button
      @click="$emit('next-slide')"
      class="next text-xl px-6 py-2 rounded-full border"
    >
      →
    </button>
  </div>
</template>

<script setup>
defineEmits(["prev-slide", "next-slide"]);
</script>
