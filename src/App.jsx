import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './app.scss'
import Topbar from './components/topbar/Topbar'
import Begining from './components/begining/Begining'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testmonials'
import Contacts from './components/contacts/Contacts'
import Menu from './components/menu/Menu'


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Begining/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contacts/>

      </div>
    </div>
  )
    
}

export default App
