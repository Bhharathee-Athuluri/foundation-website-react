import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SigninSignup } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/foundation-website-react" element={<App/>}/>
      <Route path="/foundation-website-react/signinsignup" element = {<SigninSignup />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
