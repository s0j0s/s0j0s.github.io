# Week 1 Publish Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the homepage and Week 1 article accurately represent the first newsletter issue before distribution.

**Architecture:** Keep the existing static HTML and shared CSS structure. Update only homepage publication state and Week 1 copy, then verify links, whitespace, and desktop/mobile rendering without changing later article content.

**Tech Stack:** HTML, CSS, GitHub Pages, Playwright screenshot checks

---

### Task 1: Correct homepage publication state

**Files:**
- Modify: `index.html`

- [x] **Step 1: Mark Week 1 as the current issue**

Use the existing `latest` card pattern for Week 1 and label it `이번 주`.

- [x] **Step 2: Mark Weeks 2–8 as upcoming**

Use non-link `article.week-card.upcoming` cards with `Coming soon` so unreleased issues are not presented as published.

- [x] **Step 3: Clarify the Week 1 card description**

Replace the directive wording with `바로 구현하기 전에 조사부터 요청해보는 기본 습관`.

### Task 2: Refine Week 1 copy

**Files:**
- Modify: `weeks/week-01.html`

- [x] **Step 1: Clarify the first summary point**

Explain that organizing the question and work sequence makes the result easier to review.

- [x] **Step 2: Remove repetitive and overly certain wording**

Refine the direct-fix introduction, soften the description of insufficient investigation, and replace ambiguous references to information being “left behind.”

- [x] **Step 3: Make the review checklist optional in tone**

Introduce it as a set of items readers can select as needed, while preserving the practical checklist.

- [x] **Step 4: Clarify the reason for investigating before implementation**

Explain that the purpose is to establish review evidence before implementation, not to slow the work down.

### Task 3: Verify the publish-ready pages

**Files:**
- Verify: `index.html`
- Verify: `weeks/week-01.html`
- Verify: `assets/styles.css`

- [x] **Step 1: Check whitespace and publication labels**

Run:

```sh
git diff --check
rg -n "이번 주|Coming soon|week-card (latest|upcoming)" index.html
```

Expected: no whitespace errors; Week 1 is current and Weeks 2–8 are upcoming.

- [x] **Step 2: Check links**

Confirm the Week 1 card opens `weeks/week-01.html` and its roadmap navigation returns to `index.html#roadmap`.

- [x] **Step 3: Preview desktop and mobile rendering**

Capture the homepage and Week 1 with Playwright at desktop and mobile viewport sizes and visually inspect card state, wrapping, and article navigation.
