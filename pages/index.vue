<template>
  <main>
    <HeadLine class="md:mb-20 mb-6" />
    <LayoutsContainer>
      <PartsTitle
        title="気軽に質問してみよう！"
        :img-src="srcForm"
        img-alt="吹き出しのアイコン"
        class="mb-8"
      />
      <Form
        v-model="questionBody"
        placeholder="テキストを入力"
        :is-sending="isSending"
        @click="onSubmit"
      />
    </LayoutsContainer>
    <PartsTitle
      title="過去に答えた質問"
      :img-src="srcQA"
      img-alt="QandAのアイコン"
      class="-mb-8 mt-24"
    />
    <div class="bg-gray py-24 relative mt-10">
      <ShapesMiddle />
      <LayoutsContainer>
        <PartsQandA
          v-for="(question, index) in questions"
          :key="index"
          :question="question.body"
          :answer="question.answer"
        />
      </LayoutsContainer>
      <ShapesMiddle :is-top="false" />
    </div>
    <LayoutsContainer class="mt-12 mb-20">
      <SNS />
    </LayoutsContainer>
  </main>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import qaImage from '~/assets/images/qa.png'
import formImage from '~/assets/images/form.png'

export default {
  mixins: [Meta],
  async asyncData({ app }) {
    const questions = []
    await app.$fire.firestore
      .collection('questions')
      .where('isReplied', '==', true)
      .orderBy('createdAt', 'desc')
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
      questionBody: '',
      isSending: false,
      srcQA: qaImage,
      srcForm: formImage,
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
      if (!this.questionBody.length) {
        alert('質問を入力してください')
        return
      }
      // 送信中はbuttonを消す(連投防止)
      this.isSending = true
      // dbに質問内容を送信
      await this.$fire.firestore.collection('questions').add({
        body: this.questionBody,
        isReplied: false,
        createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp(),
        answer: '',
      })
      this.questionBody = ''
      // 送信完了
      this.isSending = false
      alert('送信されました。')
    },
  },
}
</script>
