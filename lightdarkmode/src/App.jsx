import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BgSwitchProvider } from './context/BackgroundSwitcher'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BgSwitchProvider>
        <Home/>
      </BgSwitchProvider>
    </>
  )
}

export default App
