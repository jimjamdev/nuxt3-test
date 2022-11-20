<template>
  <div style="background: tomato; padding: 0.1rem;">
    <Image v-if="game.game_translations[0].thumbnail.id" :name="game.name" :alt="game.name" :imageId="game.game_translations[0].thumbnail.id" :format="webp" :width="width" :height="height" :fit="cover" />
    <label v-if="game.name">{{ game.name }}</label>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  game: {
    type: Object,
  },
  width: {
    type: Number,
    default: 50,
  },
  height: {
    type: Number,
    default: 50,
  },
})

</script>
