import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; // or './App.css' depending on where the Tailwind styles are defined


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300'>React router dom</h1>
    </>
  )
}

export default App
