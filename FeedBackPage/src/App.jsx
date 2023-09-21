import { useState } from 'react'
import Head from "./components/Head/Head"
import Body from "./components/Body/Body"
import Tail from "./components/Tail/Tail"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="structure">
      <div className="navbar">
        <Head />
      </div>
      <div className="middle">
        <Body />
      </div>
      <div className="footer">
        <Tail />
      </div>
    </div>
  )
}

export default App
