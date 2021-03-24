<template>
  <div>
    <h2>{{ question.body }}</h2>
    <div>
      <h3 v-if="question.isReplied">{{ question.answer }}</h3>
      <form v-else @submit.prevent="onSubmit">
        <textarea
          v-model="textInput"
          placeholder="回答を入力してください"
          cols="30"
          rows="10"
          class="bg-gray-200"
        ></textarea>
        <div>
          <div v-if="isSending">
            <span>送信中</span>
          </div>
          <button v-else type="submit" class="bg-gray-600">
            回答を送信する
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // 質問内容を取得する処理
  async asyncData({ app, params }) {
    const questionDoc = await app.$fire.firestore
      .collection('questions')
      .doc(params.id)
      .get()
    if (!questionDoc.exists) {
      return
    }
    const question = questionDoc.data()
    question.id = questionDoc.id
    return { question }
  },
  data() {
    return {
      textInput: '',
      isSending: false,
    }
  },
  methods: {
    async onSubmit() {
      this.isSending = true
      // eslint-disable-next-line require-await
      await this.$fire.firestore.runTransaction(async (t) => {
        t.set(this.$fire.firestore.collection('answers').doc(), {
          questionId: this.question.id,
          body: this.textInput,
          createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp(),
        })
        t.update(
          this.$fire.firestore.collection('questions').doc(this.question.id),
          {
            isReplied: true,
            answer: this.textInput,
          }
        )
      })
      this.textInput = ''
      this.isSending = false
      this.$toast.success('送信されました')
    },
  },
}
</script>
