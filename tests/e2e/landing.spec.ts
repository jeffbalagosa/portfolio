import { expect, test } from '@playwright/test'

test('landing page renders primary sections', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('header-container')).toBeVisible()
  await expect(page.getByTestId('portfolio-section')).toBeVisible()
  await expect(page.getByTestId('about-me-section')).toBeVisible()
  await expect(page.getByTestId('contact-section')).toBeVisible()
})
