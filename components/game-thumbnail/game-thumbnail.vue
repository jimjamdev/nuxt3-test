<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
  },
})
</script>
