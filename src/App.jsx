
import './App.css'
import './index.css'

import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Login from "./components/login"
import Profile from "./components/profile"
import { Provider } from 'react-redux'
import appStore from './utils/ReduxStore'
import Feed from "./components/feed"
import Connections from './components/Connections'
import Requests from './components/Requests'


function App() {


  return (
    <>

      <Provider store={appStore}>  
        <BrowserRouter basename='/'>

          <Routes>

            <Route path='/' element={<Body></Body>}>
              <Route path='/' element={<Feed />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/connections' element={<Connections/>}></Route>
              <Route path='/requests' element={<Requests/>}></Route>
              <Route path='/profile' element={<Profile />}></Route>

            </Route>

          </Routes>

        </BrowserRouter>

      </Provider>



    </>
  )
}

export default App
