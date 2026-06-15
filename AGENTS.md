# Repository Guidelines

## Project Structure & Module Organization

This repository is a static GitHub Pages newsletter site. The root `index.html`
contains the roadmap and links to each article. Weekly articles live in
`weeks/week-01.html` through `weeks/week-08.html`. Shared styling is in
`assets/styles.css`. There is no application source tree, package manager, or
generated build output. Keep new newsletter pages under `weeks/` and link them
from `index.html` when they should appear in the roadmap.

## Build, Test, and Development Commands

No build step is required. Open `index.html` directly in a browser to preview the
site.

Useful checks:

```sh
git diff --check
```

Checks for whitespace errors before committing.

```sh
rg "Prompt Engineering" weeks/
```

Searches article content quickly when editing recurring terms or titles.

## Coding Style & Naming Conventions

Use plain HTML and CSS. Match the existing indentation: two spaces for nested
HTML and CSS blocks. Keep article filenames in the `week-01.html` pattern.
Prefer semantic HTML already used in the project: `main`, `section`, `article`,
`aside`, `h1`-`h3`, `p`, `ul`, and `pre><code`. Keep Korean newsletter copy
direct and readable; avoid adding heavy terminology unless the article explains
it immediately.

## Testing Guidelines

There is no automated test suite. Before submitting changes, preview the edited
page in a browser, verify navigation links, and run `git diff --check`. For
content edits, review the rendered page for broken layout, overly long lines in
code blocks, and inconsistent titles between `index.html` and the weekly page.

## Commit & Pull Request Guidelines

Recent commits use short Conventional Commit style, for example
`docs(week-01): clarify agentic engineering` and `feat: add 8-week newsletter pages`.
Use `docs` for content-only edits, `feat` for new pages or visible site
features, and `fix` for corrections. Keep the subject under 72 characters.

Pull requests should include a brief summary, the affected week or files, and
screenshots when layout or styling changes. Link related issues when available.

## Agent-Specific Instructions

Keep edits scoped. Do not rewrite unrelated weeks while adjusting one article.
Do not remove user-authored drafts or untracked files unless explicitly asked.
