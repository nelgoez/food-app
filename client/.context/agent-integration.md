# Agent Integration Guide

## Overview

This project supports AI-assisted development via **opencode**. Agents interact
with the codebase using file I/O, bash commands, and MCP tools.

## Stack

- **Framework:** Create React App (react-scripts 5.x)
- **UI:** React 18, plain CSS
- **State:** Redux + redux-thunk
- **Routing:** React Router v5
- **HTTP:** Axios
- **QA:** Playwright + GitHub Actions

## Conventions

- **No inline comments** — code should be self-documenting.
- **Plain CSS** — global/unscoped styles per component.
- **JavaScript** (not TypeScript) — this is a JS project.
