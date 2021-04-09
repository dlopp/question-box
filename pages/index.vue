<template>
  <main>
    <HeadLine />
    <LayoutsContainer class="md:-mt-20">
      <PartsTitle
        title="気軽に質問してみよう！"
        :img-src="srcForm"
        img-alt="吹き出しのアイコン"
        class="mb-3"
      />
      <Form
        v-model="questionBody"
        placeholder="テキストを入力"
        :is-sending="isSending"
        @click="onSubmit"
      />
    </LayoutsContainer>
    <div class="bg-gray pt-20 pb-16 relative mt-10">
      <PartsTitle
        title="過去に答えた質問"
        :img-src="srcQA"
        img-alt="QandAのアイコン"
        class="-mt-24 mb-8 relative z-10"
        img-size="h-10"
        margin="mb-2"
      />
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
    <LayoutsContainer class="mb-16">
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
