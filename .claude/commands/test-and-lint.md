---
name: "Test and Lint"
description: Run tests (non-watch mode) and lints, fix any errors, and verify fixes pass
category: Quality
tags: [testing, linting, vitest, eslint]
---

Run the full test and lint suite, fix any failures, and verify the fixes.

**Steps**

1. **Run tests in non-watch mode**
   ```bash
   npm run test:run
   ```
   Capture all output including failed test names, error messages, and stack traces.

2. **Run lints**
   ```bash
   npm run lint
   ```
   Capture all ESLint errors and warnings with file paths and line numbers.

3. **If all pass, report success and stop**

4. **If failures exist, analyze and fix them**

   **Priority order:**
   1. TypeScript/compilation errors (blocks everything)
   2. Test failures (functionality broken)
   3. Lint errors (code quality)
   4. Lint warnings (optional, fix if simple)

   **For test failures:**
   - Read the failing test to understand expected behavior
   - Read the implementation being tested
   - Fix the code OR the test (whichever is wrong)
   - Prefer fixing code over weakening tests

   **For lint errors:**
   - Apply the fix that satisfies the rule
   - Don't disable rules without good reason

5. **Verify fixes**
   ```bash
   npm run test:run && npm run lint
   ```
   **Repeat steps 3-5** until all tests pass and no lint errors remain.

6. **Report results**
   - What failed initially
   - What was fixed and how
   - Final verification status

**Guardrails**
- Do NOT disable tests to make them pass
- Do NOT weaken assertions to avoid failures
- Do NOT add `eslint-disable` comments without explanation
- Do NOT skip the verification step
- Do NOT leave partial fixes (either fully fix or revert)
