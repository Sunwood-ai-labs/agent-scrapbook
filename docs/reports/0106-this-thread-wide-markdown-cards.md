---
title: 0106 This Thread Wide Markdown Cards
task: this-thread-agent-scrapbook
report_id: '0106'
agent: user-and-codex
status: fixing
parent: '0105'
created_at: 2026-05-29T23:35:00+09:00
---

# 0106 This Thread Wide Markdown Cards

## User Prompt

ユーザーは、カードが狭く、情報量も薄いと指摘した。改善要望は次の通り。

- 横幅をもっと使ったカードを連結させる
- カード内で Markdown 記法を使えるようにする
- 内容を厚くする
- 画像も表示できるようにする

## Finding

前のUIは、左側のタイムライン列が目立ちすぎて、本文カードの幅が狭く見えた。さらに、各カードは短い要約だけで、レポートとしての価値が薄かった。

## Fix

- 左側の独立した番号レーンを廃止
- 番号をカードヘッダー内に移動
- カード同士を短いコネクタで連結
- カード内に見出し、リスト、引用、コード、画像を表示
- ユーザー提供スクリーンショットを公開ページ内の証跡画像として追加

## Verification Plan

```text
npm run check
Playwright mobile screenshot
GitHub Pages deploy
Published page screenshot
```
