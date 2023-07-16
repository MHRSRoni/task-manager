import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' Component={Signup}/>
        <Route path='/' Component={Login} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
