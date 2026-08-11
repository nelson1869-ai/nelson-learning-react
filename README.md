# Fullstack Lab

A hands-on full-stack development learning project focused on understanding
modern web development from the foundations of the toolchain through
production architecture.

This repository is not only about making applications work.

The goal is to understand:

- How the tools work
- Why architectural decisions are made
- How the frontend and backend communicate
- How applications are tested
- How applications are secured
- How applications are deployed
- How production systems are maintained
- How to make good engineering trade-offs

---

## Learning Philosophy

This project follows a **manual-first learning approach**.

Instead of immediately relying on generators and automation, important parts
of the development environment and application are built step by step.

The learning cycle is:

```text
Understand
    ↓
Build
    ↓
Run
    ↓
Inspect
    ↓
Debug
    ↓
Verify
    ↓
Document
    ↓
Commit
    ↓
Improve
```

The goal is not to memorize commands or framework syntax.

The goal is to understand what is happening underneath the tools we use.

---

## Learning Approach

When learning an important concept, ask:

```text
WHAT
→ What is it?

WHY
→ Why do we need it?

HOW
→ How does it work?

WHERE
→ Where is it used?

IMPACT
→ What changes when we use it?
```

For important commands, understand:

```text
command
subcommand
flags/options
arguments
result
```

Example:

```bash
npm install -D vite
```

Breakdown:

```text
npm
→ package manager

install
→ action

-D
→ --save-dev

vite
→ package being installed
```

---

## Language Learning

English is the primary language of this project.

English should be used for:

- Source code
- Variable names
- Function names
- Components
- File names
- Documentation
- Git commit messages
- Technical terminology
- Architecture discussions

Grammar does not need to be perfect while learning.

The learning process is:

```text
Think
    ↓
Write in English
    ↓
Make mistakes
    ↓
Receive corrections
    ↓
Improve
    ↓
Keep using English
```

Taglish may be used when a technical concept needs a clearer or more natural
explanation.

Technical terminology should normally remain in English.

Examples:

```text
component
dependency
state
props
runtime
build
deployment
API
database
authentication
repository
commit
branch
```

The objective is to gradually become comfortable using professional technical
English while learning software development.

See [TAGLISH.md](TAGLISH.md) for the complete language-learning guidelines.

---

## Architect Mode

This project uses an **Architect Mode** for technical decision-making.

Architect Mode focuses on understanding the application as a complete system,
not only making individual pieces of code work.

When Architect Mode is active, consider:

1. Requirements
2. Project structure
3. Separation of concerns
4. Dependency choices
5. Maintainability
6. Scalability
7. Security
8. Testing
9. Developer experience
10. Deployment
11. Observability
12. Long-term technical debt

The architectural decision process is:

```text
Requirement
    ↓
Understand the problem
    ↓
Identify constraints
    ↓
Consider possible solutions
    ↓
Choose the simplest viable design
    ↓
Evaluate trade-offs
    ↓
Implement in small steps
    ↓
Test and verify
    ↓
Refactor when justified
    ↓
Document important decisions
```

Architect Mode does **not** mean adding unnecessary complexity.

The principle is:

```text
Do not over-engineer.
Do not under-engineer.

Build the simplest architecture
that correctly supports the requirements
while leaving reasonable room for growth.
```

For significant architectural decisions, consider:

```text
WHAT
→ What are we changing?

WHY
→ Why do we need it?

OPTIONS
→ What reasonable alternatives exist?

RECOMMENDATION
→ Which approach should we use?

TRADE-OFF
→ What do we gain and what do we give up?

IMPACT
→ How does the decision affect the rest of the system?
```

The learning progression should eventually move from:

```text
Code
    ↓
Component
    ↓
Feature
    ↓
Application
    ↓
System
    ↓
Architecture
```

The goal is to answer not only:

> How do I write this code?

but also:

> Why should the system be designed this way?

---

## Modern Stable 2026

This project follows a **Modern Stable 2026** development approach.

The goal is to use technologies, patterns, APIs, and tooling appropriate for
modern production development.

Technology choices should generally follow:

```text
Current
    ↓
Stable
    ↓
Officially supported
    ↓
Production appropriate
    ↓
Well maintained
    ↓
Simple enough for the requirement
```

Prefer:

- Current stable or LTS releases
- Official documentation
- Modern language features
- Actively maintained libraries
- Current security practices
- Modern React patterns
- Modern JavaScript and TypeScript
- Supported Node.js APIs
- Current testing practices
- Current deployment practices

Avoid:

- Deprecated APIs
- Abandoned packages
- Obsolete tutorials
- Legacy patterns without a reason
- Unmaintained dependencies
- Blindly copying old solutions
- Outdated architecture without justification

An important rule:

```text
Latest ≠ automatically recommended

Modern + Stable + Supported
            ↓
        Recommended
```

Before adopting a major technology, library, or version, consider:

```text
Is it stable?

Is it officially supported?

Is it actively maintained?

Is it production ready?

Does the project actually need it?

What complexity does it introduce?

What are the maintenance costs?
```

When information is version-sensitive, verify it against current official
documentation.

The objective is not to chase versions.

The objective is:

```text
Modern
+
Stable
+
Maintainable
+
Secure
+
Production Ready
```

---

## Current Development Baseline

Current development environment:

```text
Year        → 2026
WSL         → WSL 2
Linux       → Ubuntu 24.04 LTS
Node.js     → Node.js 24 LTS
npm         → npm 11
Build Tool  → Vite 8
Git         → Linux-native Git
Editor      → VS Code + WSL
```

