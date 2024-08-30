import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BtShoe } from './BtShoe/BtShoe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BtShoe/>
    </>
  )
}

export default App
