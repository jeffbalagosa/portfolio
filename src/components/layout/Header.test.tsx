import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { taglines } from '../../data/taglines'
import { Header } from './Header'

describe('Header', () => {
  it('renders name "Jeff Balagosa" with pulseText class', () => {
    render(<Header />)
    const heading = screen.getByRole('heading', { name: /jeff balagosa/i })
    expect(heading).toHaveClass('pulseText')
  })

  it('renders a tagline from the taglines array', () => {
    render(<Header />)
    const tagline = screen.getByTestId('header-tagline')
    expect(taglines).toContain(tagline.textContent)
  })

  it('clicking header container triggers tagline change', () => {
    render(<Header />)
    const container = screen.getByTestId('header-container')
    const tagline = screen.getByTestId('header-tagline')
    const initial = tagline.textContent

    fireEvent.click(container)

    expect(tagline.textContent).not.toBe(initial)
  })
})
