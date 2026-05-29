# Workflow

1. タスクごとに `docs/tasks/<task>.md` を作る。
2. エージェントの応答ごとに `docs/reports/NNNN-<slug>.md` を追加する。
3. タスクページの末尾に、新しいレポートへのリンクと一行要約を追記する。
4. `parent` に直前レポートや分岐元レポートの ID を入れる。
5. `npm run docs:build` を通してから公開する。

## Suggested Status

- `planned`
- `in_progress`
- `blocked`
- `accepted`
- `superseded`

## Guardrails

- 秘密情報、未公開の顧客情報、認証情報をレポートに含めない。
- 「推測」「未検証」「実行済み」を分けて書く。
- 長いタスクほど、判断理由と検証コマンドを残す。
