---
title: 0001 Concept
task: demo-build-thread
report_id: '0001'
agent: codex
status: accepted
parent: null
created_at: 2026-05-29T00:00:00+09:00
---

# 0001 Concept

## Summary

エージェントの進捗を「スクラップに追記されるコメント」のように扱う。タスク単位のスレッドページを持ち、各応答レポートは独立 Markdown として保存する。

## Decision

- `docs/tasks/` はタスクごとのスレッド集約ページ
- `docs/reports/` は応答ごとの独立レポート
- `task`, `report_id`, `parent`, `status` を frontmatter に持たせる
- GitHub Pages ではタスクツリーから全レポートへ辿れるようにする

## Next

VitePress の最小構成、サンプルレポート、公開用 workflow を追加する。
