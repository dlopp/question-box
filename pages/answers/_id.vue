<template>
  <div>{{ question.body }} | {{ answer.body }}</div>
</template>

<script>
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
    return { answer, question }
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
          content: `https://res.cloudinary.com/dxfzpd78t/image/upload/l_text:ozopbvhnoiumgyir0pgk.ttf_35:${this.question.body},co_rgb:333,w_600,c_fit/v1617435093/ogp1_y1qzqf.png`,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `https://res.cloudinary.com/dxfzpd78t/image/upload/l_text:ozopbvhnoiumgyir0pgk.ttf_35:${this.question.body},co_rgb:333,w_600,c_fit/v1617435093/ogp1_y1qzqf.png`,
        },
      ],
    }
  },
}
</script>
