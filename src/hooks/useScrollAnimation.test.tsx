import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useScrollAnimation } from './useScrollAnimation'

type ObserverCallback = (entries: IntersectionObserverEntry[]) => void

let observerCallback: ObserverCallback | null = null
let disconnectMock: ReturnType<typeof vi.fn>

beforeEach(() => {
  disconnectMock = vi.fn()
  observerCallback = null

  class MockIntersectionObserver {
    constructor(callback: IntersectionObserverCallback) {
      observerCallback = (entries: IntersectionObserverEntry[]) => {
        callback(entries, {} as IntersectionObserver)
      }
    }
    observe() {}
    unobserve() {}
    disconnect() {
      disconnectMock()
    }
  }

  globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
})

describe('useScrollAnimation', () => {
  it('returns a ref object', () => {
    const { result } = renderHook(() => useScrollAnimation())
    expect(result.current.ref).toBeDefined()
    expect(Object.prototype.hasOwnProperty.call(result.current.ref, 'current')).toBe(true)
  })

  it('adds show class when intersecting', () => {
    render(<AnimatedBox />)
    const target = screen.getByTestId('animated')

    observerCallback?.([
      {
        isIntersecting: true,
        target,
      } as IntersectionObserverEntry,
    ])

    expect(target.classList.contains('show')).toBe(true)
  })

  it('removes show class when not intersecting', () => {
    render(<AnimatedBox />)
    const target = screen.getByTestId('animated')

    observerCallback?.([
      {
        isIntersecting: true,
        target,
      } as IntersectionObserverEntry,
    ])

    observerCallback?.([
      {
        isIntersecting: false,
        target,
      } as IntersectionObserverEntry,
    ])

    expect(target.classList.contains('show')).toBe(false)
  })

  it('applies stagger delay when index is provided', () => {
    render(<AnimatedBox index={2} />)
    const target = screen.getByTestId('animated')
    expect(target.style.transitionDelay).toBe('400ms')
  })

  it('disconnects the observer on unmount', () => {
    const { unmount } = render(<AnimatedBox />)

    unmount()

    expect(disconnectMock).toHaveBeenCalled()
  })
})

type AnimatedBoxProps = {
  index?: number
}

const AnimatedBox = ({ index }: AnimatedBoxProps) => {
  const { ref, style } = useScrollAnimation({ index })
  return <div ref={ref} className="hidden" data-testid="animated" style={style} />
}
