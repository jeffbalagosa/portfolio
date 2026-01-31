import { useTaglineRotator } from '../../hooks/useTaglineRotator'

export const Header = () => {
  const { tagline, randomize } = useTaglineRotator()

  return (
    <header>
      <div id="header-container" className="header-container" onClick={randomize} data-testid="header-container">
        <h1 className="pulseText">Jeff Balagosa</h1>
        <p id="header-tagline" data-testid="header-tagline">
          {tagline}
        </p>
      </div>
    </header>
  )
}
