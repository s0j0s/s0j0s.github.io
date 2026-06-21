# Week 2 Decision Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dense Week 2 planning code block with a scannable, role-aware three-step flow and a separate reusable prompt.

**Architecture:** Use semantic HTML cards for investigation, scope, and verification. Add reusable responsive CSS that renders three columns on desktop and one column on mobile, while keeping the final implementation request in the existing prompt-card pattern.

**Tech Stack:** HTML, CSS, Playwright screenshots

---

### Task 1: Build the decision flow

**Files:**
- Modify: `weeks/week-02.html`

- [x] **Step 1: Replace the combined code block**

Create three cards labeled `1 조사 결과 확인`, `2 수정 범위 확인`, and `3 테스트 항목 확인`. State whether Claude Code or the reader acts at each step.

- [x] **Step 2: Separate the follow-up prompt**

Place `위에서 정한 수정 범위대로 구현하고, 테스트 결과와 추가로 확인할 부분을 정리해줘.` in a prompt card below the flow.

### Task 2: Add responsive presentation

**Files:**
- Modify: `assets/styles.css`

- [x] **Step 1: Style the cards and step labels**

Add a three-column grid, neutral cards, numbered badges, and compact list spacing that follows the existing palette.

- [x] **Step 2: Add the mobile layout**

Switch the decision flow to one column below `720px` and allow the prompt to wrap without horizontal scrolling.

### Task 3: Verify the result

**Files:**
- Verify: `weeks/week-02.html`
- Verify: `assets/styles.css`

- [x] **Step 1: Run static checks**

Run `git diff --check` and confirm all three step labels and the separate prompt are present.

- [x] **Step 2: Preview desktop and mobile**

Capture Week 2 at desktop and mobile viewport widths and inspect card order, wrapping, and spacing.
