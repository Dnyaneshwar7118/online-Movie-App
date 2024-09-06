import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useEffect, useState } from 'react'

function App() {
  const [pending, setPeindg] = useState(false);

  useEffect(() => {
    setPeindg(true)
    setTimeout(() => {
      setPeindg(false);
    }, 1000 * 5)
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<Home />} />

          <Route path='/Login' element={<Login />} />

          <Route path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
