# AGENTS.md

## What this repo is

Course material for **PAM I – Programação de Aplicativos Móveis I** (ETEC Bento Quirino): 20 lessons teaching React Native (Expo) + SQLite to absolute beginners. The repo is **pure Markdown** — no package.json, no code to compile, no tests, no lint, no CI. There is nothing to build or run; verify edits by reading the rendered Markdown and checking links.

All content is in **Brazilian Portuguese (pt-BR)**. Write new content in pt-BR and match the existing friendly, gamified teaching tone (e.g. "Sua Missão da Quinzena (Valendo XP e nota)").

## Structure

- `aula-01-…` … `aula-20-…` — one folder per lesson, each with **exactly four files**: `README.md` (index), `apresentacao.md` (slides), `tutorial.md` (step-by-step), `atividade.md` (homework). Follow this pattern for new lessons.
- `projetos/` — Trabalho em Grupo (final project): `README.md` (index of 14 categories / 36 themes), shared fichas `fase1-bimestre1.md` … `fase4-bimestre4.md`, plus `categoria-NN-<nome>/` — one folder per category (each with its own `README.md` listing themes) and `categoria-NN-<nome>/tema-NN-<slug>/README.md` per suggested theme.
- `docs/` — `calendario-aulas.md`, `PTD-Programacao-Aplicativos-Mobile-I.md`, `GUIA-DE-ERROS-COMUNS.md` (troubleshooting; referenced from the main README).
- `plus/` — optional content (e.g. Storybook). `assets/` — images used by lessons.
- `README.md`, `INSTRUCOES.md`, `TUTORIAIS.md` — course-level entry points.

## Conventions that matter

- Cross-links are **relative Markdown links**. The main `README.md` and `TUTORIAIS.md` each hold an index table of all 20 lessons; lesson `README.md` files link back to `../README.md`, `../docs/calendario-aulas.md`, and `../TUTORIAIS.md`, and link "next lesson" forward. When adding, renaming, or removing a lesson/file, update those tables and links or they break.
- Commit messages use conventional-commit prefixes (`docs:`, `feat:`, `chore:`) with pt-BR descriptions (see `git log`).
