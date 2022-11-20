<template>
    <img class="image" :alt="alt" :src="path + imageId + '/?format=' + format + '&width=' + width + '&height=' + height + '&fit=' + fit + '&quality=' + quality + '&download=true/' + name + '.' + format">
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    default: 'image',
  },
  alt: {
    type: String,
    default: 'image',
  },
  fit: {
    type: String,
    default: 'cover',
  },
  quality: {
    type: Number,
    default: 75,
  },
  imageId: {
    type: String,
    default: null // 'dc64fdf3-0e51-410e-8087-6d90332b9454',
  },
  format: {
    type: String,
    default: 'webp',
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
})
const path = "https://dh4bbs5t.directus.app/assets/"

</script>
