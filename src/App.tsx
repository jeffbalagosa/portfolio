import './App.css'
import { Navigation } from './components/layout/Navigation'
import { Header } from './components/layout/Header'
import { Portfolio } from './components/sections/Portfolio'
import { AboutMe } from './components/sections/AboutMe'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="bg-overlay" data-testid="app-root">
      <Navigation />
      <Header />
      <Portfolio />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App
