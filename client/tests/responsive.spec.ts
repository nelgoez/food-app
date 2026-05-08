import { test, expect } from '@playwright/test'

test.describe('Responsive Layout', () => {
  test('navbar is visible on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/home')
    const nav = page.locator('.nav-links, nav')
    await expect(nav).toBeVisible()
  })

  test('search input is usable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/home')
    const input = page.locator('input#name')
    await expect(input).toBeVisible()
    await input.fill('chicken')
    await expect(input).toHaveValue('chicken')
  })

  test('landing button is centered on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    const btn = page.locator('.boton')
    await expect(btn).toBeVisible()
    const box = await btn.boundingBox()
    expect(box).not.toBeNull()
    const viewport = page.viewportSize()
    const centerX = box!.x + box!.width / 2
    expect(Math.abs(centerX - viewport!.width / 2)).toBeLessThan(50)
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
