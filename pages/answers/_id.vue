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
}
</script>
