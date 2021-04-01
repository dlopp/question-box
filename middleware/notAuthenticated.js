export default function ({ store, redirect }) {
  // 認証不要ページ用
  // もし認証済みなら、管理ページへリダイレクト
  if (store.state.auth) {
    return redirect('/admin/questions')
  }
}
