import { expect, test } from '@playwright/test'

test('landing page renders primary sections', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('app-root')).toBeVisible()
  await expect(page.getByTestId('header-container')).toBeVisible()
  await expect(page.getByTestId('portfolio-section')).toBeVisible()
  await expect(page.getByTestId('about-me-section')).toBeVisible()
  await expect(page.getByTestId('contact-section')).toBeVisible()
})

test('navigation links point to expected destinations', async ({ page }) => {
  await page.goto('/')

  const nav = page.locator('nav#nav')
  await expect(nav).toBeVisible()

  await expect(nav.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#')
  await expect(nav.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#portfolio')
  await expect(nav.getByRole('link', { name: 'About Me' })).toHaveAttribute('href', '#about-me')
  await expect(nav.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')

  const resumeLink = nav.getByRole('link', { name: 'Resume' })
  await expect(resumeLink).toHaveAttribute('href', 'https://rxresu.me/jeff.balagosa/devresume')
  await expect(resumeLink).toHaveAttribute('target', '_blank')
  await expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer')

  const blogLink = nav.getByRole('link', { name: 'Blog' })
  await expect(blogLink).toHaveAttribute('href', 'https://jeffbalagosa.substack.com/')
  await expect(blogLink).toHaveAttribute('target', '_blank')
  await expect(blogLink).toHaveAttribute('rel', 'noopener noreferrer')
})

test('header tagline updates on click', async ({ page }) => {
  await page.goto('/')

  const tagline = page.getByTestId('header-tagline')
  const header = page.getByTestId('header-container')
  const initialTagline = await tagline.textContent()

  await header.click()

  await expect.poll(async () => tagline.textContent()).not.toBe(initialTagline)
})

test('contact links use tel and mailto protocols', async ({ page }) => {
  await page.goto('/')

  const contact = page.getByTestId('contact-section')
  await expect(contact.getByRole('link', { name: /1-702-686-6452/ })).toHaveAttribute('href', 'tel:1-702-686-6452')
  await expect(contact.getByRole('link', { name: 'jeff.balagosa@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:jeff.balagosa@gmail.com',
  )
})

test('project cards reveal after scroll and include action buttons', async ({ page }) => {
  await page.goto('/')

  const cards = page.getByTestId('project-card')
  const cardCount = await cards.count()
  expect(cardCount).toBeGreaterThan(0)

  const firstCard = cards.first()
  await firstCard.scrollIntoViewIfNeeded()
  await expect(firstCard).toHaveClass(/show/)

  await expect(page.getByRole('link', { name: 'Github Repo' })).toHaveCount(cardCount)
  await expect(page.getByRole('link', { name: 'Live Site' }).first()).toBeVisible()
})

test.describe('mobile viewport', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('renders header and sections on mobile', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByTestId('app-root')).toBeVisible()
    await expect(page.getByTestId('header-container')).toBeVisible()
    await expect(page.getByTestId('header-tagline')).toBeVisible()

    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).toContainText('Jeff Balagosa')
  })

  test('header text does not overflow viewport on mobile', async ({ page }) => {
    await page.goto('/')

    const header = page.getByTestId('header-container')
    const headerBox = await header.boundingBox()

    expect(headerBox).not.toBeNull()
    if (headerBox) {
      expect(headerBox.x).toBeGreaterThanOrEqual(0)
      expect(headerBox.x + headerBox.width).toBeLessThanOrEqual(390)
    }
  })

  test('tagline is positioned below header text on mobile', async ({ page }) => {
    await page.goto('/')

    const h1 = page.locator('h1')
    const tagline = page.getByTestId('header-tagline')

    const h1Box = await h1.boundingBox()
    const taglineBox = await tagline.boundingBox()

    expect(h1Box).not.toBeNull()
    expect(taglineBox).not.toBeNull()
    if (h1Box && taglineBox) {
      expect(taglineBox.y).toBeGreaterThan(h1Box.y)
    }
  })

  test('bg-overlay covers full viewport on mobile', async ({ page }) => {
    await page.goto('/')

    const overlay = page.locator('.bg-overlay')
    const overlayBox = await overlay.boundingBox()

    expect(overlayBox).not.toBeNull()
    if (overlayBox) {
      expect(overlayBox.width).toBeGreaterThanOrEqual(390)
    }
  })

  test('project cards are visible and properly sized on mobile', async ({ page }) => {
    await page.goto('/')

    const firstCard = page.getByTestId('project-card').first()
    await firstCard.scrollIntoViewIfNeeded()

    await expect(firstCard).toBeVisible()
    const cardBox = await firstCard.boundingBox()

    expect(cardBox).not.toBeNull()
    if (cardBox) {
      expect(cardBox.width).toBeLessThanOrEqual(390)
      expect(cardBox.x).toBeGreaterThanOrEqual(0)
    }
  })
})
