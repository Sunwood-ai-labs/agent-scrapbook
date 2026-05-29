# Agent Scrapbook

Agent Scrapbook is a public VitePress template for append-only agent progress reports.

The idea is inspired by Zenn scrap threads: every agent response can be added to the bottom of a task thread, while each report also remains its own Markdown file. This makes long-running work easier to review as a tree of decisions, checks, blockers, and follow-ups.

## Local Preview

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
```

## Structure

- `docs/tasks/`: task-level thread pages
- `docs/reports/`: one Markdown file per agent response/report
- `docs/guide/`: workflow and guardrails
- `.github/workflows/pages.yml`: GitHub Pages deployment
