# 教員向けウェブサイト

教員が講義の出席状況を確認, 修正, 提出できるウェブ UI です.

## セットアップ

以下のツール群をインストールしていることを前提にしています.

- Node.js v18 以降
- pnpm

## 開発の流れ

最初に開発を始める前に 1 回だけ, 以下のコマンドを実行して開発に必要な依存関係をインストールしましょう.

```sh
pnpm install
```

開発をやっている際中は, 以下のコマンドを実行することで開発用ウェブサーバーを起動できます.

```sh
pnpm dev
```

これを実行してサーバーを起動してから [http://localhost:3000](http://localhost:3000) にアクセスすると, 実際に動く様子を確認できます.

## ファイル構成

`src/app/page.tsx` がサイトのトップページを生成するプログラムのファイルです. まずはここから編集していきましょう.

`src/` 内のサブフォルダは以下のような意味の分類になっています.

- `app/` - Next.js の App Router のエントリポイント
- `atoms/` - 単体で意味をなさない共通部品
- `commands/` - ユーザーがアプリに対して行うコマンドの処理
- `molecules/` - 意味をなすがそのままではページ中に使えない共通部品
- `organisms/` - そのままページ中に使える共通部品
- `queries/` - データ取得の React Hooks
- `reducers/` - アプリの状態遷移と遷移するアクション
- `theme/` - Material Design 準拠のカラーテーマの CSS
