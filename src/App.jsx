import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/home' 
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import SingleProduct from './pages/Single-product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/shop' element={<Shop/>} />
          {/* <Route path='/single-product.html' element={<SingleProduct/>} /> */}
        </Routes>

        

        

    </>
  )
}

export default App
