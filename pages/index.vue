<template>
  <div>
    <h1>質問しよう</h1>
    <form @submit.prevent="onSubmit">
      <textarea
        v-model="textInput"
        placeholder="質問を入力してください"
        cols="30"
        rows="10"
        class="bg-gray-200"
      ></textarea>
      <div>
        <div v-if="isSending">
          <span>送信中</span>
        </div>
        <button v-else type="submit" class="bg-gray-600">質問を送信する</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: '',
      isSending: false,
    }
  },
  methods: {
    async onSubmit() {
      if (!this.textInput.length) {
        this.$toast.error('質問を入力してください')
        return
      }
      // 送信中はbuttonを消す(連投防止)
      this.isSending = true
      // dbに質問内容を送信
      await this.$fire.firestore.collection('questions').add({
        body: this.textInput,
        isReplied: false,
        createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp(),
      })
      // textareaを空に
      this.textInput = ''
      // 送信完了
      this.isSending = false
      this.$toast.success('送信されました')
    },
  },
}
</script>
