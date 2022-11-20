<template>
  <main class="container">
    <slot />
  </main>
</template>

<script lang="ts" setup>
defineProps({
  size: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1.5rem;
    box-shadow: $shadowZ1;
    @include mq(md) {
      padding: 0 3rem;
    }
  }
</style>
