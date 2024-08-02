import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Live from './components/Live'
import Home from './components/Home'
import History from './components/History'
import Pointstable from './components/Pointstable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/history" element={<History />} />
          <Route path="/points-table" element={<Pointstable />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
