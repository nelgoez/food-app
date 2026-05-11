import { test, expect } from '@playwright/test'

test.describe('Responsive Layout', () => {
  test('navbar is visible on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
  })

  test('search input is usable on mobile after reveal', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.locator('[data-testid="hero-cta"]').click()
    const input = page.locator('[data-testid="search-input"]')
    await expect(input).toBeVisible()
    await input.fill('chicken')
    await expect(input).toHaveValue('chicken')
  })

  test('hero title is centered on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    const title = page.locator('[data-testid="hero-title"]')
    await expect(title).toBeVisible()
    const box = await title.boundingBox()
    expect(box).not.toBeNull()
    const viewport = page.viewportSize()
    const centerX = box!.x + box!.width / 2
    expect(Math.abs(centerX - viewport!.width / 2)).toBeLessThan(100)
  })

  test('add recipe form fits mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/addRecipe')
    const form = page.locator('form')
    await expect(form).toBeVisible()
    const box = await form.boundingBox()
    expect(box).not.toBeNull()
    expect(box!.width).toBeLessThan(450)
  })
})
