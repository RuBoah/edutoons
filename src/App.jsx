import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Landing from "./pages/Home"
import Login from './auth/Login'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Landing/>} />
      <Route path="/login" element = {<Login/>} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
