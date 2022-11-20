<template>
  <NuxtLink :to="`/game/${game.slug}`" class="game-thumbnail">
    <Image v-if="game.game_translations[0].thumbnail.id" :name="game.name" :alt="game.name" :imageId="game.game_translations[0].thumbnail.id" :format="webp" :width="width" :height="height" :fit="cover" />
    <label v-if="game.name">{{ game.name }}</label>
  </NuxtLink>
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
<style  lang="scss" scoped>
.game-thumbnail {
  display: inline-flex;
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  overflow: hidden;
  & img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & label {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    padding: 0.5rem;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
