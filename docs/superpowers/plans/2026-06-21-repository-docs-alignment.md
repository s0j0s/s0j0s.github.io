# Repository Docs Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the editorial plan and contributor guide with the newsletter's current files, weekly topics, and publishing workflow.

**Architecture:** Treat the weekly HTML pages as the source of truth for titles and scope. Keep `PLAN.md` focused on editorial intent and issue progression, while `AGENTS.md` documents repository operations and contribution rules.

**Tech Stack:** Markdown, HTML, CSS, GitHub Pages

---

### Task 1: Align the editorial plan

**Files:**
- Modify: `PLAN.md`

- [x] **Step 1: Replace outdated weekly titles and descriptions**

Match all eight headings to the corresponding `<h1>` values in `weeks/week-01.html` through `weeks/week-08.html`.

- [x] **Step 2: Add editorial and publishing principles**

Document the short-break reading target, optional tone, terminology guidance, and the current Week 1 publication state.

### Task 2: Update contributor guidance

**Files:**
- Modify: `AGENTS.md`

- [x] **Step 1: Correct the repository map and commands**

Include `README.md` and `PLAN.md`, add a local HTTP preview command, and replace the narrow terminology search with general content and publication-state checks.

- [x] **Step 2: Add publishing and editorial rules**

Require one current `latest` card, non-linked `upcoming` cards, navigation only to published issues, matching titles, optional Korean copy, and desktop/mobile preview.

- [x] **Step 3: Correct commit guidance**

Describe Conventional Commits as the preferred convention because older history is mixed.

### Task 3: Verify both documents

**Files:**
- Verify: `PLAN.md`
- Verify: `AGENTS.md`
- Reference: `index.html`
- Reference: `weeks/week-01.html` through `weeks/week-08.html`

- [x] **Step 1: Compare weekly titles**

Run `rg -n '^## Week' PLAN.md` and compare the output with `rg -n '<h1>' weeks/`.

- [x] **Step 2: Check contributor-guide length and whitespace**

Run `wc -w AGENTS.md` and `git diff --check`. Expected: 200–400 words in `AGENTS.md` and no whitespace errors.
