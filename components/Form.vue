<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="sm:w-full xs:w-4/5 mx-auto">
        <textarea
          v-model="textInput"
          placeholder="テキストを入力"
          rows="10"
          class="bg-white border-2 rounded-lg p-3 block w-full h-full"
        ></textarea>
      </div>

      <div>
        <div v-if="isSending">
          <span>送信中</span>
        </div>
      </div>
      <PartsButton message="送信する" class="bg-accent mx-auto mt-4" />
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
        answer: '',
      })
      this.textInput = ''
      // 送信完了
      this.isSending = false
      this.$toast.success('送信されました')
    },
  },
}
</script>
