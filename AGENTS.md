# AGENTS.md

## What this repo is

Course material for **PAM I – Programação de Aplicativos Móveis I** (ETEC Bento Quirino): 20 lessons teaching React Native (Expo) + SQLite to absolute beginners. The repo is **pure Markdown + per-module Expo scaffolds** — no root package.json, no tests, no lint, no CI. Verify edits by reading the rendered Markdown, checking links, and (for the Expo projects) optionally running `npm install && npx tsc --noEmit` inside a module's `app/`.

All content is in **Brazilian Portuguese (pt-BR)**. Write new content in pt-BR and match the existing friendly, gamified teaching tone (e.g. "Sua Missão da Quinzena (Valendo XP e nota)").

## Structure

- `modulo-01-fundamentos-ambiente/` … `modulo-07-boas-praticas-ux/` — **7 thematic modules**, each grouping its lessons: `modulo-01` = aulas 01–02, `modulo-02` = 03–05, `modulo-03` = 06–07, `modulo-04` = 08–10, `modulo-05` = 11–13, `modulo-06` = 14–17, `modulo-07` = 18–20.
- Each module folder has: `README.md` (module index listing its lessons), an `app/` subfolder with an **incomplete Expo project** (screens marked with `// TAREFA (Aula NN):`), and one folder per lesson.
- Each lesson folder has **exactly four files**: `README.md` (index), `apresentacao.md` (slides), `tutorial.md` (step-by-step), `atividade.md` (homework). Follow this pattern for new lessons.
- The Expo scaffolds live at `modulo-NN-<nome>/app/`. `package.json` is identical across modules (Expo SDK 54 with expo-router, image-picker, location, notifications, async-storage, sqlite); `app.json` varies per module (name/slug).
- `modulo-08-projeto-final/` — Trabalho em Grupo (final project / Module 8): `README.md` (index of 14 categories / 36 themes), shared fichas `fase1.md` … `fase4.md`, plus `categoria-NN-<nome>/` — one folder per category (each with its own `README.md` listing themes) and `categoria-NN-<nome>/tema-NN-<slug>/README.md` per suggested theme.
- `docs/` — `calendario-aulas.md`, `PTD-Programacao-Aplicativos-Mobile-I.md`, `GUIA-DE-ERROS-COMUNS.md` (troubleshooting; referenced from the main README), `base-javascript-typescript.md` (JS/TS primer linking to the AED course).
- `plus/` — optional content (e.g. Storybook). `assets/` — images used by lessons.
- `README.md`, `INSTRUCOES.md`, `TUTORIAIS.md` — course-level entry points.

## Conventions that matter

- Cross-links are **relative Markdown links**. The main `README.md` and `TUTORIAIS.md` each hold an index table of all 20 lessons; each module `README.md` links to its lessons; lesson `README.md` files link back to `../../README.md`, `../../docs/calendario-aulas.md`, and `../../TUTORIAIS.md`, and link "next lesson" forward. Lesson links to lessons in the **same module** use `../aula-NN-…/README.md`; links to lessons in **other modules** use `../../modulo-NN-…/aula-NN-…/README.md`. When adding, renaming, or removing a module/lesson/file, update those tables and links or they break.
- Commit messages use conventional-commit prefixes (`docs:`, `feat:`, `chore:`) with pt-BR descriptions (see `git log`).
