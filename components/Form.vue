<template>
  <form>
    <div class="w-11/12 sm:w-full mx-auto h-36">
      <textarea
        :value="formBody"
        :placeholder="placeholder"
        class="bg-white border-1 md:border-2 border-light-gray rounded-lg p-3 block w-full h-full"
        style="outline: none"
        @input="input"
      ></textarea>
    </div>
    <div v-if="!isSending" class="justify-center flex mt-4">
      <PartsButton
        message="送信する"
        bg-color="bg-accent"
        hovered-color="hover:bg-hovered-accent"
        @click="onClick"
      />
    </div>
  </form>
</template>

<script>
export default {
  props: {
    formBody: {
      type: String,
      default: '',
      required: false,
    },
    placeholder: {
      type: String,
      default: '',
      required: true,
    },
    isSending: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      textInput: '',
    }
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    },
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
