import './App.css'

import Profile from "./components/Profile"
function App() {


  return (
   <div className='bg-Light-Grayish-Cyan'>
    <div className='relative w-full h-36 z-0 bg-hero-pattern bg-Breaker-Bay'></div>
    <div className='relative md:z-10 md:-top-8'>
    <Profile  />
    </div>

   </div>
  )
}

export default App
