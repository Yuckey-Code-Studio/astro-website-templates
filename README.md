# Astro starting template

静的サイト用Astroフレームワークのボイラーテンプレートです。このテンプレートをコピーしてプロジェクトを開始するための基礎にしてください。

## 目次

- 推奨環境
- インストール
- NPMスクリプト
- ディレクトリ構成
- Astro Docs
- コミットメッセージ絵文字（optional）
- お勧めプラグイン（optional）
- 為になる技術記事（optional）

## 推奨環境

- Windows 10(21H2) / macOS(12.2.1)
- Node.js v20.10.0
- npm 10.2.3
- git version 2.43.0
- Visual Studio Code 1.85.1

## インストール

リポジトリからクローンして必要な npm パッケージをインストールします。

```sh
$ cd {クローンしたい場所}
$ git clone git@github.com:Yuckey-Code-Studio/technical-training.git
$ npm ci
```

※ npm パッケージの脆弱性で警告が発生しますが、とりあえず使用できます

### Visual Studio Code 拡張機能のインストール

Visual Studio Code（以下、VSCode）の推奨拡張機能を使用しています。  
プロジェクトで使用している拡張機能をインストールしてください。

- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint)
- [Japanese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

## NPMスクリプト

すべてのコマンドはプロジェクトのルート、ターミナルから実行されます:

| Command                   | Action                                                    |
| :------------------------ | :-------------------------------------------------------- |
| `npm ci`                  | 依存関係をインストールします                              |
| `npm run dev`             | `localhost:4321` でローカル開発サーバーを起動します       |
| `npm run build`           | `./dist/` に本番サイトのデータを構築します                |
| `npm run preview`         | デプロイ前にローカルでビルドをプレビューします            |
| `npm run astro -- --help` | Astro CLIを使用する際のヘルプ                             |
| `npm run format`          | css,scss,ts,tsx,astro形式のファイルにprettierを適用します |
| `npm run lint`            | eslint,stylelint,markuplintを各ファイルに適用します       |
| `npm run icon`            | svgアイコンをwebフォントに変換します                      |

## ディレクトリ構成

`src`、`public` ディレクトリに格納されている対象ファイルがコンパイルされて `dist` ディレクトリに出力されます。

```
.
│  .editorconfig                    // EditorConfig設定
│  .eslintrc.yml                    // ESLint設定
│  .gitattributes                   // Gitリポジトリ改行コード設定
│  .gitignore                       // Git管理対象外設定
|  .markuplintrc                    // HTML構文チェック設定
│  .prettierrc.yml                  // SCSS,JavaScriptコード整形設定
│  .stylelintrc.yml                 // Stylelint設定
│  astro.config.mjs                 // Astro設定
│  package-lock.json                // npmパッケージ管理
│  package.json                     // npmパッケージ管理
│  postcss.config.js                // postcss設定
│  README.md                        // このファイル
│  tsconfig.json                    // TypeScriptの設定ファイル
├─.vscode                           // VSCodeプロジェクト設定
│    extensions.json                // 推奨拡張機能
│    launch.json                    // デバッグ時の構成や設定
│    settings.json                  // プロジェクト固有設定
├─dist                              // ビルド出力ファイル
├─public                            // コード以外の処理不要のアセット（フォント、アイコンなど）
└─src                               // プロジェクトソースコード（コンポーネント、ページ、スタイルなど）
  └─styles                          // スタイル関係(SCSS)
      └─global
         └─mixin
            _aspect-ratio.scss      // アスペクト比のリキッドデザイン対応
            _breakpoints.scss       // ブレイクポイント
            _hover-brightness.scss  // マウスホバー時に要素を明るくして拡大する
            _lineheight.scss        // 行間の指定
            _pxtorem.scss           // pxからremへの単位変換(PCデザイン推奨)
            _pxtovw.scss            // pxからvwへの単位変換(SPデザイン推奨)
            _retina.scss            // Retinaディスプレイ対応
            _tracking.scss          // トラッキングの指定
            _visually-hidden.scss   // 見た目は隠すけど要素として存在させる
```

※ 説明不要なファイルは構成図に載せていません  
※ node_modules は表示対象外にしています

## 👀 Astro Docs

[Astroの基本的な紹介です。](https://docs.astro.build/ja/getting-started/)

## コミットメッセージ絵文字（optional）

コミットメッセージに絵文字が入っていると見たときにわかりやすいですし、開発のテンションが上がります ❗  
日本語入力に辞書追加を行って気軽に絵文字を入力できるようにしましょう 🥰

- [絵文字入力を日本語 🇯🇵 でするための IME 追加辞書](https://github.com/peaceiris/emoji-ime-dictionary)
- [Emoji で楽しく綺麗なコミットを手に入れる](https://goodpatch.com/blog/beautiful-commits-with-emojis)
- [GitHub のコミットメッセージに絵文字を入れて開発効率をあげる](https://qiita.com/Jung0/items/0a9a7a97a2c17f92d3c5)

| emoji |  IME 変換  |    code    | type                  |
| :---: | :--------: | :--------: | :-------------------- |
|  🎉   | ：おいわい |   :tada:   | 大きな機能追加/変更   |
|  ✨   | ：きらきら | :sparkles: | 部分的な機能追加/変更 |
|  🐛   | ：いもむし |   :bug:    | バグ修正（Bugfix）    |
|  👍   | ：おやゆび |    :+1:    | 機能改善              |
|  🎨   | ：ぱれっと |   :art:    | スタイリングの修正    |
|  📝   |   ：めも   |   :memo:   | ドキュメント追加/変更 |
|  🐴   |   ：うま   |  :horse:   | パフォーマンス改善    |
|  🔧   |  ：れんち  |  :wrench:  | ツールメンテナンス    |

## お勧めプラグイン（optional）

- カルーセルスライダー [Swiper](https://swiperjs.com/)
- ウェブセクションを1ページスクロール [docSlider](https://prjct-samwest.github.io/docSlider/)
- スクロールで要素を表示 [scrollCue](https://prjct-samwest.github.io/scrollCue/)
- 要素が水平方向にスクロール可能であることを示唆 [ScrollHint](https://appleple.github.io/scroll-hint/)
- モーション制作 [GSAP](https://gsap.com/)

## 👀 為になる技術記事（optional）

- [【JavaScript】webサイトのレスポンスが悪くなってしまう前に知っておきたかった記事まとめ。](https://nkmrkisk.com/archives/1306)
- [【サボりたいエンジニア向け】コーディングに役立つチートシートまとめ](https://qiita.com/saboriman/items/b7461f0ab5526845a0a5)
- [有名サイトで使用されているCSSテクニックまとめ](https://qiita.com/k__watanabe/items/70171a5095e714509af4)
- [教材だけでは分からない、案件でよく要求される細かいコーディングのテクニック12選](https://itokoba.com/archives/3877)

TEST
