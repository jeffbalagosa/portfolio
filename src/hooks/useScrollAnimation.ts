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
            window.requestAnimationFrame(() => {
              entry.target.classList.add('show')
            })
          } else {
            entry.target.classList.remove('show')
          }
        })
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { ref, style }
}
