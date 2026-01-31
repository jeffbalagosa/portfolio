import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Navigation component', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders Header component inside a header element', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders Portfolio section', () => {
    render(<App />)
    expect(screen.getByTestId('portfolio-section')).toBeInTheDocument()
  })

  it('renders AboutMe section', () => {
    render(<App />)
    expect(screen.getByTestId('about-me-section')).toBeInTheDocument()
  })

  it('renders Contact section', () => {
    render(<App />)
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
  })

  it('applies bg-overlay class to root container', () => {
    render(<App />)
    const container = screen.getByTestId('app-root')
    expect(container).toHaveClass('bg-overlay')
  })
})
