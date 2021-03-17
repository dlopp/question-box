<template>
  <div>
    <h1>質問しよう</h1>
    <form @submit.prevent="onSubmit">
      <textarea
        v-model="textInput"
        placeholder="質問を入力してください"
        cols="30"
        rows="10"
        class="bg-gray-200"
      ></textarea>
      <div>
        <button type="submit" class="bg-gray-600">質問を送信する</button>
      </div>
    </form>
    <ul class="mt-16">
      <li v-for="(question, index) in questions" :key="index">
        {{ question }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const questions = []
    await app.$fire.firestore
      .collection('questions')
      .get()
      .then((query) => {
        query.forEach((doc) => {
          const data = doc.data()
          questions.push(data.body)
        })
      })
    return { questions }
  },
  data() {
    return {
      textInput: '',
    }
  },
  methods: {
    async onSubmit() {
      await this.$fire.firestore.collection('questions').add({
        body: this.textInput,
      })
      this.textInput = ''
      alert('質問が送信されました。')
    },
  },
}
</script>
