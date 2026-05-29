# Agent Scrapbook

Zenn のスクラップのように、エージェント作業の応答レポートを下へ下へ追記していく公開ログです。

この実例では、スレッドページを正本にして各カードへ個別レポート相当の情報を載せます。二重管理を避けながら、途中判断・検証・未解決リスクをツリー状に残します。

## Task Tree

- [This Thread: Agent Scrapbook Launch](./tasks/this-thread-agent-scrapbook.md)
  - 0101 Idea Intake
  - 0102 Repo Build
  - 0103 Publish Proof
  - 0104 Example Expansion
  - 0105 Screenshot Review
  - 0106 Wide Markdown Cards
  - 0107 Responsive Overflow Fix
  - 0108 Single Source Thread
- [Demo Build Thread](./tasks/demo-build-thread.md)
  - [0001 Concept](./reports/0001-concept.md)
  - [0002 Scaffold](./reports/0002-scaffold.md)
  - [0003 Publish Gate](./reports/0003-publish-gate.md)

## Report Shape

```yaml
---
task: demo-build-thread
report_id: 0002
agent: codex
status: in_progress
parent: 0001
created_at: 2026-05-29T00:00:00+09:00
---
```

## Why This Works

- 進捗が「チャットの流れ」ではなく「公開できる証跡」になる
- 各応答が独立ファイルなので、レビュー・引用・差分確認がしやすい
- 親子関係を frontmatter に持たせることで、タスク分岐をあとから追える
- GitHub Pages に載せれば、作業ログをチームや読者へ共有できる
