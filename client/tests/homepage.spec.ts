import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
  test('shows the hero title and CTA', async ({ page }) => {
    await page.goto('/')
    const title = page.locator('[data-testid="hero-title"]')
    await expect(title).toBeVisible()
    await expect(title).toContainText('Recipe Finder')
    const cta = page.locator('[data-testid="hero-cta"]')
    await expect(cta).toBeVisible()
    await expect(cta).toContainText('Start Cooking')
  })

  test('Start Cooking reveals the search bar', async ({ page }) => {
    await page.goto('/')
    await page.locator('[data-testid="hero-cta"]').click()
    await expect(page.locator('[data-testid="search-input"]')).toBeVisible()
    await expect(page.locator('[data-testid="search-button"]')).toBeVisible()
  })
})

test.describe('Search Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('[data-testid="hero-cta"]').click()
  })

  test('search input is visible', async ({ page }) => {
    const input = page.locator('[data-testid="search-input"]')
    await expect(input).toBeVisible()
  })

  test('search button is visible', async ({ page }) => {
    const btn = page.locator('[data-testid="search-button"]')
    await expect(btn).toBeVisible()
  })

  test('navbar shows navigation links', async ({ page }) => {
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
    const links = nav.locator('a')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(2)
  })

  test('search results area appears after typing and submitting', async ({ page }) => {
    const input = page.locator('[data-testid="search-input"]')
    await input.fill('chicken')
    await page.locator('[data-testid="search-button"]').click()
    await expect(page.locator('[data-testid="search-results"]')).toBeVisible({ timeout: 10000 })
  })
})

test.describe('Other Routes', () => {
  test('diets page loads', async ({ page }) => {
    await page.goto('/types')
    await expect(page.locator('body')).toBeVisible()
  })

  test('add recipe page has form', async ({ page }) => {
    await page.goto('/addRecipe')
    await expect(page.locator('form')).toBeVisible()
  })

  test('add recipe form has submit button', async ({ page }) => {
    await page.goto('/addRecipe')
    const submit = page.locator('input[type="submit"]')
    await expect(submit).toBeVisible()
  })
})
