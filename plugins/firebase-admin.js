export default function ({ $config }) {
  if (process.server) {
    const admin = require('firebase-admin')

    if (admin.apps.length === 0) {
      const credential = JSON.parse(
        Buffer.from($config.secret, 'base64').toString()
      )
      admin.initializeApp({
        credential: admin.credential.cert(credential),
      })
    }
  }
}
