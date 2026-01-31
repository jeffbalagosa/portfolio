import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section with id="contact"', () => {
    render(<Contact />)
    const section = screen.getByTestId('contact-section')
    expect(section).toHaveAttribute('id', 'contact')
  })

  it('renders heading "Contact"', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders phone link with correct href', () => {
    render(<Contact />)
    const phoneLink = screen.getByRole('link', { name: /1-702-686-6452/i })
    expect(phoneLink).toHaveAttribute('href', 'tel:1-702-686-6452')
  })

  it('renders email link with correct href', () => {
    render(<Contact />)
    const emailLink = screen.getByRole('link', { name: /jeff\.balagosa@gmail\.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:jeff.balagosa@gmail.com')
  })
})
