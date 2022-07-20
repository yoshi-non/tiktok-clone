# TikTok clone

## Demo

[デモサイトはこちら](https://tiktok-clone-orcin.vercel.app/)

## プロジェクト立ち上げ

npx create-next-app@latest tiktok-clone --ts

## Sanityインストール

npm install -g @sanity/cli
※まだ一度もインストールしてない方のみ

sanity init --coupon javascriptmastery2022

- Project name: tiktok-nextjs-clone
- Use the default dataset configuration? Yes
- Project output path: sanity
- Select project template Clean project with no predefined schemas

.gitignoreにsanity/node_modulesを追加

## Setup

package.jsonの一部にモジュール追加
```json
"dependencies": {
    "@sanity/client": "3.3.2",
    "axios": "0.27.2",
    "next": "12.2.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-google-login": "5.2.2",
    "react-icons": "4.4.0",
    "uuidv4": "6.2.13",
    "zustand": "4.0.0-rc.1"
  },
```

npm i --legacy-peer-deps

### tailwindcss インストール

npm i -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

## Google Auth

npm i @react-oauth/google jwt-decode

url:[console.cloud.google.com](console.cloud.google.com)でTikTok Cloneという名前でプロジェクト作成

- 作成したプロジェクトに入ったらAPIとサービスに移動

- 認証情報を選択

- 同意画面を構成をクリック

### OAuth 同意画面

- 外部にチェックを付けて作成

#### アプリ情報

- アプリ名: TikTok Clone

- ユーザーサポートメール: 自身のメアドを入力

#### デベロッパーの連絡先情報

- メールアドレス: 自身のメアドを入力

- 保存して次へをクリック

### スコープ

- 保存して次へをクリック

### テストユーザー

- 保存して次へをクリック

### 概要

- ダッシュボードに戻るをクリック

- 認証情報を選択

- 認証情報を作成をクリックしOAuthクライアントIDを選択

### OAuthクライアントIDの作成

- アプリケーションの種類: ウェブアプリケーション

- 名前: TikTok Clone

- 承認済みの JavaScript 生成元と承認済みのリダイレクト URIの両方に http://localhostとhttp://localhost:3000を追加

- 作成をクリック

- クライアントIDを取得したら.env.localにNEXT_PUBLIC_GOOGLE_API_TOKENとして変数化