<template>
  <div>
    <img
      class="mx-auto mb-2 md:mb-3"
      :class="imgSize"
      :src="imgSrc"
      :alt="imgAlt"
    />
    <h2 class="text-center text-base md:text-2xl">
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
      default: 'h-10',
    },
  },
}
</script>
