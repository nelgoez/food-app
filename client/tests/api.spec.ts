import { test, expect } from '@playwright/test'

const API_URL = process.env.API_URL || 'https://food-app-back-zeta.vercel.app'

test.describe('Backend API Health', () => {
  test('GET / returns API status', async ({ request }) => {
    const res = await request.get(API_URL)
    expect(res.ok()).toBeTruthy()
  })

  test('GET /types returns diet types', async ({ request }) => {
    const res = await request.get(`${API_URL}/types`)
    expect(res.ok()).toBeTruthy()
    const body = await res.json()
    expect(Array.isArray(body)).toBeTruthy()
    expect(body.length).toBeGreaterThanOrEqual(9)
    expect(body[0]).toHaveProperty('diet')
  })

  test('GET /recipes?name= returns recipes', async ({ request }) => {
    const res = await request.get(`${API_URL}/recipes?name=chicken`)
    expect(res.ok()).toBeTruthy()
    const body = await res.json()
    expect(Array.isArray(body)).toBeTruthy()
    expect(body.length).toBeGreaterThan(0)
    expect(body[0]).toHaveProperty('id')
    expect(body[0]).toHaveProperty('title')
    expect(body[0]).toHaveProperty('image')
  })

  test('GET /recipes/:id returns recipe detail', async ({ request }) => {
    const res = await request.get(`${API_URL}/recipes/715415`)
    expect(res.ok()).toBeTruthy()
    const body = await res.json()
    expect(body).toHaveProperty('id')
    expect(body).toHaveProperty('title')
    expect(body).toHaveProperty('summary')
    expect(body).toHaveProperty('instructions')
  })

  test('GET /recipes with empty query returns 200', async ({ request }) => {
    const res = await request.get(`${API_URL}/recipes?name=`)
    expect(res.ok()).toBeTruthy()
  })
})
