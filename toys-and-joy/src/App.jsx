import { useState } from 'react'

import Header from './components/header/Header'
import getProducts from './data/getProduct.js'
import './App.css'
import BringData from './components/getProduct/GetProduct'



function App() {
  
console.log('test');
  return (
    <section>
      <Header/>
      
      <BringData/>
     
    </section>
  )
}

export default App
