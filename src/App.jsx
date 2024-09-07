import { useState } from 'react'
import './App.css'
import { StateProvider } from './AppState'
import Layout from './Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <StateProvider>
      <Layout/>
    </StateProvider>
  )
}

export default App
