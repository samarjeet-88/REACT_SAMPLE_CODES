import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"samar",
    age:21
  }

  let newArr=[1,2,3]

  return (
   <>
    <h1 className='bg-green-400 text-black rounded-xl mb-4' >Tailwind test</h1>
    {/*IN JSX THE img TAG SHOULD BE CLOSING <img/> */}
    <Card channel="samarjeet" someObj={myObj} arr={newArr}/>
    <Card/>
      
   </>
  )
}

export default App
