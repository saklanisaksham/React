import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : 'Saksham',
    age : '22'
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-4'>Tailwind test</h1>
      <Card channel="ChaiaurCode" someObj={myObj}/>
      <Card />
    </>
  )
}

export default App
