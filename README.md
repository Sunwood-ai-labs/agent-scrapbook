# Agent Scrapbook

Agent Scrapbook is a public VitePress template for append-only agent progress reports.

The idea is inspired by Zenn scrap threads: every agent response is added to the bottom of a task thread as a full report card. The thread page is the source of truth, so readers do not have to jump between a summary page and duplicate per-report pages.

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

- `docs/tasks/`: task-level thread pages and report cards
- `docs/reports/`: optional archive pages only, not the default workflow
- `docs/guide/`: workflow and guardrails
- `.github/workflows/pages.yml`: GitHub Pages deployment
