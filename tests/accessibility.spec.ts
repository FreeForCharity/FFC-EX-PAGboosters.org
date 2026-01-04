import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/**
 * Accessibility Tests using axe-core
 * 
 * These tests verify WCAG 2.1 Level AA compliance using the axe-core engine
 * https://www.deque.com/axe/core-documentation/api-documentation/
 */

test.describe('Accessibility Checks (WCAG 2.1 Level AA)', () => {
  test('Homepage should pass accessibility tests', async ({ page }) => {
    await page.goto('/')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Privacy page should pass accessibility tests', async ({ page }) => {
    await page.goto('/privacy.html')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Terms page should pass accessibility tests', async ({ page }) => {
    await page.goto('/terms.html')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Meet Schedule page should pass accessibility tests', async ({ page }) => {
    await page.goto('/meet-schedule.html')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
