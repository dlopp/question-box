module.exports = {
  // Emojiを非表示にするか
  disableEmoji: false,

  // types一覧
  // typesが設定されているのに、listに登録されてないとgit-czの実行時にエラーを吐く
  // 入れる値は、typesのvalueプロパティで指定した値
  list: [
    'feat',
    'fix',
    'UI',
    'WIP',
    'chore',
    'docs',
    'refactor',
    'config',
    'package',
  ],

  // コミットメッセージの最大文字数
  maxMessageLength: 64,

  // コミットメッセージの最小文字数
  minMessageLength: 3,

  // 質問の種類
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'issues',
    'lerna',
  ],

  // scopesの種類
  // 一つも指定されてない場合、scopeの質問は行われなくなる
  scopes: [],

  // typesの種類を設定する
  types: {
    chore: {
      description:
        'その他: 補助ツールの変更 （ドキュメント生成などのソースやテストの変更を含まない変更）',
      emoji: ':teddy_bear:',
      value: 'chore',
    },
    UI: {
      description: 'UIやスタイルの更新',
      emoji: ':lipstick:',
      value: 'UI',
    },
    docs: {
      description: 'ドキュメントの変更のみ',
      emoji: ':memo:',
      value: 'docs',
    },
    feat: {
      description: '新機能の追加や更新',
      emoji: ':sparkles:',
      value: 'feat',
    },
    fix: {
      description: 'バグ修正',
      emoji: ':bug:',
      value: 'fix',
    },
    refactor: {
      description:
        'リファクタリングのための変更。機能追加やバグ修正を含まない変更',
      emoji: ':recycle:',
      value: 'refactor',
    },
    WIP: {
      description: '作業中',
      emoji: ':construction:',
      value: 'WIP',
    },
    config: {
      description: '設定ファイルの追加・修正',
      emoji: ':wrench:',
      value: 'config',
    },
    package: {
      description: 'パッケージの追加・更新・削除',
      emoji: ':package:',
      value: 'package',
    },
  },
}
