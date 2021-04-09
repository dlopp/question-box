<template>
  <LayoutsContainer>
    <button class="bg-main px-6 py-3 rounded-md my-3" @click="logout">
      ログアウト
    </button>
    <ul>
      <li v-for="(question, index) in questions" :key="index" class="mb-6">
        <span v-if="question.isReplied" class="bg-red-300">回答済み</span>
        <span v-else class="bg-blue-300">未回答</span>
        <nuxt-link :to="'/admin/questions/' + question.id">{{
          question.body
        }}</nuxt-link>
      </li>
    </ul>
  </LayoutsContainer>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  // middleware: 'authenticated',
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
  methods: {
    logout() {
      Cookie.remove('auth')
      this.$store.commit('mutateAuth', null)
      this.$fire.auth.signOut()
      this.$router.push('/admin/login')
    },
  },
}
</script>
