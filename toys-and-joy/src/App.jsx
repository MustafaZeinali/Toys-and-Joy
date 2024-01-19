import { useState } from 'react'

import Header from './components/header/Header'
import './App.css'
import BringData from './components/getProduct/GetProduct'
import AddProduct from './components/addProduct/addproduct'
import StartPage from './components/start-page/StartPage'


function App() {
  
  return (
    <section>
      <Header/>
      <AddProduct/>
      <BringData/>
     
      
     
    </section>
  )
}

export default App
// <AddProduct/>