import { useState } from 'react'

import Header from './components/header/Header'
import getProducts from './data/getProduct.js'
import './App.css'
import BringData from './components/getProduct/GetProduct'
import  AddProduct from './components/addProduct/AddProduct'


function App() {
  
console.log('test');
  return (
    <section>
      <Header/>
      
      <BringData/>
      <AddProduct/>
     
    </section>
  )
}

export default App
