import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head/>
    </>
  )
}

function Head() {
  return (
    <div className='header'>
      <div>
        <button>HOME</button>
        <button>PRODUCT</button>
      </div>
      <button>CHECKOUT</button>
    </div>
  )
}

export default App
