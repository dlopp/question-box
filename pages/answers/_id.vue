<template>
  <main>
    <div class="bg-gray pt-6 md:pt-10 mb-24 pb-16 relative" style="z-index: -2">
      <LayoutsContainer>
        <div class="mx-auto w-full px-6 md:px-0">
          <img
            :src="`https://res.cloudinary.com/dxfzpd78t/image/upload/l_text:ozopbvhnoiumgyir0pgk.ttf_35_center:${question.body},co_rgb:333,w_600,c_fit/v1617897038/ogp-q_tph0i7.png`"
            alt="質問が書いてある画像"
            class="block"
          />
          <div class="bg-white flex">
            <img
              src="~/assets/images/answer.png"
              alt="Aのマーク"
              class="h-8 mt-4 ml-4 md:h-12 md:ml-8"
            />
            <p
              class="text-sm pl-4 pr-6 leading-5 w-full md:pl-5 md:text-lg md:leading-6 whitespace-pre-line mb-4"
            >
              {{ answer.body }}
            </p>
          </div>
        </div>
      </LayoutsContainer>
      <ShapesMiddle :is-top="false" />
    </div>
    <LayoutsContainer class="-mt-20">
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
      <LayoutsContainer class="md:mb-12">
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
import qaImage from '~/assets/images/qa.png'
import formImage from '~/assets/images/form.png'

export default {
  async asyncData({ app, params }) {
    const answerDoc = await app.$fire.firestore
      .collection('answers')
      .doc(params.id)
      .get()
    if (!answerDoc.exists) {
      return
    }
    const answer = answerDoc.data()
    answer.id = answerDoc.id
    const questionDoc = await app.$fire.firestore
      .collection('questions')
      .doc(answer.questionId)
      .get()
    if (!questionDoc.exists) {
      return
    }
    const question = questionDoc.data()

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

    return { answer, question, questions }
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
      meta: [
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'og:title', property: 'og:title', content: 'dlopp専用質問箱！' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://dlopp-questionbox.herokuapp.com/answers/${this.answer.id}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://res.cloudinary.com/dxfzpd78t/image/upload/l_text:ozopbvhnoiumgyir0pgk.ttf_35_center:${this.question.body},co_rgb:333,w_600,c_fit/v1617887133/ogp2_heqplk.png`,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `https://res.cloudinary.com/dxfzpd78t/image/upload/l_text:ozopbvhnoiumgyir0pgk.ttf_35_center:${this.question.body},co_rgb:333,w_600,c_fit/v1617887133/ogp2_heqplk.png`,
        },
      ],
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
    toDoQuestion() {
      this.$scrollTo('#doQuestion')
    },
    toPastQuestions() {
      this.$scrollTo('#pastQuestions')
    },
  },
}
</script>
