import HelloPage from './pages/HelloPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import PersonalInfo from './components/PersonalInfo'
function App() {

  return (
   <div>
    <Routes>
      <Route exact path='/' Component={HelloPage}/>
      <Route  path='/about' Component={AboutPage}>
        <Route path='/about/profileinfo' Component={PersonalInfo}/>
      </Route>
      <Route path='/projects' Component={ProjectsPage}/>
      <Route path='/contact' Component={ContactPage}/>
    </Routes>
   </div>
    
  )
}

export default App
