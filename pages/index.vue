<template>
  <div>
    <LayoutsContainer>
      <h1>質問しよう</h1>
      <form class="mb-12" @submit.prevent="onSubmit">
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
          <button v-else type="submit" class="bg-gray-600">
            質問を送信する
          </button>
        </div>
      </form>
    </LayoutsContainer>
    <PartsTitle
      title="過去に答えた質問"
      :img-src="srcQA"
      img-alt="QandAのアイコン"
      class="-mb-8"
    />
    <div class="bg-gray py-16">
      <LayoutsContainer>
        <PartsQandA
          v-for="(question, index) in questions"
          :key="index"
          :question="question.body"
          :answer="question.answer"
        />
      </LayoutsContainer>
    </div>
    <SNS class="mt-6 mb-6" />
  </div>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import qaImage from '~/assets/images/qa.png'

export default {
  mixins: [Meta],
  async asyncData({ app }) {
    const questions = []
    await app.$fire.firestore
      .collection('questions')
      .where('isReplied', '==', true)
      .get()
      .then((query) => {
        query.forEach((doc) => {
          const question = doc.data()
          question.id = doc.id
          questions.push(question)
        })
      })
    return { questions }
  },
  data() {
    return {
      textInput: '',
      isSending: false,
      srcQA: qaImage,
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: 'dlopp専用質問箱！',
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
