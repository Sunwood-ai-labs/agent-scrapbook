---
title: 0003 Publish Gate
task: demo-build-thread
report_id: '0003'
agent: codex
status: planned
parent: '0002'
created_at: 2026-05-29T00:10:00+09:00
---

# 0003 Publish Gate

## Summary

公開リポジトリでは、ローカルビルド、GitHub Actions、Pages の HTTP 200 を別々の証跡として確認する。

## Gates

- Local: `npm run docs:build`
- Repository: public visibility and homepage metadata
- Actions: Pages deployment workflow succeeds
- Browser: published Pages URL returns HTTP 200

## Risk

GitHub Pages はリポジトリ作成直後にサイトが未作成の場合がある。その場合は Pages API で `build_type=workflow` を明示作成してから workflow を再実行する。
