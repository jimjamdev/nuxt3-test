<template>
  <div style="background: tomato; padding: 0.1rem;">
    <Image />
    <label>{{ name }}</label>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
  },
})
</script>
