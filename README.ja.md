# Agent Scrapbook

Agent Scrapbook は、エージェント作業の進捗レポートをスクラップ形式で公開するための VitePress テンプレートです。

Zenn のスクラップのように、タスクごとのスレッド末尾へレポートカードを追記します。スレッドページを正本にするため、要約ページと個別ページを行き来する必要がなく、二重管理も避けられます。

## ローカル確認

```bash
npm install
npm run docs:dev
```

## ビルド

```bash
npm run docs:build
```

## 構成

- `docs/tasks/`: タスク単位のスレッドページとレポートカード
- `docs/reports/`: 必要な場合だけ使う任意アーカイブ
- `docs/guide/`: 運用手順とガードレール
- `.github/workflows/pages.yml`: GitHub Pages デプロイ
