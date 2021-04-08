<template>
  <div>
    <img class="mx-auto h-10 mb-2 md:mb-3" :src="imgSrc" :alt="imgAlt" />
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
  },
}
</script>
