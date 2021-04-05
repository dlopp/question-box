<template>
  <div>
    <img class="mx-auto h-6 md:h-8 mb-1 md:mb-2" :src="imgSrc" :alt="imgAlt" />
    <h2 class="text-center text-sm md:text-base">
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
  },
}
</script>
