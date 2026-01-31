import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { projects } from '../../data/projects'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section with id="portfolio"', () => {
    render(<Portfolio />)
    const section = screen.getByTestId('portfolio-section')
    expect(section).toHaveAttribute('id', 'portfolio')
  })

  it('renders heading "Projects"', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
  })

  it('renders one ProjectCard per project in data', () => {
    render(<Portfolio />)
    const cards = screen.getAllByTestId('project-card')
    expect(cards).toHaveLength(projects.length)
  })
})
