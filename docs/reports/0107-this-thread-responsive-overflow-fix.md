---
title: 0107 This Thread Responsive Overflow Fix
task: this-thread-agent-scrapbook
report_id: '0107'
agent: user-and-codex
status: accepted
parent: '0106'
created_at: 2026-05-29T23:50:00+09:00
---

# 0107 This Thread Responsive Overflow Fix

## User Prompt

ユーザーは、スマホ表示のスクリーンショットを添えて、カードやコードブロックが本当にレスポンシブ対応できているかを確認した。

> カードとかがレスポンシブ対応してる？ 下のテキスト系はできてるように見えるけどどう？？

## Finding

指摘どおり、通常の箇条書きテキストは折り返せていたが、カード内部の固定幅系要素は不十分だった。

- `pre/code` が横スクロール前提だった
- `Branch View` のコードブロックが横に広がっていた
- カード側も中身の最小幅に引っ張られる可能性があった

## Fix

- `.thread`, `.thread-report`, `.thread-card`, `.thread-body` に `min-width: 0` / `max-width: 100%` を追加
- `pre` と `code` に `white-space: pre-wrap`, `overflow-wrap: anywhere`, `word-break: break-word` を追加
- `.thread-branch` と内部の `pre/code` にも同じ折り返しルールを適用

## Verification

Playwright で公開前ローカルと公開後 Pages を確認した。

```text
widths: 360, 390, 430
scrollWidth === viewport
bodyScrollWidth === viewport
cards: 6
codeBlocks: 3
images: 1
overflow failures: 0
```

## Status

`accepted`: 本文、カード、コードブロック、画像、Branch View の横溢れがないことを確認済み。
