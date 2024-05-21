import { Suspense, lazy, ComponentType } from 'react'

const LazyNavbar = lazy(() => import('./Components/Navbar/Navbar').then(module => ({default: module.Navbar as ComponentType })));
const LazyHome = lazy(() => import('./Components/Home/Home').then(module => ({ default: module.Home as ComponentType })));
const LazyAboutMe = lazy(() => import('./Components/AboutMe/AboutMe').then(module => ({ default: module.AboutMe as ComponentType })));
const LazyParticlesComponent = lazy(() => import('./Controllers/Particles').then(module => ({ default: module.ParticlesComponent as ComponentType })));
const LazySkills = lazy(() => import('./Components/Skills/Skills').then(module => ({ default: module.Skills as ComponentType})));
const LazyProjects = lazy(() => import('./Components/Projects/Projects').then(module => ({ default: module.Projects as ComponentType})));
const LazyContact = lazy(() => import('./Components/Contact/Contact').then(module => ({ default: module.Contact as ComponentType})));

function App() {
    return (
      <div>
      
      <div id='home'>
      <Suspense fallback={<h1 style={{color: "white"}}>loading...</h1>}>
     <LazyNavbar/>
        </Suspense> 
      </div>

      <div id='homepage'>
      <Suspense fallback={<h1>loading...</h1>}>
      <LazyHome/>
      </Suspense>    
      </div>

      <div id='aboutme'>
      <Suspense fallback={<h1>loading...</h1>}>
      <LazyAboutMe/>
      </Suspense>   
      </div>

      <div id='skills'>
      <Suspense fallback={<h1>loading...</h1>}>
      <LazySkills/>
      </Suspense>    
      </div>

      <div id='projects'>
      <Suspense fallback={<h1>loading...</h1>}>
      <LazyProjects/>
      </Suspense>  
      </div> 
        
      <div id='contact'>
      <Suspense fallback={<h1>loading...</h1>}>
      <LazyContact/>
      </Suspense>    
      </div>

      <Suspense fallback={<h1>loading...</h1>}>
      <LazyParticlesComponent/>
      </Suspense>
      </div>
      
  )
}

export default App