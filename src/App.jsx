import HelloPage from './pages/HelloPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
function App() {

  return (
   <div>
    <Routes>
      <Route exact path='/' Component={HelloPage}/>
      <Route exact path='/about' Component={AboutPage}/>
      <Route exact path='/projects' Component={ProjectsPage}/>
      <Route exact path='/contact' Component={ContactPage}/>
    </Routes>
   </div>
    
  )
}

export default App
