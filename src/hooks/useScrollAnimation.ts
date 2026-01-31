import { useEffect, useMemo, useRef } from 'react'

type UseScrollAnimationOptions = {
  threshold?: number
  staggerDelay?: number
  index?: number
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  staggerDelay = 200,
  index,
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<T | null>(null)

  const style = useMemo(() => {
    if (typeof index === 'number') {
      return { transitionDelay: `${index * staggerDelay}ms` }
    }
    return undefined
  }, [index, staggerDelay])

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold },
    )

    observer.observe(element)

    const animationFrame = window.requestAnimationFrame(() => {
      element.classList.add('show')
    })

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer.disconnect()
    }
  }, [threshold])

  return { ref, style }
}
