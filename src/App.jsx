import { useState } from 'react'
import './App.css'
import { StateProvider } from './AppState'
import Layout from './Layout'
import MouseListener from './listeners/MouseListener'
import KeyboardListener from './listeners/KeyboardListener'
function App() {
  const [count, setCount] = useState(0)

  return (
    <StateProvider>
      <Layout/>
      <MouseListener/>
      <KeyboardListener/>
    </StateProvider>
  )
}

export default App
