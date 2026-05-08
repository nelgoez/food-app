import { test, expect } from '@playwright/test'

test.describe('Homepage (Landing)', () => {
  test('landing page shows the Home button', async ({ page }) => {
    await page.goto('/')
    const btn = page.locator('.boton')
    await expect(btn).toBeVisible()
    await expect(btn).toHaveText('Home')
  })

  test('landing button navigates to /home on click', async ({ page }) => {
    await page.goto('/')
    const btn = page.locator('.boton')
    await btn.click()
    await expect(page).toHaveURL(/\/home/)
  })
})

test.describe('Search Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/home')
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
    const nav = page.locator('.nav-links, nav')
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
    const submit = page.locator('button[type="submit"]')
    await expect(submit).toBeVisible()
  })
})
