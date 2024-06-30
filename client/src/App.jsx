import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import LandingPage from './components/Landing/Landing'
import Detail from './components/Detail/Detail'
import NavBar from "./components/NavBar/NavBar"
import About from './components/About/About'
import Create from './components/Create/Create'
import SearchBar from '../src/components/SearchBar/SearchBar'
import Search from './components/Search/Search'


function App() {
  

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/home/*' element={
            <>
             <NavBar />
              <Home />
            </>
          }
          />
        <Route path='/detail/:id' element={
            <>
             <NavBar />
              <Detail />
            </>
          }
          />
          <Route path='/about' element={
            <>
             <NavBar />
              <About />
            </>
          }
          />
           <Route path='/create' element={
            <>
             <NavBar />
              <Create />
            </>
          }
          />
          <Route path='/search' element={
            <>
             <NavBar />

             <SearchBar/>

             <Search/>
            </>
          }
          />
       
        </Routes>

    
      </div>
    </>
  )
}

export default App

