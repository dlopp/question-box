<template>
  <button
    class="flex justify-center items-center rounded-full text-base w-36 h-9 md:text-lg md:w-62 md:h-14"
    :class="bgColor"
    style="outline: none"
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
