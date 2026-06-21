# Repository Guidelines

## Project Structure & Module Organization

This repository is a static GitHub Pages newsletter. `index.html` contains the
landing page and publication roadmap. Weekly articles live in
`weeks/week-01.html` through `weeks/week-08.html`, and shared presentation rules
live in `assets/styles.css`. `PLAN.md` defines the editorial direction and weekly
scope. `README.md` documents GitHub Pages deployment. There is no application
source tree, package manager, automated test suite, or generated build output.

## Build, Test, and Development Commands

No build step is required. Open `index.html` directly, or serve the repository:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000/` to check navigation and responsive layout.

```sh
git diff --check
```

Checks edited files for whitespace errors.

```sh
rg -n '<h1>|article-meta|article-nav' weeks/
rg -n 'week-card (latest|upcoming)|href="weeks/' index.html
```

Use these searches to compare article metadata, navigation, and publication
state before committing.

## Coding Style & Naming Conventions

Use plain HTML and CSS with two spaces for newly added or edited nesting. Do not
reindent unrelated pages. Keep article filenames in the `week-01.html` pattern
and prefer existing semantic elements such as `main`, `section`, `article`,
`aside`, headings, lists, and `pre><code>`. Keep Korean copy direct and easy to
scan. Avoid prescriptive wording; present examples as options. Explain technical
terms when they first appear and keep names such as `CLAUDE.md`, Skill, MCP,
SubAgent, Hooks, Prompt Engineering, and Agentic Engineering consistent.

## Testing & Publishing Guidelines

Preview changed pages at desktop and mobile widths. Check wrapping in prompt and
code blocks, card spacing, and consistency between roadmap and article titles.
Only the currently published card should use `latest` and display `이번 주`.
Unpublished cards use `upcoming`, display `Coming soon`, and must not link to
draft pages. Add previous or next article links only after the target issue is
published. Run `git diff --check` after all content or layout edits.

## Commit & Pull Request Guidelines

The existing history is mixed, so prefer Conventional Commits for new work:
`docs(week-01): clarify review workflow`, `feat: add newsletter navigation`, or
`fix: correct roadmap link`. Keep subjects under 72 characters. Pull requests
should summarize the change, name affected weeks or files, link related issues
when available, and include screenshots for layout or styling changes.

## Agent-Specific Instructions

Keep edits scoped. Do not rewrite unrelated weeks or remove user-authored drafts
and untracked files. When a weekly title or direction changes, update the weekly
page, `index.html`, and `PLAN.md` together.
