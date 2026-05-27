import { useState } from 'react'
import meuLogo from './assets/images.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={meuLogo} alt="Logo do jogo" />

          <h1>(O JOGO) PERDEU</h1>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          CLIQUE EM MIM {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
        </div>

        <div id="social">
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
        </div>
      </section>
    </>
  )
}

export default App