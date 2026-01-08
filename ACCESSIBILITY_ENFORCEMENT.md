# WAI-ARIA Standards Enforcement

This repository enforces Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) standards through automated linting and pre-commit hooks.

## Overview

The accessibility enforcement system consists of three layers:

1. **Local Pre-commit Hooks** - Husky intercepts commits to validate ARIA syntax before code reaches the repository
2. **Lint-staged** - Runs ESLint only on staged files for efficient validation
3. **CI Pipeline Gates** - GitHub Actions workflow ensures commits bypassing local hooks are rejected

## Tools Used

- **[Husky](https://typicode.github.io/husky/)** - Git hooks made easy
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged git files
- **[ESLint](https://eslint.org/)** - Pluggable linting utility for JavaScript and more
- **[@html-eslint/eslint-plugin](https://html-eslint.org/)** - HTML linting rules for ESLint

## Setup

The setup is complete and ready to use. Dependencies have been installed and configured.

### What's Configured

1. **ESLint Rules** (`.eslintrc.json`):
   - HTML accessibility rules via `@html-eslint/eslint-plugin`
   - Enforces:
     - Required button type attributes
     - Proper image alt text
     - No duplicate IDs
     - Required language attribute on html element
     - Required meta charset
     - And more...

2. **Pre-commit Hook** (`.husky/pre-commit`):
   - Automatically runs on every `git commit`
   - Executes `lint-staged` to check only staged files
   - Blocks commits with accessibility violations

3. **GitHub Actions** (`.github/workflows/accessibility-lint.yml`):
   - Runs on push and pull request events
   - Ensures all code passes accessibility checks
   - Prevents merging of non-compliant code

## Usage

### Making Commits

When you commit code, the pre-commit hook will automatically run:

```bash
git add .
git commit -m "Your commit message"
```

If there are accessibility violations, the commit will be blocked with error messages showing what needs to be fixed.

### Running Linting Manually

You can run the linter manually at any time:

```bash
# Check all files
npm run lint

# Auto-fix issues where possible
npm run lint:fix
```

### Bypassing Hooks (Not Recommended)

While you can bypass the pre-commit hook using `git commit --no-verify`, this is **strongly discouraged**. The CI pipeline will still catch violations and fail the build.

## Common Accessibility Rules

### Button Type Attribute

All `<button>` elements must have a `type` attribute:

```html
<!-- ❌ Bad -->
<button>Click me</button>

<!-- ✅ Good -->
<button type="button">Click me</button>
<button type="submit">Submit</button>
```

### ARIA Properties

Elements with ARIA roles must have all required ARIA properties:

```html
<!-- ❌ Bad -->
<button aria-expanded="false">Menu</button>

<!-- ✅ Good -->
<button type="button" aria-expanded="false" aria-controls="menu-id">Menu</button>
<div id="menu-id">Menu content</div>
```

### Image Alt Text

All images must have alt text:

```html
<!-- ❌ Bad -->
<img src="logo.png">

<!-- ✅ Good -->
<img src="logo.png" alt="Company Logo">
```

## Troubleshooting

### Pre-commit Hook Not Running

If the pre-commit hook isn't running:

1. Ensure Husky is installed: `npm install`
2. Check that `.husky/pre-commit` exists and is executable
3. Verify Git hooks path: `git config core.hooksPath`

### Linting Errors

If you encounter linting errors:

1. Read the error message carefully - it will indicate which file and line has the issue
2. Try auto-fixing: `npm run lint:fix`
3. For issues that can't be auto-fixed, manually update the code following the error guidance

### CI Failures

If the GitHub Actions workflow fails:

1. Check the workflow logs in the Actions tab
2. Run `npm run lint` locally to see the same errors
3. Fix all violations before pushing again

## Excluded Files

The following files/directories are excluded from linting (see `.eslintignore`):

- `node_modules/`
- `scripts/`
- Vendor JavaScript files (jQuery, etc.)
- Archive directory

## Additional Resources

- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [ESLint HTML Plugin Documentation](https://html-eslint.org/)
- [Husky Documentation](https://typicode.github.io/husky/)

## Support

For issues or questions about the accessibility enforcement setup, please:

1. Check this documentation
2. Review the ESLint error messages
3. Consult the accessibility resources above
4. Open an issue in the repository
