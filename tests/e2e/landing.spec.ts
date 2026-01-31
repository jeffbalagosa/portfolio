import { expect, test } from '@playwright/test'

test('landing page renders primary sections', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('header-container')).toBeVisible()
  await expect(page.getByTestId('portfolio-section')).toBeVisible()
  await expect(page.getByTestId('about-me-section')).toBeVisible()
  await expect(page.getByTestId('contact-section')).toBeVisible()
})

test('project cards render count after scroll', async ({ page }) => {
  await page.goto('/')

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(1500)

  const totalCount = await page.getByTestId('project-card').count()
  const shownCount = await page.locator('[data-testid="project-card"].show').count()

  console.log(`Project cards total: ${totalCount}, shown: ${shownCount}`)
})
