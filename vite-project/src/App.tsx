import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="nav-container">
        <div className="logo">
          <img src=".\src\images\monkey.png" alt="" />
        </div>
        <ul className="nav-area">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Monkey</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
     <div className="welcome-text">
       <h1>We are monkey</h1>
       <a href="#">Contact us</a>
     </div>
    </div>

  )
}

export default App

