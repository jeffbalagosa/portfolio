import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutMe } from './AboutMe'

describe('AboutMe', () => {
  it('renders section with id="about-me"', () => {
    render(<AboutMe />)
    const section = screen.getByTestId('about-me-section')
    expect(section).toHaveAttribute('id', 'about-me')
  })

  it('renders heading "About Me"', () => {
    render(<AboutMe />)
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()
  })

  it('renders two profile images with correct src', () => {
    render(<AboutMe />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', '/img/profile2.jpg')
    expect(images[1]).toHaveAttribute('src', '/img/profile1.jpg')
  })

  it('renders all bio paragraphs', () => {
    render(<AboutMe />)
    expect(
      screen.getByText(
        "Hi, my name is Jeff Balagosa and I'm a software developer in Las Vegas, NV.",
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /While I may not have as much professional experience specifically in software development/i,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /I have a Computer Science Associates Degree and a Technical\. Management Bachelor's Degree/i,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Outside of work, I'm a Brazilian Jiu Jitsu Black Belt/i,
      ),
    ).toBeInTheDocument()
  })
})
