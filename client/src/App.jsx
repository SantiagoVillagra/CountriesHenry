import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import LandingPage from './components/Landing/Landing'


function App() {
  

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/home/*' element={
            <>
             <Navbar />
              <Home />
            </>
          }
          />
        <Route path='/home/:id' element={
            <>
             <Navbar />
              <Home />
            </>
          }
          />

        </Routes>

    
      </div>
    </>
  )
}

export default App
