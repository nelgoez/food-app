import { test, expect } from '@playwright/test'

test.describe('Visual & Accessibility', () => {
  test('hero CTA has visible text', async ({ page }) => {
    await page.goto('/')
    const btn = page.locator('.hero-cta')
    await expect(btn).toBeVisible()
    const text = await btn.textContent()
    expect(text).toBeTruthy()
  })

  test('all images have alt or role', async ({ page }) => {
    await page.goto('/')
    const images = page.locator('img')
    const count = await images.count()
    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      if (alt === null) {
        const role = await img.getAttribute('role')
        expect(role).toBe('presentation')
      }
    }
  })

  test('page renders without critical console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    const critical = errors.filter((e) => !e.includes('favicon') && !e.includes('api'))
    expect(critical.length).toBe(0)
  })
})
