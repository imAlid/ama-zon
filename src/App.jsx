import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Nav} from './components/Nav/Nav'
import Shop from './components/Shop/Shop'
import Product from './components/Product/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Shop></Shop>
      {/* <Product></Product> */}
    </div>
  )
}

export default App
