import { test, expect } from '@playwright/test'

/**
 * Visual Regression Tests
 * 
 * These tests capture screenshots and compare them against baseline images
 * to detect unintended visual changes
 */

test.describe('Visual Regression', () => {
  test('Homepage visual regression', async ({ page }) => {
    await page.goto('/')
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')
    
    // Take screenshot and compare with baseline
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      animations: 'disabled',
    })
  })

  test('Homepage hero section', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Take screenshot of hero section
    const hero = page.locator('header, .hero, #hero').first()
    if (await hero.count() > 0) {
      await expect(hero).toHaveScreenshot('hero-section.png', {
        animations: 'disabled',
      })
    }
  })

  test('Homepage footer section', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Take screenshot of footer
    const footer = page.locator('footer').first()
    if (await footer.count() > 0) {
      await expect(footer).toHaveScreenshot('footer-section.png', {
        animations: 'disabled',
      })
    }
  })
})
