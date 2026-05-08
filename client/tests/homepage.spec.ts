import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
  test('shows the hero title and CTA', async ({ page }) => {
    await page.goto('/')
    const title = page.locator('.hero-title')
    await expect(title).toBeVisible()
    await expect(title).toContainText('Recipe Finder')
    const cta = page.locator('.hero-cta')
    await expect(cta).toBeVisible()
    await expect(cta).toContainText('Start Cooking')
  })

  test('Start Cooking reveals the search bar', async ({ page }) => {
    await page.goto('/')
    await page.locator('.hero-cta').click()
    await expect(page.locator('input#name')).toBeVisible()
    await expect(page.locator('button#btn')).toBeVisible()
  })
})

test.describe('Search Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('.hero-cta').click()
  })

  test('search input is visible', async ({ page }) => {
    const input = page.locator('input#name')
    await expect(input).toBeVisible()
  })

  test('search button is visible', async ({ page }) => {
    const btn = page.locator('button#btn')
    await expect(btn).toBeVisible()
  })

  test('navbar shows navigation links', async ({ page }) => {
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
    const links = nav.locator('a')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(2)
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
