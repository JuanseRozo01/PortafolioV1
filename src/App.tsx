import { AboutMe } from './Components/AboutMe/AboutMe'
import { Contact } from './Components/Contact/Contact'
import { Home } from './Components/Home/Home'
import { Navbar } from './Components/Navbar/Navbar'
import { ParticlesComponent } from './Controllers/Particles'
import { Skills } from './Components/Skills/Skills'
import { Projects } from './Components/Projects/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer/Footer'

function App() {


  return (
    <BrowserRouter>
      <div>
      
      <div id='home'>
      <Routes>
        <Route path='/' element={<Navbar/>}/>  
      </Routes>
      </div>

      <div id='homepage'>
      <Routes>
        <Route path='/' element={<Home/>}/>    
      </Routes>
      </div>

      <div id='aboutme'>
      <Routes>
        <Route path='/' element={<AboutMe/>}/>   
      </Routes>
      </div>

      <div id='skills'>
      <Routes>
        <Route path='/' element={<Skills/> }/>    
      </Routes>
      </div>

      <div id='projects'>
      <Routes>
        <Route path='/' element={<Projects/>}/>    
      </Routes>
      </div> 
        
      <div id='contact'>
      <Routes>
        <Route path='/' element={<Contact/>}/>    
      </Routes>
      </div>
      <ParticlesComponent/>

      <Footer/>
      </div>
      
    </BrowserRouter>
  )
}

export default App
