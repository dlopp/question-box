export const strict = false

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
