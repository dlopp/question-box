<template>
  <div>
    <img
      class="mx-auto"
      :class="[imgSize, margin]"
      :src="imgSrc"
      :alt="imgAlt"
    />
    <h2 class="text-center" :class="textSize">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: '',
    },
    imgAlt: {
      type: String,
      default: '',
    },
    imgSize: {
      type: String,
      default: 'h-8',
    },
    margin: {
      type: String,
      default: 'mb-1',
    },
    textSize: {
      type: String,
      default: 'text-base',
    },
  },
}
</script>
