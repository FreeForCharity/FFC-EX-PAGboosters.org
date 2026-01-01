import { test, expect } from '@playwright/test'

/**
 * Smoke Tests
 * 
 * Basic tests to verify that the site loads correctly
 */

test.describe('Smoke Tests', () => {
  test('Homepage loads successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/PAG|Booster/i)
  })

  test('Homepage has main navigation', async ({ page }) => {
    await page.goto('/')
    // Check for common navigation elements
    const nav = page.locator('nav, header')
    await expect(nav).toBeVisible()
  })

  test('Privacy page loads successfully', async ({ page }) => {
    await page.goto('/privacy.html')
    await expect(page).toHaveTitle(/Privacy/i)
  })

  test('Terms page loads successfully', async ({ page }) => {
    await page.goto('/terms.html')
    await expect(page).toHaveTitle(/Terms/i)
  })

  test('Meet Schedule page loads successfully', async ({ page }) => {
    await page.goto('/meet-schedule.html')
    await expect(page).toHaveTitle(/Meet|Schedule/i)
  })

  test('Homepage has no console errors', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    await page.goto('/')
    
    // Filter out common third-party errors that we can't control
    const relevantErrors = consoleErrors.filter(error => 
      !error.includes('googletagmanager') &&
      !error.includes('google-analytics') &&
      !error.includes('gtag')
    )

    expect(relevantErrors).toEqual([])
  })
})
