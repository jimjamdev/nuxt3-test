<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  size: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); // We should make these dynamic using props. Pain with css/scss as you'd have to render out the class for each combination including mq with classCat/clsx
  grid-template-rows: auto;
  gap: 1rem;
  @include mq(md) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
