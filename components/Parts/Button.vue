<template>
  <button
    class="flex justify-center items-center rounded-full text-base w-sw h-sh md:text-lg md:w-bw md:h-bh"
    :class="bgColor"
    @click.prevent="onClick"
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
    bgColor: {
      type: String,
      default: 'bg-white',
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
