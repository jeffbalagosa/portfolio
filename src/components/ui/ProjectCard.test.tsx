import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectCard } from './ProjectCard'
import type { Project } from '../../types/project'

const baseProject: Project = {
  id: 'sample-project',
  title: 'Sample Project',
  image: '/img/sample.png',
  description: ['First paragraph', 'Second paragraph'],
  githubUrl: 'https://github.com/example/sample',
  liveUrl: 'https://example.com',
}

describe('ProjectCard', () => {
  it('renders project title as heading', () => {
    render(<ProjectCard project={baseProject} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Sample Project')
  })

  it('renders project image with correct src and alt', () => {
    render(<ProjectCard project={baseProject} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/img/sample.png')
    expect(image).toHaveAttribute('alt', 'Sample Project')
  })

  it('renders project description paragraphs', () => {
    render(<ProjectCard project={baseProject} />)
    expect(screen.getByText('First paragraph')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph')).toBeInTheDocument()
  })

  it('renders GitHub repo button with correct href', () => {
    render(<ProjectCard project={baseProject} />)
    const githubLink = screen.getByRole('link', { name: /github repo/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/example/sample')
  })

  it('renders Live Site button only when liveUrl is provided', () => {
    const { rerender } = render(<ProjectCard project={baseProject} />)
    expect(screen.getByRole('link', { name: /live site/i })).toBeInTheDocument()

    rerender(
      <ProjectCard
        project={{
          ...baseProject,
          liveUrl: undefined,
        }}
      />,
    )

    expect(screen.queryByRole('link', { name: /live site/i })).not.toBeInTheDocument()
  })

  it('sets external links to open in a new tab with noopener noreferrer', () => {
    render(<ProjectCard project={baseProject} />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('applies hidden class and accepts style prop for animation', () => {
    render(<ProjectCard project={baseProject} style={{ transitionDelay: '200ms' }} />)
    const article = screen.getByTestId('project-card')
    expect(article.classList.contains('hidden')).toBe(true)
    expect(article).toHaveStyle({ transitionDelay: '200ms' })
  })
})
