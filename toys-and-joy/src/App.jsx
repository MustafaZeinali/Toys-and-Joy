import { useState } from 'react'

import Header from './components/header/Header'
import getProducts from './data/getProduct.js'
import './App.css'

const myComponent = () =>(

console.log(getProducts(productid))
)

function App() {
  
console.log('test');
  return (
    <section>
      <Header/>
      
      <div> { myComponent }</div>
      
     
    </section>
  )
}

export default App
