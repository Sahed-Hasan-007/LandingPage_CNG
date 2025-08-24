<script setup lang="ts">
const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  },
  increment: {
    type: Number,
    default: 1
  }
})
const counter = ref(0)
const { animateNumber } = useAnimatedNumber()

onMounted(() => {
  animateNumber(
      props.value,
      props.duration,
      props.increment,
      (value) => { counter.value = value }
  )
})
</script>

<template>
  <span>{{ counter }}</span>
</template>