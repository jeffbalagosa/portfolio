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
  await expect(blogLink).toHaveAttribute('href', 'blog/index.html')
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
