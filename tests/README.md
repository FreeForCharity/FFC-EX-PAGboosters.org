# Test Suite

This directory contains automated tests for the PAG Booster website.

## Test Types

### Accessibility Tests (`accessibility.spec.ts`)
- Uses `@axe-core/playwright` to verify WCAG 2.1 Level AA compliance
- Tests all major pages for accessibility violations
- Helps ensure the site is usable by everyone, including people with disabilities

### Smoke Tests (`smoke.spec.ts`)
- Basic tests to verify pages load correctly
- Checks for navigation elements
- Monitors console for JavaScript errors

### Visual Regression Tests (`visual-regression.spec.ts`)
- Captures screenshots of key pages and sections
- Compares against baseline images to detect unintended visual changes
- Helps catch CSS and layout issues

## Running Tests

### Prerequisites
Install dependencies:
```bash
npm install
npx playwright install chromium --with-deps
```

### Run All Tests
```bash
npm test
```

### Run Specific Test Suites
```bash
# Accessibility tests only
npm run test:a11y

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests with browser visible
npm run test:headed
```

### Other Quality Checks
```bash
# Run Lighthouse CI (performance, accessibility, SEO)
npm run lighthouse

# Check for broken links
npm run links
```

## CI/CD Integration

These tests run automatically on:
- Every push to `main` branch
- Every pull request to `main` branch

The tests must pass before code can be deployed to production.

## Updating Baselines

When intentional visual changes are made, update the baseline screenshots:

```bash
# Update all baselines
npm test -- --update-snapshots

# Update specific test baselines
npm test visual-regression.spec.ts -- --update-snapshots
```

## Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Adding New Tests

When adding new pages or features:
1. Add accessibility tests to verify WCAG compliance
2. Add smoke tests to verify basic functionality
3. Consider adding visual regression tests for critical UI components
