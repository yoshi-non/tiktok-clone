# TikTok clone

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