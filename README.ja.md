# Agent Scrapbook

Agent Scrapbook は、エージェント作業の進捗レポートをスクラップ形式で公開するための VitePress テンプレートです。

Zenn のスクラップのように、タスクごとのスレッド末尾へレポートを追記します。同時に、各レポートは独立した Markdown ファイルとして保存するため、あとから単体で読んだり、差分を確認したり、タスクツリーとして辿れます。

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

- `docs/tasks/`: タスク単位のスレッドページ
- `docs/reports/`: 応答ごとの独立レポート
- `docs/guide/`: 運用手順とガードレール
- `.github/workflows/pages.yml`: GitHub Pages デプロイ
