# Code Quality Improvements

This document summarizes the code quality and formatting protection features that have been added to this repository based on the FFC Template repository.

## Overview

The following improvements have been integrated from commit [bcc8b29](https://github.com/FreeForCharity/FFC-EX-PAGboosters.org/commit/bcc8b29549bcf0f0923ac7f54b114c6abe1f4d7e):

## 1. ESLint Configuration

### Files Added:
- `.eslintrc.json` - ESLint configuration for JavaScript and HTML linting
- `.eslintignore` - Specifies files and directories to exclude from linting

### Features:
- **HTML Linting**: Using `@html-eslint` plugin to enforce HTML best practices
- **Accessibility Rules**: Enforces ARIA compliance with rules like:
  - `require-lang` - Ensures HTML lang attribute is present
  - `require-title` - Ensures page has a title
  - `no-duplicate-id` - Prevents duplicate IDs
  - `require-button-type` - Ensures buttons have explicit type
  - `require-img-alt` - Ensures images have alt text
  - `no-positive-tabindex` - Prevents positive tabindex values
  - `require-frame-title` - Ensures frames have titles
  - `require-meta-charset` - Ensures charset is specified
- **JavaScript Support**: ES2021 environment with jQuery support

## 2. GitHub Actions Workflow

### File Added:
- `.github/workflows/accessibility-lint.yml`

### Features:
- **Automated CI Checks**: Runs on push and pull requests
- **Branch Coverage**: Monitors main, develop, and copilot/** branches
- **Node.js 20**: Uses latest LTS version
- **NPM Caching**: Optimizes build times with dependency caching
- **Accessibility Guard**: Automatically runs ARIA compliance checks

## 3. Git Hooks (Husky)

### File Added:
- `.husky/pre-commit`

### Features:
- **Pre-commit Linting**: Automatically lints staged files before commit
- **Lint-staged Integration**: Only lints files that are being committed
- **Auto-fix**: Attempts to automatically fix linting issues

## 4. Package Configuration

### File Added:
- `package.json`

### Dependencies:
- `eslint` (^8.57.0) - JavaScript and HTML linting
- `@html-eslint/eslint-plugin` (^0.24.1) - HTML linting rules
- `@html-eslint/parser` (^0.24.1) - HTML parser for ESLint
- `husky` (^9.0.11) - Git hooks management
- `lint-staged` (^15.2.2) - Run linters on staged files

### Scripts:
- `npm run lint` - Run ESLint on all files
- `npm run lint:fix` - Run ESLint and auto-fix issues
- `npm run prepare` - Initialize Husky (runs automatically on install)

## 5. Git Ignore Configuration

### Updated:
- `.gitignore` - Ensures node_modules and build artifacts are not committed

## Usage

### Running Linting Locally

```bash
# Install dependencies
npm install

# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

### Pre-commit Hook

The pre-commit hook will automatically run when you attempt to commit changes. It will:
1. Lint only the files you're committing
2. Attempt to auto-fix issues
3. Block the commit if there are unfixable errors

### CI/CD Integration

The GitHub Actions workflow runs automatically on:
- Push to main, develop, or copilot/** branches
- Pull requests targeting main or develop branches

## Benefits

1. **Consistency**: Ensures all code follows the same style and quality standards
2. **Accessibility**: Automatically enforces ARIA compliance and accessibility best practices
3. **Early Detection**: Catches issues before they reach the main branch
4. **Automatic Fixes**: Many common issues are fixed automatically
5. **Developer Experience**: Fast feedback loop with pre-commit hooks
6. **CI Protection**: Prevents merging code that doesn't meet quality standards

## Comparison with Template

This repository now includes all the code quality and formatting protection features from the [FFC Single Page Template](https://github.com/FreeForCharity/FFC-IN-Single_Page_Template_HTML) repository, ensuring consistency across FreeForCharity projects.
