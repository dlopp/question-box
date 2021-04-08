const cookieparser = process.server ? require('cookieparser') : undefined

export const strict = false // 一旦のerror回避

export const state = () => ({
  // ユーザー情報の保持
  auth: null,
})

export const mutations = {
  // ログイン時にユーザー情報を入れ、ログアウト時はnullを入れて認証情報を削除する
  mutateAuth(state, auth) {
    state.auth = auth
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      // cookieのauth変数をjsonで取得
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        // 認証情報を取得
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // cookieに認証情報がない場合は、firebaseもログアウト
        this.$fire.auth.signOut()
      }
    }
    // 認証 or null
    commit('mutateAuth', auth)
  },
}
