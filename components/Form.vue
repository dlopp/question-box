<template>
  <form>
    <div class="sm:w-full xs:w-4/5 mx-auto">
      <textarea
        :value="formBody"
        :placeholder="placeholder"
        rows="10"
        class="bg-white border-2 border-light-gray rounded-lg p-3 block w-full h-full"
        style="outline: none"
        @input="input"
      ></textarea>
    </div>
    <div v-if="isSending">
      <span>送信中</span>
    </div>
    <PartsButton
      v-else
      message="送信する"
      bg-color="bg-accent"
      class="mx-auto mt-6"
      @click="onClick"
    />
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
