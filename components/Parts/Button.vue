<template>
  <button
    class="flex justify-center items-center rounded-full text-base w-sw h-sh md:text-lg md:w-bw md:h-bh"
  >
    {{ message }}
  </button>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
  },
}
</script>
