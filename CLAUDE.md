# CLAUDE.md - Projektrichtlinien für Claude Code

## Projektübersicht

Tabularasa Coaching - Eine Next.js Website für Coaching-Dienstleistungen.

## Technologie-Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Sprache**: TypeScript/JavaScript

## Entwicklungsrichtlinien

### Branching-Strategie

- Der Haupt-Branch ist `main`
- Claude-Entwicklungsbranches folgen dem Muster `claude/**`
- Branches mit dem Präfix `claude/` werden automatisch nach `main` gemergt und gelöscht

### Auto-Merge Workflow

Dieses Projekt verwendet einen automatischen Merge-Workflow für Claude-Branches:
- Trigger: Push zu `claude/**` Branches
- Aktion: Automatischer Merge zu `main` mit `--no-ff`
- Nach dem Merge wird der Branch automatisch gelöscht
- Commits werden als `github-actions[bot]` ausgeführt

### Code-Konventionen

- Verwende TypeScript wo möglich
- Folge den bestehenden Coding-Patterns im Projekt
- Schreibe aussagekräftige Commit-Messages auf Deutsch oder Englisch
- Teste Änderungen lokal bevor du pushst

### Wichtige Verzeichnisse

- `/src` - Hauptquellcode
- `/public` - Statische Assets
- `/.github/workflows` - GitHub Actions Workflows

## Deployment

Das Projekt wird automatisch deployed wenn Änderungen zu `main` gepusht werden.
