import { useCallback, useEffect, useMemo, useState } from 'react'
import { taglines } from '../data/taglines'

const getRandomTagline = (exclude?: string) => {
  if (taglines.length === 0) {
    return ''
  }

  if (taglines.length === 1) {
    return taglines[0]
  }

  let next = taglines[Math.floor(Math.random() * taglines.length)]
  while (next === exclude) {
    next = taglines[Math.floor(Math.random() * taglines.length)]
  }
  return next
}

export const useTaglineRotator = () => {
  const initial = useMemo(() => getRandomTagline(), [])
  const [tagline, setTagline] = useState(initial)

  const randomize = useCallback(() => {
    setTagline((current) => getRandomTagline(current))
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTagline((current) => getRandomTagline(current))
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return { tagline, randomize }
}
