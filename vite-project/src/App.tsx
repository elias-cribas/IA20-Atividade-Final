import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text">
      <div className='monkey-img'>
        <img src=".\src\images\monkey.png" alt="" />
      </div>
    </div>
  )
}

export default App
