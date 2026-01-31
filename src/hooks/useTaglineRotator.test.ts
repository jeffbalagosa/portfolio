import { renderHook, act } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { taglines } from '../data/taglines'
import { useTaglineRotator } from './useTaglineRotator'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('useTaglineRotator', () => {
  it('returns a tagline from the taglines array', () => {
    const { result } = renderHook(() => useTaglineRotator())
    expect(taglines).toContain(result.current.tagline)
  })

  it('randomize() changes the current tagline', () => {
    const { result } = renderHook(() => useTaglineRotator())
    const initial = result.current.tagline

    act(() => {
      result.current.randomize()
    })

    expect(result.current.tagline).not.toBe(initial)
  })

  it('auto-rotates after 5 seconds', () => {
    const { result } = renderHook(() => useTaglineRotator())
    const initial = result.current.tagline

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(result.current.tagline).not.toBe(initial)
  })

  it('clears the interval on unmount', () => {
    const clearSpy = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = renderHook(() => useTaglineRotator())

    unmount()

    expect(clearSpy).toHaveBeenCalled()
  })
})
