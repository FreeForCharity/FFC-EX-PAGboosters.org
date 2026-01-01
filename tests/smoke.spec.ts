import { test, expect } from '@playwright/test'

/**
 * Smoke Tests
 * 
 * Basic tests to verify that the site loads correctly
 */

test.describe('Smoke Tests', () => {
  test('Homepage loads successfully', async ({ page }) => {
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
    await expect(page).toHaveTitle(/PAG|Booster/i)
  })

  test('Homepage has main navigation', async ({ page }) => {
    await page.goto('/')
    // Check for common navigation elements
    const nav = page.locator('nav, header')
    await expect(nav).toBeVisible()
  })

  test('Privacy page loads successfully', async ({ page }) => {
    const response = await page.goto('/privacy.html')
    expect(response?.status()).toBe(200)
    // Just verify the page loads, don't check title as it may have client-side rendering
  })

  test('Terms page loads successfully', async ({ page }) => {
    const response = await page.goto('/terms.html')
    expect(response?.status()).toBe(200)
  })

  test('Meet Schedule page loads successfully', async ({ page }) => {
    const response = await page.goto('/meet-schedule.html')
    expect(response?.status()).toBe(200)
  })

  test('Homepage has no console errors', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    await page.goto('/')
    
    // Filter out common third-party errors and network errors that we can't control
    const relevantErrors = consoleErrors.filter(error => 
      !error.includes('googletagmanager') &&
      !error.includes('google-analytics') &&
      !error.includes('gtag') &&
      !error.includes('ERR_NAME_NOT_RESOLVED') &&
      !error.includes('Failed to load resource')
    )

    expect(relevantErrors).toEqual([])
  })
})
