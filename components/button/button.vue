<template>
  <button v-if="disabled">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
  },
})
</script>
