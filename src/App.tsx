import { Suspense, lazy, ComponentType } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const LazyNavbar = lazy(() => import('./Components/Navbar/Navbar').then(module => ({default: module.Navbar as ComponentType })));
const LazyHome = lazy(() => import('./Components/Home/Home').then(module => ({ default: module.Home as ComponentType })));
const LazyAboutMe = lazy(() => import('./Components/AboutMe/AboutMe').then(module => ({ default: module.AboutMe as ComponentType })));
const LazyParticlesComponent = lazy(() => import('./Controllers/Particles').then(module => ({ default: module.ParticlesComponent as ComponentType })));
const LazySkills = lazy(() => import('./Components/Skills/Skills').then(module => ({ default: module.Skills as ComponentType})));
const LazyProjects = lazy(() => import('./Components/Projects/Projects').then(module => ({ default: module.Projects as ComponentType})));
const LazyContact = lazy(() => import('./Components/Contact/Contact').then(module => ({ default: module.Contact as ComponentType})));
const LazyFooter = lazy(() => import('./Components/Footer/Footer').then(module => ({default: module.Footer as ComponentType})));

function App() {
    return (
      <BrowserRouter>
      <div>
      
      <div id='home'>
      <Suspense fallback={<h1 style={{color: "white"}}>loading...</h1>}>
      <Routes>
        <Route path='/' element={<LazyNavbar/>}/> 
      </Routes>
        </Suspense> 
      </div>

      <div id='homepage'>
      <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        <Route path='/' element={<LazyHome/>}/>
      </Routes>
        </Suspense>    
      </div>

      <div id='aboutme'>
      <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        <Route path='/' element={<LazyAboutMe/>}/>
      </Routes>
      </Suspense>   
      </div>

      <div id='skills'>
      <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        <Route path='/' element={<LazySkills/> }/>
      </Routes>
      </Suspense>    
      </div>

      <div id='projects'>
      <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        <Route path='/' element={<LazyProjects/>}/>  
      </Routes>
      </Suspense>  
      </div> 
        
      <div id='contact'>
      <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        <Route path='/' element={<LazyContact/>}/>
      </Routes>
      </Suspense>    
      </div>

      <Suspense fallback={<h1>loading...</h1>}>
      <LazyParticlesComponent/>
      <LazyFooter/>
      </Suspense>
      </div>
      
    </BrowserRouter>
      
  )
}

export default App