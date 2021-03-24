<template>
  <ul>
    <li v-for="(question, index) in questions" :key="index">
      <nuxt-link :to="'/admin/questions/' + question.id">{{
        question.body
      }}</nuxt-link>
      <span v-if="question.isReplied">回答済み</span>
    </li>
  </ul>
</template>

<script>
export default {
  middleware: 'authenticated',
  async asyncData({ app }) {
    const questions = []
    await app.$fire.firestore
      .collection('questions')
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
}
</script>
