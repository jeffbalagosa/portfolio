import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navigation } from './Navigation'

describe('Navigation', () => {
  it('renders logo image with correct src', () => {
    render(<Navigation />)
    const logo = screen.getByRole('img', { name: /logo/i })
    expect(logo).toHaveAttribute('src', '/img/ninja-favlogo.png')
  })

  it('renders all navigation links', () => {
    render(<Navigation />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about me/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
  })

  it('sets correct href anchors for internal links', () => {
    render(<Navigation />)
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '#portfolio')
    expect(screen.getByRole('link', { name: /about me/i })).toHaveAttribute('href', '#about-me')
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact')
  })

  it('opens Resume link in a new tab with correct external URL', () => {
    render(<Navigation />)
    const resumeLink = screen.getByRole('link', { name: /resume/i })
    expect(resumeLink).toHaveAttribute('href', 'https://rxresu.me/jeff.balagosa/devresume')
    expect(resumeLink).toHaveAttribute('target', '_blank')
    expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('opens Blog link in a new tab with Substack URL', () => {
    render(<Navigation />)
    const blogLink = screen.getByRole('link', { name: /blog/i })
    expect(blogLink).toHaveAttribute('href', 'https://jeffbalagosa.substack.com/')
    expect(blogLink).toHaveAttribute('target', '_blank')
    expect(blogLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
