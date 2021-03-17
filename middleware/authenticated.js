export default function ({ store, redirect }) {
  // 認証が必要なページにアクセスしたらログインページへリダイレクト
  if (!store.state.auth) {
    return redirect('/admin/login')
  }
}
