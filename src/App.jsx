import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { SigninSignup } from './components'
import CompletePage from './components/CompletePage'

function App() {
  return (
    <Routes>
        <Route path="/foundation-website-react" element={<CompletePage />}/>
        <Route path="/foundation-website-react/signinsignup" element = {<SigninSignup />} />
    </Routes>
  )
}

export default App
