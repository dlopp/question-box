<template>
  <a class="cursor-pointer" @click="linkClick">
    <button
      class="flex justify-center items-center rounded-full text-base w-36 h-9 md:w-40 md:h-10"
      :class="bgColor"
      style="outline: none"
      @click.prevent="onClick"
    >
      {{ message }}
    </button>
  </a>
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
    linkClick() {
      this.$emit('linkClick')
    },
  },
}
</script>
