
import './App.css'
import './index.css' 

import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './Body'
import Login from "./login"
import Profile from "./profile"


function App() {
  

  return (
    <>

      <BrowserRouter basename='/'>

        <Routes>

          <Route path='/' element={<Body></Body>}>

             <Route path='/login' element={<Login/>}></Route>
             <Route path='/profile' element={<Profile/>}></Route>

          </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
