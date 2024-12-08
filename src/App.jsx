import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {

        

      }

        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>

        

        

    </>
  )
}

export default App
