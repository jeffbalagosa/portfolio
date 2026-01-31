export const Navigation = () => {
  return (
    <nav id="nav" className="top">
      <ul className="flex-container main-nav">
        <li className="logo-li">
          <img id="logo" src="/img/ninja-favlogo.png" alt="logo" width={75} />
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="https://rxresu.me/jeff.balagosa/devresume" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a className="button" href="blog/index.html" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}