The environment is intentionally Linux-native.

Development tools should normally resolve from paths such as:

```text
/usr/bin/...
/usr/local/bin/...
/home/...
~/.nvm/...
```

Windows development runtimes should not accidentally override the Linux
toolchain.

Windows VS Code is used as the graphical editor while development processes
run inside WSL.

```text
Windows
│
└── VS Code
      │
      │ WSL integration
      ▼
Ubuntu
│
├── Git
├── NVM
├── Node.js
├── npm
└── Project
```

---

## Project Location

Local WSL project:

```text
/home/nelson/0/fullstack-lab
```

Short form:

```text
~/0/fullstack-lab
```

GitHub repository:

```text
github.com/nelson1869-ai/nelson-learning-react
```

---

## Development Rules

### 1. Understand Before Automating

Automation is useful, but important concepts should be understood before
automation hides them.

Prefer:

```text
Manual understanding
        ↓
Repeated experience
        ↓
Automation
```

---

### 2. Build in Small Steps

Prefer:

```text
One change
    ↓
Run
    ↓
Inspect
    ↓
Verify
    ↓
Continue
```

Avoid writing large amounts of unverified code.

---

### 3. Inspect Before Destructive Actions

Before deleting, resetting, overwriting, or rewriting important data:

```text
Inspect
    ↓
Understand
    ↓
Modify
```

Useful inspection commands include:

```bash
git status
ls -la
cat filename
```

---

### 4. Avoid Dependency Bloat

Before installing a dependency, ask:

```text
Why do we need it?

Can the platform already solve the problem?

Is the package actively maintained?

Is it stable?

Does its benefit justify another dependency?
```

Every dependency has a maintenance cost.

---

### 5. Protect Sensitive Information

Never commit:

```text
passwords
API secrets
private keys
access tokens
database credentials
production environment variables
```

Common ignored files:

```text
node_modules/
dist/
.env
.env.*
```

---

### 6. Use Meaningful Git History

Use clear commit messages.

Preferred commit types:

```text
feat:     new functionality
fix:      bug fix
docs:     documentation
chore:    tooling or configuration
refactor: restructuring without behavior change
test:     tests
style:    formatting-only changes
```

Examples:

```text
docs: add command reference
chore: configure Vite
feat: add React application entry point
fix: correct form validation
```

Do not intentionally use placeholder commit messages.

---

### 7. Official Documentation First

For technical information, prefer:

```text
Official documentation
        ↓
Maintainer documentation
        ↓
Trusted technical references
        ↓
Community solutions when necessary
```

Version-sensitive information should be verified when needed.

---

## Project Commands and Modes

The following shorthand can be used during the learning process.

### `TG`

```text
TG = Taglish
```

Use Taglish to explain difficult technical concepts while keeping technical
terminology in English.

---

### `ARCH`

```text
ARCH = Architect Mode
```

Analyze:

```text
architecture
trade-offs
structure
maintainability
scalability
security
long-term impact
```

---

### `MODERN`

```text
MODERN = Modern Stable 2026
```

Evaluate the solution using current, stable, supported, and production-ready
practices.

---

### Combined Modes

Modes can be combined.

```text
TG ARCH
```

Means:

```text
Explain the architecture and trade-offs using Taglish.
```

```text
ARCH MODERN
```

Means:

```text
Give an architect-level recommendation using modern stable practices.
```

```text
TG ARCH MODERN
```

Means:

```text
Taglish explanation
+
Architectural reasoning
+
Modern stable 2026 practices
```

---

### `git`

When the instruction is:

```text
git
```

provide ready-to-run commands for the current changes:

```bash
git add .
git commit -m "real commit message describing the changes"
git push origin main
```

The commit message must describe the actual changes.

Do not use placeholder messages.

---

### `d`

```text
d = done / proceed
```

When a requested step has been completed, continue to the next appropriate
step.

---

## Learning Roadmap

The current direction is:

```text
Modern JavaScript
        ↓
React
        ↓
TypeScript
        ↓
React + TypeScript
        ↓
Frontend Architecture
        ↓
API Integration
        ↓
Backend Development
        ↓
PostgreSQL
        ↓
Authentication & Authorization
        ↓
Testing
        ↓
Security
        ↓
Docker
        ↓
CI/CD
        ↓
Deployment
        ↓
Observability
        ↓
Production Architecture
```

Topics already understood can move faster.

New or difficult concepts should be explored more deeply.

---

## Documentation

Project documentation:

- [Development Setup](docs/development-setup.md)
- [Command Reference](docs/command-reference.md)
- [Project Rules](docs/project-rules.md)
- [Taglish Learning Guide](TAGLISH.md)
- [Link Reference](link_reference.md)

The documentation has different responsibilities:

```text
README.md
→ project overview and philosophy

TAGLISH.md
→ language-learning methodology

docs/development-setup.md
→ development environment setup

docs/command-reference.md
→ reusable commands and explanations

docs/project-rules.md
→ detailed working rules

link_reference.md
→ official documentation and useful references
```

---

## Core Engineering Principle

The purpose of Fullstack Lab is not simply to produce working code.

The long-term goal is:

```text
Understand the problem.

Understand the tools.

Understand the code.

Understand the architecture.

Build the simplest correct solution.

Verify that it works.

Learn from failures.

Document what matters.

Improve continuously.
```

> **Do not just make it work. Understand why it works.**
