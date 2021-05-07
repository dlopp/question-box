# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.2](https://github.com/dlopp/question-box/compare/v1.0.1...v1.0.2) (2021-05-07)


### Features

* :sparkles: commit前に自動整形 ([d0930ca](https://github.com/dlopp/question-box/commit/d0930cad9ac3ca3ad130491a55c91fa5855a4256)), closes [#90](https://github.com/dlopp/question-box/issues/90)


### Bug Fixes

* :adhesive_bandage: 特殊文字をエンコードする ([5cb3d7f](https://github.com/dlopp/question-box/commit/5cb3d7f18169522b05d4c6ed84ca9d317bb3096e)), closes [#86](https://github.com/dlopp/question-box/issues/86)


### Update Dependencies

* :package: husky アップデート ([b35b6cb](https://github.com/dlopp/question-box/commit/b35b6cb417291ae2494a1f755cd93925952a684a))


### Code Refactoring

* :recycle: lint-staged調整 ([af2f144](https://github.com/dlopp/question-box/commit/af2f14489fee05bf6e46738a2a4ce4ab51058635))
* :recycle: 寝ぼけて2回エンコードしてた ([9441fdb](https://github.com/dlopp/question-box/commit/9441fdbf42d2501367c55cba121ef77442fd132e))

### [1.0.1](https://github.com/dlopp/question-box/compare/v1.0.0...v1.0.1) (2021-04-13)


### Update Docs

* :memo: README修正 ([e61f458](https://github.com/dlopp/question-box/commit/e61f458f1136fec4f8b256a49cbde4f205401d88))
* :memo: READNE微調整 ([0a64fc8](https://github.com/dlopp/question-box/commit/0a64fc863f73f410394fe77e2ed7b9fda3cf3a07))


### Update UI

* :art: answersのmargin修正 ([dc5f302](https://github.com/dlopp/question-box/commit/dc5f30237dead4164b439e904a1369acdb1eeee4))
* :art: md以上でanswersページのUI崩れるの修正 ([54b9b23](https://github.com/dlopp/question-box/commit/54b9b23e98019454d40b68d3bc2054b8e96fcabd))

## 1.0.0 (2021-04-09)


### Features

* :sparkles: admin配下にログインなしでアクセスできないようにする ([6b36ce4](https://github.com/dlopp/question-box/commit/6b36ce4bf780629eac2039c3b56698e3f6036cab))
* :sparkles: answersページにはアクセスできないようにする ([e2f13a0](https://github.com/dlopp/question-box/commit/e2f13a0dfc68f44a3898df043a8b03923dd4441e))
* :sparkles: errorページを追加＆bottomをstickyに ([782bc0a](https://github.com/dlopp/question-box/commit/782bc0ae431c02fd3036917e7b24a715cd523d41))
* :sparkles: favicon追加 ([5fc69e9](https://github.com/dlopp/question-box/commit/5fc69e9ea27e086dc7b41416731c17d77210ebf7))
* :sparkles: firebase-adminを導入 ([9f81d1d](https://github.com/dlopp/question-box/commit/9f81d1df8d61b99f821438dd59a16112ef3e0ce6))
* :sparkles: herokuにデプロイする ([41a86b8](https://github.com/dlopp/question-box/commit/41a86b83d4069615f5bc5003c61a6611b980b2b1))
* :sparkles: meta情報のmixins作成 ([b256be1](https://github.com/dlopp/question-box/commit/b256be1ce5c4ad631372ae8242e09c69f1ae6c5f))
* :sparkles: ogp画像を追加 ([d3e96f2](https://github.com/dlopp/question-box/commit/d3e96f2b33b40339c7a416f565145f731a9dc895))
* :sparkles: OGP修正 ([d82fa63](https://github.com/dlopp/question-box/commit/d82fa63a2f50e1758978af22df317655c74f56b5))
* :sparkles: OGP設置 ([72da20c](https://github.com/dlopp/question-box/commit/72da20cf417a5b9ad8532861a291a0f233a55d6b))
* :sparkles: QandAコンポーネント作成 ([e3c4d34](https://github.com/dlopp/question-box/commit/e3c4d3425507c794954ea6269d1c1609af0b90ee))
* :sparkles: サイト全体のmetaデータ作成 ([1edf9db](https://github.com/dlopp/question-box/commit/1edf9db017993cccf1d27e614503a372a7d35d08))
* :sparkles: ページ内リンクでスクロールアニメーション実装 ([ee4eb3d](https://github.com/dlopp/question-box/commit/ee4eb3ddc22c2217e6ac1b6b0656ba73b41b4dc8))
* :sparkles: メアドとパスワードの認証機能を追加 ([29c8061](https://github.com/dlopp/question-box/commit/29c80616dd023ca7e015a10d824b466249b7ec5d))
* :sparkles: ログアウト機能追加 ([95df475](https://github.com/dlopp/question-box/commit/95df475c5130c2f0c54edb751d1f941ee710f057))
* :sparkles: 過去の質問に飛ぶようにする ([8b8c1ec](https://github.com/dlopp/question-box/commit/8b8c1ecc2cf98536548e977265d4e4030bb05b21))
* :sparkles: 回答する機能を追加 ([fc76b45](https://github.com/dlopp/question-box/commit/fc76b4566fe9d1a12d0cd4a2c634103aab3cf50f))
* :sparkles: 回答済の質問はtopに表示するように ([44b3b5e](https://github.com/dlopp/question-box/commit/44b3b5e0aa48bd1b6a151f43b446b7246ac85a5a))
* :sparkles: 回答詳細ページの作成 ([b570b49](https://github.com/dlopp/question-box/commit/b570b49cf791eebdd0aa3e8fc37afca6d91bc5cf))
* :sparkles: 回答詳細ページ作成 ([8da60f4](https://github.com/dlopp/question-box/commit/8da60f463203cffc24bbfa99cbf227fee7f3b864))
* :sparkles: 改行を表示する ([ad5da3a](https://github.com/dlopp/question-box/commit/ad5da3acb0bead7a4bc42e643f2f876bae98fc91))
* :sparkles: 質問一覧を日付降順で表示する ([e6c7739](https://github.com/dlopp/question-box/commit/e6c7739189e71e15f48201f0e3fc0e2b9877f8dc))
* :sparkles: 質問内容をDBに送信する ([77663df](https://github.com/dlopp/question-box/commit/77663df968a7d476c0fd3f69c57d38b7392e5ad4))
* :sparkles: 受け取った質問一覧に、回答してるかどうかを表示するように ([46ada2b](https://github.com/dlopp/question-box/commit/46ada2b7d05be1561fc5c599e231701dbe4ee3be))
* :sparkles: 受け取った質問一覧の表示 ([88fa688](https://github.com/dlopp/question-box/commit/88fa688447cc91255d44df32c380f5991240c41f))
* :sparkles: 認証情報をCookieに保存する ([869d86a](https://github.com/dlopp/question-box/commit/869d86a55951c18c58a72aec948e197fe17bc35b))
* :sparkles: 認証情報をCookieに保存する ([39269d6](https://github.com/dlopp/question-box/commit/39269d6949dfcdd0c978245f06cb53280cdb681f))
* :sparkles: 認証情報をstoreで保持 ([3047d2d](https://github.com/dlopp/question-box/commit/3047d2dbf7b77a3973c8d66ddba54d688b8a4b25))


### Bug Fixes

* :adhesive_bandage: middlewareをもとに戻した ([ff1712d](https://github.com/dlopp/question-box/commit/ff1712de1d91e94eff3ce92559e018a23a623183))
* :adhesive_bandage: redirectのパス修正 ([5f15591](https://github.com/dlopp/question-box/commit/5f15591b0370cafc2587bea697e5cb474c7707ea))
* :adhesive_bandage: tailwindの色のスペルミス修正 ([da9505d](https://github.com/dlopp/question-box/commit/da9505d4c4c493b0f037729b51c38310bce6dfa6))
* :adhesive_bandage: titleとshapeの重なりを直した ([2e28e08](https://github.com/dlopp/question-box/commit/2e28e08df497ed2fb024a92552688a5bf2059ef5))
* :adhesive_bandage: アニメーションけした ([d4fdf78](https://github.com/dlopp/question-box/commit/d4fdf78ad84e1024bf8f04fb58f86541cfc5d526))
* :adhesive_bandage: コンフリクト解消 ([31d6a71](https://github.com/dlopp/question-box/commit/31d6a716681f8321f09842883c5658cfec29feef))
* :adhesive_bandage: ディレクトリ名を含める ([3ade1f4](https://github.com/dlopp/question-box/commit/3ade1f49b3a0e0099bf9ccfe9ee0d324bdb2e924))


### Othres

* :teddy_bear: firestoreで遊ぶ ([0179119](https://github.com/dlopp/question-box/commit/017911915f572f3c7d38cb0629808a6a4d95c8ea))


### Update Config

* :wrench: admin消去 ([cfed4a7](https://github.com/dlopp/question-box/commit/cfed4a7281ade0c08bae5ba5ed30377ed30ad551))
* :wrench: changelog.config.jsのemojiを変更 ([5f5efc4](https://github.com/dlopp/question-box/commit/5f5efc40d100bfd9af0b8b0a43f80a225391efbd))
* :wrench: defaultのフォントをM PLUS 1pに設定 ([012c1bd](https://github.com/dlopp/question-box/commit/012c1bde4a0ea16eaa52735a0b2674f26b1e680c))
* :wrench: firebaseのauthを使えるようにする ([8229912](https://github.com/dlopp/question-box/commit/8229912c9a86f9c66409323fa570df076faa7a54))
* :wrench: fontweight400以外アンスト ([5cb255e](https://github.com/dlopp/question-box/commit/5cb255e3d863f00003e2911d4def573b0cd4c74b)), closes [#47](https://github.com/dlopp/question-box/issues/47)
* :wrench: lint-stagedにprettierを追加 ([8041722](https://github.com/dlopp/question-box/commit/804172274363c8f0ec601a40c1132baf8d4f8cc4))
* :wrench: linterとformatterの拡張機能をサジェストするように ([4798fd0](https://github.com/dlopp/question-box/commit/4798fd0fb1cd7a9c256b2d6facb7bd49d27f11d9))
* :wrench: Procfile消す ([77cc49f](https://github.com/dlopp/question-box/commit/77cc49fc9b30cb7e3eccd78df83a93be6edf522a))
* :wrench: Procfile追加 ([da2d494](https://github.com/dlopp/question-box/commit/da2d494403478c768e1ffc4b007530c5bf9dcd82))
* :wrench: spacingのname修正 ([aec8265](https://github.com/dlopp/question-box/commit/aec826518695cea8b9b043debdd7487a49429735))
* :wrench: SSRするように ([293164d](https://github.com/dlopp/question-box/commit/293164d0746e37f643e0958f45dbc8bbc4cd758a))
* :wrench: ssrをtrueに ([77aaa88](https://github.com/dlopp/question-box/commit/77aaa8892c286b4db98a8464a4cf87596a16533d))
* :wrench: ssrをtrueに ([1c5f031](https://github.com/dlopp/question-box/commit/1c5f0311b338d457295022c8487726de523333d1))
* :wrench: vscodeのsnippets設定ファイル追加 ([cb4b446](https://github.com/dlopp/question-box/commit/cb4b446611136c7320f917007367b46f8187e844))
* :wrench: おすすめ拡張機能追加 ([c4247e2](https://github.com/dlopp/question-box/commit/c4247e21fcd9f931492851fdbbac2d536e29daae))
* :wrench: セーブ時にformatが修正されるように ([902fb35](https://github.com/dlopp/question-box/commit/902fb359f46f07a5e014223c36b83c66a96872f0))
* :wrench: 一時的にnetlifyで静的ホスト ([1c15f5c](https://github.com/dlopp/question-box/commit/1c15f5cc7a7eb591f2271a1ed27c850d2125a29c))
* :wrench: 環境変数の設定 ([02d871b](https://github.com/dlopp/question-box/commit/02d871b44ed30da762db29aac68b2d498fa7b601))
* :wrench: 複数行コメントを補完するsnippets ([e6f7f3d](https://github.com/dlopp/question-box/commit/e6f7f3d90a95cf8e24228b3f743f850ea785359a))


### Code Refactoring

* :recycle: answersページのtitleテンプレートをnullに ([5e630df](https://github.com/dlopp/question-box/commit/5e630dfd061d43b0174e1b927c5b50a20ba2c5fb))
* :recycle: conponentsのreadmeを削除 ([355cd1a](https://github.com/dlopp/question-box/commit/355cd1a351aa62b0c1a2ca2f82e9ba3202053630))
* :recycle: cookieに保存するのやめる ([22d67e6](https://github.com/dlopp/question-box/commit/22d67e60b15edb68add2db4a0ee8edf3c6d542c2))
* :recycle: アイコンの大きさを指定できるように ([5f5dfc3](https://github.com/dlopp/question-box/commit/5f5dfc3080bb385c1447ca5e2842101bb938cfba))
* :recycle: セクションごとにContainerで囲むように ([41fc6a0](https://github.com/dlopp/question-box/commit/41fc6a0cc4b55034f3c14f31854960db03cf5144)), closes [#41](https://github.com/dlopp/question-box/issues/41)
* :recycle: リダイレクト諦める ([0e33256](https://github.com/dlopp/question-box/commit/0e3325640d77de26bd7bfec442f174d6fada01d9))
* :recycle: 回答ページをsecretにする ([85ef1a0](https://github.com/dlopp/question-box/commit/85ef1a0215fa0c9305c2295647a5b7d2ad68de68))
* :recycle: 認証済みのリダイレクト諦める ([229e7a4](https://github.com/dlopp/question-box/commit/229e7a435c4a0ce3d9ae25c6d72e57bc11805729))


### Update Docs

* :memo: READMEの誤字修正 ([0db9ac6](https://github.com/dlopp/question-box/commit/0db9ac67c975976e983335b8727bcefa742933e5))
* :memo: READMEを書いた ([1f7ae3d](https://github.com/dlopp/question-box/commit/1f7ae3d5746602f8a0a1d7d085f816a13a5731e5))
* :memo: README書いた ([eb6a301](https://github.com/dlopp/question-box/commit/eb6a3011e9823676dd897d87100c46f091fddbeb))


### Update UI

* :art: Button.vueにホバーステートを追加した ([350f9bb](https://github.com/dlopp/question-box/commit/350f9bbd679e31739c04e9aad4c41e318e2ac4b5))
* :art: containerコンポーネント追加 ([35f8e32](https://github.com/dlopp/question-box/commit/35f8e32acb094077268e432147734d47b4cd2824))
* :art: DOM構築後に表示する ([015b190](https://github.com/dlopp/question-box/commit/015b190e36a5295b620f908ab061eb886795171c))
* :art: downとupの画像変更 ([f128036](https://github.com/dlopp/question-box/commit/f128036b9e1e5f6869fab26b1107cdcd21f0a49f))
* :art: false消した ([8d26a61](https://github.com/dlopp/question-box/commit/8d26a614cdec19a4f2e23a07059188ac35621814))
* :art: Formコンポーネント設置 ([d2eca88](https://github.com/dlopp/question-box/commit/d2eca880bc28a7292486a5a31a52205dd8821b62))
* :art: FormとButtonの追加、tailwindのspacingを拡張 ([5c2c591](https://github.com/dlopp/question-box/commit/5c2c5914d8117747be74ec7e3923198017b240fd))
* :art: formの高さと横幅調整 ([17fd41c](https://github.com/dlopp/question-box/commit/17fd41cca2d4f6a2ac8753d9f02294603c2ccaec))
* :art: formの幅狭く ([d3cc92a](https://github.com/dlopp/question-box/commit/d3cc92a2c983842ffdfad2aca5c51c9cb3a53ce7))
* :art: Headerの画像を変更 ([8e31c85](https://github.com/dlopp/question-box/commit/8e31c850afa71fdfde848aea5911dea99185ba46))
* :art: headerを作成した ([eacd661](https://github.com/dlopp/question-box/commit/eacd661bf812e59c5536a869d03558232c4a3a58))
* :art: HeadLineコンポーネント作成 ([c974ea5](https://github.com/dlopp/question-box/commit/c974ea581ceeaf85c5ed3b63ad55c766cb1e244b))
* :art: Headlineの下のmb調整 ([20227be](https://github.com/dlopp/question-box/commit/20227bec0f50ff3ffc78ccb141815634ecbebce4))
* :art: HeadLineの画像を変更 ([8930f04](https://github.com/dlopp/question-box/commit/8930f0450019aaf5c2c8e54b04a34360f82925fa))
* :art: hoverの色md以上で消す ([57371c4](https://github.com/dlopp/question-box/commit/57371c4257412f5a463a00709fbb24fedc1b8268))
* :art: index.vueと一緒にした ([0d92fc4](https://github.com/dlopp/question-box/commit/0d92fc4d5758b3e37a9d3aa8e1573f500f212690))
* :art: middleのshapeを緩やかに ([aa57da1](https://github.com/dlopp/question-box/commit/aa57da18c9214b2527af6e6d291f965b020848b1))
* :art: outlineをnoneにする ([7a861e1](https://github.com/dlopp/question-box/commit/7a861e1e3a7db649201589f7ff23a154b71e9e14))
* :art: QandAのanimation修正 ([41fe1be](https://github.com/dlopp/question-box/commit/41fe1bef011794d6307ee7c66dbed55dbc3f72cb))
* :art: QandAのアニメーション改善 ([50be88c](https://github.com/dlopp/question-box/commit/50be88caa601410fa9bb99e32bfe246923d21dc2))
* :art: QandAのホバー色を追加 ([c8a9885](https://github.com/dlopp/question-box/commit/c8a988520d34b256c525524e8f18d821d5eb7d93))
* :art: QandAの動作改善 ([181ee81](https://github.com/dlopp/question-box/commit/181ee818ea81fd80ef6789622fd809e911270133)), closes [#40](https://github.com/dlopp/question-box/issues/40)
* :art: shapeのmiddleとbottom追加 ([ee957fc](https://github.com/dlopp/question-box/commit/ee957fcd4cf7d761e37897582d8686e5cf376d33))
* :art: SNSコンポーネント作成 ([b72401d](https://github.com/dlopp/question-box/commit/b72401de73182b7156f4bd98d7ae563c209d25db))
* :art: SNSのマージン調整 ([16a1938](https://github.com/dlopp/question-box/commit/16a19381eed1c0ea90647272551e1c822dd14df5))
* :art: textareaのにじみ修正 ([5485ed5](https://github.com/dlopp/question-box/commit/5485ed5d58b03243500d15b9caf80892122f5a11))
* :art: Titleコンポーネント作成 ([6c5e709](https://github.com/dlopp/question-box/commit/6c5e70937944710ed55d39df83fa7266fcc6c478))
* :art: Titleに合わせて文字サイズ修正 ([e55df1b](https://github.com/dlopp/question-box/commit/e55df1b64891822e9ecc6760a55fb08965d27f5c))
* :art: Titleのサイズ調整 ([3021eba](https://github.com/dlopp/question-box/commit/3021ebaaf27d50b5f58283fee161e6aee6dbfe82))
* :art: Titleのサイズ調整 ([9f1cf1c](https://github.com/dlopp/question-box/commit/9f1cf1c91ecfdfa12328bea00ae28343843a9ff9))
* :art: Title調整 ([f0f19a8](https://github.com/dlopp/question-box/commit/f0f19a892eb5d8798cd21b19981bd9f0d7c86d7a))
* :art: topのshape作成 ([1b85b30](https://github.com/dlopp/question-box/commit/1b85b308be6734b5eab796bc6ec4c934fce874fd))
* :art: topのshape調整 ([d852b16](https://github.com/dlopp/question-box/commit/d852b16d75225f9d9aa5c4c2e66a1716359ea390))
* :art: topのshape調整 ([c42e4dc](https://github.com/dlopp/question-box/commit/c42e4dce46fd74d966e258a06c2dbcd8b511dfd4))
* :art: topページにアニメーションつける ([f3b5e62](https://github.com/dlopp/question-box/commit/f3b5e6207602ca15da32d732a15cb043605fab32))
* :art: vue-scrollto消す ([51aadf2](https://github.com/dlopp/question-box/commit/51aadf25cf5a866360d72f45ebc66368d1b2bf54))
* :art: アニメーションを1秒にする ([1342268](https://github.com/dlopp/question-box/commit/13422683a03a0ac95ccedbcddbd80403dd5cb74f))
* :art: にじみ修正 ([5ae1328](https://github.com/dlopp/question-box/commit/5ae1328662eaa2ae4b44291b113db9b958b10b20))
* :art: はみ出たところhidden ([cfb4b8e](https://github.com/dlopp/question-box/commit/cfb4b8e198d76ec8ed47cbdfb4f8a6ed1ec41648))
* :art: フォントがにじむのを修正 ([b16a206](https://github.com/dlopp/question-box/commit/b16a206f7106d9e76a0225ea397bc4f826685ad8))
* :art: ページコンポーネント上でcontainerで囲むように ([e938235](https://github.com/dlopp/question-box/commit/e938235c21aee656d835aaf3f70df4a9139cfe10))
* :art: ロゴ左にくっつくの修正 ([e54533b](https://github.com/dlopp/question-box/commit/e54533be901736819db6b1c4ff0df20e6e51a216))
* :art: 改行を表示する ([4733277](https://github.com/dlopp/question-box/commit/47332779f702e8919aeb6330f7c001b3d333528d))
* :art: 完全にレンダリングされた後に表示する ([021faaa](https://github.com/dlopp/question-box/commit/021faaaa4ed42bce9cea2477b14ebafa3ccd853e))
* :art: 管理者画面のUIをみやすくした ([e2a7402](https://github.com/dlopp/question-box/commit/e2a7402729e8baddcb7bd0c67c7cad015f9cb431))
* :art: 誤植修正 ([a8eedce](https://github.com/dlopp/question-box/commit/a8eedce439940968856d2ecc35155e5d964d5824))
* :art: 送信中を消す ([e1ca48f](https://github.com/dlopp/question-box/commit/e1ca48f4fb91b6c1e5498e27a0db859bb3ff0c53)), closes [#80](https://github.com/dlopp/question-box/issues/80)
* :art: 認証のコードを復活させた ([346af7d](https://github.com/dlopp/question-box/commit/346af7d345ac023bca43302cfe19aa73ab2baf55))
* :art: 余白、文字の大きさ調整 ([b682102](https://github.com/dlopp/question-box/commit/b6821027db304ed5e5b01f1fad67a52a182b897d))


### Update Dependencies

* :package: @nuxtjs/google-fontsインストール ([1059fc4](https://github.com/dlopp/question-box/commit/1059fc46a8d756bd9c278075189c9e7fc8544880))
* :package: @nuxtjs/toast導入 ([6e1396d](https://github.com/dlopp/question-box/commit/6e1396dcc62fbd8feb06b66863b924476a3d56d4))
* :package: axios, express, firebase-adminをインストール ([824ba7d](https://github.com/dlopp/question-box/commit/824ba7d6f5fe8815da2e657cdbd1c7d4db8f8113))
* :package: eslint-plugin-prettierを削除 ([b4bddd1](https://github.com/dlopp/question-box/commit/b4bddd18a8d88c8e035468fa8819e4588ae4e86a))
* :package: firebase導入 ([ddec587](https://github.com/dlopp/question-box/commit/ddec5874d7c6a1981cf3b4be38c4b1611ab1501f))
* :package: js-cookieとcookieparserをインストール ([0f045a5](https://github.com/dlopp/question-box/commit/0f045a58c3b7b4253b30965fdda8abff37ba79e5))
* :package: normalize.cssを導入 ([7579e27](https://github.com/dlopp/question-box/commit/7579e27b7b7bdfbdfaedb3c0000c020b19548eca))
* :package: standard-version追加 ([9d07daa](https://github.com/dlopp/question-box/commit/9d07daae182ee53ef77604fe06e3da738e574c2f))
* :package: Tailwindを拡張する ([724e30b](https://github.com/dlopp/question-box/commit/724e30b980ece641d91b2fec4953f59482a1ed1c))
* :package: toast削除 ([0154282](https://github.com/dlopp/question-box/commit/0154282196188831c5b9e504b2a6c161b3256038))
* :package: vue-scrolltoを導入 ([ac86f60](https://github.com/dlopp/question-box/commit/ac86f601af3057aca0d86b3feb97fce442e74575))
* :package: クライアント側で取得するようにした ([d4ff51f](https://github.com/dlopp/question-box/commit/d4ff51f08eaec7f2ad151a94049159fd39c9c3b8))
