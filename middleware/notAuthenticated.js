export default function ({ store, redirect, error }) {
  if (store.state.auth) {
    return redirect('/admin/questions')
  }
}
