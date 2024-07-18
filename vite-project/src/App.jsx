import React from 'react'
import Viewproducts from './components/Viewproducts'
import Addproducts from './components/Addproducts'
import './App.css'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom"

function App() {

  return (
    
      <div>
        <Navbar/>
        <Routes>
      <Route path='/' element={<Viewproducts/>}></Route>
      <Route path='/Addproducts' element={<Addproducts/>}></Route>
      </Routes>
      </div>

  )
}

export default App
