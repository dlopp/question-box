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
      title: this.question.body,
      meta: [
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'og:title', property: 'og:title', content: this.question.body },
        {
          hid: 'og:url',
          property: 'og:url',
          content: '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: '',
        },
      ],
    }
  },
}
</script>
