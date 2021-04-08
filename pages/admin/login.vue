<template>
  <div>
    <h1 class="text-center text-3xl mt-16 text-gray-800">
      管理者ページへアクセスするには、dloppのアカウントでログインしてください。
    </h1>
    <form class="container max-w-md mx-auto mt-20">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          id="name"
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Email"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click.prevent="login"
        >
          login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
      // 入力がなかった時
      if (!this.email.length || !this.password.length) {
        alert('入力してください')
        return
      }
      const auth = await this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(() => {
          // メアドとパスワードが間違ってた時
          alert('メールアドレスまたはパスワードが間違っています。')
          return null
        })
      // あってたら、authをstoreにcommitして保持
      if (auth) {
        this.$store.commit('mutateAuth', auth)
        Cookie.set('auth', auth)
        this.$router.push('/admin/questions')
      }
    },
  },
}
</script>
