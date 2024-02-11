import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View360 from './View360/View360'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="realtive w-screen h-screen">
      <View360/>
    </div>
  )
}

export default App
